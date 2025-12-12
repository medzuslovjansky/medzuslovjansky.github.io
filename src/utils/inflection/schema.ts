import { z } from 'zod';

/**
 * Zod schema for morphological features (Case, Number, Gender, Person, etc.)
 */
export const featsSchema = z.record(z.string(), z.string());

/**
 * Zod schema for miscellaneous metadata (Declension, Lang, etc.)
 */
export const miscSchema = z.record(z.string(), z.string()).optional();

/**
 * Zod schema for a single inflected form.
 */
export const formSchema = z.object({
  /** The inflected word form, may contain markup (*ending*, ~auxiliary~) */
  form: z.string(),
  /** Morphological features */
  feats: featsSchema,
  /** Optional metadata */
  misc: miscSchema,
});

/**
 * Zod schema for a normalized paradigm (CoNLL-U style).
 * This is the format for @lemma/*.json files.
 */
export const paradigmSchema = z.object({
  /** Dictionary form */
  lemma: z.string(),
  /** Universal POS tag (NOUN, VERB, ADJ, etc.) */
  upos: z.string().optional(),
  /** Language-specific POS tag */
  xpos: z.string().optional(),
  /** Paradigm-level features, inherited by all forms */
  feats: featsSchema.optional(),
  /** Paradigm-level metadata */
  misc: miscSchema,
  /** Array of inflected forms */
  forms: z.array(formSchema),
});

export type Paradigm = z.infer<typeof paradigmSchema>;
export type Form = z.infer<typeof formSchema>;

/**
 * Validate and parse a paradigm JSON.
 * Throws ZodError if invalid.
 */
export function parseParadigm(data: unknown): Paradigm {
  return paradigmSchema.parse(data);
}

/**
 * Safely validate a paradigm, returning result object.
 */
export function safeParseParadigm(data: unknown) {
  return paradigmSchema.safeParse(data);
}
