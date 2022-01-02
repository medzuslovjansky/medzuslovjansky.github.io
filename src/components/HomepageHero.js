import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageHero.module.css';
import MovieIcon from "../../static/img/icon_movie.svg";

export default function HomepageHero() {
  return (
    <section className={clsx('hero', 'row', styles.section)}>
      <img className={clsx('col', 'col--8', styles.image)}
           src={require('../../static/img/hero_image.png').default}
           alt="" />
      <div className={clsx('col', 'col--4', styles.container)}>
        <h1 className={clsx('hero__heading', styles.heading)}>
          The language understood by all Slavic peoples
        </h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          Learn Interslavic to find more Slavic friends and colleagues worldwide.
        </p>
        <Link href="https://www.youtube.com/watch?v=8BpixH088xg" className={clsx('button', 'button--primary', 'button--lg', styles.button)}>
          <MovieIcon/> How it works
        </Link>
      </div>
    </section>
  )
};
