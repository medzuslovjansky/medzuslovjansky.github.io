/**
 * CoNLL-U-ish token representing a single inflected form.
 *
 * Inline markup in `form`:
 * - `*...*` marks emphasized ending: `děla*ti*` → `děla<strong>ti</strong>`
 * - `~...~` marks grayed auxiliary: `~budu~ děla*ti*` → `<span class="aux">budu</span> děla<strong>ti</strong>`
 */
export interface Token {
  /** The inflected word form with optional markup (*ending*, ~auxiliary~) */
  form: string;
  /** Dictionary form, e.g. "brat" */
  lemma: string;
  /** Universal POS tag */
  upos?: string;
  /** Language-specific POS tag, e.g. "m.anim." */
  xpos?: string;
  /** Morphological features: Case, Number, Gender, Person, Tense, Variant, etc. */
  feats: Record<string, string>;
  /** Non-morphological metadata: Declension, StemType, Lang (e.g. 'isv', 'ru', 'pl' for comparative tables) */
  misc?: Record<string, string>;
}

/**
 * Normalized paradigm JSON (human-friendly authoring format).
 * Gets flattened to Token[] for processing.
 */
export interface NormalizedParadigm {
  lemma: string;
  upos?: string;
  xpos?: string;
  /** Paradigm-level features, inherited by all forms (e.g., PronType for adverbs) */
  feats?: Record<string, string>;
  misc?: Record<string, string>;
  /** Array of forms with their features */
  forms: Array<{
    form: string;
    /** Form-level features, merged with paradigm feats */
    feats: Record<string, string>;
    misc?: Record<string, string>;
  }>;
}

/** Dot-notation path like "feats.Case" or "lemma" or "misc.Declension" */
export type DotPath = string;

/**
 * A single cell in the table structure.
 * May contain multiple tokens (e.g., main form + clitic variant).
 * Merging (colspan/rowspan) is handled at render time, not here.
 */
export interface TableCell {
  /** Token(s) for this cell, primary forms first, then variants */
  tokens: Token[];
}

/**
 * Header cell for rows or columns.
 */
export interface HeaderCell {
  /** Display label (may differ from value if resolved from header tokens) */
  label: string;
  /** The DotPath this header represents */
  path: DotPath;
  /** The raw value for this header */
  value: string;
  /** Span for nested headers (rowspan or colspan) */
  span: number;
  /** Styling and rendering hints (Class, Lang, I18n) */
  misc?: Record<string, string>;
}

/**
 * Complete table structure ready for rendering.
 */
export interface TableStructure {
  /** Optional title, e.g. "Singular" when split by groups */
  title?: string;
  /** Optional description for figcaption */
  description?: string;
  /** Column headers (may be multi-level if columns is DotPath[]) */
  columnHeaders: HeaderCell[][];
  /** Row headers (may be multi-level if rows is DotPath[]) */
  rowHeaders: HeaderCell[][];
  /** 2D grid of cells, indexed as cells[rowIndex][colIndex] */
  cells: TableCell[][];
}

/**
 * Filter configuration for including/excluding tokens.
 * Multiple keys in include/exclude are AND'd.
 * Multiple values for same key are OR'd.
 * Empty string '' matches undefined/missing values.
 */
export interface FilterConfig {
  include?: Record<DotPath, string | string[]>;
  exclude?: Record<DotPath, string | string[]>;
}

/**
 * Configuration for building a table from tokens.
 */
export interface TableConfig {
  /** Row dimension(s) */
  rows: DotPath | DotPath[];
  /** Column dimension(s) */
  columns: DotPath | DotPath[];
  /** Optional: split into multiple TableStructure[] by this dimension */
  groups?: DotPath;
  /** Optional: filter tokens before building table */
  filter?: FilterConfig;
  /** Optional: custom sort order for dimension values. Values not listed appear last in natural order. */
  order?: Record<DotPath, string[]>;
  /** Optional: header tokens for label resolution. Matched by misc.HeaderFor + feats values. */
  headers?: Token[];
}

/**
 * Configuration for rendering table(s) to HTML.
 */
export interface RenderConfig {
  /** How to present multiple tables (when groups produces TableStructure[]) */
  layout: 'tabs' | 'concat' | 'single';
  /** Wrap in <figure> with <figcaption> */
  useFigure: boolean;
  /** Use multiple <tbody> within one <table> vs separate tables */
  mergeIntoSingleTable: boolean;
  /** Sticky first column for horizontal scroll */
  stickyFirstColumn: boolean;
  /** Cell merge strategy: try directions in order. [] = no merge, ['cols'] = colspan only, ['cols', 'rows'] = colspan first then rowspan */
  merge?: ('rows' | 'cols')[];
}
