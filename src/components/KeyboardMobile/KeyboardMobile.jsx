import React from 'react'
import clsx from 'clsx'
import styles from "./KeyboardMobile.module.scss"

const lathinAlphabetData = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
  ['', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', ''],
  ['', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', ''],
  ['', '', '', '', '', '', '', '', ''],
];
const cyrillicAlphabetData = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', ''],
  ['', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї', 'ґ'],
  ['', 'ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є', ''],
  ['', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', ''],
  ['', '', '', '', '', '', '', '', ''],
];

export default function KeyboardMobile({ alphabet, accentColor }) {
  let alphabetData = cyrillicAlphabetData;
  if (alphabet === 'lathin') {
    alphabetData = lathinAlphabetData;
  }

  return (
    <>
      <div className={clsx(styles.keyboard, styles[accentColor])}>
        {alphabetData.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.row}>
            {row.map((letter, columnIndex) => (
              <span key={columnIndex} className={letter !== '' ? styles.key : clsx(styles.key, styles.inactive)}>
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

