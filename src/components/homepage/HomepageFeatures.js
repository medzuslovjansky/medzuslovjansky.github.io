import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import DividerPattern from '../../../static/img/home/divider.svg';
import renderThis from '../../utils/renderThis';

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.image} alt="" src={image} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const features = [
    {
      image: require('../../../static/img/home/features_business_and_tourism.png').default,
      title: <Translate id="pages.home.features.BusinessAndTourism_title" description="Feature 1 title on home page"/>,
      description: <Translate id="pages.home.features.BusinessAndTourism_description" description="Feature 1 description on home page"/>,
    },
    {
      image: require('../../../static/img/home/features_neutrality.png').default,
      title: <Translate id="pages.home.features.Neutrality_title" description="Feature 2 title on home page"/>,
      description: <Translate id="pages.home.features.Neutrality_description" description="Feature 2 description on home page"/>,
    },
    {
      image: require('../../../static/img/home/features_slavic_heritage.png').default,
      title: <Translate id="pages.home.features.SlavicHeritage_title" description="Feature 3 title on home page"/>,
      description: <Translate id="pages.home.features.SlavicHeritage_description" description="Feature 3 description on home page"/>,
    },
  ];

  return (
    <section className={styles.section}>
      <div className={clsx('row')}>
        {features.map(renderThis, Feature)}
      </div>
      <div className={clsx('row')}>
        <div className={clsx('col', styles.actions)}>
          <Link href="/resources" className={clsx('button', 'button--primary', 'button--lg')}>
            <Translate id="pages.home.features.DiscoverAction" description="Features - Discover more button" />
          </Link>
          <Link href="/resources" className={clsx(styles.startLink)}>
            <Translate id="pages.home.features.StartCourseAction" description="Features - Start the course link" />
          </Link>
        </div>
      </div>
      <div className={styles.divider}>
        <DividerPattern key={0} />
        <DividerPattern key={1} />
        <DividerPattern key={2} />
      </div>
    </section>
  );
}
