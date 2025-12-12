import { describe, it } from 'node:test';
import { parseAbbr } from './parse.ts';

describe('parseAbbr: parse :abbr[content] directive content', () => {

  describe('Standard abbreviations (lookup mode)', () => {
    it('parses standard abbreviation without tooltip', (t) => {
      t.assert.deepStrictEqual(parseAbbr('n.'), {
        abbr: 'n.',
        tooltip: null,
        isCustom: false,
      });
    });

    it('handles common grammatical abbreviations', (t) => {
      t.assert.deepStrictEqual(parseAbbr('m.'), { abbr: 'm.', tooltip: null, isCustom: false });
      t.assert.deepStrictEqual(parseAbbr('f.'), { abbr: 'f.', tooltip: null, isCustom: false });
      t.assert.deepStrictEqual(parseAbbr('impf.'), { abbr: 'impf.', tooltip: null, isCustom: false });
      t.assert.deepStrictEqual(parseAbbr('pf.'), { abbr: 'pf.', tooltip: null, isCustom: false });
      t.assert.deepStrictEqual(parseAbbr('nom.'), { abbr: 'nom.', tooltip: null, isCustom: false });
      t.assert.deepStrictEqual(parseAbbr('sg.'), { abbr: 'sg.', tooltip: null, isCustom: false });
    });

    it('handles composite abbreviations', (t) => {
      t.assert.deepStrictEqual(parseAbbr('m.nom.sg.'), {
        abbr: 'm.nom.sg.',
        tooltip: null,
        isCustom: false,
      });
    });
  });

  describe('Custom abbreviations (inline tooltip mode)', () => {
    it('parses abbreviation with custom tooltip', (t) => {
      t.assert.deepStrictEqual(parseAbbr('ч.р.|чоловічий рід'), {
        abbr: 'ч.р.',
        tooltip: 'чоловічий рід',
        isCustom: true,
      });
    });

    it('handles empty tooltip after pipe', (t) => {
      t.assert.deepStrictEqual(parseAbbr('x|'), {
        abbr: 'x',
        tooltip: '',
        isCustom: true,
      });
    });

    it('handles multiple pipes (first one wins, rest is part of tooltip)', (t) => {
      t.assert.deepStrictEqual(parseAbbr('a|b|c'), {
        abbr: 'a',
        tooltip: 'b|c',
        isCustom: true,
      });
    });
  });

  describe('Edge cases', () => {
    it('handles empty content', (t) => {
      t.assert.deepStrictEqual(parseAbbr(''), {
        abbr: '',
        tooltip: null,
        isCustom: false,
      });
    });

    it('handles pipe at start (empty abbr with tooltip)', (t) => {
      t.assert.deepStrictEqual(parseAbbr('|tooltip'), {
        abbr: '',
        tooltip: 'tooltip',
        isCustom: true,
      });
    });
  });
});
