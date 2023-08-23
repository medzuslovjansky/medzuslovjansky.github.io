import React from 'react';
import {IPA} from "@site/src/components";
import {translate} from "@docusaurus/Translate";

const alphabet = [
  { isv: 'Å', ipa: <><IPA>ɑ</IPA> ~ <IPA>ɒ</IPA></> },
  { isv: 'Ć', ipa: <><IPA>t͡ʃ</IPA> ~ <IPA>t͡ɕ</IPA></> },
  { isv: 'D́', ipa: <><IPA>dʲ</IPA> ~ <IPA>ɟ</IPA></> },
  { isv: 'Ð', ipa: <><IPA>d͡ʒ</IPA> ~ <IPA>d͡ʑ</IPA></> },
  { isv: 'Ė', ipa: <><IPA>ɛ</IPA> ~ <IPA>ǝ</IPA></> },
  { isv: 'Ę', ipa: <><IPA>jæ</IPA> ~ <IPA>jɛ</IPA></> },
  { isv: 'Ĺ', ipa: <><IPA>lʲ</IPA> ~ <IPA>ʎ</IPA></> },
  { isv: 'Ń', ipa: <><IPA>nʲ</IPA> ~ <IPA>ɲ</IPA></> },
  { isv: 'Ȯ', ipa: <><IPA>ə</IPA> ~ <IPA>ʌ</IPA></> },
  { isv: 'Ŕ', ipa: <><IPA>rʲ</IPA> ~ <IPA>r̝</IPA></> },
  { isv: 'Ś', ipa: <><IPA>sʲ</IPA> ~ <IPA>ɕ</IPA></> },
  { isv: 'T́', ipa: <><IPA>tʲ</IPA> ~ <IPA>c</IPA></> },
  { isv: 'Ų', ipa: <><IPA>o</IPA> ~ <IPA>ʊ</IPA></> },
  { isv: 'Ź', ipa: <><IPA>zʲ</IPA> ~ <IPA>ʑ</IPA></> },
];

export default function EtymologicalAlphabetExtensions({children}) {
  const rows = React.Children.toArray(
    React.Children.only(children).props.children
  ).filter(item => item.type === 'li');

  return (
    <table>
      <thead>
      <tr>
        <th>{translate({ id: 'com.script.Latin', message: 'Latin' })}</th>
        <th>{translate({ id: 'com.script.IPA', message: 'IPA' })}</th>
        <th>{translate({ id: 'com.markdown.Pronunciation', message: 'Pronunciation' })}</th>
      </tr>
      </thead>
      <tbody>
      {alphabet.map((letter, index) => (
        <tr key={index}>
          <td lang="art-Latn-x-interslv">{letter.isv}</td>
          <td>{React.cloneElement(letter.ipa)}</td>
          <td>{rows[index].props.children}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
