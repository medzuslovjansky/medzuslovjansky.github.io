import styles from "./HomepageResources.module.css";
import clsx from "clsx";
import React from "react";
import Link from '@docusaurus/Link';

export default function HomepageResources() {
  return (
    <section className={clsx('hero', 'row')}>
      <img className={clsx('col', 'col--6')} src={require('../../static/img/banner_resources.png').default} />
      <div className={clsx('container', 'col', 'col--6')}>
        <h2 className={clsx('hero__heading')}>Resources to master and use Interslavic</h2>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          A lot of activity is happening in social networks - there you can ask questions and get answers, and
          also have a live language practice. Moreover, we constantly work on software products to keep improving your
          experience with Interslavic language: interactive dictionary app, spell-checker, keyboard layouts, etc.
        </p>
        <Link href="/resources" className={clsx('button', 'button--primary', 'button--lg')}>
          Get resources
        </Link>
      </div>
    </section>
  );
}
