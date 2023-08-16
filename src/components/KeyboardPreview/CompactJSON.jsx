import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from "./CompactJSON.module.scss";
import { useKeyboard } from './keyboard-context';
import layout from './isv.json';

const inactiveKey = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '`'],
];

export default function CompactJSON({ script = 'Cyrl' }) {
  const { keyboardState, handleKeyDown, handleKeyUp, toggleState } = useKeyboard();
  const [pressedKeys, setPressedKeys] = useState({});

  useEffect(() => {
    const handleKeyDownEvent = (e) => {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        handleKeyDown('shift');
      } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        handleKeyDown('ctrl');
      } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
        handleKeyDown('alt');
      }
    };

    const handleKeyUpEvent = (e) => {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        handleKeyUp('shift');
      } else if (e.code === 'ControlLeft' || e.code === 'ControlRight') {
        handleKeyUp('ctrl');
      } else if (e.code === 'AltLeft' || e.code === 'AltRight') {
        handleKeyUp('alt');
      }
    };

    window.addEventListener('keydown', handleKeyDownEvent);
    window.addEventListener('keyup', handleKeyUpEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyDownEvent);
      window.removeEventListener('keyup', handleKeyUpEvent);
    };
  }, []);

  let currentAlphabetData = layout.states[keyboardState.state];

  const handleKeyPress = (keyIndex, e) => {
    setPressedKeys(prevState => ({
      ...prevState,
      [keyIndex]: true,
    }));
  };

  const handleKeyRelease = (keyIndex, e) => {
    setPressedKeys(prevState => ({
      ...prevState,
      [keyIndex]: false,
    }));
  };

  return (
    <>
      <div className={clsx(styles.keyboard, styles.row, styles[script])}>
        {inactiveKey[0].map((key, keyIndex) => (
          <span key={keyIndex} className={clsx(styles.key, styles.inactive)}>
            {key}
          </span>
        ))}
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
        <div
          className={clsx(styles.key, styles.shift, keyboardState.shift && styles.pressed)}
          onClick={() => toggleState('shift')}
        >
          shift
        </div>
        <div
          className={clsx(styles.key, styles.ctrl, keyboardState.ctrl && styles.pressed)}
          onClick={() => toggleState('ctrl')}
        >
          ctrl
        </div>
        <div
          className={clsx(styles.key, styles.alt, keyboardState.alt && styles.pressed)}
          onClick={() => toggleState('alt')}
        >
          alt
        </div>

      </div>
    </>
  );
}
