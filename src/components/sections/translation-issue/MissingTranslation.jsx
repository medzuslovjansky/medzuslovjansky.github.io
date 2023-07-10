import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import Translate, {translate} from '@docusaurus/Translate';

export function MissingTranslation() {
  return (
    <Admonition type="danger"
                title={translate({id: 'com.admonitions.missingTranslation.title', message: 'Missing translation'})}>
      <Translate
        id="com.admonitions.missingTranslation.message"
        values={{
          Discord: <Link to="https://discord.com/invite/n3saqm27QW">Discord</Link>,
        }}>{
        "This article has not yet been translated.\n" +
        "Providing translation in over ten languages is a challenging task and we look forward to your help.\n" +
        "Please contact us on {Discord} if you would like to help us improve the quality of our translations."
      }
      </Translate>
    </Admonition>
  );
}
