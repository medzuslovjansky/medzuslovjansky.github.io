import { describe, it } from 'node:test';
import assert from 'node:assert';
import { buildTable, buildTableGroups } from './buildTable.ts';
import { flatten } from './flatten.ts';
import type { Token, NormalizedParadigm } from './types.ts';

describe('buildTable: Token[] + config → TableStructure', () => {

  describe('Scenario: Simple noun table (Case × Number)', () => {
    const brat: NormalizedParadigm = {
      lemma: 'brat',
      upos: 'NOUN',
      forms: [
        { form: 'brat', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'brata', feats: { Case: 'Gen', Number: 'Sing' } },
        { form: 'braty', feats: { Case: 'Nom', Number: 'Plur' } },
        { form: 'bratov', feats: { Case: 'Gen', Number: 'Plur' } },
      ],
    };

    it('builds 2×2 grid with Case as rows, Number as columns', () => {
      const tokens = flatten(brat);
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
      });

      // Should have 2 rows (Nom, Gen) × 2 columns (Sing, Plur)
      assert.strictEqual(table.cells.length, 2);
      assert.strictEqual(table.cells[0].length, 2);

      // Check cell contents
      assert.strictEqual(table.cells[0][0].tokens[0].form, 'brat');     // Nom.Sing
      assert.strictEqual(table.cells[0][1].tokens[0].form, 'braty');    // Nom.Plur
      assert.strictEqual(table.cells[1][0].tokens[0].form, 'brata');    // Gen.Sing
      assert.strictEqual(table.cells[1][1].tokens[0].form, 'bratov');   // Gen.Plur
    });
  });

  describe('Scenario: Multi-lemma table with nested columns (lemma + Number)', () => {
    const brat: NormalizedParadigm = {
      lemma: 'brat',
      upos: 'NOUN',
      forms: [
        { form: 'brat', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'braty', feats: { Case: 'Nom', Number: 'Plur' } },
      ],
    };

    const dom: NormalizedParadigm = {
      lemma: 'dom',
      upos: 'NOUN',
      forms: [
        { form: 'dom', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'domy', feats: { Case: 'Nom', Number: 'Plur' } },
      ],
    };

    it('builds table with lemma as outer column, Number as inner column', () => {
      const tokens = [...flatten(brat), ...flatten(dom)];
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: ['lemma', 'feats.Number'],
      });

      // 1 row (Nom) × 4 columns (brat.Sing, brat.Plur, dom.Sing, dom.Plur)
      assert.strictEqual(table.cells.length, 1);
      assert.strictEqual(table.cells[0].length, 4);

      // Column headers should be 2 levels
      assert.strictEqual(table.columnHeaders.length, 2);
      // Level 0: lemma (brat, dom) with span=2 each
      assert.strictEqual(table.columnHeaders[0][0].label, 'brat');
      assert.strictEqual(table.columnHeaders[0][0].span, 2);
      assert.strictEqual(table.columnHeaders[0][1].label, 'dom');
      // Level 1: Number (Sing, Plur, Sing, Plur)
      assert.strictEqual(table.columnHeaders[1].length, 4);
    });
  });

  describe('Scenario: Variant grouping (clitics in parentheses)', () => {
    const ja: NormalizedParadigm = {
      lemma: 'ja',
      upos: 'PRON',
      forms: [
        { form: 'mene', feats: { Case: 'Acc', Number: 'Sing' } },
        { form: 'me', feats: { Case: 'Acc', Number: 'Sing', Variant: 'Short' } },
        { form: 'mně', feats: { Case: 'Dat', Number: 'Sing' } },
        { form: 'mi', feats: { Case: 'Dat', Number: 'Sing', Variant: 'Short' } },
      ],
    };

    it('groups variants into same cell: primary form + variants array', () => {
      const tokens = flatten(ja);
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
      });

      // 2 rows (Acc, Dat) × 1 column (Sing)
      assert.strictEqual(table.cells.length, 2);
      assert.strictEqual(table.cells[0].length, 1);

      // Acc cell should have 2 tokens: mene (primary) + me (variant)
      const accCell = table.cells[0][0];
      assert.strictEqual(accCell.tokens.length, 2);
      assert.strictEqual(accCell.tokens[0].form, 'mene');
      assert.strictEqual(accCell.tokens[1].form, 'me');
      assert.strictEqual(accCell.tokens[1].feats.Variant, 'Short');
    });
  });

  describe('Scenario: Broadcasting (token without feature matches all columns)', () => {
    const dva: NormalizedParadigm = {
      lemma: 'dva',
      upos: 'NUM',
      forms: [
        { form: 'dva', feats: { Case: 'Nom', Gender: 'Masc' } },
        { form: 'dvě', feats: { Case: 'Nom', Gender: 'Fem' } },
        { form: 'dvoh', feats: { Case: 'Gen' } },  // No Gender — broadcasts
      ],
    };

    it('token without Gender appears in all Gender columns', () => {
      const tokens = flatten(dva);
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Gender',
      });

      // 2 rows (Nom, Gen) × 2 columns (Masc, Fem)
      assert.strictEqual(table.cells.length, 2);
      assert.strictEqual(table.cells[0].length, 2);

      // Nom row: dva in Masc, dvě in Fem
      assert.strictEqual(table.cells[0][0].tokens[0].form, 'dva');
      assert.strictEqual(table.cells[0][1].tokens[0].form, 'dvě');

      // Gen row: dvoh in BOTH columns (broadcast)
      assert.strictEqual(table.cells[1][0].tokens[0].form, 'dvoh');
      assert.strictEqual(table.cells[1][1].tokens[0].form, 'dvoh');
    });
  });

  describe('Scenario: Custom sort order for dimensions', () => {
    const noun: NormalizedParadigm = {
      lemma: 'brat',
      upos: 'NOUN',
      forms: [
        { form: 'brat', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'brata', feats: { Case: 'Gen', Number: 'Sing' } },
        { form: 'bratu', feats: { Case: 'Dat', Number: 'Sing' } },
        { form: 'brata', feats: { Case: 'Acc', Number: 'Sing' } },
      ],
    };

    it('applies custom order to row/column values', () => {
      const tokens = flatten(noun);

      // Default order: Nom, Gen, Dat, Acc (occurrence order)
      const tableDefault = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
      });
      assert.strictEqual(tableDefault.rowHeaders[0][0].label, 'Nom');
      assert.strictEqual(tableDefault.rowHeaders[0][1].label, 'Gen');

      // Custom order: Nom, Acc, Gen, Dat (accusative second)
      const tableCustom = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
        order: { 'feats.Case': ['Nom', 'Acc', 'Gen', 'Dat'] },
      });
      assert.strictEqual(tableCustom.rowHeaders[0][0].label, 'Nom');
      assert.strictEqual(tableCustom.rowHeaders[0][1].label, 'Acc');
      assert.strictEqual(tableCustom.rowHeaders[0][2].label, 'Gen');
      assert.strictEqual(tableCustom.rowHeaders[0][3].label, 'Dat');

      // Cells follow same order
      assert.strictEqual(tableCustom.cells[0][0].tokens[0].form, 'brat');   // Nom
      assert.strictEqual(tableCustom.cells[1][0].tokens[0].form, 'brata');  // Acc
      assert.strictEqual(tableCustom.cells[2][0].tokens[0].form, 'brata');  // Gen
      assert.strictEqual(tableCustom.cells[3][0].tokens[0].form, 'bratu');  // Dat
    });
  });

  describe('Scenario: Row headers with multiple dimensions', () => {
    const verb: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: 'dělaju', feats: { Person: '1', Number: 'Sing', Tense: 'Pres' } },
        { form: 'dělaješ', feats: { Person: '2', Number: 'Sing', Tense: 'Pres' } },
        { form: 'dělajemo', feats: { Person: '1', Number: 'Plur', Tense: 'Pres' } },
        { form: 'dělajete', feats: { Person: '2', Number: 'Plur', Tense: 'Pres' } },
      ],
    };

    it('supports rows as array: [Person, Number] creates nested row headers', () => {
      const tokens = flatten(verb);
      const table = buildTable(tokens, {
        rows: ['feats.Person', 'feats.Number'],
        columns: 'feats.Tense',
      });

      // 4 rows (1.Sing, 1.Plur, 2.Sing, 2.Plur) × 1 column (Pres)
      assert.strictEqual(table.cells.length, 4);

      // Row headers should be 2 levels
      assert.strictEqual(table.rowHeaders.length, 2);
      // Level 0: Person (1, 2) with rowspan=2 each
      assert.strictEqual(table.rowHeaders[0][0].label, '1');
      assert.strictEqual(table.rowHeaders[0][0].span, 2);
    });
  });

  describe('Scenario: Empty cells for missing feature combinations', () => {
    const incomplete: NormalizedParadigm = {
      lemma: 'test',
      upos: 'NOUN',
      forms: [
        { form: 'a', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'b', feats: { Case: 'Gen', Number: 'Sing' } },
        // Missing: Nom.Plur, Gen.Plur
      ],
    };

    // Add another paradigm that defines Plur
    const complete: NormalizedParadigm = {
      lemma: 'full',
      upos: 'NOUN',
      forms: [
        { form: 'c', feats: { Case: 'Nom', Number: 'Plur' } },
      ],
    };

    it('creates empty cells for missing combinations', () => {
      const tokens = [...flatten(incomplete), ...flatten(complete)];
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
      });

      // Grid should be 2×2
      assert.strictEqual(table.cells.length, 2);
      assert.strictEqual(table.cells[0].length, 2);

      // Nom.Sing has 'a', Nom.Plur has 'c'
      assert.strictEqual(table.cells[0][0].tokens[0].form, 'a');
      assert.strictEqual(table.cells[0][1].tokens[0].form, 'c');

      // Gen.Sing has 'b', Gen.Plur is empty
      assert.strictEqual(table.cells[1][0].tokens[0].form, 'b');
      assert.strictEqual(table.cells[1][1].tokens.length, 0);
    });
  });

  describe('Scenario: Filter include — show only participles (V8)', () => {
    const verb: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: 'dělaju', feats: { VerbForm: 'Fin', Tense: 'Pres', Person: '1' } },
        { form: 'dělaješ', feats: { VerbForm: 'Fin', Tense: 'Pres', Person: '2' } },
        { form: 'dělajųći', feats: { VerbForm: 'Part', Tense: 'Pres', Voice: 'Act' } },
        { form: 'dělany', feats: { VerbForm: 'Part', Tense: 'Past', Voice: 'Pass' } },
      ],
    };

    it('include filters to only matching tokens', () => {
      const tokens = flatten(verb);
      const table = buildTable(tokens, {
        rows: 'feats.Tense',
        columns: 'feats.Voice',
        filter: { include: { 'feats.VerbForm': 'Part' } },
      });

      // Only 2 participle forms, so 2 rows × appropriate columns
      const allForms = table.cells.flat().flatMap(c => c.tokens.map(t => t.form));
      assert.ok(allForms.includes('dělajųći'));
      assert.ok(allForms.includes('dělany'));
      assert.ok(!allForms.includes('dělaju'));
      assert.ok(!allForms.includes('dělaješ'));
    });
  });

  describe('Scenario: Filter exclude — hide clitic variants (P1)', () => {
    const ja: NormalizedParadigm = {
      lemma: 'ja',
      upos: 'PRON',
      forms: [
        { form: 'mene', feats: { Case: 'Acc' } },
        { form: 'me', feats: { Case: 'Acc', Variant: 'Short' } },
        { form: 'mně', feats: { Case: 'Dat' } },
        { form: 'mi', feats: { Case: 'Dat', Variant: 'Short' } },
      ],
    };

    it('exclude filters out matching tokens', () => {
      const tokens = flatten(ja);
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'lemma',
        filter: { exclude: { 'feats.Variant': 'Short' } },
      });

      // Only full forms remain
      const allForms = table.cells.flat().flatMap(c => c.tokens.map(t => t.form));
      assert.ok(allForms.includes('mene'));
      assert.ok(allForms.includes('mně'));
      assert.ok(!allForms.includes('me'));
      assert.ok(!allForms.includes('mi'));
    });
  });

  describe('Scenario: Filter with empty string — non-strict match (Nu1)', () => {
    const dva: NormalizedParadigm = {
      lemma: 'dva',
      upos: 'NUM',
      forms: [
        { form: 'dva', feats: { Case: 'Nom', Gender: 'Masc', Animacy: 'Anim' } },
        { form: 'dva', feats: { Case: 'Nom', Gender: 'Masc', Animacy: 'Inan' } },
        { form: 'dvě', feats: { Case: 'Nom', Gender: 'Fem' } },  // No Animacy
      ],
    };

    it('empty string matches undefined values (non-strict)', () => {
      const tokens = flatten(dva);
      // Include Anim OR undefined (non-strict)
      const table = buildTable(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Gender',
        filter: { include: { 'feats.Animacy': ['Anim', ''] } },
      });

      const allForms = table.cells.flat().flatMap(c => c.tokens.map(t => t.form));
      // dva (Anim) included, dvě (no Animacy) included, dva (Inan) excluded
      assert.strictEqual(allForms.filter(f => f === 'dva').length, 1);  // only Anim one
      assert.ok(allForms.includes('dvě'));  // no Animacy matches ''
    });
  });

});

describe('buildTableGroups: split by dimension into TableStructure[]', () => {

  describe('Scenario: Adjective tables split by Number (Sing/Plur)', () => {
    const dobry: NormalizedParadigm = {
      lemma: 'dobry',
      upos: 'ADJ',
      forms: [
        { form: 'dobry', feats: { Case: 'Nom', Number: 'Sing', Gender: 'Masc' } },
        { form: 'dobra', feats: { Case: 'Nom', Number: 'Sing', Gender: 'Fem' } },
        { form: 'dobre', feats: { Case: 'Nom', Number: 'Sing', Gender: 'Neut' } },
        { form: 'dobri', feats: { Case: 'Nom', Number: 'Plur', Gender: 'Masc' } },
        { form: 'dobre', feats: { Case: 'Nom', Number: 'Plur', Gender: 'Fem' } },
        { form: 'dobre', feats: { Case: 'Nom', Number: 'Plur', Gender: 'Neut' } },
      ],
    };

    it('returns array of tables, one per group value', () => {
      const tokens = flatten(dobry);
      const tables = buildTableGroups(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Gender',
        groups: 'feats.Number',
      });

      assert.strictEqual(tables.length, 2);
      assert.strictEqual(tables[0].title, 'Sing');
      assert.strictEqual(tables[1].title, 'Plur');
    });

    it('each table contains only tokens for that group', () => {
      const tokens = flatten(dobry);
      const tables = buildTableGroups(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Gender',
        groups: 'feats.Number',
      });

      // Singular table
      const singForms = tables[0].cells.flat().flatMap(c => c.tokens.map(t => t.form));
      assert.ok(singForms.includes('dobry'));
      assert.ok(singForms.includes('dobra'));
      assert.ok(!singForms.includes('dobri'));  // Plur form not here

      // Plural table
      const plurForms = tables[1].cells.flat().flatMap(c => c.tokens.map(t => t.form));
      assert.ok(plurForms.includes('dobri'));
      assert.ok(!plurForms.includes('dobry'));  // Sing form not here
    });

    it('respects order config for group values', () => {
      const tokens = flatten(dobry);
      const tables = buildTableGroups(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Gender',
        groups: 'feats.Number',
        order: { 'feats.Number': ['Plur', 'Sing'] },  // Plur first
      });

      assert.strictEqual(tables[0].title, 'Plur');
      assert.strictEqual(tables[1].title, 'Sing');
    });
  });

  describe('Scenario: No groups returns single-element array', () => {
    const brat: NormalizedParadigm = {
      lemma: 'brat',
      upos: 'NOUN',
      forms: [
        { form: 'brat', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'brata', feats: { Case: 'Gen', Number: 'Sing' } },
      ],
    };

    it('returns array with one table when no groups specified', () => {
      const tokens = flatten(brat);
      const tables = buildTableGroups(tokens, {
        rows: 'feats.Case',
        columns: 'feats.Number',
      });

      assert.strictEqual(tables.length, 1);
      assert.strictEqual(tables[0].title, undefined);
    });
  });

});

describe('buildTable with headers: label resolution from header tokens', () => {

  describe('Scenario: Person labels from pronoun-like header tokens', () => {
    const verb: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: 'dělaju', feats: { Person: '1', Number: 'Sing', Tense: 'Pres' } },
        { form: 'dělaješ', feats: { Person: '2', Number: 'Sing', Tense: 'Pres' } },
        { form: 'dělaje', feats: { Person: '3', Number: 'Sing', Tense: 'Pres' } },
      ],
    };

    const headers: Token[] = [
      { form: 'ja', lemma: '_', feats: { Person: '1', Number: 'Sing' }, misc: { HeaderFor: 'feats.Person', Lang: 'isv' } },
      { form: 'ty', lemma: '_', feats: { Person: '2', Number: 'Sing' }, misc: { HeaderFor: 'feats.Person', Lang: 'isv' } },
      { form: 'on/ona/ono', lemma: '_', feats: { Person: '3', Number: 'Sing' }, misc: { HeaderFor: 'feats.Person', Lang: 'isv' } },
      { form: 'singular', lemma: '_', feats: { Number: 'Sing' }, misc: { HeaderFor: 'feats.Number', I18n: 'Yes', Class: 'vertical' } },
    ];

    it('resolves row header labels from header tokens', () => {
      const tokens = flatten(verb);
      const table = buildTable(tokens, {
        rows: 'feats.Person',
        columns: 'feats.Tense',
        headers,
      });

      // Row headers should have resolved labels
      assert.strictEqual(table.rowHeaders[0][0].label, 'ja');
      assert.strictEqual(table.rowHeaders[0][0].misc?.Lang, 'isv');
      assert.strictEqual(table.rowHeaders[0][1].label, 'ty');
      assert.strictEqual(table.rowHeaders[0][2].label, 'on/ona/ono');
    });

    it('resolves column header labels and preserves misc', () => {
      const tokens = flatten(verb);
      const table = buildTable(tokens, {
        rows: 'feats.Person',
        columns: 'feats.Number',
        headers,
      });

      assert.strictEqual(table.columnHeaders[0][0].label, 'singular');
      assert.strictEqual(table.columnHeaders[0][0].misc?.I18n, 'Yes');
      assert.strictEqual(table.columnHeaders[0][0].misc?.Class, 'vertical');
    });

    it('falls back to raw value when no header token matches', () => {
      const tokens = flatten(verb);
      const table = buildTable(tokens, {
        rows: 'feats.Person',
        columns: 'feats.Tense',
        headers,
      });

      // Tense has no header token, should fall back to raw value
      assert.strictEqual(table.columnHeaders[0][0].label, 'Pres');
      assert.strictEqual(table.columnHeaders[0][0].misc, undefined);
    });
  });

});
