import React from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

export default function Card({ className, image, title, description }) {
  const img = typeof image === 'string' ? (
    <img src={image} alt="" className={clsx(styles.image)} />
  ) : image;
  return (
    <div className={clsx(className, styles.root)}>
      <div className={"text--center"}>
        {img}
      </div>
      <div className={"padding-horiz--md"}>
        <h2 className={clsx(styles.title)}>{title}</h2>
        <p className={clsx(styles.description)}>{description}</p>
      </div>
    </div>
  );
}

Card.displayName = 'Features.Card';
