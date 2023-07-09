import React from 'react';
import {RepublishLicense} from './RepublishLicense';
import {useDoc} from '@docusaurus/theme-common/internal';

function useFrontMatter() {
  const {frontMatter} = useDoc();
  const {license, origin, author} = frontMatter;
  return {license, origin, author};
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
