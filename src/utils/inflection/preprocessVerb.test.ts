import { describe, it } from 'node:test';
import assert from 'node:assert';
import { preprocessVerb } from './preprocessVerb.ts';
import type { NormalizedParadigm } from './types.ts';

describe('preprocessVerb: add auxiliary markers to verb forms', () => {

  describe('Scenario: Future tense with budu/budeš/bude/budemo/budete/budut', () => {
    const delati: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '1', Number: 'Sing' } },
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '2', Number: 'Sing' } },
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '3', Number: 'Sing' } },
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '1', Number: 'Plur' } },
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '2', Number: 'Plur' } },
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '3', Number: 'Plur' } },
      ],
    };

    it('prepends ~budu~ etc. to future tense forms', () => {
      const result = preprocessVerb(delati);

      assert.strictEqual(result.forms[0].form, '~budu~ děla*ti*');
      assert.strictEqual(result.forms[1].form, '~budeš~ děla*ti*');
      assert.strictEqual(result.forms[2].form, '~bude~ děla*ti*');
      assert.strictEqual(result.forms[3].form, '~budemo~ děla*ti*');
      assert.strictEqual(result.forms[4].form, '~budete~ děla*ti*');
      assert.strictEqual(result.forms[5].form, '~budut~ děla*ti*');
    });

    it('does not mutate original paradigm', () => {
      const original = delati.forms[0].form;
      preprocessVerb(delati);
      assert.strictEqual(delati.forms[0].form, original);
    });
  });

  describe('Scenario: Conditional mood with byh/bys/by/byhmo/byste/by', () => {
    const delati: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: 'děla*l*', feats: { Mood: 'Cnd', Person: '1', Number: 'Sing' } },
        { form: 'děla*l*', feats: { Mood: 'Cnd', Person: '2', Number: 'Sing' } },
        { form: 'děla*l*', feats: { Mood: 'Cnd', Person: '3', Number: 'Sing' } },
        { form: 'děla*li*', feats: { Mood: 'Cnd', Person: '1', Number: 'Plur' } },
        { form: 'děla*li*', feats: { Mood: 'Cnd', Person: '2', Number: 'Plur' } },
        { form: 'děla*li*', feats: { Mood: 'Cnd', Person: '3', Number: 'Plur' } },
      ],
    };

    it('prepends ~byh~ etc. to conditional forms', () => {
      const result = preprocessVerb(delati);

      assert.strictEqual(result.forms[0].form, '~byh~ děla*l*');
      assert.strictEqual(result.forms[1].form, '~bys~ děla*l*');
      assert.strictEqual(result.forms[2].form, '~by~ děla*l*');
      assert.strictEqual(result.forms[3].form, '~byhmo~ děla*li*');
      assert.strictEqual(result.forms[4].form, '~byste~ děla*li*');
      assert.strictEqual(result.forms[5].form, '~by~ děla*li*');
    });
  });

  describe('Scenario: Mixed paradigm with present, future, conditional', () => {
    const delati: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        // Present - no auxiliary
        { form: 'děla*ju*', feats: { Tense: 'Pres', Person: '1', Number: 'Sing' } },
        // Future - gets ~budu~
        { form: 'děla*ti*', feats: { Tense: 'Fut', Person: '1', Number: 'Sing' } },
        // Conditional - gets ~byh~
        { form: 'děla*l*', feats: { Mood: 'Cnd', Person: '1', Number: 'Sing' } },
      ],
    };

    it('only adds auxiliaries to future and conditional, not present', () => {
      const result = preprocessVerb(delati);

      assert.strictEqual(result.forms[0].form, 'děla*ju*');  // unchanged
      assert.strictEqual(result.forms[1].form, '~budu~ děla*ti*');
      assert.strictEqual(result.forms[2].form, '~byh~ děla*l*');
    });
  });

  describe('Scenario: Already has auxiliary (idempotent)', () => {
    const delati: NormalizedParadigm = {
      lemma: 'dělati',
      upos: 'VERB',
      forms: [
        { form: '~budu~ děla*ti*', feats: { Tense: 'Fut', Person: '1', Number: 'Sing' } },
      ],
    };

    it('does not double-add auxiliary', () => {
      const result = preprocessVerb(delati);
      assert.strictEqual(result.forms[0].form, '~budu~ děla*ti*');
    });
  });

});
