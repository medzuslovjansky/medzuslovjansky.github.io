import { describe, it, beforeEach } from 'node:test';
import { lookupAbbr, clearAbbreviationCache, loadAbbreviationData } from './lookup.ts';

describe('lookupAbbr: locale-specific abbreviation lookup', () => {

  beforeEach(() => {
    clearAbbreviationCache();
  });

  describe('English abbreviations', () => {
    it('finds standard English abbreviations', (t) => {
      loadAbbreviationData('en');
      t.assert.strictEqual(lookupAbbr('m.', 'en'), 'masculine');
      t.assert.strictEqual(lookupAbbr('f.', 'en'), 'feminine');
      t.assert.strictEqual(lookupAbbr('n.', 'en'), 'neuter');
    });

    it('returns null for unknown abbreviations', (t) => {
      loadAbbreviationData('en');
      t.assert.strictEqual(lookupAbbr('xyz.', 'en'), null);
    });
  });

  describe('Locale independence', () => {
    it('each locale has its own abbreviation keys', (t) => {
      loadAbbreviationData('en');
      loadAbbreviationData('uk');

      // English uses "m.", Ukrainian uses "ч.р."
      t.assert.strictEqual(lookupAbbr('m.', 'en'), 'masculine');
      t.assert.strictEqual(lookupAbbr('ч.р.', 'uk'), 'чоловічий рід');

      // Cross-lookup returns null (no mapping between locales)
      t.assert.strictEqual(lookupAbbr('m.', 'uk'), null);
      t.assert.strictEqual(lookupAbbr('ч.р.', 'en'), null);
    });
  });

  describe('Missing locale', () => {
    it('returns null for abbreviations in non-existent locale', (t) => {
      loadAbbreviationData('nonexistent');
      t.assert.strictEqual(lookupAbbr('m.', 'nonexistent'), null);
    });
  });
});
