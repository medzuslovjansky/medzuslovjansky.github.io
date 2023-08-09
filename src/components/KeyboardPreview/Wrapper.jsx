import React, { useEffect, useState } from 'react'
import { useResizeObserver } from '@site/src/hooks'
import styles from './Wrapper.module.scss'
import FullKeyboardPreview from './Full'
import CompactKeyboardPreview from './Compact'
import CompactJSON from './CompactJSON'
import layout from './isv.json'

export default function Wrapper({ alphabet, accentColor }) {
  const [ref, dimensions] = useResizeObserver();
  const KeyboardPreview = dimensions.width < 715
    ? CompactKeyboardPreview
    : FullKeyboardPreview;

  return (
    <div ref={ref} className={styles.container}>
      <KeyboardPreview {...layout} />
      <CompactJSON {...layout} />
    </div>
  )
}
