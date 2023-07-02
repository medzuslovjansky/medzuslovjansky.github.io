import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { translate } from "@docusaurus/Translate";
import { Banner, Features, Carousel } from "../components";
import MovieIcon from '../../static/img/icons/movie.svg';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <Layout
      title={translate({ id: 'pages.home.meta.title' })}
      description={translate({ id: 'pages.home.meta.description' })}
    >
      <main className={styles.main}>
        <Carousel>
          <Carousel.Slide
            image={require('../../static/img/home/banner_hero.png').default}
            title={translate({ id: 'pages.home.sections[0].slides[0].title' })}
            subtitle={translate({ id: 'pages.home.sections[0].slides[0].subtitle' })}
            cta={
              <Link to="https://www.youtube.com/watch?v=8BpixH088xg">
                <MovieIcon />
                {translate({ id: 'pages.home.sections[0].slides[0].cta' })}
              </Link>
            }
          />
          <Carousel.Slide
            title={translate({ id: 'pages.home.sections[0].slides[1].title' })}
            subtitle={translate({ id: 'pages.home.sections[0].slides[1].subtitle' })}
            cta={
              <Link to="/events/cisla-2022">
                {translate({ id: 'pages.home.sections[0].slides[1].cta' })}
              </Link>
            }
          />
        </Carousel>
        <Features
          primaryAction={
            <Link to="/learn/introduction">
              {translate({ id: 'pages.home.sections[1].actions.primary' })}
            </Link>
          }
          secondaryAction={
            <Link to="/learn/grammar">
              {translate({ id: 'pages.home.sections[1].actions.secondary' })}
            </Link>
          }
        >
          <Features.Card
            image={require('../../static/img/home/features_business_and_tourism.png').default}
            title={translate({ id: 'pages.home.sections[1].cards[0].title' })}
            description={translate({ id: 'pages.home.sections[1].cards[0].description' })}
          />
          <Features.Card
            image={require('../../static/img/home/features_neutrality.png').default}
            title={translate({ id: 'pages.home.sections[1].cards[1].title' })}
            description={translate({ id: 'pages.home.sections[1].cards[1].description' })}
          />
          <Features.Card
            image={require('../../static/img/home/features_slavic_heritage.png').default}
            title={translate({ id: 'pages.home.sections[1].cards[2].title' })}
            description={translate({ id: 'pages.home.sections[1].cards[2].description' })}
          />
        </Features>
        <Banner
          image={require('../../static/img/home/banner_resources.png').default}
          title={translate({ id: 'pages.home.sections[2].title' })}
          description={translate({ id: 'pages.home.sections[2].description' })}
          cta={
            <Link className="button button--lg button--primary" to="/resources">
              {translate({ id: 'pages.home.sections[2].cta' })}
            </Link>
          }
        />
      </main>
    </Layout>
  );
}
