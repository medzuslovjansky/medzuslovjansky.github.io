import React from 'react'
import clsx from 'clsx'
import styles from "./KeyboardMobile.module.scss"

export default function KeyboardMobile() {
  return (
    <>
      <div className={styles.keyboard}>
        <div className={styles.row}>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
          <span className={clsx(styles.key, styles.fn, styles.key)}></span>
        </div>
        <div className={styles.row}>
          <span className={styles.key}>`</span>
          <span className={styles.key}>1</span>
          <span className={styles.key}>2</span>
          <span className={styles.key}>3</span>
          <span className={styles.key}>4</span>
          <span className={styles.key}>5</span>
          <span className={styles.key}>6</span>
          <span className={styles.key}>7</span>
          <span className={styles.key}>8</span>
          <span className={styles.key}>9</span>
          <span className={styles.key}>0</span>
          <span className={styles.key}>-</span>
          <span className={styles.key}>=</span>
          <span className={clsx(styles.key, styles.key)}></span>
        </div>
        <div className={styles.row}>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={styles.key}>č</span>
          <span className={styles.key}>š</span>
          <span className={styles.key}>e</span>
          <span className={styles.key}>r</span>
          <span className={styles.key}>t</span>
          <span className={styles.key}>y</span>
          <span className={styles.key}>u</span>
          <span className={styles.key}>i</span>
          <span className={styles.key}>o</span>
          <span className={styles.key}>p</span>
          <span className={styles.key}>[</span>
          <span className={styles.key}>]</span>
          <span className={styles.key}>\</span>
        </div>
        <div className={styles.row}>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={styles.key}>a</span>
          <span className={styles.key}>s</span>
          <span className={styles.key}>d</span>
          <span className={styles.key}>f</span>
          <span className={styles.key}>g</span>
          <span className={styles.key}>h</span>
          <span className={styles.key}>j</span>
          <span className={styles.key}>k</span>
          <span className={styles.key}>l</span>
          <span className={styles.key}>;</span>
          <span className={styles.key}>'</span>
          <span className={clsx(styles.key, styles.key)}></span>
        </div>
        <div className={styles.row}>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={styles.key}>z</span>
          <span className={styles.key}>ž</span>
          <span className={styles.key}>c</span>
          <span className={styles.key}>v</span>
          <span className={styles.key}>b</span>
          <span className={styles.key}>n</span>
          <span className={styles.key}>m</span>
          <span className={styles.key}>,</span>
          <span className={styles.key}>.</span>
          <span className={styles.key}>/</span>
          <span className={clsx(styles.key, styles.key)}></span>
        </div>
        <div className={styles.row}>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.key, styles.key)}></span>
          <span className={clsx(styles.inactive, styles.key, styles.arrows)}>
          </span>
          <span className={clsx(styles.key, styles.key)}></span>
        </div>
      </div>
    </>
  )
}
