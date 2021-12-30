import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import {translate} from '@docusaurus/Translate';
import MovieIcon from '../../static/img/icon_movie.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{display: 'none'}}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={translate({ id: "pages.home.title", description: "<head> title of page: Home" })}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col', styles.imageColumn)}>
                <img src={require('../../static/img/hero_image.png').default} className={styles.heroImage} />
              </div>
              <div className={clsx('col', styles.heroActionColumn)}>
                <h1 className={styles.heroHeading}>Język, kaky råzumějųt vsi slovjani</h1>
                <p className={styles.heroText}>Nauči sę medžuslovjanskogo jezyka dlja kommunikacije i raboty so slovjanami v cělom světu.</p>
                <Link href="https://www.youtube.com/watch?v=8BpixH088xg" className={clsx('button', 'button--primary', styles.ctaButton)}>
                  <MovieIcon/> Demonstracija
                </Link>
              </div>
            </div>
          </div>
        </section>
        <HomepageFeatures />
        <section className={styles.heroSection}>
          <div className="container">
            <div className="row">
              <div className={clsx('col')}>
                <h2>Resursy dlja učenja i koristanja medžuslovjanskogo</h2>
                <p>
                  Naše družstvo jest aktivno v socialnyh mrěžah, i tam vy možete dostati odgovory na svoje pytanja i
                  naživo praktikovati medžuslovjansky jezyk. Vyše togo, my rabotajemo vsakodenno na programnyh produktah
                  dlja ulěpšenja vašego opyta s medžuslovjanskym: interaktivny web-slovnik, korektor ortografije,
                  varianty tipkovnic (klaviatur) dlja različnyh operacijnyh sistemov, i mnoge druge.
                </p>
                <Link href="/resources" className={clsx('button', 'button--primary', styles.ctaButton)}>
                  Dostati resursy
                </Link>
              </div>
              <div className={clsx('col')}>
                <img src={require('../../static/img/banner_resources.png').default} className={styles.heroImage} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
