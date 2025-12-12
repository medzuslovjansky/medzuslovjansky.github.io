import React from 'react';
import Translate from '@docusaurus/Translate';
import { TransliteratorElement } from '@site/src/components';
import { flatten } from '@site/src/utils/inflection/flatten';
import { buildTable } from '@site/src/utils/inflection/buildTable';
import { renderFormToReact } from '@site/src/utils/inflection/renderForm';
import { mergeVariants } from '@site/src/utils/inflection/mergeVariants';
import styles from './InflectionTable.module.scss';

/**
 * Render a header cell label based on misc flags.
 * - misc.Lang === 'isv' → TransliteratorElement
 * - misc.I18n === 'Yes' → Translate
 * - misc.Tooltip → wrap in abbr with title
 * - otherwise → plain text
 */
function HeaderLabel({ label, misc }) {
  let content;

  if (misc?.Lang === 'isv') {
    content = <TransliteratorElement>{label}</TransliteratorElement>;
  } else if (misc?.I18n === 'Yes') {
    content = <Translate id={`inflection.${label}`}>{label}</Translate>;
  } else {
    content = label;
  }

  // Wrap in abbr if tooltip is present
  if (misc?.Tooltip) {
    return <abbr title={misc.Tooltip} style={{ textDecoration: 'underline dotted', cursor: 'help' }}>{content}</abbr>;
  }

  // Always wrap in span for CSS targeting (needed for vertical centering)
  return <span>{content}</span>;
}

/**
 * Map misc.Class string to CSS module class name.
 */
function getHeaderClassName(misc) {
  if (!misc?.Class) return undefined;
  // Map known class names to styles
  const classMap = {
    vertical: styles.vertical,
  };
  return classMap[misc.Class] || misc.Class;
}

/**
 * Render a single segment with optional tooltip.
 */
function SegmentWithTooltip({ segment }) {
  const content = renderFormToReact(segment.text);

  // If segment has variants with tooltips, wrap in abbr
  if (segment.variants?.[0]?.tooltip) {
    const inner = (
      <abbr
        title={segment.variants[0].tooltip}
        className={segment.isVariantGroup ? styles.variant : undefined}
      >
        {content}
      </abbr>
    );

    if (segment.misc?.Lang === 'isv') {
      return <TransliteratorElement>{inner}</TransliteratorElement>;
    }
    return inner;
  }

  // Regular segment without tooltip
  const inner = (
    <span className={segment.isVariantGroup ? styles.variant : undefined}>
      {content}
    </span>
  );

  if (segment.misc?.Lang === 'isv') {
    return <TransliteratorElement>{inner}</TransliteratorElement>;
  }
  return inner;
}

/**
 * Render a cell's tokens with form markup and variant merging.
 * - Merges variant forms: "jesm byl, jesm byla" → "jesm byl (byla)"
 * - Adds tooltips showing distinguishing features
 * - Wraps ISV content in TransliteratorElement
 */
function CellContent({ tokens }) {
  if (tokens.length === 0) {
    return <span className={styles.empty}>—</span>;
  }

  const { segments } = mergeVariants(tokens);

  return segments.map((segment, i) => (
    <React.Fragment key={i}>
      <SegmentWithTooltip segment={segment} />
    </React.Fragment>
  ));
}

/**
 * Compute a signature for a cell's content for merging purposes.
 * Cells with identical signatures can be merged.
 */
function getCellSignature(tokens) {
  // Empty cells should NOT merge with anything (unique signature per empty cell)
  if (tokens.length === 0) return `__EMPTY_${Math.random()}__`;
  // Use forms joined together as signature
  return tokens.map(t => t.form).sort().join('|');
}

/**
 * Compute rowspans for cells in a column.
 * Returns array of rowspans (0 means cell is merged into previous).
 */
function computeRowSpans(cells, colIdx) {
  const numRows = cells.length;
  const spans = new Array(numRows).fill(1);

  let spanStart = 0;
  for (let row = 1; row <= numRows; row++) {
    const prevSig = getCellSignature(cells[spanStart][colIdx].tokens);
    const currSig = row < numRows ? getCellSignature(cells[row][colIdx].tokens) : null;

    if (currSig !== prevSig || row === numRows) {
      // End of span - set rowspan on start cell
      spans[spanStart] = row - spanStart;
      // Mark merged cells with 0
      for (let r = spanStart + 1; r < row; r++) {
        spans[r] = 0;
      }
      spanStart = row;
    }
  }

  return spans;
}

/**
 * InflectionTable - renders a conjugation/declension table from paradigm data.
 *
 * @param {Object} props
 * @param {Object} props.data - NormalizedParadigm object or array of them
 * @param {Object} props.config - TableConfig (rows, columns, filter, order)
 * @param {Array} props.headers - Header tokens for label resolution
 */
export function InflectionTable({ data, config, headers = [] }) {
  // Flatten paradigm(s) to tokens
  const paradigms = Array.isArray(data) ? data : [data];
  const tokens = paradigms.flatMap(p => flatten(p));

  // Build table structure
  const table = buildTable(tokens, { ...config, headers });

  // Determine number of row header columns
  const rowHeaderLevels = table.rowHeaders.length;

  // Pre-compute rowspans for each column
  const numCols = table.cells[0]?.length || 0;
  const numRows = table.cells.length;
  const rowSpansByCol = [];
  for (let col = 0; col < numCols; col++) {
    rowSpansByCol.push(computeRowSpans(table.cells, col));
  }

  // Determine which rows are "visible":
  // - Has at least one cell that's not merged into previous
  // - Has at least one cell with actual content (not all empty)
  const visibleRows = [];
  for (let r = 0; r < numRows; r++) {
    const hasVisibleCell = table.cells[r].some((_, c) => rowSpansByCol[c][r] > 0);
    const hasContent = table.cells[r].some(cell => cell.tokens.length > 0);
    if (hasVisibleCell && hasContent) {
      visibleRows.push(r);
    }
  }

  // Map from original row index to visible row index
  const rowToVisibleIdx = new Map();
  visibleRows.forEach((origIdx, visIdx) => {
    rowToVisibleIdx.set(origIdx, visIdx);
  });

  // Compute adjusted rowspans (counting only visible rows)
  function getVisibleRowSpan(startRow, origSpan) {
    let count = 0;
    for (let r = startRow; r < startRow + origSpan && r < numRows; r++) {
      if (rowToVisibleIdx.has(r)) count++;
    }
    return count;
  }

  return (
    <table className={`${styles.inflectionTable} table_sticky`}>
      <thead>
        {table.columnHeaders.map((headerRow, rowIdx) => (
          <tr key={rowIdx}>
            {/* Empty cells for row headers */}
            {rowIdx === 0 && rowHeaderLevels > 0 && (
              <th colSpan={rowHeaderLevels} rowSpan={table.columnHeaders.length}></th>
            )}
            {/* Column headers */}
            {headerRow.map((header, colIdx) => (
              <th
                key={colIdx}
                colSpan={header.span}
                className={getHeaderClassName(header.misc)}
              >
                <HeaderLabel label={header.label} misc={header.misc} />
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {visibleRows.map((rowIdx) => {
          const row = table.cells[rowIdx];

          // Figure out which row headers to render for this row
          const rowHeaderCells = [];

          for (let level = 0; level < rowHeaderLevels; level++) {
            const headerRow = table.rowHeaders[level];
            // Find the header that covers this row
            let cumulative = 0;
            for (const header of headerRow) {
              if (rowIdx >= cumulative && rowIdx < cumulative + header.span) {
                // Only render if this is the first visible row of the span
                const firstVisibleInSpan = visibleRows.find(r => r >= cumulative && r < cumulative + header.span);
                if (rowIdx === firstVisibleInSpan) {
                  const visibleSpan = getVisibleRowSpan(cumulative, header.span);

                  // For innermost level, collect headers from rows that are completely merged into this one
                  if (level === rowHeaderLevels - 1) {
                    const headersToShow = [header];
                    const seenLabels = new Set([header.label]);

                    // Check subsequent rows that might be completely merged
                    for (let r = rowIdx + 1; r < numRows; r++) {
                      // Check if this row is completely merged (all cells have rowSpan=0)
                      const isCompletelyMerged = table.cells[r].every((_, c) => rowSpansByCol[c][r] === 0);
                      if (!isCompletelyMerged) break; // Stop at first non-merged row

                      // Find header for this merged row
                      let hCumulative = 0;
                      for (const h of headerRow) {
                        if (r >= hCumulative && r < hCumulative + h.span) {
                          if (!seenLabels.has(h.label)) {
                            seenLabels.add(h.label);
                            headersToShow.push(h);
                          }
                          break;
                        }
                        hCumulative += h.span;
                      }
                    }

                    if (headersToShow.length > 1) {
                      rowHeaderCells.push(
                        <th
                          key={`rh-${level}`}
                          rowSpan={visibleSpan > 1 ? visibleSpan : undefined}
                          className={getHeaderClassName(header.misc)}
                        >
                          {headersToShow.map((h, i) => (
                            <React.Fragment key={i}>
                              {i > 0 && <br />}
                              <HeaderLabel label={h.label} misc={h.misc} />
                            </React.Fragment>
                          ))}
                        </th>
                      );
                    } else {
                      rowHeaderCells.push(
                        <th
                          key={`rh-${level}`}
                          rowSpan={visibleSpan > 1 ? visibleSpan : undefined}
                          className={getHeaderClassName(header.misc)}
                        >
                          <HeaderLabel label={header.label} misc={header.misc} />
                        </th>
                      );
                    }
                  } else {
                    rowHeaderCells.push(
                      <th
                        key={`rh-${level}`}
                        rowSpan={visibleSpan > 1 ? visibleSpan : undefined}
                        className={getHeaderClassName(header.misc)}
                      >
                        <HeaderLabel label={header.label} misc={header.misc} />
                      </th>
                    );
                  }
                }
                break;
              }
              cumulative += header.span;
            }
          }

          return (
            <tr key={rowIdx}>
              {rowHeaderCells}
              {row.map((cell, colIdx) => {
                const rowSpan = rowSpansByCol[colIdx][rowIdx];
                // Skip cells that are merged into previous row
                if (rowSpan === 0) return null;

                const visibleRowSpan = getVisibleRowSpan(rowIdx, rowSpan);
                return (
                  <td key={colIdx} rowSpan={visibleRowSpan > 1 ? visibleRowSpan : undefined}>
                    <CellContent tokens={cell.tokens} />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default InflectionTable;
