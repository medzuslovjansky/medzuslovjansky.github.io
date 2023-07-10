import React, { useMemo } from 'react';
import { transliterate } from '@interslavic/utils';

const IPA = ({ children }) => {
  return (
    <span lang="art-fonipa" className="notranslate" translate="no">
      {children}
    </span>
  );
};

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
    ["Ę", <><IPA>ʲæ</IPA></>]
    ];

  function checkTransliteration() {
    const result = {};

    for (let i = 0; i < LETTERS.length; i++) {
      const firstElement = LETTERS[i][0];
      const transliteration = transliterate(firstElement, script);

      result[firstElement] = {
        name: transliteration,
        rows: LETTERS[i]
      };
    }
    console.log(result);
    return result;
  }

  const filteredObject = useMemo(() => checkTransliteration(), [script]);

  let previousRow = null;
  let isPreviousRowSpanned = false;
  let consecutiveMatches = 0;

  return (
    <table>
      <thead>
        <tr>
          <th>Latin</th>
          <th>Etymological</th>
          <th>Pronunciation</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(filteredObject).map((key, index) => {
          const { name, rows } = filteredObject[key];
          let rowSpan = 1;

          if (name[0] === previousRow) {
            if (isPreviousRowSpanned) {
              rowSpan = 1;
            } else {
              rowSpan = 2;
              isPreviousRowSpanned = true;
            }
          } else {
            isPreviousRowSpanned = false;
          }

          previousRow = name[0];

          if (rowSpan === 1) {
            if (
              consecutiveMatches === 2 &&
              name[0] === filteredObject[Object.keys(filteredObject)[index - 1]].name[0]
            ) {
              rowSpan = 3;
              consecutiveMatches = 0;
            } else if (
              name[0] === filteredObject[Object.keys(filteredObject)[index + 1]]?.name[0] &&
              name[0] === filteredObject[Object.keys(filteredObject)[index + 2]]?.name[0]
            ) {
              rowSpan = 2;
              consecutiveMatches = 2;
            } else {
              consecutiveMatches = 0;
            }
          }

          return (
                    <tr key={key}>
                    {rowSpan === 1 && <td>{name[0]}</td>}
                    {rowSpan === 2 && <td rowSpan={2}>{name[0]}</td>}
                    {rowSpan === 3 && <td rowSpan={3}>{name[0]}</td>}
                    <td>{rows[0]}</td>
                    <td>{rows[1]}</td>
                </tr>
        );
                })}
            </tbody>
        </table>
    );
};

export default AlphabetOverview;
