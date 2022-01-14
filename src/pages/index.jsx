import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import { translate } from "@docusaurus/Translate";
import { Banner, Features, Carousel } from "../components";

export default function HomePage() {
  return (
    <Layout
      title={translate({ id: 'pages.home.meta.title' })}
      description={translate({ id: 'pages.home.meta.description' })}
    >
      <Carousel>
        <Carousel.Slide
          className="hero"
          title={translate({ id: 'pages.home.sections[0].slides[0].title' })}
          subtitle={translate({ id: 'pages.home.sections[0].slides[0].subtitle' })}
          cta={
            <Link className="button button--lg button--primary" to="https://www.youtube.com/watch?v=8BpixH088xg">
              &#9655; {translate({ id: 'pages.home.sections[0].slides[0].cta' })}
            </Link>
          }
        />
        <Carousel.Slide
          className="cisla2022"
          title={translate({ id: 'pages.home.sections[0].slides[1].title' })}
          subtitle={translate({ id: 'pages.home.sections[0].slides[1].subtitle' })}
          cta={
            <Link className="button button--lg button--primary" to="/events/cisla-2022">
              {translate({ id: 'pages.home.sections[0].slides[1].cta' })}
            </Link>
          }
        />
      </Carousel>
      <Features>
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
        <Features.CTA>
          <Link className="button button--lg button--primary" to="/resources">
            {translate({ id: 'pages.home.sections[1].actions.primary' })}
          </Link>
          <Link className="" to="/resources">
            {translate({ id: 'pages.home.sections[1].actions.secondary' })}
          </Link>
        </Features.CTA>
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
    </Layout>
  );
}
