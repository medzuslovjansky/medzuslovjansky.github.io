import React from 'react';
import Link from "@docusaurus/Link";
import Translate, {translate} from '@docusaurus/Translate';
import Admonition from '@theme/Admonition';

export function RepublishLicense({ origin, author }) {
  return (
    <Admonition type="info" title={translate({ id: 'com.admonitions.license.title', message: 'Legal information' })}>
      <Translate
        id="com.admonitions.license.republish.message"
        values={{
          author: <b>{author}</b>,
          republished: <Link to={origin}>{translate({
            id: 'com.admonitions.license.republish.link',
            message: 'republished'
          })}</Link>,
        }}
      >
        {`This article has been {republished} with the permission of its original author, {author}.`}
      </Translate>
    </Admonition>
  );
}
