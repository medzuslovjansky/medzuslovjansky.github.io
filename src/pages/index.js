import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import { Hero, Features, Resources } from '../components/homepage';

export default function Home() {
  const title = translate({
    id: "pages.home.title",
    description: "<head> title of page: Home"
  });

  const description = translate({
    id: "pages.home.description",
    description: "<head /> meta description: Home"
  });

  return (
    <Layout title={title} description={description}>
      <main>
        <Hero />
        <Features />
        <Resources />
      </main>
    </Layout>
  );
}
