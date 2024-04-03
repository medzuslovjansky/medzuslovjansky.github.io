import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {transliterate} from "@interslavic/utils";

const CYRILLIC_ALPHABET_LANGUAGES = new Set(['be', 'bg', 'mk', 'ru', 'sr-Cyrl', 'uk']);

export function TransliteratorElement({ children }) {
  const { i18n } = useDocusaurusContext();
  const isCyrillic = CYRILLIC_ALPHABET_LANGUAGES.has(i18n.currentLocale);

  const transliterateText = (text) => {
    return transliterate(text, 'art-Cyrl-x-interslv-etym').replaceAll('Ѣ', 'Є').replaceAll('ѣ', 'є');
  };

  const transliterateJSX = (jsxElement) => {
    if (typeof jsxElement === 'string') {
      return transliterateText(jsxElement);
    }

    if (React.isValidElement(jsxElement)) {
      return React.cloneElement(jsxElement, {
        children: React.Children.map(jsxElement.props.children, (child) => {
          if (typeof child === 'string') {
            return transliterateText(child);
          }
          return transliterateJSX(child);
        }),
      });
    }

    return jsxElement;
  };

  return (
    <span lang="art-x-interslv" translate="no" className="notranslate">
      {isCyrillic
        ? React.Children.map(children, transliterateJSX)
        : children}
    </span>
  );
}

