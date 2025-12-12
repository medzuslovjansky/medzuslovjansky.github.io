import React from 'react';
import Translate from '@docusaurus/Translate';
import { TransliteratorElement } from '@site/src/components';
import styles from './ReferenceTable.module.scss';

/**
 * Column definition for ReferenceTable.
 */
export interface ColumnDef {
  /** Key to look up value in row data */
  key: string;
  /** Display label for column header */
  label: string;
  /** Whether to use Docusaurus Translate for the label */
  i18n?: boolean;
  /** Whether cell values are Interslavic (wrap in TransliteratorElement) */
  isv?: boolean;
}

/**
 * Props for ReferenceTable component.
 */
export interface ReferenceTableProps {
  /** Column definitions */
  columns: ColumnDef[];
  /** Array of row data objects */
  rows: Record<string, string>[];
  /** Optional CSS class name */
  className?: string;
}

/**
 * Data structure for reference tables (used by buildX functions).
 */
export interface ReferenceTableData {
  columns: ColumnDef[];
  rows: Record<string, string>[];
}

/**
 * Render a cell value, optionally wrapped in TransliteratorElement.
 */
function CellValue({ value, isv }: { value: string; isv?: boolean }) {
  if (isv) {
    return <TransliteratorElement>{value}</TransliteratorElement>;
  }
  return <>{value}</>;
}

/**
 * Render a column header, optionally with i18n.
 */
function HeaderCell({ column }: { column: ColumnDef }) {
  if (column.i18n) {
    return (
      <th>
        <Translate id={`reference.${column.key}`}>{column.label}</Translate>
      </th>
    );
  }
  return <th>{column.label}</th>;
}

/**
 * ReferenceTable - renders static reference tables with i18n and ISV support.
 *
 * Use this for tables that don't need computed paradigms, like:
 * - Motion verbs (hoditi/idti/pojdti)
 * - Correlatives grid
 * - Alphabet charts
 *
 * @example
 * ```tsx
 * <ReferenceTable
 *   columns={[
 *     { key: 'meaning', label: 'Meaning', i18n: true },
 *     { key: 'nonDir', label: 'Non-directional', i18n: true, isv: true },
 *     { key: 'dirImpf', label: 'Directional impf.', i18n: true, isv: true },
 *     { key: 'pf', label: 'Perfective', i18n: true, isv: true },
 *   ]}
 *   rows={[
 *     { meaning: 'to go (by foot)', nonDir: 'hoditi', dirImpf: 'idti', pf: 'pojdti' },
 *     // ...
 *   ]}
 * />
 * ```
 *
 * @see ARCHITECTURE.md Section 5 "Component Patterns"
 */
export function ReferenceTable({ columns, rows, className }: ReferenceTableProps) {
  return (
    <table className={`${styles.referenceTable} table_sticky ${className ?? ''}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <HeaderCell key={col.key} column={col} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {columns.map((col) => (
              <td key={col.key}>
                <CellValue value={row[col.key] ?? ''} isv={col.isv} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReferenceTable;
