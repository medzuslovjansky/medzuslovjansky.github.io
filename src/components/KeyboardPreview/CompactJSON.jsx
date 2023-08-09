import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import styles from "./CompactJSON.module.scss"

const SHIFT = 1;
const CTRL = 2;
const ALT = 4;

document.addEventListener('keydown', function (e) {
  console.log('Key pressed:', e.key);
  console.log('Event code:', e.code);
});


export default function CompactJSON({ states, script = 'Cyrl' }) {
  const [currentState, setCurrentState] = useState(0);
  const [pressedKeys, setPressedKeys] = useState({});
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  let currentAlphabetData = states[currentState];

  const handleKeyDown = (keyIndex, e) => {
    setPressedKeys(prevState => ({
      ...prevState,
      [keyIndex]: true,
    }));

    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      setIsShiftPressed(true);
    }
  };

  const handleKeyUp = (keyIndex, e) => {
    setPressedKeys(prevState => ({
      ...prevState,
      [keyIndex]: false,
    }));

    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      setIsShiftPressed(false);
    }
  };

  useEffect(() => {
    if (isShiftPressed) {
      setCurrentState(currentState | SHIFT);
    } else {
      setCurrentState(currentState & ~SHIFT);
    }
  }, [isShiftPressed, currentState]);

  return (
    <>
      <div className={clsx(styles.keyboard, styles[script])}>
        <div
          className={clsx(styles.serviceKey, isShiftPressed ? styles.pressed : '')}
          onMouseDown={(e) => handleKeyDown(-1, e)}
          onMouseUp={(e) => handleKeyUp(-1, e)}
        >shift</div>
        <div className={styles.serviceKey}>ctrl</div>
        <div className={styles.serviceKey}>alt</div>
        {Object.values(currentAlphabetData).map((letter, letterIndex) => (
          <div
            key={letterIndex}
            className={clsx(styles.key, pressedKeys[letterIndex] ? styles.pressed : '')}
            onMouseDown={(e) => handleKeyDown(letterIndex, e)}
            onMouseUp={(e) => handleKeyUp(letterIndex, e)}
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  )
}
