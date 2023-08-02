import React from 'react';
import styles from './AlphabetOverview.module.scss'
import { transliterate } from '@interslavic/utils';
import {translate} from "@docusaurus/Translate";
import { IPA } from '../IPA';

const AlphabetOverview = ({ script }) => {
  const LETTERS = [
    ["A", <><IPA>ɑ</IPA> ~ <IPA>a</IPA></>],
    ["Å", <><IPA>ɒ</IPA></>],
    ["B", <><IPA>b</IPA></>],
    ["C", <><IPA>t͡s</IPA></>],
    ["Ć", <><IPA>t͡ɕ</IPA></>],
    ["Č", <><IPA>t͡ʃ</IPA> ~ <IPA>t͡ʂ</IPA></>],
    ["D", <><IPA>d</IPA></>],
    ["D́", <><IPA>dʲ</IPA> ~ <IPA>ɟ</IPA></>],
    ["Đ", <><IPA>d͡ʑ</IPA></>],
    ["DŽ", <><IPA>d͡ʒ</IPA> ~ <IPA>d͡ʐ</IPA></>],
    ["E", <><IPA>ɛ</IPA> ~ <IPA>e</IPA></>],
    ["Ė", <><IPA>ɛ</IPA> ~ <IPA>ǝ</IPA></>],
    ["Ę", <><IPA>ʲæ</IPA></>],
    ["Ě", <><IPA>ʲɛ</IPA></>],
    ["F", <><IPA>f</IPA></>],
    ["G", <><IPA>g</IPA> ~ <IPA>ɦ</IPA></>],
    ["H", <><IPA>x</IPA></>],
    ["I", <><IPA>i</IPA> ~ <IPA>ɪ</IPA></>],
    ["Ј", <><IPA>j</IPA></>],
    ["K", <><IPA>k</IPA></>],
    ["L", <><IPA>l</IPA> ~ <IPA>ɫ</IPA></>],
    ["Ĺ", <><IPA>ʎ</IPA> ~ <IPA>l</IPA></>],
    ["LJ", <><IPA>ʎ</IPA> ~ <IPA>l</IPA></>],
    ["M", <><IPA>m</IPA></>],
    ["N", <><IPA>n</IPA></>],
    ["Ń", <><IPA>n</IPA> ~ <IPA>ɲ</IPA></>],
    ["NJ", <><IPA>nʲ</IPA> ~ <IPA>ɲ</IPA></>],
    ["O", <><IPA>ɔ</IPA> ~ <IPA>o</IPA></>],
    ["Ȯ", <><IPA>ə</IPA> ~ <IPA>ʌ</IPA></>],
    ["P", <><IPA>p</IPA></>],
    ["R", <><IPA>r</IPA></>],
    ["Ŕ", <><IPA>rʲ</IPA> ~ <IPA>r̝</IPA></>],
    ["S", <><IPA>s</IPA></>],
    ["Ś", <><IPA>ɛ</IPA> ~ <IPA>ǝ</IPA></>],
    ["Š", <><IPA>ʃ</IPA> ~ <IPA>ʂ</IPA></>],
    ["T", <><IPA>t</IPA></>],
    ["T́", <><IPA>tʲ</IPA> ~ <IPA>c</IPA></>],
    ["U", <><IPA>u</IPA></>],
    ["Ų", <><IPA>o</IPA> ~ <IPA>ʊ</IPA></>],
    ["V", <><IPA>v</IPA> ~ <IPA>ʋ</IPA></>],
    ["Y", <><IPA>i</IPA> ~ <IPA>ɨ</IPA></>],
    ["Z", <><IPA>ɛ</IPA> ~ <IPA>z</IPA></>],
    ["Ź", <><IPA>zʲ</IPA> ~ <IPA>ʑ</IPA></>],
    ["Ž", <><IPA>ʒ</IPA> ~ <IPA>ʐ</IPA></>]
  ];

  function checkTransliteration() {
    const result = [];
    const rowspanMap = {};

    for (let i = 0; i < LETTERS.length; i++) {
      const firstElement = LETTERS[i][0];
      const transliteration = transliterate(firstElement, script);

      if (!rowspanMap[transliteration]) {
        rowspanMap[transliteration] = 1;
      } else {
        rowspanMap[transliteration] += 1;
      }

      result.push({
        name: transliteration,
        rows: LETTERS[i]
      });
    }

    return { result, rowspanMap };
  }

  const { result, rowspanMap } = checkTransliteration();

  function row(item, index) {
    const firstRow = index === 0;
    const preliminaryComparison = item.name === result[index - 1]?.name;
    const hideRow = !firstRow && preliminaryComparison;

    const standard = item.name;
    const etymological = item.rows[0];
    const ipa = item.rows[1];
    const Ss = `${upperFirst(standard)} ${standard.toLowerCase()}`;
    const Ee = `${upperFirst(etymological)} ${etymological.toLowerCase()}`;

    return (
      <tr key={index}>
        {hideRow ? undefined : <td rowSpan={rowspanMap[item.name]} hidden={hideRow}>{Ss}</td>}
        <td>{Ee}</td>
        <td>{ipa}</td>
      </tr>
    )
  }

  return (
    <table className={styles.table} lang="art-x-interslv">
      <thead>
        <tr>
          <th className={styles.header}>{translate({ id: 'com.script.Standard', message: 'Standard' })}</th>
          <th className={styles.header}>{translate({ id: 'com.script.Etymological', message: 'Etymological' })}</th>
          <th className={styles.header}>{translate({ id: 'com.script.Pronunciation', message: 'Pronunciation' })}</th>
        </tr>
      </thead>
      <tbody lang="art-x-interslv">
        {result.map(row)}
      </tbody>
    </table>
  );
};

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default AlphabetOverview;
