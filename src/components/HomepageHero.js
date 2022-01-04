import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageHero.module.css';
import MovieIcon from "../../static/img/icons/movie.svg";

export default function HomepageHero() {
  return (
    <section className={clsx('hero', styles.section)}>
      <img className={clsx(styles.image)}
           src={require('../../static/img/home/banner_hero.png').default}
           alt="" />
      <div className={styles.text}>
        <h1 className={clsx('hero__heading', styles.heading)}>
          The language understood by&nbsp;all Slavic&nbsp;peoples
        </h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          Learn Interslavic to find more Slavic-speaking friends and colleagues worldwide.
        </p>
        <Link href="https://www.youtube.com/watch?v=8BpixH088xg" className={clsx('button', 'button--primary', 'button--lg', styles.button)}>
          <MovieIcon/> How it works
        </Link>
      </div>
    </section>
  )
};
