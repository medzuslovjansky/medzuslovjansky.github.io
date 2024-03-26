import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DialogueISV from './dialogue-isv.md';

export default function SloviantoDialogue({ children }) {
  const {i18n} = useDocusaurusContext();

  return (
    <section className="dialogue">
      <div lang="art-Latn-x-interslv">
        <DialogueISV />
      </div>
      <div lang={i18n.currentLocale}>
        {children}
      </div>
    </section>
  );
}
