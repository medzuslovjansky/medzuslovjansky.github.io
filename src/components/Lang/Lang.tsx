import React from 'react';
import { transliterate } from '@interslavic/utils';
import { useReadScriptPreference, type ScriptPreference } from './useScriptPreference';

interface LangProps {
  /** ISO 639 language code */
  lang: string;
  children: React.ReactNode;
}

/**
 * Renders text in a specific language with user's preferred script.
 * Reads preference from localStorage.
 *
 * @example
 * <Lang lang="isv">slovo</Lang>
 * // With Cyrillic preference: слово
 * // With Latin preference: slovo
 */
export function Lang({ lang, children }: LangProps) {
  const preference = useReadScriptPreference();

  const transformedContent = React.useMemo(() => {
    if (lang !== 'isv') {
      // For non-ISV languages, just render as-is
      return children;
    }

    // For ISV, apply transliteration based on preference
    if (preference === 'Cyrl') {
      return transformChildren(children, isvToCyrillic);
    }

    return children;
  }, [children, lang, preference]);

  return (
    <span lang={lang} translate="no" className="notranslate">
      {transformedContent}
    </span>
  );
}

/**
 * Shorthand for <Lang lang="isv">.
 * Use this for Interslavic text in JSX components.
 */
export function Isv({ children }: { children: React.ReactNode }) {
  return <Lang lang="isv">{children}</Lang>;
}

/**
 * Backwards compatibility alias.
 * @deprecated Use `<Isv>` or `<Lang lang="isv">` instead.
 */
export const TransliteratorElement = Isv;

/**
 * Transform ISV Latin to Cyrillic using @interslavic/utils.
 */
function isvToCyrillic(text: string): string {
  return transliterate(text, 'isv-Cyrl-x-etymolog')
    .replaceAll('Ѣ', 'Є')
    .replaceAll('ѣ', 'є');
}

/**
 * Recursively transform text content in React children.
 */
function transformChildren(
  children: React.ReactNode,
  transform: (text: string) => string
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return transform(child);
    }

    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        children: transformChildren(child.props.children, transform),
      });
    }

    return child;
  });
}
