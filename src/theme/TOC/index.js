/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import TOCItems from '@theme/TOCItems';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css'; // Using a custom className
// This prevents TOC highlighting to highlight TOCInline/TOCCollapsible by mistake

const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';

function TOC({className, ...props}) {
  return (
    <nav className={clsx(styles.tableOfContents, 'thin-scrollbar', className)}>
      <header className={clsx(styles.heading)}>
        <Translate id="theme.toc.heading" description={"Heading of table of contents"}
        >
          On the page
        </Translate>
      </header>
      <TOCItems
        {...props}
        linkClassName={LINK_CLASS_NAME}
        linkActiveClassName={LINK_ACTIVE_CLASS_NAME}
      />
    </nav>
  );
}

export default TOC;
