import { describe, it } from 'node:test';
import { buildMotionVerbsTable } from './MotionVerbsTable.logic.ts';

describe('MotionVerbsTable: motion verbs reference data', () => {

  describe('English locale', () => {
    it('builds table with 12 verb rows', (t) => {
      const data = buildMotionVerbsTable('en');
      t.assert.strictEqual(data.rows.length, 12);
    });

    it('resolves English meanings', (t) => {
      const data = buildMotionVerbsTable('en');
      const goRow = data.rows.find(r => r.id === 'go_foot');
      t.assert.strictEqual(goRow?.meaning, 'to go (by foot)');
    });

    it('preserves ISV verb forms', (t) => {
      const data = buildMotionVerbsTable('en');
      const goRow = data.rows.find(r => r.id === 'go_foot');
      t.assert.strictEqual(goRow?.nonDirectional, 'hoditi');
      t.assert.strictEqual(goRow?.directionalImpf, 'idti');
      t.assert.strictEqual(goRow?.perfective, 'pojdti');
    });
  });

  describe('Ukrainian locale', () => {
    it('resolves Ukrainian meanings', (t) => {
      const data = buildMotionVerbsTable('uk');
      const goRow = data.rows.find(r => r.id === 'go_foot');
      t.assert.strictEqual(goRow?.meaning, 'йти (пішки)');
    });

    it('ISV forms are same across locales', (t) => {
      const en = buildMotionVerbsTable('en');
      const uk = buildMotionVerbsTable('uk');
      t.assert.strictEqual(en.rows[0].nonDirectional, uk.rows[0].nonDirectional);
    });
  });

  describe('Fallback behavior', () => {
    it('falls back to English for missing locale', (t) => {
      const data = buildMotionVerbsTable('nonexistent');
      const goRow = data.rows.find(r => r.id === 'go_foot');
      t.assert.strictEqual(goRow?.meaning, 'to go (by foot)');
    });
  });
});
