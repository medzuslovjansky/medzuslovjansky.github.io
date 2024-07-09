import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import {DiscussionEmbed} from 'disqus-react';

export default function FooterWrapper(props) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { metadata } = useBlogPost();

  return (
    <>
      <Footer {...props} />
      <DiscussionEmbed
        shortname="interslavic-fun"
        config={{
          url: siteConfig.url + metadata.permalink.replace('-cyrl', ''),
          identifier: metadata.slug,
          title: metadata.title,
          language: i18n.currentLocale,
        }}
      />
    </>
  );
}
