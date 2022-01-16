import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export default function Card({ className, image, title, description }) {
  return (
    <div className={clsx(className, styles.root)}>
      <div className={"text--center"}>
        <img src={image} alt="" className={clsx(styles.image)} />
      </div>
      <div className={"padding-horiz--md"}>
        <h2 className={clsx(styles.title)}>{title}</h2>
        <p className={clsx(styles.description)}>{description}</p>
      </div>
    </div>
  );
}

Card.displayName = 'Features.Card';
