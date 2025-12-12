import { describe, it } from 'node:test';
import assert from 'node:assert';
import { flatten } from './flatten.ts';
import type { NormalizedParadigm } from './types.ts';

describe('flatten: NormalizedParadigm → Token[]', () => {

  describe('Scenario: Simple masculine noun "brat" (brother)', () => {
    const brat: NormalizedParadigm = {
      lemma: 'brat',
      upos: 'NOUN',
      xpos: 'm.anim.',
      misc: { Declension: 'I', StemType: 'Hard' },
      forms: [
        { form: 'brat', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'bra\u00ADta', feats: { Case: 'Gen', Number: 'Sing' } },
        { form: 'bra\u00ADtu', feats: { Case: 'Dat', Number: 'Sing' } },
        { form: 'bra\u00ADta', feats: { Case: 'Acc', Number: 'Sing' } },
        { form: 'bra\u00ADtom', feats: { Case: 'Ins', Number: 'Sing' } },
        { form: 'bra\u00ADtu', feats: { Case: 'Loc', Number: 'Sing' } },
        { form: 'bra\u00ADte', feats: { Case: 'Voc', Number: 'Sing' } },
      ],
    };

    it('flattens to array with inherited lemma, upos, xpos, misc', () => {
      const tokens = flatten(brat);

      assert.strictEqual(tokens.length, 7);
      assert.strictEqual(tokens[0].lemma, 'brat');
      assert.strictEqual(tokens[0].upos, 'NOUN');
      assert.strictEqual(tokens[0].xpos, 'm.anim.');
      assert.strictEqual(tokens[0].form, 'brat');
      assert.deepStrictEqual(tokens[0].feats, { Case: 'Nom', Number: 'Sing' });
      assert.deepStrictEqual(tokens[0].misc, { Declension: 'I', StemType: 'Hard' });

      // Check soft hyphen preserved in form
      assert.strictEqual(tokens[1].form, 'bra\u00ADta');
    });
  });

  describe('Scenario: Personal pronoun "ja" with clitic variants', () => {
    const ja: NormalizedParadigm = {
      lemma: 'ja',
      upos: 'PRON',
      xpos: 'pers.1sg',
      forms: [
        { form: 'ja', feats: { Case: 'Nom', Number: 'Sing', Person: '1' } },
        { form: 'mene', feats: { Case: 'Acc', Number: 'Sing', Person: '1' } },
        { form: 'me', feats: { Case: 'Acc', Number: 'Sing', Person: '1', Variant: 'Short' } },
        { form: 'mně', feats: { Case: 'Dat', Number: 'Sing', Person: '1' } },
        { form: 'mi', feats: { Case: 'Dat', Number: 'Sing', Person: '1', Variant: 'Short' } },
      ],
    };

    it('preserves Variant feature for clitics alongside full forms', () => {
      const tokens = flatten(ja);

      const accFull = tokens.find(t => t.form === 'mene');
      const accClitic = tokens.find(t => t.form === 'me');

      assert.ok(accFull);
      assert.ok(accClitic);
      assert.strictEqual(accFull.feats.Variant, undefined);
      assert.strictEqual(accClitic.feats.Variant, 'Short');

      // Both share same coordinates except Variant
      assert.strictEqual(accFull.feats.Case, accClitic.feats.Case);
      assert.strictEqual(accFull.feats.Number, accClitic.feats.Number);
    });
  });

  describe('Scenario: Combining paradigms with spread operator', () => {
    const dom: NormalizedParadigm = {
      lemma: 'dom',
      upos: 'NOUN',
      xpos: 'm.inan.',
      misc: { Declension: 'I' },
      forms: [
        { form: 'dom', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'do\u00ADma', feats: { Case: 'Gen', Number: 'Sing' } },
      ],
    };

    const kraj: NormalizedParadigm = {
      lemma: 'kraj',
      upos: 'NOUN',
      xpos: 'm.inan.',
      misc: { Declension: 'I', StemType: 'Soft' },
      forms: [
        { form: 'kraj', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'kra\u00ADja', feats: { Case: 'Gen', Number: 'Sing' } },
      ],
    };

    it('produces combinable arrays via spread: [...flatten(dom), ...flatten(kraj)]', () => {
      const combined = [...flatten(dom), ...flatten(kraj)];

      assert.strictEqual(combined.length, 4);
      assert.strictEqual(combined[0].lemma, 'dom');
      assert.strictEqual(combined[2].lemma, 'kraj');

      // Each retains its own misc
      assert.strictEqual(combined[0].misc?.StemType, undefined);
      assert.strictEqual(combined[2].misc?.StemType, 'Soft');
    });
  });

  describe('Scenario: Numeral "dva" with gender, "tri" without', () => {
    const dva: NormalizedParadigm = {
      lemma: 'dva',
      upos: 'NUM',
      forms: [
        { form: 'dva', feats: { Case: 'Nom', Gender: 'Masc' } },
        { form: 'dvě', feats: { Case: 'Nom', Gender: 'Fem' } },
      ],
    };

    const tri: NormalizedParadigm = {
      lemma: 'tri',
      upos: 'NUM',
      forms: [
        { form: 'tri', feats: { Case: 'Nom' } },  // No Gender
      ],
    };

    it('tokens without Gender keep feats.Gender undefined (will broadcast later)', () => {
      const combined = [...flatten(dva), ...flatten(tri)];

      const dvaM = combined.find(t => t.form === 'dva');
      const triForm = combined.find(t => t.form === 'tri');

      assert.ok(dvaM);
      assert.ok(triForm);
      assert.strictEqual(dvaM.feats.Gender, 'Masc');
      assert.strictEqual(triForm.feats.Gender, undefined); // broadcasts
    });
  });

  describe('Scenario: Form-level misc overrides paradigm-level misc', () => {
    const irregular: NormalizedParadigm = {
      lemma: 'člověk',
      upos: 'NOUN',
      misc: { Declension: 'I' },
      forms: [
        { form: 'člověk', feats: { Case: 'Nom', Number: 'Sing' } },
        { form: 'ljudi', feats: { Case: 'Nom', Number: 'Plur' }, misc: { StemChange: 'Suppletive' } },
      ],
    };

    it('form-level misc merges with and overrides paradigm-level misc', () => {
      const tokens = flatten(irregular);

      // Regular form inherits paradigm misc only
      assert.deepStrictEqual(tokens[0].misc, { Declension: 'I' });

      // Suppletive form gets merged misc
      assert.deepStrictEqual(tokens[1].misc, { Declension: 'I', StemChange: 'Suppletive' });
    });
  });

  describe('Scenario: Paradigm-level feats inherited by forms (adverbial pronouns)', () => {
    const gde: NormalizedParadigm = {
      lemma: 'gde',
      upos: 'ADV',
      feats: { PronType: 'Int' },  // paradigm-level: all forms are interrogative
      forms: [
        { form: 'gde', feats: { AdvType: 'Loc' } },
        { form: 'kogda', feats: { AdvType: 'Tim' } },
      ],
    };

    it('paradigm feats merge with form feats', () => {
      const tokens = flatten(gde);

      // Both inherit PronType from paradigm
      assert.strictEqual(tokens[0].feats.PronType, 'Int');
      assert.strictEqual(tokens[1].feats.PronType, 'Int');

      // Each has own AdvType
      assert.strictEqual(tokens[0].feats.AdvType, 'Loc');
      assert.strictEqual(tokens[1].feats.AdvType, 'Tim');
    });
  });

});
