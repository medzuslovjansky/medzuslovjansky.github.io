import React from 'react';
import clsx from 'clsx';
import styles from './KeyboardPreview.module.scss';
import fullLayout from './fullLayout';

const LAYER_CLASS = [
  styles.textColorBase,
  styles.textColorShift,
  null,
  null,
  null,
  null,
  styles.textColorAlt,
  styles.textColorAltShift,
];

const LAYER_POSITION = [
  { dx: 0, dy: 20 },
  { dx: 0, dy: 0 },
  null,
  null,
  null,
  null,
  { dx: 20, dy: 20 },
  { dx: 20, dy: 0 },
];

function renderGlyph(value) {
  if (value == null) return null;
  if (Array.isArray(value)) {
    const combining = value[0];
    if (!combining) return null;
    return { text: `◌${combining}`, dead: true };
  }
  if (value === '') return null;
  return { text: value, dead: false };
}

function getStateMap(layout) {
  if (!layout || !layout.states) return {};
  return layout.states[''] || layout.states[Object.keys(layout.states)[0]] || {};
}

function buildAriaLabel(code, slot) {
  const glyphs = [0, 1, 6, 7]
    .map((i) => {
      const rendered = renderGlyph(slot?.[i]);
      if (!rendered) return null;
      const labelPrefix = ['', ' — Shift: ', ' — AltGr: ', ' — AltGr+Shift: '][[0, 1, 6, 7].indexOf(i)];
      return `${labelPrefix}${rendered.text}${rendered.dead ? ' (dead key)' : ''}`;
    })
    .filter(Boolean);
  if (glyphs.length === 0) return code;
  return `${code}${glyphs.join('')}`;
}

export default function KeyboardSvg({
  layout,
  activeLayer = 0,
  pressed,
  singleGlyph = false,
}) {
  const states = getStateMap(layout);
  const pressedSet = pressed || new Set();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 718 274"
      preserveAspectRatio="xMidYMid meet"
      className={clsx(styles.svgKeyboard, { [styles.svgKeyboardCompact]: singleGlyph })}
      role="img"
      aria-label="Interslavic keyboard layout"
    >
      <title>Interslavic keyboard layout</title>
      <desc>
        {singleGlyph
          ? 'Each key shows the glyph for the active layer; hold Shift or AltGr to switch.'
          : 'Each key shows up to four glyphs: base (bottom-left), Shift (top-left), AltGr (bottom-right), and AltGr+Shift (top-right).'}
      </desc>
      <rect className={styles.mainRect} x={1} y={1} width={716} height={272} rx={8} />
      <g>
        {Object.entries(fullLayout).map(([code, geometry]) => (
          <KeyboardKey
            key={code}
            code={code}
            geometry={geometry}
            slot={states[code]}
            activeLayer={activeLayer}
            isPressed={pressedSet.has(code)}
            singleGlyph={singleGlyph}
          />
        ))}
      </g>
    </svg>
  );
}

const COMPACT_LABELS = {
  Backspace: '⌫',
};

const RIGHT_ALIGNED_LABELS = new Set(['Backspace', 'Enter', 'ShiftRight']);
const CENTER_ALIGNED_LABELS = new Set(['AltRight', 'ControlRight']);

function KeyboardKey({ code, geometry, slot, activeLayer, isPressed, singleGlyph }) {
  const { x, y, width, height, glyphX = 10, glyphY = 12 } = geometry;
  const label = singleGlyph && COMPACT_LABELS[code] ? COMPACT_LABELS[code] : geometry.label;
  const tx = x + glyphX;
  const ty = y + glyphY;
  const alignRight = RIGHT_ALIGNED_LABELS.has(code);
  const alignCenter = CENTER_ALIGNED_LABELS.has(code);
  const isArrow = singleGlyph && code.startsWith('Arrow');
  const labelX = isArrow || alignCenter
    ? x + width / 2
    : alignRight
      ? x + width - (glyphX - 3)
      : tx + 7;
  const labelY = isArrow ? y + height / 2 : ty + 11;

  return (
    <g aria-label={buildAriaLabel(code, slot)}>
      <rect
        width={width}
        height={height}
        x={x}
        y={y}
        rx={3}
        className={clsx(styles.keyRect, { [styles.pressed]: isPressed })}
      />
      {label != null && (
        <text
          x={labelX}
          y={labelY}
          className={clsx(styles.keyText, styles.serviceKeyText, {
            [styles.serviceKeyRight]: alignRight,
            [styles.serviceKeyCenter]: alignCenter,
            [styles.arrowKey]: isArrow,
          })}
        >
          {label}
        </text>
      )}
      {slot && (
        singleGlyph ? (
          <Glyph
            value={slot[activeLayer]}
            x={x + width / 2}
            y={y + height / 2}
            className={LAYER_CLASS[activeLayer]}
            muted={false}
            centered
          />
        ) : (
          <>
            <Glyph
              value={slot[0]}
              x={tx}
              y={ty + 20}
              className={LAYER_CLASS[0]}
              muted={activeLayer !== 0}
            />
            <Glyph
              value={slot[1]}
              x={tx}
              y={ty}
              className={LAYER_CLASS[1]}
              muted={activeLayer !== 1}
            />
            <Glyph
              value={slot[6]}
              x={tx + 20}
              y={ty + 20}
              className={LAYER_CLASS[6]}
              muted={activeLayer !== 6}
            />
            <Glyph
              value={slot[7]}
              x={tx + 20}
              y={ty}
              className={LAYER_CLASS[7]}
              muted={activeLayer !== 7}
            />
          </>
        )
      )}
    </g>
  );
}

function Glyph({ value, x, y, className, muted, centered = false }) {
  const rendered = renderGlyph(value);
  if (!rendered) return null;
  return (
    <text
      x={x}
      y={y}
      className={clsx(styles.keyText, className, {
        [styles.muted]: muted,
        [styles.deadKey]: rendered.dead,
        [styles.centeredGlyph]: centered,
      })}
    >
      {rendered.text}
    </text>
  );
}

export { LAYER_POSITION };
