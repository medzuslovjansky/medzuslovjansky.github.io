import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {DiscussionEmbed} from 'disqus-react';

const stripCyrl = (slug, locale) => {
  if (!slug) return slug;

  if (locale && slug.startsWith(`/${locale}/`)) {
    slug = slug.slice(locale.length + 1);
  }

  return slug.replace(/-cyrl\b/, '');
};

const adaptLocale = (locale) => {
  switch (locale) {
    case 'bs':
    case 'hr':
      return 'sr-Latn';
    case 'sr-Cyrl':
      return 'sr';
    default:
      return locale;
  }
};

export default function FooterWrapper(props) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { metadata, isBlogPostPage } = useBlogPost();

  return (
    <>
      <Footer {...props} />
      {isBlogPostPage && (
        <DiscussionEmbed
          shortname="interslavic-fun"
          config={{
            url: siteConfig.url + stripCyrl(metadata.permalink, i18n.currentLocale),
            identifier: stripCyrl(metadata.slug),
            title: metadata.title,
            language: adaptLocale(i18n.currentLocale),
          }}
        />
      )}
    </>
  );
}
