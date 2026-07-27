import React from 'react';
import Footer from '@theme-original/BlogPostItem/Footer';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import DisqusComments from './DisqusComments';

export default function FooterWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <>
      <Footer {...props} />
      {isBlogPostPage && <DisqusComments />}
    </>
  );
}
