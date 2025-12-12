import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { TransliteratorElement } from '@site/src/components';
import { buildMotionVerbsTable, t } from './MotionVerbsTable.logic.ts';
import data from './MotionVerbsTable.data.json';

/**
 * Motion Verbs Table
 *
 * Displays the three-way aspect distinction for verbs of motion:
 * - Non-directional imperfective (habitual/repeated action)
 * - Directional imperfective (single ongoing action)
 * - Perfective (completed action)
 *
 * @example
 * :::component{name=MotionVerbsTable}
 * :::
 *
 * @see https://interslavic.fun/learn/grammar/verbs/#motion-verbs
 */
export default function MotionVerbsTable() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const tableData = buildMotionVerbsTable(locale);

  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th>{t(locale, 'col.meaning')}</th>
          {data.columns.slice(1).map((col) => (
            <th key={col.key}>{t(locale, `col.${col.key}`)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row) => (
          <tr key={row.id}>
            <th>{row.meaning}</th>
            <td><TransliteratorElement>{row.nonDirectional}</TransliteratorElement></td>
            <td><TransliteratorElement>{row.directionalImpf}</TransliteratorElement></td>
            <td><TransliteratorElement>{row.perfective}</TransliteratorElement></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Re-export for MDX components that need the pure function
export { buildMotionVerbsTable } from './MotionVerbsTable.logic.ts';
