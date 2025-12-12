import React from 'react';
import { InflectionTable } from '@site/src/components/InflectionTable';
import bytiData from '@site/src/data/paradigms/byti.json';
import verbHeaders from '@site/src/data/paradigms/verb-headers.json';

/**
 * Byti conjugation table - full paradigm using InflectionTable.
 * Replaces the hardcoded byti1.jsx.
 */
export default function BytiNew() {
  const config = {
    rows: ['feats.Number', 'misc.PersonRow'],
    columns: 'misc.TenseCol',
    order: {
      'feats.Number': ['Sing', 'Plur'],
      'misc.PersonRow': ['1', '2', '3m', '3f', '3n'],
      'misc.TenseCol': ['Present', 'SimplePast', 'CompoundPast', 'Future', 'Conditional', 'Imperative'],
    },
    filter: {
      exclude: { 'feats.VerbForm': ['Inf', 'Vnoun', 'Part'] },
    },
  };

  return (
    <InflectionTable
      data={bytiData}
      config={config}
      headers={verbHeaders.tokens}
    />
  );
}
