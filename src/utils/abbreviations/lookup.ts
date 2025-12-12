import { abbreviationSchema, type AbbreviationData } from './schema.ts';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

/**
 * Cache for loaded abbreviation data by locale.
 */
const dataCache = new Map<string, AbbreviationData>();

/**
 * Get the directory path for i18n files.
 */
function getI18nDir(): string {
  // Works in both ESM and when transpiled
  const currentFile = import.meta.url;
  const currentDir = dirname(fileURLToPath(currentFile));
  return join(currentDir, 'i18n');
}

/**
 * Load abbreviation data for a locale synchronously.
 * Data files are located at ./i18n/{locale}.json
 *
 * @param locale - Locale code (e.g., 'en', 'ru', 'uk')
 * @returns Parsed and validated abbreviation data
 */
export function loadAbbreviationData(locale: string): AbbreviationData {
  if (dataCache.has(locale)) {
    return dataCache.get(locale)!;
  }

  try {
    const filePath = join(getI18nDir(), `${locale}.json`);
    const content = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    const validated = abbreviationSchema.parse(data);
    dataCache.set(locale, validated);
    return validated;
  } catch (error) {
    // Return empty data if locale not found (no fallback - each locale is independent)
    console.warn(`Abbreviation data not found for locale "${locale}"`);
    dataCache.set(locale, {});
    return {};
  }
}

/**
 * Synchronously get abbreviation data (must be pre-loaded or will load on demand).
 * Returns empty object if not found.
 */
export function getAbbreviationData(locale: string): AbbreviationData {
  if (!dataCache.has(locale)) {
    loadAbbreviationData(locale);
  }
  return dataCache.get(locale) ?? {};
}

/**
 * Pre-load abbreviation data for specified locales.
 * Call this at app startup to ensure data is available.
 */
export function preloadAbbreviationData(locales: string[]): void {
  locales.forEach(loadAbbreviationData);
}

/**
 * Look up tooltip for an abbreviation in a specific locale.
 *
 * Each locale has its own abbreviations - no cross-locale mapping.
 * English docs use `:abbr[m.]`, Ukrainian docs use `:abbr[ч.р.]`
 *
 * @param abbr - Abbreviation to look up (locale-specific key)
 * @param locale - Locale code (e.g., 'en', 'uk')
 * @returns Tooltip string if found, null otherwise
 *
 * @example
 * lookupAbbr('m.', 'en')     // 'masculine'
 * lookupAbbr('ч.р.', 'uk')   // 'чоловічий рід'
 * lookupAbbr('xyz', 'en')    // null
 */
export function lookupAbbr(abbr: string, locale: string): string | null {
  const data = getAbbreviationData(locale);
  return data[abbr] ?? null;
}

/**
 * Clear the data cache (useful for testing).
 */
export function clearAbbreviationCache(): void {
  dataCache.clear();
}
