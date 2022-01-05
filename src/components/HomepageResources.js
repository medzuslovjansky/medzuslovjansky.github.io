import styles from "./HomepageResources.module.css";
import clsx from "clsx";
import React from "react";
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import DividerPattern1 from "../../static/img/home/divider2.svg";
import DividerPattern2 from "../../static/img/home/divider3.svg";

export default function HomepageResources() {
  return (
    <section className={clsx(styles.section)}>
      <div className={clsx('row')}>
        <div className={clsx('container', 'col', 'col--6')}>
          <h2 className={clsx('hero__heading')}>
            <Translate id="pages.home.resources.title" />
          </h2>
          <p className={clsx('hero__subtitle', styles.subtitle)}>
            <Translate id="pages.home.resources.description"/>
          </p>
          <Link href="/resources" className={clsx('button', 'button--primary', 'button--lg')}>
            <Translate id="pages.home.resources.cta"/>
          </Link>
        </div>
        <img className={clsx('col', 'col--6', styles.image)}
             src={require('../../static/img/home/banner_resources.png').default} />
      </div>
      <div className={styles.divider}>
        {[1,2,3,4,5,6,7,8,9].map(idx => (
          idx % 2 === 0
            ? <DividerPattern1 key={idx} />
            : <DividerPattern2 key={idx} />
        ))}
      </div>
    </section>
  );
}
