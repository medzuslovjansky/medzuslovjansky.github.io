import React from 'react'
import clsx from 'clsx'
import styles from "./Full.module.scss";
import {useKey} from './keyboard-context.js';
import keysData from './fullLayout';

export default function Full() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 718 274"
      className={styles.svgKeyboard}
    >
      <rect
        className={styles.mainRect}
        x={1}
        y={1}
      />
      <g>
        {Object.entries(keysData).map(([key, props]) => (
          <FullKey key={key} code={key} {...props}/>
        ))}
      </g>
    </svg>
  );
}

function FullKey({ code, x, y, label, width, height, glyphX = 10, glyphY = 12  }) {
  const context = useKey().keyboardState;
  const { layout, state, modifier, pressed} = context;
  const isClicked = pressed.has(code);
  const base = layout.states[state][code]?.[0];
  const shift = layout.states[state][code]?.[1];
  const alt = layout.states[state][code]?.[6];
  const shiftAlt = layout.states[state][code]?.[7];
  const shouldMute = (modifier, shift, alt) => modifier > 0 && (modifier !== ((shift * 1) | (alt * 6)));
  const tx = x + glyphX;
  const ty = y + glyphY;

  return (
    <g>
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        className={clsx(styles.keyRect, { [styles.clicked]: isClicked })}
      />
      <g>
        {base && <KeyGlyph key="base" x={tx} y={ty + 20} muted={shouldMute(modifier, 0, 0)} className={styles.textColorBase}>{base}</KeyGlyph>}
        {shift && <KeyGlyph key="shift" x={tx} y={ty} muted={shouldMute(modifier, 1, 0)} className={styles.textColorShift}>{shift}</KeyGlyph>}
        {alt && <KeyGlyph key="alt" x={tx + 20} y={ty + 20} muted={shouldMute(modifier, 0, 1)} className={styles.textColorAlt}>{alt}</KeyGlyph>}
        {shiftAlt && <KeyGlyph key="shiftAlt" x={tx + 20} y={ty} muted={shouldMute(modifier, 1, 1)} className={styles.textColorAltShift}>{shiftAlt}</KeyGlyph>}
        {label && <KeyGlyph key="label" label={label} x={tx + 7} y={ty + 11} className={styles.serviceKeyText}>{label}</KeyGlyph>}
      </g>
    </g>
  );
}

function KeyGlyph({ x, y, className, muted, children }) {
  return (
    <text
      className={clsx(styles.keyText, className, {[styles.muted]: muted})}
      x={x}
      y={y}
    >
      {children}
    </text>
  );
}
