import React, {useCallback, useState} from "react";
import {FlavorisationBCP47, transliterate} from '@interslavic/utils';
import CodeBlock from '@theme/CodeBlock';
import styles from './Transliterator.module.scss';

export function Transliterator() {
  const [input, setInput] = useState('Tu je někaky tekst za testovańje transliteracije.');
  const [script, setScript] = useState('art-Cyrl-x-interslv');

  const onInputChange = useCallback((event) => {
    setInput(event.target.value);
  }, [setInput]);

  const onScriptChange = useCallback((event) => {
    setScript(event.target.value);
  }, [setScript]);

  return (
    <section className={styles.transliterator}>
      <select className={styles.transliterator__select} value={script} onChange={onScriptChange}>
        {Object.entries(FlavorisationBCP47).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
      <label className={styles.transliterator__label} htmlFor="input">Input</label>
      <textarea id="input" className={styles.transliterator__input} value={input} onChange={onInputChange}></textarea>
      <label className={styles.transliterator__label} htmlFor="output">Output</label>
      <CodeBlock language="markdown" id="output" className={styles.transliterator__output}>{transliterate(input, script)}</CodeBlock>
    </section>
  )
}
