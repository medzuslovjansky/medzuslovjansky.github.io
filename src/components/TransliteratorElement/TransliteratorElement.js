export function TransliteratorElement({ children }) {
  // TODO: add support for different transliteration systems
  return <span lang="art-x-interslv" translate="no" className="notranslate">{children}</span>;
}

