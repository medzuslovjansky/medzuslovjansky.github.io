import React from 'react';

/**
 * Render form string with inline markup to HTML.
 *
 * Markup:
 * - `*...*` → <strong>...</strong> (emphasized ending)
 * - `~...~` → <span class="aux">...</span> (grayed auxiliary)
 *
 * Returns HTML string ready for dangerouslySetInnerHTML or similar.
 */
export function renderForm(form: string): string {
  return form
    // First handle auxiliaries: ~budu~ → <span class="aux">budu</span>
    .replace(/~([^~]+)~/g, '<span class="aux">$1</span>')
    // Then handle endings: *ti* → <strong>ti</strong>
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
}

/**
 * Parse form markup and return React elements.
 * This is preferred over renderForm when using TransliteratorElement,
 * as it allows proper traversal of children for transliteration.
 *
 * Markup:
 * - `*...*` → <strong>...</strong> (emphasized ending)
 * - `~...~` → <span className="aux">...</span> (grayed auxiliary)
 */
export function renderFormToReact(form: string): React.ReactNode {
  // Regex to match ~...~ and *...* patterns
  const pattern = /~([^~]+)~|\*([^*]+)\*/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIndex = 0;

  while ((match = pattern.exec(form)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(form.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      // ~...~ auxiliary
      parts.push(
        React.createElement('span', { key: keyIndex++, className: 'aux' }, match[1])
      );
    } else if (match[2] !== undefined) {
      // *...* emphasized ending
      parts.push(
        React.createElement('strong', { key: keyIndex++ }, match[2])
      );
    }

    lastIndex = pattern.lastIndex;
  }

  // Add remaining text after last match
  if (lastIndex < form.length) {
    parts.push(form.slice(lastIndex));
  }

  // Return single string if no markup was found
  if (parts.length === 1 && typeof parts[0] === 'string') {
    return parts[0];
  }

  return parts.length > 0 ? parts : form;
}

/**
 * Strip markup from form string, returning plain text.
 * Useful for sorting, searching, or accessibility.
 */
export function stripFormMarkup(form: string): string {
  return form
    .replace(/~([^~]+)~/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}
