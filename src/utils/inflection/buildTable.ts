import type { Token, TableConfig, TableStructure, TableCell, HeaderCell, FilterConfig } from './types.ts';

/**
 * Get value from token using dot notation path.
 * E.g., "feats.Case" returns token.feats.Case
 */
function getPath(token: Token, path: string): string | undefined {
  const parts = path.split('.');
  let value: unknown = token;
  for (const part of parts) {
    if (value == null || typeof value !== 'object') return undefined;
    value = (value as Record<string, unknown>)[part];
  }
  return value as string | undefined;
}

/**
 * Apply filter to tokens.
 * Include: token must match at least one value for each key (AND across keys, OR within values).
 * Exclude: token must not match any value for any key.
 * Empty string '' matches undefined values.
 */
function applyFilter(tokens: Token[], filter?: FilterConfig): Token[] {
  if (!filter) return tokens;

  return tokens.filter(token => {
    // Check include rules (all keys must match)
    if (filter.include) {
      for (const [path, values] of Object.entries(filter.include)) {
        const tokenValue = getPath(token, path);
        const allowedValues = Array.isArray(values) ? values : [values];
        // Check if token value matches any allowed value
        // '' means undefined is allowed
        const matches = allowedValues.some(v =>
          v === '' ? tokenValue === undefined : tokenValue === v
        );
        if (!matches) return false;
      }
    }

    // Check exclude rules (no key must match)
    if (filter.exclude) {
      for (const [path, values] of Object.entries(filter.exclude)) {
        const tokenValue = getPath(token, path);
        const excludedValues = Array.isArray(values) ? values : [values];
        // Check if token value matches any excluded value
        const matches = excludedValues.some(v =>
          v === '' ? tokenValue === undefined : tokenValue === v
        );
        if (matches) return false;
      }
    }

    return true;
  });
}

/**
 * Get unique values for a path across all tokens.
 * Optionally sorts by custom order (values not in order appear last, in occurrence order).
 */
function getUniqueValues(tokens: Token[], path: string, order?: string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const token of tokens) {
    const value = getPath(token, path);
    if (value !== undefined && !seen.has(value)) {
      seen.add(value);
      result.push(value);
    }
  }

  if (order && order.length > 0) {
    const orderIndex = new Map(order.map((v, i) => [v, i]));
    result.sort((a, b) => {
      const aIdx = orderIndex.get(a) ?? Infinity;
      const bIdx = orderIndex.get(b) ?? Infinity;
      if (aIdx === Infinity && bIdx === Infinity) return 0; // preserve relative order
      return aIdx - bIdx;
    });
  }

  return result;
}

/**
 * Normalize paths to array.
 */
function normalizePaths(paths: string | string[]): string[] {
  return Array.isArray(paths) ? paths : [paths];
}

/**
 * Check if token matches given dimension values.
 * Undefined in token means "broadcasts" (matches any value).
 */
function tokenMatches(token: Token, path: string, value: string): boolean {
  const tokenValue = getPath(token, path);
  return tokenValue === undefined || tokenValue === value;
}

/**
 * Find a header token that matches the given path and combination of values.
 * Header tokens have misc.HeaderFor indicating which dimension they label.
 * They're matched by checking their feats/misc against ALL dimensions.
 * Headers with more specific matches (more dimensions defined) are preferred.
 */
function findHeaderToken(
  headers: Token[] | undefined,
  targetPath: string,
  dimensions: Array<{ path: string; values: string[] }>,
  combination: string[]
): Token | undefined {
  if (!headers) return undefined;

  // Find headers that are for this dimension
  const candidates = headers.filter(h => h.misc?.HeaderFor === targetPath);

  // Score candidates by how many dimensions they match specifically
  let bestMatch: Token | undefined;
  let bestScore = -1;

  for (const h of candidates) {
    let matches = true;
    let score = 0;

    // Check ALL dimensions
    for (let l = 0; l < dimensions.length; l++) {
      const dimPath = dimensions[l].path;
      const expectedValue = combination[l];
      const tokenValue = getPath(h, dimPath);

      if (tokenValue !== undefined) {
        if (tokenValue !== expectedValue) {
          matches = false;
          break;
        }
        score++; // Header explicitly matched this dimension
      }
      // undefined in header = broadcasts (matches anything)
    }

    if (matches && score > bestScore) {
      bestMatch = h;
      bestScore = score;
    }
  }

  return bestMatch;
}

/**
 * Build table structure from tokens and config.
 */
export function buildTable(tokens: Token[], config: TableConfig): TableStructure {
  // Apply filter first
  const filteredTokens = applyFilter(tokens, config.filter);

  const rowPaths = normalizePaths(config.rows);
  const colPaths = normalizePaths(config.columns);

  // Get unique values for each dimension (from filtered tokens), applying custom order if provided
  const rowDimensions = rowPaths.map(path => ({
    path,
    values: getUniqueValues(filteredTokens, path, config.order?.[path]),
  }));

  const colDimensions = colPaths.map(path => ({
    path,
    values: getUniqueValues(filteredTokens, path, config.order?.[path]),
  }));

  // Build cartesian product of row values
  const rowCombinations = cartesianProduct(rowDimensions.map(d => d.values));
  const colCombinations = cartesianProduct(colDimensions.map(d => d.values));

  // Build cells grid
  const cells: TableCell[][] = [];

  for (const rowCombo of rowCombinations) {
    const row: TableCell[] = [];

    for (const colCombo of colCombinations) {
      // Find tokens matching this cell (considering broadcasts)
      const cellTokens = filteredTokens.filter(token => {
        // Check row dimensions
        for (let i = 0; i < rowPaths.length; i++) {
          if (!tokenMatches(token, rowPaths[i], rowCombo[i])) return false;
        }
        // Check column dimensions
        for (let i = 0; i < colPaths.length; i++) {
          if (!tokenMatches(token, colPaths[i], colCombo[i])) return false;
        }
        return true;
      });

      // Group by variant: primary forms first, then variants
      const primary = cellTokens.filter(t => !t.feats.Variant);
      const variants = cellTokens.filter(t => t.feats.Variant);
      const sortedTokens = [...primary, ...variants];

      row.push({ tokens: sortedTokens });
    }

    cells.push(row);
  }

  // Build column headers
  const columnHeaders = buildHeaders(colDimensions, colCombinations, config.headers);

  // Build row headers
  const rowHeaders = buildHeaders(rowDimensions, rowCombinations, config.headers);

  return {
    columnHeaders,
    rowHeaders,
    cells,
  };
}

/**
 * Build header cells for given dimensions and combinations.
 * If headerTokens provided, resolves labels and misc from matching header tokens.
 */
function buildHeaders(
  dimensions: Array<{ path: string; values: string[] }>,
  combinations: string[][],
  headerTokens?: Token[]
): HeaderCell[][] {
  const headers: HeaderCell[][] = [];

  for (let level = 0; level < dimensions.length; level++) {
    const levelHeaders: HeaderCell[] = [];
    const dim = dimensions[level];

    let i = 0;
    while (i < combinations.length) {
      const value = combinations[i][level];

      // Count span: how many consecutive combinations share this value at this level
      // (and all previous levels)
      let span = 1;
      while (i + span < combinations.length) {
        let matches = true;
        for (let l = 0; l <= level; l++) {
          if (combinations[i + span][l] !== combinations[i][l]) {
            matches = false;
            break;
          }
        }
        if (matches) {
          span++;
        } else {
          break;
        }
      }

      // Only add header if this is a new group at this level
      const prevValue = i > 0 ? combinations[i - 1][level] : null;
      const prevParentMatches = level === 0 || (i > 0 &&
        combinations[i].slice(0, level).join('|') === combinations[i - 1].slice(0, level).join('|'));

      if (level === 0 || !prevParentMatches || value !== prevValue) {
        // Try to find a header token for this cell
        const headerToken = findHeaderToken(headerTokens, dim.path, dimensions, combinations[i]);

        levelHeaders.push({
          label: headerToken?.form ?? value,
          path: dim.path,
          value,
          span,
          misc: headerToken?.misc,
        });
      }

      i += span;
    }

    headers.push(levelHeaders);
  }

  return headers;
}

/**
 * Cartesian product of arrays.
 */
function cartesianProduct(arrays: string[][]): string[][] {
  if (arrays.length === 0) return [[]];
  if (arrays.length === 1) return arrays[0].map(v => [v]);

  const result: string[][] = [];
  const rest = cartesianProduct(arrays.slice(1));

  for (const value of arrays[0]) {
    for (const combo of rest) {
      result.push([value, ...combo]);
    }
  }

  return result;
}

/**
 * Build multiple tables, one per group value.
 * If no groups specified, returns single-element array.
 */
export function buildTableGroups(tokens: Token[], config: TableConfig): TableStructure[] {
  if (!config.groups) {
    return [buildTable(tokens, config)];
  }

  const groupPath = config.groups;

  // Get unique group values, respecting order config
  const groupValues = getUniqueValues(tokens, groupPath, config.order?.[groupPath]);

  // Build one table per group value
  return groupValues.map(groupValue => {
    // Filter tokens to only those matching this group value
    const groupTokens = tokens.filter(t => getPath(t, groupPath) === groupValue);

    // Build table for this group
    const table = buildTable(groupTokens, config);

    // Set title to group value
    return {
      ...table,
      title: groupValue,
    };
  });
}
