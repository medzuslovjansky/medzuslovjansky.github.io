import { describe, it } from 'node:test';
import { parseParadigm } from '../../utils/inflection/schema.ts';
import { flatten } from '../../utils/inflection/flatten.ts';
import { buildTable } from '../../utils/inflection/buildTable.ts';

// Import paradigms
import hoditi from './hoditi.json' with { type: 'json' };
import idti from './idti.json' with { type: 'json' };
import pojdti from './pojdti.json' with { type: 'json' };

describe('@lemma/ paradigm validation', () => {
  it('hoditi.json is valid', (t) => {
    const result = parseParadigm(hoditi);
    t.assert.strictEqual(result.lemma, 'hoditi');
    t.assert.strictEqual(result.forms.length, 7);
  });

  it('idti.json is valid', (t) => {
    const result = parseParadigm(idti);
    t.assert.strictEqual(result.lemma, 'idti');
    t.assert.strictEqual(result.forms.length, 7);
  });

  it('pojdti.json is valid', (t) => {
    const result = parseParadigm(pojdti);
    t.assert.strictEqual(result.lemma, 'pojdti');
    t.assert.strictEqual(result.forms.length, 7);
  });
});

describe('Motion verbs: flatten + buildTable', () => {
  it('flattens paradigms to tokens', (t) => {
    const tokens = [
      ...flatten(hoditi),
      ...flatten(idti),
      ...flatten(pojdti),
    ];
    t.assert.strictEqual(tokens.length, 21); // 7 forms × 3 verbs
    t.assert.strictEqual(tokens[0].lemma, 'hoditi');
    t.assert.strictEqual(tokens[7].lemma, 'idti');
    t.assert.strictEqual(tokens[14].lemma, 'pojdti');
  });

  it('builds motion comparison table (lemma × Person)', (t) => {
    const tokens = [
      ...flatten(hoditi),
      ...flatten(idti),
      ...flatten(pojdti),
    ];

    const table = buildTable(tokens, {
      rows: 'feats.Person',
      columns: 'lemma',
      filter: {
        include: {
          'feats.VerbForm': 'Fin',
          'feats.Number': 'Sing',
        },
      },
      order: {
        'feats.Person': ['1', '2', '3'],
        'lemma': ['hoditi', 'idti', 'pojdti'],
      },
    });

    // 3 rows (persons) × 3 columns (lemmas)
    t.assert.strictEqual(table.cells.length, 3);
    t.assert.strictEqual(table.cells[0].length, 3);

    // Check first row, first column: hoditi 1sg
    const cell_1_hoditi = table.cells[0][0];
    t.assert.strictEqual(cell_1_hoditi.tokens.length, 1);
    t.assert.strictEqual(cell_1_hoditi.tokens[0].form, 'hož*u*');

    // Check first row, second column: idti 1sg
    const cell_1_idti = table.cells[0][1];
    t.assert.strictEqual(cell_1_idti.tokens[0].form, 'id*u*');
  });

  it('builds infinitive row (just VerbForm=Inf)', (t) => {
    const tokens = [
      ...flatten(hoditi),
      ...flatten(idti),
      ...flatten(pojdti),
    ];

    const table = buildTable(tokens, {
      rows: 'feats.VerbForm',
      columns: 'lemma',
      filter: { include: { 'feats.VerbForm': 'Inf' } },
      order: { 'lemma': ['hoditi', 'idti', 'pojdti'] },
    });

    // 1 row (Inf) × 3 columns
    t.assert.strictEqual(table.cells.length, 1);
    t.assert.strictEqual(table.cells[0].length, 3);
    t.assert.strictEqual(table.cells[0][0].tokens[0].form, 'hodi*ti*');
    t.assert.strictEqual(table.cells[0][1].tokens[0].form, 'id*ti*');
    t.assert.strictEqual(table.cells[0][2].tokens[0].form, 'pojd*ti*');
  });
});
