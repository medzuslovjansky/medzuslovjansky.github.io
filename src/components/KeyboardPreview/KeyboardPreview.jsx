import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import KeyboardSvg from './KeyboardSvg';
import { resolveLayout } from './layouts';
import styles from './KeyboardPreview.module.scss';

const LAYERS = [
  { value: 0, id: 'com.keyboard.layer.default', fallback: 'Default' },
  { value: 1, id: 'com.keyboard.layer.shift', fallback: 'Shift' },
  { value: 6, id: 'com.keyboard.layer.alt', fallback: 'AltGr' },
  { value: 7, id: 'com.keyboard.layer.altShift', fallback: 'AltGr + Shift' },
];

function computeLayer({ shift, alt }) {
  if (alt && shift) return 7;
  if (alt) return 6;
  if (shift) return 1;
  return 0;
}

function UnknownLayout({ layoutId }) {
  const message = translate(
    {
      id: 'com.keyboard.unknownLayout',
      message: 'Unknown keyboard layout: {layoutId}',
    },
    { layoutId: layoutId ?? '(none)' },
  );
  return <div className={styles.error}>{message}</div>;
}

function CompactKeyboardPreview({ resolved, forcedShift = false, forcedAlt = false }) {
  const [liveShift, setLiveShift] = useState(false);
  const [liveAlt, setLiveAlt] = useState(false);
  const [pressed, setPressed] = useState(() => new Set());

  useEffect(() => {
    const sync = (event) => {
      setLiveShift(event.getModifierState('Shift'));
      setLiveAlt(
        event.getModifierState('AltGraph') || event.getModifierState('Alt'),
      );
    };
    const onDown = (event) => {
      sync(event);
      setPressed((prev) => {
        const next = new Set(prev);
        next.add(event.code);
        return next;
      });
    };
    const onUp = (event) => {
      sync(event);
      setPressed((prev) => {
        if (!prev.has(event.code)) return prev;
        const next = new Set(prev);
        next.delete(event.code);
        return next;
      });
    };
    const reset = () => {
      setLiveShift(false);
      setLiveAlt(false);
      setPressed(new Set());
    };
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    window.addEventListener('blur', reset);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
      window.removeEventListener('blur', reset);
    };
  }, []);

  const shift = forcedShift || liveShift;
  const alt = forcedAlt || liveAlt;
  const activeLayer = computeLayer({ shift, alt });

  const displayedPressed = useMemo(() => {
    const next = new Set(pressed);
    if (forcedShift) {
      next.add('ShiftLeft');
      next.add('ShiftRight');
    }
    if (forcedAlt) {
      next.add('AltLeft');
      next.add('AltRight');
    }
    return next;
  }, [pressed, forcedShift, forcedAlt]);

  return (
    <div
      className={clsx(styles.region, styles.compactRegion)}
      aria-hidden="true"
    >
      <KeyboardSvg
        layout={resolved}
        activeLayer={activeLayer}
        pressed={displayedPressed}
        singleGlyph
      />
    </div>
  );
}

function InteractiveKeyboardPreview({ resolved }) {
  const [layerChoice, setLayerChoice] = useState(0);
  const [liveLayer, setLiveLayer] = useState(null);
  const [pressed, setPressed] = useState(() => new Set());
  const [isFocused, setIsFocused] = useState(false);
  const regionRef = useRef(null);

  const activeLayer = liveLayer != null ? liveLayer : layerChoice;

  const handleKeyEvent = useCallback((event) => {
    event.preventDefault();
    setPressed((prev) => {
      const next = new Set(prev);
      if (event.type === 'keydown') next.add(event.code);
      else next.delete(event.code);
      return next;
    });
    const shift = event.getModifierState('Shift');
    const alt = event.getModifierState('AltGraph') || event.getModifierState('Alt');
    setLiveLayer(computeLayer({ shift, alt }));
  }, []);

  const handleFocus = useCallback(() => setIsFocused(true), []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setPressed(new Set());
    setLiveLayer(null);
  }, []);

  useEffect(() => {
    if (!isFocused) return undefined;
    const node = regionRef.current;
    if (!node) return undefined;
    node.addEventListener('keydown', handleKeyEvent);
    node.addEventListener('keyup', handleKeyEvent);
    return () => {
      node.removeEventListener('keydown', handleKeyEvent);
      node.removeEventListener('keyup', handleKeyEvent);
    };
  }, [isFocused, handleKeyEvent]);

  const hint = translate({
    id: 'com.keyboard.tryItHint',
    message: 'Click to focus, then press keys to highlight them.',
  });

  const regionLabel = translate({
    id: 'com.keyboard.region.label',
    message: 'Interactive keyboard preview',
  });

  return (
    <div className={styles.container}>
      <div
        role="radiogroup"
        aria-label={translate({
          id: 'com.keyboard.layerGroup.label',
          message: 'Keyboard modifier layer',
        })}
        className={styles.layerGroup}
      >
        {LAYERS.map(({ value, id, fallback }) => {
          const label = translate({ id, message: fallback });
          const selected = activeLayer === value;
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={selected}
              className={clsx(styles.layerButton, { [styles.layerButtonActive]: selected })}
              onClick={() => setLayerChoice(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div
        ref={regionRef}
        tabIndex={0}
        className={clsx(styles.region, { [styles.focused]: isFocused })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={regionLabel}
      >
        <KeyboardSvg layout={resolved} activeLayer={activeLayer} pressed={pressed} />
      </div>
      <p className={styles.hint}>{hint}</p>
    </div>
  );
}

export default function KeyboardPreview({
  layout,
  layoutId,
  compact = false,
  forcedShift = false,
  forcedAlt = false,
}) {
  const resolved = layout || (layoutId ? resolveLayout(layoutId) : null);
  if (!resolved) return <UnknownLayout layoutId={layoutId} />;
  if (compact) {
    return (
      <CompactKeyboardPreview
        resolved={resolved}
        forcedShift={forcedShift}
        forcedAlt={forcedAlt}
      />
    );
  }
  return <InteractiveKeyboardPreview resolved={resolved} />;
}
