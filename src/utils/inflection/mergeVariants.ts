import type { Token } from './types';

/**
 * Result of merging variant forms in a cell.
 */
export interface MergedSegment {
  /** The text content */
  text: string;
  /** Whether this is a variant group (parenthesized) */
  isVariantGroup: boolean;
  /** For variant groups: array of {text, tooltip} for each variant */
  variants?: Array<{
    text: string;
    tooltip: string;
  }>;
  /** Misc flags (e.g., Lang: 'isv') from first token */
  misc?: Record<string, string>;
}

export interface MergeResult {
  segments: MergedSegment[];
}

/**
 * Compute the difference between two feature sets.
 * Returns features that are in `a` but not in `b` or have different values.
 */
function featureDiff(
  a: Record<string, string | undefined>,
  b: Record<string, string | undefined>
): Record<string, string> {
  const diff: Record<string, string> = {};
  for (const [key, value] of Object.entries(a)) {
    if (value !== undefined && b[key] !== value) {
      diff[key] = value;
    }
  }
  return diff;
}

/**
 * Format feature diff as tooltip text.
 */
function formatTooltip(diff: Record<string, string>): string {
  const parts: string[] = [];
  for (const [key, value] of Object.entries(diff)) {
    // Use friendly labels for common features
    if (key === 'Gender') {
      // Just show the value for gender
      parts.push(value);
    } else if (key === 'Variant') {
      // Show variant type
      parts.push(value === 'Short' ? 'short form' : `${value} form`);
    } else if (key === 'Aspect') {
      // Show aspect
      parts.push(value === 'Imp' ? 'imperfective' : value === 'Perf' ? 'perfective' : value);
    } else {
      parts.push(`${key}: ${value}`);
    }
  }
  return parts.join(', ');
}

/**
 * Merge variant forms in a cell into a compact representation.
 *
 * Example: ["jesm byl", "jesm byla", "jesm bylo"]
 *       → "jesm byl (byla, bylo)" with tooltips
 *
 * @param tokens - Array of tokens in a cell
 * @returns MergeResult with segments for rendering
 */
export function mergeVariants(tokens: Token[]): MergeResult {
  if (tokens.length === 0) {
    return { segments: [] };
  }

  if (tokens.length === 1) {
    return {
      segments: [{
        text: tokens[0].form,
        isVariantGroup: false,
        misc: tokens[0].misc,
      }],
    };
  }

  // Split each form into words
  const splitForms = tokens.map(t => t.form.split(/\s+/));

  // Find the maximum word count
  const maxWords = Math.max(...splitForms.map(f => f.length));

  // Build union of all features for tooltip computation
  // Track both values and which tokens have each feature
  const allFeats: Record<string, Set<string>> = {};
  const tokenCountPerFeat: Record<string, number> = {};
  for (const token of tokens) {
    for (const [key, value] of Object.entries(token.feats || {})) {
      if (value !== undefined) {
        if (!allFeats[key]) allFeats[key] = new Set();
        allFeats[key].add(value);
        tokenCountPerFeat[key] = (tokenCountPerFeat[key] || 0) + 1;
      }
    }
  }

  // Find features that vary:
  // - Have multiple values, OR
  // - Not all tokens have this feature (some have it, some don't)
  const varyingFeats = new Set<string>();
  for (const [key, values] of Object.entries(allFeats)) {
    const hasMultipleValues = values.size > 1;
    const notAllTokensHaveIt = tokenCountPerFeat[key] < tokens.length;
    if (hasMultipleValues || notAllTokensHaveIt) {
      varyingFeats.add(key);
    }
  }

  const segments: MergedSegment[] = [];

  // Process word by word
  for (let wordIdx = 0; wordIdx < maxWords; wordIdx++) {
    // Get all words at this position (pad with empty if shorter)
    const wordsAtPos = splitForms.map(f => f[wordIdx] || '');

    // Check if all words at this position are the same
    const uniqueWords = [...new Set(wordsAtPos.filter(w => w !== ''))];

    if (uniqueWords.length === 0) {
      // All empty at this position, skip
      continue;
    }

    if (uniqueWords.length === 1) {
      // All same - render as single segment
      if (segments.length > 0) {
        segments.push({ text: ' ', isVariantGroup: false });
      }
      segments.push({
        text: uniqueWords[0],
        isVariantGroup: false,
        misc: tokens[0].misc,
      });
    } else {
      // Words differ - group as variants
      if (segments.length > 0) {
        segments.push({ text: ' ', isVariantGroup: false });
      }

      // Build variant list with tooltips
      const variantList: Array<{ text: string; tooltip: string; feats: Record<string, string | undefined> }> = [];

      for (let i = 0; i < tokens.length; i++) {
        const word = wordsAtPos[i];
        if (word === '') continue;

        // Check if this word is already in the list
        const existing = variantList.find(v => v.text === word);
        if (existing) continue;

        // Compute tooltip from varying features of this token
        const tokenFeats: Record<string, string> = {};
        for (const feat of varyingFeats) {
          const value = tokens[i].feats?.[feat];
          if (value !== undefined) {
            tokenFeats[feat] = value;
          }
        }

        variantList.push({
          text: word,
          tooltip: formatTooltip(tokenFeats),
          feats: tokens[i].feats || {},
        });
      }

      // Sort variants to put masculine first, then feminine, then neuter
      const genderOrder: Record<string, number> = { 'Masc': 0, 'Fem': 1, 'Neut': 2 };
      variantList.sort((a, b) => {
        const aOrder = genderOrder[a.feats.Gender || ''] ?? 99;
        const bOrder = genderOrder[b.feats.Gender || ''] ?? 99;
        return aOrder - bOrder;
      });

      // First variant goes without parentheses, rest are grouped
      if (variantList.length > 0) {
        segments.push({
          text: variantList[0].text,
          isVariantGroup: false,
          misc: tokens[0].misc,
          variants: variantList[0].tooltip ? [{
            text: variantList[0].text,
            tooltip: variantList[0].tooltip,
          }] : undefined,
        });

        if (variantList.length > 1) {
          segments.push({ text: ' (', isVariantGroup: false });

          for (let i = 1; i < variantList.length; i++) {
            if (i > 1) {
              segments.push({ text: ', ', isVariantGroup: false });
            }
            segments.push({
              text: variantList[i].text,
              isVariantGroup: true,
              misc: tokens[0].misc,
              variants: [{
                text: variantList[i].text,
                tooltip: variantList[i].tooltip,
              }],
            });
          }

          segments.push({ text: ')', isVariantGroup: false });
        }
      }
    }
  }

  return { segments };
}
