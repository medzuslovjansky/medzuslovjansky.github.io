import React, {useState, useCallback} from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import {transliterate} from '@interslavic/utils';
import styles from './IntelligibilityBuilder.module.scss';
import ico from './ms.ico';

function mark([key, [verified, value]]) {
  return (verified ? '' : '!') + key + value;
}

function calculateResult(languages) {
  return Object.entries(languages).map(mark).join(' ');
}

const LANGUAGES = {
  'be': 'Belarusian',
  'bg': 'Bulgarian',
  'cs': 'Czech',
  'hr': 'Croatian',
  'mk': 'Macedonian',
  'pl': 'Polish',
  'ru': 'Russian',
  'sk': 'Slovak',
  'sl': 'Slovenian',
  'sr': 'Serbian',
  'uk': 'Ukrainian'
};

function parseSynsets(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "application/xml");

  const synsets = Object.keys(LANGUAGES).reduce((synsets, lang) => {
    const collection = xmlDoc.querySelector(`synset[lang="${lang}"]`);
    const lemmas = collection
      ? [...collection.childNodes].filter(node => node.nodeName === 'lemma')
      : [];
    const children = lemmas.map((lemma, index, {length}) => {
      const annotation = lemma.getAttribute('annotation');
      const textContent = lemma.textContent.trim();
      const value = annotation ? `${textContent} (${annotation})` : textContent;
      const comma = index < length - 1 ? ', ' : '';
      return <span className={styles.lemma} key={index}>{value}{comma}</span>;
    });
    const verified = Boolean(collection && collection.getAttribute('verified') !== 'false');

    const synsetNode = (
      <span className={clsx(styles.synset, verified ? styles.verified : styles.automatic)} lang={lang} key={lang}>
      {children}
      </span>
    );

    synsets[lang] = synsetNode;
    return synsets;
  }, {});

  const isvNode = xmlDoc.querySelector(`synset[lang="art-x-interslv"]`);
  synsets.isv = isvNode ? isvNode.textContent.trim().replace(/\s*\n\s*/g, ', ') : '';

  return synsets;
}

const IntelligibilityEncoderPage = (props = {}) => {
  // State hooks for each language
  const [synsets, setSynsets] = useState({});
  const [be, set_be] = useState([false, props.be || '']);
  const [bg, set_bg] = useState([false, props.bg || '']);
  const [cs, set_cs] = useState([false, props.cs || '']);
  const [hr, set_hr] = useState([false, props.hr || '']);
  const [mk, set_mk] = useState([false, props.mk || '']);
  const [pl, set_pl] = useState([false, props.pl || '']);
  const [ru, set_ru] = useState([false, props.ru || '']);
  const [sk, set_sk] = useState([false, props.sk || '']);
  const [sl, set_sl] = useState([false, props.sl || '']);
  const [sr, set_sr] = useState([false, props.sr || '']);
  const [uk, set_uk] = useState([false, props.uk || '']);
  const resetAssessments = useCallback(() => {
    set_be([false, '']);
    set_bg([false, '']);
    set_cs([false, '']);
    set_hr([false, '']);
    set_mk([false, '']);
    set_pl([false, '']);
    set_ru([false, '']);
    set_sk([false, '']);
    set_sl([false, '']);
    set_sr([false, '']);
    set_uk([false, '']);
  }, [synsets]);

  const isv = synsets.isv || '';

  const [dragging, setDragging] = useState(false);

  // Function to handle file drop
  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);

    const files = event.dataTransfer.files;
    if (files && files[0] && files[0].type === "text/xml") {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        try {
          const nodes = parseSynsets(text);
          setSynsets(nodes);
          resetAssessments();
        } catch (e) {
          console.error(e);
        }
      };
      reader.readAsText(files[0]);
    } else {
      // Handle the case where the file is not an XML
      console.error('Please drop an XML file.');
    }
  }, [setSynsets]);

  // Handlers for drag events
  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  }, []);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!dragging) setDragging(true);
  }, [dragging]);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  }, []);

  const result = calculateResult({be, bg, cs, hr, mk, pl, ru, sk, sl, sr, uk});

  return (
    <section
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      className={dragging ? styles.dragging : undefined}>
      <div>
        <CodeBlock>{result}</CodeBlock>
      </div>
      <table>
        <thead>
        <tr>
          <th title="Human-verified">👤</th>
          <th>Language</th>
          <th>Assessment</th>
          <th width="100%">Comparison</th>
        </tr>
        </thead>
        <LanguageGroupHeader title="Western Slavic Languages">
          <InterslavicRow title="Etymological script" script="isv-Latn-x-etymolog">{isv}</InterslavicRow>
        </LanguageGroupHeader>
        <tbody>
        <LanguageRow lang="pl" value={pl} setValue={set_pl}>{synsets.pl}</LanguageRow>
        <LanguageRow lang="cs" value={cs} setValue={set_cs}>{synsets.cs}</LanguageRow>
        <LanguageRow lang="sk" value={sk} setValue={set_sk}>{synsets.sk}</LanguageRow>
        </tbody>
        <LanguageGroupHeader title="South-Western Slavic Languages">
          <InterslavicRow title="Standard script" script="isv-Latn">{isv}</InterslavicRow>
        </LanguageGroupHeader>
        <tbody>
        <LanguageRow lang="sl" value={sl} setValue={set_sl}>{synsets.sl}</LanguageRow>
        <LanguageRow lang="hr" value={hr} setValue={set_hr}>{synsets.hr}</LanguageRow>
        <LanguageRow lang="sr" value={sr} setValue={set_sr}>{synsets.sr}</LanguageRow>

        </tbody>
        <LanguageGroupHeader title="South-Eastern Slavic Languages">
          <InterslavicRow title="Cyrillic script" script="isv-Cyrl">{isv}</InterslavicRow>
        </LanguageGroupHeader>
        <tbody>
        <LanguageRow lang="mk" value={mk} setValue={set_mk}>{synsets.mk}</LanguageRow>
        <LanguageRow lang="bg" value={bg} setValue={set_bg}>{synsets.bg}</LanguageRow>

        </tbody>
        <LanguageGroupHeader title="East Slavic Languages">
          <InterslavicRow title="Iotated Cyrillic" script="isv-Cyrl-x-iotated-ext">{isv}</InterslavicRow>
        </LanguageGroupHeader>
        <tbody>
        <LanguageRow lang="ru" value={ru} setValue={set_ru}>{synsets.ru}</LanguageRow>
        <LanguageRow lang="be" value={be} setValue={set_be}>{synsets.be}</LanguageRow>
        <LanguageRow lang="uk" value={uk} setValue={set_uk}>{synsets.uk}</LanguageRow>
        </tbody>
      </table>
      <div>
        <CodeBlock>{result}</CodeBlock>
      </div>
    </section>
  );
}

function LanguageGroupHeader({title, children}) {
  return (
    <thead>
    <tr>
      <th colSpan="3">{title}</th>
      <td>{children}</td>
    </tr>
    </thead>
  );
}

function InterslavicRow({children, script}) {
  return (
    <span className={styles.synset} lang={script}>
      {children ? <img key="icon" alt="" src={ico} className={styles.msIcon} width={17}/> : null}
      {transliterate(children, script)}
    </span>
  );
}

function LanguageRow({children, lang, value: [verified, assessment], setValue}) {
  const setVerified = useCallback((value) => {
    setValue([value, assessment]);
  }, [setValue, assessment]);
  const setAssessment = useCallback((value) => {
    setValue([true, value]);
  }, [setValue]);
  const onCheckboxChange = useCallback((event) => {
    setVerified(event.target.checked);
  }, [setVerified]);
  const toggleVerified = useCallback(() => {
    setVerified(!verified);
  }, [verified, setVerified]);

  return (
    <tr>
      <td onClick={toggleVerified}>
        <input type="checkbox" checked={verified} onChange={onCheckboxChange} tabIndex="-1"/>
      </td>
      <td>{LANGUAGES[lang]}</td>
      <td className={styles.selectCell}>
        <IntelligibilitySelector language={lang} value={assessment} setValue={setAssessment}/>
      </td>
      <td lang={lang}>{children}</td>
    </tr>
  );
}

function IntelligibilitySelector({language, value, setValue}) {
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, [setValue]);
  const id = `selector-${language}`;

  return (
    <label className={styles.selectContainer} htmlFor={id}>
      <select id={id} value={value} onChange={onChange} className={styles.select}>
        <option value="" disabled={true}>Please select</option>
        <option value="+">Intelligible</option>
        <option value="~">Problematic</option>
        <option value="-">None</option>
      </select>
    </label>
  );
}

export default IntelligibilityEncoderPage;
