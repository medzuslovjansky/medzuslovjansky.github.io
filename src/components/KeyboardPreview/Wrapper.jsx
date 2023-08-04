import React, { useEffect, useState } from 'react'
import styles from './Wrapper.module.scss'
import FullKeyboardPreview from './Full'
import CompactKeyboardPreview from './Compact'

export default function Wrapper({ alphabet, accentColor }) {
  const [isCompact, setIsCompact] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <>
      {isCompact
        ? <CompactKeyboardPreview alphabet={alphabet} accentColor={accentColor} />
        : <FullKeyboardPreview alphabet={alphabet} accentColor={accentColor} />
      }
    </>
  )
}
