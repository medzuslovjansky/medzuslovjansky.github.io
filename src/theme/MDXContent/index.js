import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDXComponents from './MDXComponents';

export default function MDXContent({children}) {
  return <MDXProvider components={MDXComponents}>{children}</MDXProvider>;
}
