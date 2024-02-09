import React, { useState, useCallback } from 'react';
import CodeBlock from '@theme/CodeBlock';

function mark([key, [verified, value]]) {
  return (verified ? '' : '!') + key + value;
}

function calculateResult(languages) {
  return Object.entries(languages).map(mark).join(' ');
}

const IntelligibilityEncoderPage = (props) => {
  // State hooks for each language
  const [be, set_be] = useState([true, props.be || '-']);
  const [bg, set_bg] = useState([true, props.bg || '-']);
  const [cs, set_cs] = useState([true, props.cs || '-']);
  const [hr, set_hr] = useState([true, props.hr || '-']);
  const [mk, set_mk] = useState([true, props.mk || '-']);
  const [pl, set_pl] = useState([true, props.pl || '-']);
  const [ru, set_ru] = useState([true, props.ru || '-']);
  const [sl, set_sl] = useState([true, props.sl || '-']);
  const [sr, set_sr] = useState([true, props.sr || '-']);
  const [uk, set_uk] = useState([true, props.uk || '-']);

  // Toggle verified state for a language
  const toggleVerified = useCallback((setter) => {
    setter(prevState => [!prevState[0], prevState[1]]);
  }, []);

  return (
    <section>
      <div>
        <CodeBlock>{calculateResult({ be, bg, cs, hr, mk, pl, ru, sl, sr, uk })}</CodeBlock>
      </div>
      <table>
        <thead>
        <tr>
          <td>Verified</td>
          <td>Language</td>
          <td>Assessment</td>
        </tr>
        </thead>
        <LanguageGroupHeader>Western Slavic Languages</LanguageGroupHeader>
        <tbody>
          <LanguageRow language="Czech" value={cs} setValue={set_cs} />
          <LanguageRow language="Polish" value={pl} setValue={set_pl} />
          <LanguageRow language="Slovak" value={sl} setValue={set_sl} />
        </tbody>
        <LanguageGroupHeader>South-Western Slavic Languages</LanguageGroupHeader>
        <tbody>
          <LanguageRow language="Croatian" value={hr} setValue={set_hr} />
          <LanguageRow language="Serbian" value={sr} setValue={set_sr} />
          <LanguageRow language="Slovenian" value={sl} setValue={set_sl} /> {/* Assuming 'sl' is Slovenian, not Slovak */}
        </tbody>
        <LanguageGroupHeader>South-Eastern Slavic Languages</LanguageGroupHeader>
        <tbody>
          <LanguageRow language="Bulgarian" value={bg} setValue={set_bg} />
          <LanguageRow language="Macedonian" value={mk} setValue={set_mk} />
        </tbody>
        <LanguageGroupHeader>East Slavic Languages</LanguageGroupHeader>
        <tbody>
          <LanguageRow language="Belarusian" value={be} setValue={set_be} />
          <LanguageRow language="Russian" value={ru} setValue={set_ru} />
          <LanguageRow language="Ukrainian" value={uk} setValue={set_uk} />
        </tbody>
      </table>
    </section>
  );
}

function LanguageGroupHeader({ children }) {
  return (
    <thead>
    <tr>
      <th colSpan="3">{children}</th>
    </tr>
    </thead>
  );
}

function LanguageRow({language, value: [verified, assessment], setValue}) {
  const setVerified = useCallback((value) => {
    setValue([value, assessment]);
  }, [setValue, assessment]);
  const setAssessment = useCallback((value) => {
    setValue([verified, value]);
  }, [setValue, verified]);
  const onCheckboxChange = useCallback((event) => {
    setVerified(event.target.checked);
  }, [setVerified]);

  return (
    <tr>
      <td onClick={() => toggleVerified(setAssessment)}>
        <input type="checkbox" checked={verified} onChange={onCheckboxChange} />
      </td>
      <td>{language}</td>
      <td>
        <IntelligibilitySelector value={assessment} setValue={setAssessment()} />
      </td>
    </tr>
  );
}

function IntelligibilitySelector({ value, setValue }) {
  const onChange = useCallback((event) => {
    setValue(event.target.value);
  }, [setValue]);

  return (
    <select value={value} onChange={onChange}>
      <option value="-">None</option>
      <option value="~">Low</option>
      <option value="+">Good</option>
    </select>
  );
}

export default IntelligibilityEncoderPage;
