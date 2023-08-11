import React, { useState } from 'react';
import clsx from 'clsx';
import styles from "./CompactJSON.module.scss";
import { useKeyboard } from './keyboard-context';
import layout from './isv.json';

const SHIFT = 1;
const CTRL = 2;
const ALT = 4;

export default function CompactJSON({ script = 'Cyrl' }) {
  const { keyboardState, toggleModifier } = useKeyboard();
  const [pressedKeys, setPressedKeys] = useState({});

  let currentAlphabetData = layout.states[keyboardState.state];

  const handleKeyPress = (keyIndex, e) => {
    if (keyIndex === SHIFT || keyIndex === CTRL || keyIndex === ALT) {
      toggleModifier(keyIndex);
    } else {
      setPressedKeys(prevState => ({
        ...prevState,
        [keyIndex]: true,
      }));
    }
  };

  const handleKeyRelease = (keyIndex, e) => {
    if (keyIndex === SHIFT || keyIndex === CTRL || keyIndex === ALT) {
      toggleModifier(keyIndex);
    } else {
      setPressedKeys(prevState => ({
        ...prevState,
        [keyIndex]: false,
      }));
    }
  };

  return (
    <>
      <div className={clsx(styles.keyboard, styles[script])}>
        <div
          className={clsx(styles.serviceKey, keyboardState.shift && styles.pressed)}
          onMouseDown={(e) => handleKeyPress(SHIFT, e)}
          onMouseUp={(e) => handleKeyRelease(SHIFT, e)}
        >
          shift
        </div>
        <div
          className={clsx(styles.serviceKey, keyboardState.ctrl && styles.pressed)}
          onMouseDown={(e) => handleKeyPress(CTRL, e)}
          onMouseUp={(e) => handleKeyRelease(CTRL, e)}
        >
          ctrl
        </div>
        <div
          className={clsx(styles.serviceKey, keyboardState.alt && styles.pressed)}
          onMouseDown={(e) => handleKeyPress(ALT, e)}
          onMouseUp={(e) => handleKeyRelease(ALT, e)}
        >
          alt
        </div>
        {Object.values(currentAlphabetData).map((letter, letterIndex) => (
          <div
            key={letterIndex}
            className={clsx(styles.key, pressedKeys[letterIndex] ? styles.pressed : '')}
            onMouseDown={(e) => handleKeyPress(letterIndex, e)}
            onMouseUp={(e) => handleKeyRelease(letterIndex, e)}
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  );
}
