import React, {useCallback, useState} from "react";
import {FlavorisationBCP47, FlavorisationBCP47Code, transliterate} from '@interslavic/utils';
import CodeBlock from '@theme/CodeBlock';
import {customTransliterate} from './custom';
import styles from './Transliterator.module.scss';

/** @type {Record<FlavorisationBCP47Code, string>} */
const primary = {
  Latin: 'Interslavic (Latin)',
  Cyrillic: 'Interslavic (Cyrillic)',
  Glagolitic: 'Interslavic (Glagolitic)',
  IPA: 'Interslavic (IPA)',
};

/** @type {Record<FlavorisationBCP47Code, string>} */
const secondary = {
  ASCII: 'Interslavic (ASCII)',
  Polish: 'Interslavic (Polish)',
  LatinEtymological: 'Interslavic (Latin/Etymological)',
  LatinNorthern: 'Interslavic (Latin/Northern)',
  LatinSlovianto: 'Interslavic (Latin/Slovianto)',
  LatinSouthern: 'Interslavic (Latin/Southern)',
  CyrillicEtymological: 'Interslavic (Cyrillic/Etymological)',
  CyrillicIotated: 'Interslavic (Cyrillic/Iotated)',
  CyrillicIotatedExtended: 'Interslavic (Cyrillic/Iotated/Extended)',
  CyrillicNorthern: 'Interslavic (Cyrillic/Northern)',
  CyrillicSlovianto: 'Interslavic (Cyrillic/Slovianto)',
  CyrillicSouthern: 'Interslavic (Cyrillic/Southern)',
  GlagoliticEtymological: 'Interslavic (Glagolitic/Etymological)',
  GlagoliticNorthern: 'Interslavic (Glagolitic/Northern)',
  GlagoliticSlovianto: 'Interslavic (Glagolitic/Slovianto)',
  GlagoliticSouthern: 'Interslavic (Glagolitic/Southern)',
};

/** @type {Record<string, string>} */
const tertiary = {
  'MichalSwatPolishCyrillic': 'Polish → Cyrillic (Michał Swat)',
  'MichalSwatPolishGlagolitic': 'Polish → Glagolitic (Michał Swat)',
  'MichalSwatMsGlagolitic': 'Interslavic → Glagolitic (Michał Swat)',
  'GorlatoffCyrillicLatin': 'Меджусловјанскы → Medžuslovjansky (Mihail Gorlatov)',
};

function doTransliterate(input, script) {
  if (tertiary[script]) {
    return customTransliterate(input, script);
  } else {
    return transliterate(input, script);
  }
}

export function Transliterator() {
  const [input, setInput] = useState('Tu je někaky tekst za testovańje transliteracije.');
  const [script, setScript] = useState(FlavorisationBCP47.Cyrillic);

  const onInputChange = useCallback((event) => {
    setInput(event.target.value);
  }, [setInput]);

  const onScriptChange = useCallback((event) => {
    setScript(event.target.value);
  }, [setScript]);

  return (
    <section className={styles.transliterator}>
      <select className={styles.transliterator__select} value={script} onChange={onScriptChange}>
        <optgroup label="Primary">
          {Object.entries(primary).map(([key, value]) => (
            <option key={key} value={FlavorisationBCP47[key]}>
              {value}
            </option>
          ))}
        </optgroup>
        <optgroup label="Secondary">
          {Object.entries(secondary).map(([key, value]) => (
            <option key={key} value={FlavorisationBCP47[key]}>
              {value}
            </option>
          ))}
        </optgroup>
        <optgroup label="Community">
          {Object.entries(tertiary).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </optgroup>
      </select>
      <label className={styles.transliterator__label} htmlFor="input">Input</label>
      <textarea id="input" className={styles.transliterator__input} value={input} onChange={onInputChange}></textarea>
      <label className={styles.transliterator__label} htmlFor="output">Output</label>
      <CodeBlock language="markdown" id="output" className={styles.transliterator__output}>{doTransliterate(input, script)}</CodeBlock>
    </section>
  )
}
