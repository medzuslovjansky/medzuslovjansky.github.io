/**
 * Parses the :abbr[content] directive content.
 *
 * Supports two syntaxes:
 * 1. Standard: `:abbr[n.]` - looks up "n." in locale database
 * 2. Custom: `:abbr[ч.р.|чоловічий рід]` - uses provided tooltip
 *
 * @module utils/abbreviations/parse
 */

export interface ParsedAbbr {
  /** The abbreviation text to display */
  abbr: string;
  /** Custom tooltip (null if using database lookup) */
  tooltip: string | null;
  /** Whether this uses custom tooltip syntax */
  isCustom: boolean;
}

/**
 * Parse abbreviation directive content.
 *
 * @param content - Raw content from :abbr[content]
 * @returns Parsed abbreviation with optional custom tooltip
 *
 * @example
 * parseAbbr('n.')
 * // { abbr: 'n.', tooltip: null, isCustom: false }
 *
 * @example
 * parseAbbr('ч.р.|чоловічий рід')
 * // { abbr: 'ч.р.', tooltip: 'чоловічий рід', isCustom: true }
 *
 * @example
 * parseAbbr('a|b|c')
 * // { abbr: 'a', tooltip: 'b|c', isCustom: true }
 */
export function parseAbbr(content: string): ParsedAbbr {
  const pipeIndex = content.indexOf('|');

  if (pipeIndex === -1) {
    return {
      abbr: content,
      tooltip: null,
      isCustom: false,
    };
  }

  return {
    abbr: content.slice(0, pipeIndex),
    tooltip: content.slice(pipeIndex + 1),
    isCustom: true,
  };
}
