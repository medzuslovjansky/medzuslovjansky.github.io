import React, { useState } from 'react'
import clsx from 'clsx'
import styles from "./Full.module.scss";
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




function KeyText({ x, y, alt, shift, children, handleMouseDown, handleMouseUp, className }) {

  const tx = x + 10 + (alt ? 20 : 0);
  const ty = y + 12 + (shift ? 0 : 20);

  return (
    <text
      fontSize={13}
      fontWeight={600}
      dominantBaseline="middle"
      textAnchor="middle"
      className={className}
      x={tx}
      y={ty}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      {children}
    </text>
  )
}

function Key({ base, alt, shift, altShift, x, y }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    setIsClicked(true);
  }
  const handleMouseUp = () => {
    setIsClicked(false);
  }
  return (
    <g
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <rect
        className={styles.rect}
        x={x}
        y={y}
        stroke={isClicked ? "#147CFA" : "#646464"}
        strokeWidth={isClicked ? 3 : 1}
        rx={3}
      ></rect>
      <KeyText
        className={styles.textColorBase}
        x={x}
        y={y}
        fontSize={13}
        fontWeight={600}
      >{base}</KeyText>
      <KeyText
        className={styles.textColorAlt}
        x={x}
        y={y}
        alt
      >{alt}</KeyText>
      <KeyText
        className={styles.textColorShift}
        x={x}
        y={y}
        shift
      >{shift}</KeyText>
      <KeyText
        className={styles.textColorAltShift}
        x={x}
        y={y}
        alt shift
      >{altShift}</KeyText>
    </g >
  )
}

function ServiceKeyText({ x, y, children, correctionPointX = 17.297, correctionPointY = 23.918, handleMouseDown, handleMouseUp }) {
  const tx = x + correctionPointX;
  const ty = y + correctionPointY;

  return (
    <text
      className={styles.textColorService}
      fontSize={10}
      fontWeight={500}
      x={tx}
      y={ty}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      {children}
    </text>
  )
}

function ServiceKey({ base, x, y, width = 75, height = 41, correctionPointY }) {
  const [isClicked, setIsClicked] = useState(false);
  const handleMouseDown = () => {
    setIsClicked(true);
  }
  const handleMouseUp = () => {
    setIsClicked(false);
  }
  return (
    <g>
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        fill={isClicked
          ? "var(--key-fill-click-color)"
          : "var(--key-fill-color)"
        }
        stroke={isClicked ? "#147CFA" : "#646464"}
        strokeWidth={isClicked ? 3 : 1}
        rx={3}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      ></rect>
      <ServiceKeyText
        x={x}
        y={y}
        correctionPointY={correctionPointY}
        handleMouseDown={handleMouseDown}
        handleMouseUp={handleMouseUp}
      >{base}</ServiceKeyText>
    </g>
  )
}

const base = "`1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./";
const alt = "ü¹²³⁴‰¶↑↓←→—≠śęěŕťùųąȯòėřṙåšďđğḥůłĺľăžźčćňńżŀèı";
const shift = "~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?";
const altShift = ['Ü', '÷', '¹⁄₂', '¹⁄₃', '¹⁄₄', 'ﬁ', 'ˆ', '¿', '°', '〈', '°', ...'–±ŚĘĚŔŤÙŲĄȮÒĖŘṘÅŠĎĐĞḤŮŁĹĽĂŽŹČĆŇŃŻĿÈI'.split('')];

function keyList(startX, y, startNumber, endNumber) {
  let x = startX;
  const keyRow = [];

  for (let i = startNumber; i <= endNumber; i++) {
    keyRow.push(
      <Key key={x} base={base[i]} alt={alt[i]} shift={shift[i]} altShift={altShift[i]} x={x} y={y} />
    )
    x += 48;
  }
  return keyRow;
}

const firstRow = keyList(9.5, 28.5, 0, 12);
const secondRow = keyList(91.5, 76.5, 13, 25);
const thidRow = keyList(105.5, 126.5, 26, 36);
const fouthRow = keyList(129.5, 174.5, 37, 46);

export default function Full({ name, lang, script, states, layout }) {

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
              <ServiceKey base={"backspace"} x={633.5} y={28.5} />
              <ServiceKey base={"tab"} x={9.5} y={76.5} />
              {secondRow}
              <ServiceKey base={"caps lock"} x={9.5} y={126.5} width={89} />
              {thidRow}
              <ServiceKey base={"enter"} x={633.5} y={126.5} />
              <ServiceKey base={"shift"} x={9.5} y={174.5} width={113} />
              {fouthRow}
              <ServiceKey base={"shift"} x={609.5} y={174.5} width={99} />
              <ServiceKey base={"ctrl"} x={9.5} y={224.5} width={102} />
              <ServiceKey base={"alt"} x={118.5} y={224.5} width={92} />
              <ServiceKey base={""} x={217.5} y={224.5} width={238} />
              <ServiceKey base={"alt"} x={462.5} y={224.5} width={44} />
              <ServiceKey base={"ctrl"} x={513.5} y={224.5} width={44} />
              <ServiceKey base={'◄'} x={564.5} y={245.5} width={44} height={21} correctionPointY={14} />
              <ServiceKey base={"►"} x={662.5} y={245.5} width={44} height={21} correctionPointY={14} />
              <ServiceKey base={"▼"} x={613.5} y={245.5} width={44} height={21} correctionPointY={14} />
              <ServiceKey base={"▲"} x={613.5} y={224.5} width={44} height={21} correctionPointY={14} />
            </g>
          </g>
        </g>
      </svg>
      <FullKeyboard layout={layout} />
    </>
  )
}
/*==============*/

function CustomText({ x, y, children, correctionPointX = 10, correctionPointY = 12, alt = false, shift = false, className, handleMouseDown, handleMouseUp }) {
  const tx = x + correctionPointX + (alt ? 20 : 0);
  const ty = y + correctionPointY + (shift ? 0 : 20);

  return (
    <text
      className={className}
      x={tx}
      y={ty}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}>
      {children}
    </text>
  );
}

function FullKey({ code, layout, x, y, width = 75, height = 41, correctionPointY = 0, content }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  const keyTextProps = {
    x,
    y,
    fontSize: 13,
    fontWeight: 600,
  };

  return (
    <g
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        stroke={isClicked ? "#147CFA" : "#646464"}
        strokeWidth={isClicked ? 3 : 1}
        rx={3}
      />
      <CustomText {...keyTextProps} className={styles.textColorBase}>
        {content}
      </CustomText>
      {alt && <CustomText {...keyTextProps} className={styles.textColorAlt}>{content}</CustomText>}
      {shift && <CustomText {...keyTextProps} className={styles.textColorShift}>{content}</CustomText>}
      {altShift && <CustomText {...keyTextProps} className={styles.textColorAltShift}>{content}</CustomText>}
    </g>
  );
}

function FullKeyboard({ className, layout, code }) {

  const context = useKey().keyboardState;
  const { state, modifier, pressed } = context;
  const content = layout.states[state][code]?.[modifier] ?? '\u00a0';

  return (
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
            {/* <div className={clsx(styles.keyboard, className)}>
              {keys.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                  {row.map((code, columnIndex) => (
                    <FullKey key={columnIndex} code={code} layout={layout} />
                  ))}
                </div>
              ))}
            </div > */}
            <FullKey />
          </g>
        </g>
      </g>
    </svg>

  );
}

