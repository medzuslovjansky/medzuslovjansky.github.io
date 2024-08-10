import React from 'react';
import {extractListItems} from "@site/src/utils";

const alphabet = [
  'A',
  'B',
  'C',
  'Č',
  'D',
  'DŽ',
  'E',
  'Ě',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'LJ',
  'M',
  'N',
  'NJ',
  'O',
  'P',
  'R',
  'RJ',
  'S',
  'Š',
  'T',
  'U',
  'V',
  'Y',
  'Z',
  'Ž',
];

export default function SimplePhonology({children}) {
  const rows = extractListItems(children);

  return (
    <p className="text-3-col">
      {alphabet.map((letter, index) => {
        const row = rows[index];
        return (<p><b>{letter}</b> – {row.props.children}</p>);
      })}
    </p>
  );
}

