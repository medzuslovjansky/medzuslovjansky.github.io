import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import styles from './HomepageHero.module.css';
import MovieIcon from "../../../static/img/icons/movie.svg";

export default function HomepageHero() {
  return (
    <section className={clsx('hero', styles.section)}>
      <img className={clsx(styles.image)}
           src={require('../../../static/img/home/banner_hero.png').default}
           alt="" />
      <div className={styles.text}>
        <h1 className={clsx('hero__heading', styles.heading)}>
          <Translate id="pages.home.hero.title">
            The language understood by&nbsp;all Slavic&nbsp;peoples
          </Translate>
        </h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          <Translate id="pages.home.hero.subtitle">
            Learn Interslavic to find more Slavic-speaking friends and colleagues worldwide.
          </Translate>
        </p>
        <Link href="https://www.youtube.com/watch?v=8BpixH088xg" className={clsx('button', 'button--primary', 'button--lg', styles.button)}>
          <MovieIcon/>
          <Translate id="pages.home.hero.cta">
            How it works
          </Translate>
        </Link>
      </div>
    </section>
  )
};
