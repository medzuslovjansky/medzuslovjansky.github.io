import React from 'react';
import {useDoc} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {AutoTranslation} from './AutoTranslation';
import {MissingTranslation} from "./MissingTranslation";

export function TranslationIssue() {
  const {i18n} = useDocusaurusContext();
  const isTranslation = i18n.currentLocale !== i18n.defaultLocale;
  if (!isTranslation) {
    return null;
  }

  const {frontMatter, metadata} = useDoc();

  if (!metadata.source.startsWith('@site/i18n/')) {
    return (<MissingTranslation />)
  }

  if (!frontMatter.verified) {
    return (<AutoTranslation editUrl={metadata.editUrl}/>)
  }

  return null;
}
