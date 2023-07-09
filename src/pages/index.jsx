import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {translate} from "@docusaurus/Translate";
import {Banner, Features, Carousel} from "../components";
import MovieIcon from '../../static/img/icons/movie.svg';
import styles from './index.module.css';

export default function HomePage() {
  return (
    <Layout
      title={translate({id: 'pages.home.meta.title', message: 'Learn Interslavic'})}
      description={translate({
        id: 'pages.home.meta.description',
        message: 'Learn Interslavic language and find more Slavic-speaking friends and colleagues worldwide.'
      })}
    >
      <main className={styles.main}>
        <Carousel>
          <Carousel.Slide
            image={require('../../static/img/home/banner_hero.png').default}
            title={translate({
              id: 'pages.home.sections[0].slides[0].title',
              message: 'The language understood by all Slavic peoples'
            })}
            subtitle={translate({
              id: 'pages.home.sections[0].slides[0].subtitle',
              message: 'With Interslavic you can find more Slavic-speaking friends and colleagues worldwide.'
            })}
            cta={
              <Link to="/learn/introduction/design-criteria">
                <MovieIcon/>
                {translate({id: 'pages.home.sections[0].slides[0].cta', message: 'How it works'})}
              </Link>
            }
          />
        </Carousel>
        <Features
          primaryAction={
            <Link to="/learn/introduction">
              {translate({id: 'pages.home.sections[1].actions.primary', message: 'Discover more'})}
            </Link>
          }
          secondaryAction={
            <Link to="/learn/orthography">
              {translate({id: 'pages.home.sections[1].actions.secondary', message: 'or start the course'})}
            </Link>
          }
        >
          <Features.Card
            image={require('../../static/img/home/features_business_and_tourism.png').default}
            title={translate({id: 'pages.home.sections[1].cards[0].title', message: 'In business and tourism'})}
            description={translate({
              id: 'pages.home.sections[1].cards[0].description',
              message: 'Studying Interslavic quickly improves face-to-face communication\'s efficiency between people speaking different Slavic languages. Considering the diversity of the living Slavic languages, a single text or a speech delivered in Interslavic takes up less time and space, both to consume and produce.'
            })}
          />
          <Features.Card
            image={require('../../static/img/home/features_neutrality.png').default}
            title={translate({id: 'pages.home.sections[1].cards[1].title', message: 'Neutral language'})}
            description={translate({
              id: 'pages.home.sections[1].cards[1].description',
              message: 'Interslavic language is not affiliated with any specific culture, language, nation, or government. No native speaker has an unfair advantage. Thereby Interslavic is backed up by the international community, free from political and ethnic issues.'
            })}
          />
          <Features.Card
            image={require('../../static/img/home/features_slavic_heritage.png').default}
            title={translate({id: 'pages.home.sections[1].cards[2].title', message: 'Common Slavic heritage'})}
            description={translate({
              id: 'pages.home.sections[1].cards[2].description',
              message: 'From the early XVII century through to the present day, on the territory of modern Slavic countries, we can trace never-ceasing attempts to create a language in-between. Sharing cultural and scientific knowledge and resuming the conversation between Slavic peoples only is gaining importance nowadays in the digital age.'
            })}
          />
        </Features>
        <Banner
          image={require('../../static/img/home/banner_resources.png').default}
          title={translate({id: 'pages.home.sections[2].title', message: 'Resources to master and use Interslavic'})}
          description={translate({
            id: 'pages.home.sections[2].description',
            message: 'A lot of activity is happening in social networks - there you can ask questions and get answers, and also have a live language practice. Moreover, we constantly work on software products to keep improving your experience with Interslavic language: interactive dictionary app, spell-checker, keyboard layouts, etc.'
          })}
          cta={
            <Link className="button button--lg button--primary" to="/resources">
              {translate({id: 'pages.home.sections[2].cta', message: 'Get resources'})}
            </Link>
          }
        />
      </main>
    </Layout>
  );
}
