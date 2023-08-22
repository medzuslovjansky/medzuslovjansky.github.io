import React, { useState } from 'react'
import clsx from 'clsx'
import styles from "./Full.module.scss";
import { useKey } from './keyboard-context.js';

const SERVICE_KEYS = new Set(['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'CapsLock', 'Enter', "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Delete", "Backspace", "Tab"]);

const keys = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"], ,
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'],
];

const serviceKeys = {
  ControlLeft: { x: 9.5, y: 224.5, width: 102, height: 41, label: 'ctrl' },
  ControlRight: { x: 513.5, y: 224.5, width: 44, height: 41, label: 'ctrl' },
  AltLeft: { x: 118.5, y: 224.5, width: 92, height: 41, label: 'alt' },
  AltRight: { x: 462.5, y: 224.5, width: 44, height: 41, label: 'alt' },
  ShiftLeft: { x: 9.5, y: 174.5, width: 113, height: 41, label: 'shift' },
  ShiftRight: { x: 609.5, y: 174.5, width: 99, height: 41, label: 'shift' },
  Space: { x: 217.5, y: 224.5, width: 238, height: 41, label: '' },
  CapsLock: { x: 9.5, y: 126.5, width: 89, height: 41, label: 'caps lock' },
  Enter: { x: 633.5, y: 126.5, width: 75, height: 41, label: 'enter' },
  Backspace: { x: 633.5, y: 28.5, width: 75, height: 41, label: 'backspace' },
  Tab: { x: 9.5, y: 76.5, width: 75, height: 41, label: 'tab' },
  ArrowLeft: { x: 564.5, y: 245.5, width: 44, height: 21, label: '◄' },
  ArrowUp: { x: 613.5, y: 224.5, width: 44, height: 21, label: '▲' },
  ArrowDown: { x: 613.5, y: 245.5, width: 44, height: 21, label: '▼' },
  ArrowRight: { x: 662.5, y: 245.5, width: 44, height: 21, label: '►' }
};

const keyRow = (overrides, keys) => {
  const defaults = {
    x: 9.5,
    y: 28.5,
    width: 41,
    height: 41,

    ...overrides,
  };

  const result = {};

  for (const key of keys) {
    const code = typeof key === 'string' ? key : key.code;
    const props = typeof key === 'string' ? { ...defaults } : { ...defaults, ...key };
    result[props.code] = props;
  }

  return result;
};

const row1 = (keys) => keyRow({ x: 9.5, y: 28.5 }, keys);
const row2 = (keys) => keyRow({ x: 91.5, y: 76.5 }, keys);
const row3 = (keys) => keyRow({ x: 105.5, y: 126.5 }, keys);
const row4 = (keys) => keyRow({ x: 129.5, y: 174.5 }, keys);
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
    { code: "Tab", label: 'tab', width: 41 },
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
console.log(keysData);

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

function FullKey({ code, x, y, base, shift, alt, shiftAlt, label, width = 41, height = 41 }) {
  const context = useKey().keyboardState;
  const { layout, state, modifier, pressed, onKeyDown, onKeyUp } = context;
  const isClicked = pressed.has(code);
  const content = n => {
    return layout.states[state][code]?.[n] ?? '\u00a0';
  };

  let renderedX = x;
  let renderedY = y;
  let renderedWidth = width;
  let renderedHeight = height;
  let renderedLabel = label;

  const serviceKeyData = serviceKeys[code];
  if (SERVICE_KEYS.has(code)) {
    renderedX = serviceKeyData.x;
    renderedY = serviceKeyData.y;
    renderedWidth = serviceKeyData.width;
    renderedHeight = serviceKeyData.height;
    renderedLabel = serviceKeyData.label;
  } else {
    base = base ?? content(0);
    shift = shift ?? content(1);
    alt = alt ?? content(6);
    shiftAlt = shiftAlt ?? content(7);
  }

  const arrow = code.includes("Arrow");

  return (
    <g>
      <rect
        width={renderedWidth}
        height={renderedHeight}
        x={renderedX}
        y={renderedY}
        className={clsx(styles.keyRect, { [styles.clicked]: isClicked })}
      />
      {base && <KeySimbol key="base" x={renderedX} y={renderedY + 20} modifier={modifier}>{base}</KeySimbol>}
      {shift && <KeySimbol key="shift" x={renderedX} y={renderedY} modifier={modifier} shift={true}>{shift}</KeySimbol>}
      {alt && <KeySimbol key="alt" x={renderedX + 20} y={renderedY + 20} modifier={modifier} alt={true}>{alt}</KeySimbol>}
      {shiftAlt && <KeySimbol key="shiftAlt" x={renderedX + 20} y={renderedY} modifier={modifier} alt={true} shift={true}>{shiftAlt}</KeySimbol>}
      {renderedLabel && <KeySimbol key="label" label={renderedLabel} x={renderedX + 17} y={renderedY + 23 - (arrow ? 9 : 0)}>{renderedLabel}</KeySimbol>}
    </g>
  );
}

function keyList(startX, y, keys) {
  let x = startX;
  const keyRow = [];

  for (const code of keys) {
    keyRow.push(
      <FullKey key={code} code={code} x={x} y={y} />
    )
    if (!SERVICE_KEYS.has(code)) {
      x += 48;
    }
  }
  return keyRow;
}

export default function Full() {
  const firstRow = [
    ...keyList(9.5, 28.5, ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"]),
  ];

  const secondRow = [
    ...keyList(91.5, 76.5, ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"]),
  ];

  const thidRow = [
    ...keyList(105.5, 126.5, ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"]),
  ];

  const fouthRow = [
    ...keyList(129.5, 174.5, ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"])];

  const fifthRow = [
    ...keyList(9.5, 224.5, ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'])];

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
              {firstRow}
              {secondRow}
              {thidRow}
              {fouthRow}
              {fifthRow}
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}



/* {
  <ServiceKey key={"Backspace"} x={633.5} y={28.5} />,
    <ServiceKey key={"Tab"} x={9.5} y={76.5} />,
    <ServiceKey key={"CapsLock"} x={9.5} y={126.5} width={89} />,
    <ServiceKey key={"Enter"} x={633.5} y={126.5} />,
    <ServiceKey base={"caps lock"} x={9.5} y={126.5} width={89} />,
    <ServiceKey base={"shift"} x={9.5} y={174.5} width={113} />,
    <ServiceKey base={"shift"} x={609.5} y={174.5} width={99} />,
    <ServiceKey base={"ctrl"} x={9.5} y={224.5} width={102} />,
    <ServiceKey base={"alt"} x={118.5} y={224.5} width={92} />,
    <ServiceKey base={""} x={217.5} y={224.5} width={238} />,
    <ServiceKey base={"alt"} x={462.5} y={224.5} width={44} />,
    <ServiceKey base={"ctrl"} x={513.5} y={224.5} width={44} />,
    <ServiceKey base={'◄'} x={564.5} y={245.5} width={44} height={21} correctionPointY={14} />,
    <ServiceKey base={"►"} x={662.5} y={245.5} width={44} height={21} correctionPointY={14} />,
    <ServiceKey base={"▼"} x={613.5} y={245.5} width={44} height={21} correctionPointY={14} />,
    <ServiceKey base={"▲"} x={613.5} y={224.5} width={44} height={21} correctionPointY={14} />
} */