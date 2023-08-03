import React from 'react';
import {IPA} from "@site/src/components";
import {translate} from "@docusaurus/Translate";
import {transliterate} from '@interslavic/utils';

const alphabet = [
  { isv: 'A', ipa: <><IPA>ɑ</IPA> ~ <IPA>a</IPA></> },
  { isv: 'B', ipa: <IPA>b</IPA> },
  { isv: 'C', ipa: <IPA>t͡s</IPA> },
  { isv: 'Č', ipa: <><IPA>t͡ʃ</IPA> ~ <IPA>t͡ʂ</IPA></>, pl: 'cz' },
  { isv: 'D', ipa: <IPA>d</IPA> },
  { isv: 'DŽ', ipa: <><IPA>d͡ʒ</IPA> ~ <IPA>d͡ʐ</IPA></>, pl: 'dż', sr: 'џ', mk: 'џ' },
  { isv: 'E', ipa: <><IPA>ɛ</IPA> ~ <IPA>e</IPA></>, ru: 'э' },
  { isv: 'Ě', ipa: <><IPA>jɛ</IPA> ~ <IPA>je</IPA></>, pl: 'ie', sk: 'ie', sl: 'je', ru: 'е', bg: 'йе' },
  { isv: 'F', ipa: <IPA>f</IPA> },
  { isv: 'G', ipa: <><IPA>g</IPA> ~ <IPA>ɦ</IPA></>, uk: 'ґ', ru: 'ґ' },
  { isv: 'H', ipa: <IPA>x</IPA>, pl: 'ch', cz: 'ch', sl: 'ch' },
  { isv: 'I', ipa: <><IPA>i</IPA> ~ <IPA>ɪ</IPA></>, uk: 'і', ru: 'і', bg: 'и' },
  { isv: 'J', ipa: <IPA>j</IPA>, ru: 'й', uk: 'й', bg: 'й' },
  { isv: 'K', ipa: <IPA>k</IPA> },
  { isv: 'L', ipa: <><IPA>l</IPA> ~ <IPA>ɫ</IPA></> },
  { isv: 'LJ', ipa: <><IPA>lʲ</IPA> ~ <IPA>ʎ</IPA></>, pl: 'l', cz: 'l', ru: 'ль', uk: 'ль', bg: 'ль' },
  { isv: 'M', ipa: <IPA>m</IPA> },
  { isv: 'N', ipa: <IPA>n</IPA> },
  { isv: 'NJ', ipa: <><IPA>nʲ</IPA> ~ <IPA>ɲ</IPA></>, pl: 'ń', cz: 'ň', ru: 'нь', uk: 'нь', bg: 'нь' },
  { isv: 'O', ipa: <><IPA>ɔ</IPA> ~ <IPA>o</IPA></> },
  { isv: 'P', ipa: <IPA>p</IPA> },
  { isv: 'R', ipa: <IPA>r</IPA> },
  { isv: 'S', ipa: <IPA>s</IPA> },
  { isv: 'Š', ipa: <><IPA>ʃ</IPA> ~ <IPA>ʂ</IPA></>, pl: 'sz' },
  { isv: 'T', ipa: <IPA>t</IPA> },
  { isv: 'U', ipa: <IPA>u</IPA> },
  { isv: 'V', ipa: <><IPA>v</IPA> ~ <IPA>ʋ</IPA></>, pl: 'w' },
  { isv: 'Y', ipa: <><IPA>i</IPA> ~ <IPA>ɨ</IPA></>, uk: 'и', ru: 'и', bg: 'и' },
  { isv: 'Z', ipa: <IPA>z</IPA> },
  { isv: 'Ž', ipa: <><IPA>ʒ</IPA> ~ <IPA>ʐ</IPA></>, pl: 'ż' },
];

export default function PronunciationOfTheAlphabet({children}) {
  const rows = React.Children.toArray(
    React.Children.only(children).props.children
  ).filter(item => item.type === 'li');

  return (
    <table>
      <thead>
        <tr>
          <th>{translate({ id: 'com.script.Latin', message: 'Latin' })}</th>
          <th>{translate({ id: 'com.script.Cyrillic', message: 'Cyrillic' })}</th>
          <th>{translate({ id: 'com.script.IPA', message: 'IPA' })}</th>
          <th>{translate({ id: 'com.markdown.Pronunciation', message: 'Pronunciation' })}</th>
        </tr>
      </thead>
      <tbody>
        {alphabet.map((letter, index) => (
          <tr key={index}>
            <td lang="art-Latn-x-interslv">{letter.isv}</td>
            <td lang="art-Cyrl-x-interslv">{transliterate(letter.isv, 'art-Cyrl-x-interslv')}</td>
            <td>{React.cloneElement(letter.ipa)}</td>
            <td>{rows[index].props.children}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
