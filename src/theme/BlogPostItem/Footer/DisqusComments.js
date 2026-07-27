import React, { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { DiscussionEmbed } from 'disqus-react';
import styles from './DisqusComments.module.scss';

const CONSENT_KEY = 'disqus-consent';
const CONSENT_GRANTED = 'granted';

const hasConsent = () => {
  try {
    return localStorage.getItem(CONSENT_KEY) === CONSENT_GRANTED;
  } catch {
    return false;
  }
};

const rememberConsent = () => {
  try {
    localStorage.setItem(CONSENT_KEY, CONSENT_GRANTED);
  } catch {
    // storage might be unavailable (private mode, disabled cookies) – ignore
  }
};

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

export default function DisqusComments() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { metadata } = useBlogPost();
  // never read localStorage during render – it would break SSR and hydration
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    setConsent(hasConsent());
  }, []);

  const grantConsent = useCallback(() => {
    rememberConsent();
    setConsent(true);
  }, []);

  if (!consent) {
    return (
      <aside className={clsx('margin-top--lg', styles.consent)}>
        <p className={styles.notice}>
          <Translate
            id="com.disqus.notice"
            description="Notice shown instead of the Disqus comments until the reader agrees to third-party cookies"
          >
            Comments are powered by Disqus. Loading them sets third-party cookies.
          </Translate>
        </p>
        <button
          type="button"
          className={clsx('button button--primary', styles.button)}
          onClick={grantConsent}
        >
          <Translate
            id="com.disqus.load"
            description="Label of the button which loads the Disqus comments widget"
          >
            Load comments
          </Translate>
        </button>
      </aside>
    );
  }

  return (
    <DiscussionEmbed
      shortname="interslavic-fun"
      config={{
        url: siteConfig.url + stripCyrl(metadata.permalink, i18n.currentLocale),
        identifier: stripCyrl(metadata.slug),
        title: metadata.title,
        language: adaptLocale(i18n.currentLocale),
      }}
    />
  );
}
