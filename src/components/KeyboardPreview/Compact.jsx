import React, { useCallback } from 'react'
import clsx from 'clsx'
import styles from "./Compact.module.scss"
import { useKey } from './keyboard-context.js';

const SERVICE_KEYS = new Set(['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'CapsLock', 'Enter', "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete", "Backspace", "Tab"]);

const keys = [
  ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete"],
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"], ,
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'],
];

export default function Compact({ className }) {
  return (
    <div>
      <figure className={styles.figure}>
        <figcaption>Default</figcaption>
        <CompactKeyboard className={className} />
      </figure>
      <figure className={styles.figure}>
        <figcaption>Shift</figcaption>
        <CompactKeyboard className={className} modifier={1} />
      </figure>
      <figure className={styles.figure}>
        <figcaption>Alt</figcaption>
        <CompactKeyboard className={className} modifier={6} />
      </figure>
      <figure className={styles.figure}>
        <figcaption>Alt + Shift</figcaption>
        <CompactKeyboard className={className} modifier={7} />
      </figure>
    </div>
  );
}

function CompactKeyboard({ className, layout, modifier }) {
  return (
    <div className={clsx(styles.keyboard, className)}>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((code, columnIndex) => (
            <CompactKey key={columnIndex} code={code} layout={layout} modifier={modifier} />
          ))}
        </div>
      ))}
    </div>
  );
}

function CompactKey({ code, modifier: modifierOverride }) {
  const context = useKey().keyboardState;
  const { layout, state, modifier: modifierDynamic, pressed, onKeyDown, onKeyUp } = context;
  const modifier = modifierOverride ?? modifierDynamic;
  const content = layout.states[state][code]?.[modifier] ?? '\u00a0';

  /* const onMouseDown = useCallback(() => onKeyDown(code), [code, onKeyDown]);
  const onMouseUp = useCallback(() => onKeyUp(code), [code, onKeyUp]); */

  return (
    <span className={clsx(styles.key, { [styles.inactive]: SERVICE_KEYS.has(code), [styles.pressed]: pressed.has(code) })} /* onMouseDown={onMouseDown} onMouseUp={onMouseUp} */>
      {content}
    </span>
  );
}
