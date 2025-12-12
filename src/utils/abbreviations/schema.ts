import { z } from 'zod';

/**
 * Schema for abbreviation data files.
 *
 * Each locale has its own abbreviation keys (e.g., "m." in English, "ч.р." in Ukrainian).
 * The value is just the tooltip - the display text IS the key itself.
 *
 * @example en.json
 * { "m.": "masculine", "n.": "neuter", "impf.": "imperfective" }
 *
 * @example uk.json
 * { "ч.р.": "чоловічий рід", "с.р.": "середній рід", "недок.": "недоконаний вид" }
 */
export const abbreviationSchema = z.record(
  z.string().describe('Abbreviation as used in this locale'),
  z.string().describe('Tooltip explanation')
);

export type AbbreviationData = z.infer<typeof abbreviationSchema>;
