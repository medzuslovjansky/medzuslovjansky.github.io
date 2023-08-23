import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import dictionary from '@site/src/remark/abbr-i18n';

export function Abbr({ children, ...props }) {
  const { i18n } = useDocusaurusContext();
  const lang = i18n.currentLocale;
  const key = children;
  const translation = dictionary[key];
  const [short, long] = translation ? translation[lang] : [key, props.title];

  return <abbr {...props} title={long}>{short}</abbr>;
}
