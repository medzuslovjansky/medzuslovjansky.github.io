import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';
import HomepageHero from "../components/HomepageHero";
import HomepageResources from "../components/HomepageResources";
import styles from './index.module.css';

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  const title = translate({ id: "pages.home.title", description: "<head> title of page: Home" });
  const description = translate({ id: "pages.home.description", description: "<head /> meta description: Home" });
  return (
    <Layout title={title} description={description}>
      <main>
        <HomepageHero />
        <HomepageFeatures />
        <HomepageResources />
      </main>
    </Layout>
  );
}
