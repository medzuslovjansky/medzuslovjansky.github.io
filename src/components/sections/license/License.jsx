import React from 'react';
import {RepublishLicense} from './RepublishLicense';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

function useFrontMatter() {
  const {frontMatter} = useDoc();
  const {license, origin, author, original_author} = frontMatter;
  return {license, origin, author: original_author || author};
}

export function License() {
  const {license, origin, author} = useFrontMatter();

  switch (license) {
    case 'republish':
      return <RepublishLicense origin={origin} author={author}/>;
    default:
      return null;
  }
}
