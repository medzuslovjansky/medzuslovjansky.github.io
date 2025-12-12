import data from './MotionVerbsTable.data.json' with { type: 'json' };
import i18n from './MotionVerbsTable.i18n.json' with { type: 'json' };

type I18nData = Record<string, Record<string, string>>;

/**
 * Look up translation for a key in current locale.
 * Falls back to English if not found.
 */
export function t(locale: string, key: string): string {
  const i18nData = i18n as I18nData;
  return i18nData[locale]?.[key] ?? i18nData.en?.[key] ?? key;
}

export interface MotionVerbRow {
  id: string;
  meaning: string;
  nonDirectional: string;
  directionalImpf: string;
  perfective: string;
}

export interface MotionVerbsTableData {
  columns: typeof data.columns;
  rows: MotionVerbRow[];
}

/**
 * Pure function for building motion verbs table data.
 * Resolves i18n keys to translated meanings.
 *
 * @param locale - Locale code (e.g., 'en', 'ru')
 * @returns Table data with resolved translations
 */
export function buildMotionVerbsTable(locale = 'en'): MotionVerbsTableData {
  return {
    columns: data.columns,
    rows: data.rows.map((row) => ({
      ...row,
      meaning: t(locale, row.id),
    })),
  };
}
