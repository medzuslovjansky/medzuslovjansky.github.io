import React, { useState } from 'react'
import clsx from 'clsx'
import styles from "./Full.module.scss";
import { useKey } from './keyboard-context.js';

const keyRow = (overrides, keys) => {
  const defaults = {
    x: 9.5,
    y: 28.5,
    width: 41,
    height: 41,
    ...overrides,
  };

  const result = {};
  let x = defaults.x;

  for (const key of keys) {
    const code = typeof key === 'string' ? key : key.code;
    const props = typeof key === 'string' ? { ...defaults, x: x } : { ...defaults, ...key, x: x };
    if (code === "ArrowLeft") {
      props.y += 21;
    }
    if (code === "ArrowDown" || code === "ArrowRight") {
      props.y += 21;
      props.x += -51;
    }
    result[code] = props;
    x += key.width ? key.width + 7 : defaults.width + 7;

  }

  return result;
};


const row1 = (keys) => keyRow({ x: 9.5, y: 28.5 }, keys);
const row2 = (keys) => keyRow({ x: 9.5, y: 76.5 }, keys);
const row3 = (keys) => keyRow({ x: 9.5, y: 126.5 }, keys);
const row4 = (keys) => keyRow({ x: 9.5, y: 174.5 }, keys);
const row5 = (keys) => keyRow({ x: 9.5, y: 224.5 }, keys);

const keysData = {
  ...row1([
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    { code: "Backspace", label: 'backspace', width: 75 },
  ]),

  ...row2([
    { code: "Tab", label: 'tab', width: 75 },
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BracketLeft",
    "BracketRight",
    "Backslash"
  ]),
  ...row3([
    { code: "CapsLock", label: 'caps lock', width: 89 },
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "Semicolon",
    "Quote",
    { code: "Enter", label: 'enter', width: 75 },
  ]),
  ...row4([
    { code: "ShiftLeft", label: 'shift', width: 113 },
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    { code: "ShiftRight", label: 'shift', width: 99 },
  ]),
  ...row5([
    { code: "ControlLeft", label: 'ctrl', width: 102 },
    { code: "AltLeft", label: 'alt', width: 92 },
    { code: "Space", label: '', width: 238 },
    { code: "AltRight", label: 'alt', width: 44 },
    { code: "ControlRight", label: 'ctrl', width: 44 },
    { code: "ArrowLeft", label: '◄', width: 44, height: 21 },
    { code: "ArrowUp", label: '▲', width: 44, height: 21 },
    { code: "ArrowDown", label: '▼', width: 44, height: 21 },
    { code: "ArrowRight", label: '►', width: 44, height: 21 },
  ])
};

function KeySimbol({ x, y, modifier, shift = false, alt = false, label, correctionPointX = 10, correctionPointY = 12, children }) {
  let tx = x + correctionPointX;
  let ty = y + correctionPointY;

  let display;
  if (modifier > 0) {
    display = ((shift ? 1 : 0) | (alt ? 6 : 0)) === modifier
  } else {
    display = modifier === 0;
  }

  let simbolStyle = alt
    ? shift
      ? styles.textColorAltShift
      : styles.textColorAlt
    : shift
      ? styles.textColorShift
      : styles.textColorBase;

  if (label) {
    tx = x;
    ty = y;
    simbolStyle = styles.serviceKeyText;
    display = true;
  }

  return (
    <text
      className={clsx(styles.keyText, simbolStyle, { [styles.muted]: !display })}
      x={tx}
      y={ty}
    >
      {children}
    </text>
  );
}

function FullKey({ code, x, y, base, shift, alt, shiftAlt, label, width, height = 41 }) {
  const context = useKey().keyboardState;
  const { layout, state, modifier, pressed, onKeyDown, onKeyUp } = context;
  const isClicked = pressed.has(code);
  const content = n => {
    return layout.states[state][code]?.[n] ?? '\u00a0';
  };

  base = base ?? content(0);
  shift = shift ?? content(1);
  alt = alt ?? content(6);
  shiftAlt = shiftAlt ?? content(7);


  const arrow = code.includes("Arrow");

  return (
    <g>
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        className={clsx(styles.keyRect, { [styles.clicked]: isClicked })}
      />
      {base && <KeySimbol key="base" x={x} y={y + 20} modifier={modifier}>{base}</KeySimbol>}
      {shift && <KeySimbol key="shift" x={x} y={y} modifier={modifier} shift={true}>{shift}</KeySimbol>}
      {alt && <KeySimbol key="alt" x={x + 20} y={y + 20} modifier={modifier} alt={true}>{alt}</KeySimbol>}
      {shiftAlt && <KeySimbol key="shiftAlt" x={x + 20} y={y} modifier={modifier} alt={true} shift={true}>{shiftAlt}</KeySimbol>}
      {label && <KeySimbol key="label" label={label} x={x + 17} y={y + 23 - (arrow ? 9 : 0)}>{label}</KeySimbol>}
    </g>
  );
}

export default function Full() {
  const keyRow = [];
  for (const key in keysData) {
    if (keysData.hasOwnProperty(key)) {
      const { x, y, label, width, height } = keysData[key];
      keyRow.push(
        <FullKey key={key} code={key} x={x} y={y} label={label} width={width} height={height} />
      );
    }
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 718 274"
        className={styles.svgKeyboard}
      >
        <g>
          <g>
            <rect
              width="716"
              height="272"
              x="1"
              y="1"
              rx="8"
              stroke="#777"
            ></rect>
            <g>
              {keyRow}
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}
