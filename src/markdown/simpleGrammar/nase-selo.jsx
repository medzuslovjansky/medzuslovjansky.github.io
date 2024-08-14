import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TextISV from './nase-selo-isv.md';

export default function NaseSelo({ children }) {
  const {i18n} = useDocusaurusContext();

  return (
    <Tabs>
      <TabItem value="isv" label="Interslavic">
        <div lang="isv-Latn">
          <TextISV />
        </div>
      </TabItem>
      <TabItem value={i18n.currentLocale} label={i18n.localeConfigs[i18n.currentLocale].label}>
        <div lang={i18n.currentLocale}>
          {children}
        </div>
      </TabItem>
    </Tabs>
  );
}
