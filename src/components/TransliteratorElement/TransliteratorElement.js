export function TransliteratorElement({ children }) {
  // TODO: add support for different transliteration systems
  return <span style={{outline: '2px solid red'}} lang="art-x-interslv" translate="no" className="notranslate">{children}</span>;
}

