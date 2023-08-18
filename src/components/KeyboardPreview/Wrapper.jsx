import React from 'react'
import { useResizeObserver } from '@site/src/hooks'
import styles from './Wrapper.module.scss'
import FullKeyboardPreview from './Full'
import CompactKeyboardPreview from './Compact'
import layout from './isv.json'
import { useKeyboard, KeyboardProvider } from './keyboard-context'

export default function Wrapper({ alphabet, accentColor }) {
  const [ref, dimensions] = useResizeObserver();
  const context = useKeyboard(layout);
  const KeyboardPreview = dimensions.width < 715
    ? CompactKeyboardPreview
    : FullKeyboardPreview;

  return (
    <div ref={ref} className={styles.container}>
      <KeyboardProvider value={context}>
        <KeyboardPreview layout={layout} />
      </KeyboardProvider>
    </div>
  )
}
