import { describe, it } from 'node:test';
import assert from 'node:assert';
import { renderForm, stripFormMarkup } from './renderForm.ts';

describe('renderForm: markup → HTML', () => {

  describe('Ending emphasis with *...*', () => {
    it('converts *ti* to <strong>ti</strong>', () => {
      assert.strictEqual(renderForm('děla*ti*'), 'děla<strong>ti</strong>');
    });

    it('handles multiple endings', () => {
      assert.strictEqual(renderForm('*do**bry*'), '<strong>do</strong><strong>bry</strong>');
    });

    it('handles ending in middle of word', () => {
      assert.strictEqual(renderForm('bra*t*a'), 'bra<strong>t</strong>a');
    });
  });

  describe('Auxiliary graying with ~...~', () => {
    it('converts ~budu~ to <span class="aux">budu</span>', () => {
      assert.strictEqual(
        renderForm('~budu~ dělati'),
        '<span class="aux">budu</span> dělati'
      );
    });

    it('handles auxiliary with emphasized ending', () => {
      assert.strictEqual(
        renderForm('~budu~ děla*ti*'),
        '<span class="aux">budu</span> děla<strong>ti</strong>'
      );
    });
  });

  describe('Combined markup', () => {
    it('handles complex future tense form', () => {
      assert.strictEqual(
        renderForm('~budemo~ děla*ti*'),
        '<span class="aux">budemo</span> děla<strong>ti</strong>'
      );
    });

    it('handles conditional with L-participle', () => {
      assert.strictEqual(
        renderForm('~byh~ děla*l*'),
        '<span class="aux">byh</span> děla<strong>l</strong>'
      );
    });
  });

  describe('Plain forms (no markup)', () => {
    it('returns unchanged when no markup', () => {
      assert.strictEqual(renderForm('dělati'), 'dělati');
      assert.strictEqual(renderForm('brat'), 'brat');
    });
  });

});

describe('stripFormMarkup: remove markup, return plain text', () => {

  it('strips ending markers', () => {
    assert.strictEqual(stripFormMarkup('děla*ti*'), 'dělati');
  });

  it('strips auxiliary markers', () => {
    assert.strictEqual(stripFormMarkup('~budu~ dělati'), 'budu dělati');
  });

  it('strips combined markup', () => {
    assert.strictEqual(stripFormMarkup('~budu~ děla*ti*'), 'budu dělati');
  });

  it('returns unchanged when no markup', () => {
    assert.strictEqual(stripFormMarkup('dělati'), 'dělati');
  });

});
