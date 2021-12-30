import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Pomoč v biznesu i turizmu',
    image: require('../../static/img/feature_business_and_tourism.png').default,
    description: (
      <>
        Učeńje medžuslovjanskogo skoro povyšaje efektivnost improvizacije pri živoj kommunikacije sò
        slovjansko-govoręćimi ljudjami. A teksty, napisane v međuslovjanskom języku, potrěbujut menje
        města i råbotnogo časa, než tvorenje desęti i vyše adaptacij na vse narodne slovjanske jezyki.
      </>
    ),
  },
  {
    title: 'Nevtraĺny jezyk',
    image: require('../../static/img/feature_neutrality.png').default,
    description: (
      <>
        Međuslovjansky ne jest zavisny od někakogo jednogo naroda, jezyka ili političnogo směra.
        Nikto ne imaje nečestnoj prědnosti, i hvala tomu jezyk imaje medžunarodnų obćinų, svobodnų
        od političnyh i etničnyh problemov.
      </>
    ),
  },
  {
    title: 'Vseslovjansko naslědstvo',
    image: require('../../static/img/feature_slavic_heritage.png').default,
    description: (
      <>
        Od početka XVII st. i dodnes, na teritorijah modernyh slovjanskyh držav imajemo mnogo prob
        tvorjenja naturalističnogo jezyka dlja prědavanje znanja, nauky i aktivaciju mežduslovjanskogo
        dialoga.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="padding-horiz--md">
        <h3 className="text--center">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
