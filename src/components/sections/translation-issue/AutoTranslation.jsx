import React from 'react';
import Link from '@docusaurus/Link';
import Admonition from '@theme/Admonition';
import Translate, {translate} from '@docusaurus/Translate';

export function AutoTranslation({ editUrl }) {
  return (
    <Admonition type="caution"
                title={translate({id: 'com.admonitions.autotranslation.title', message: 'Automatic translation'})}>
      <Translate
        id="com.admonitions.autotranslation.message"
        values={{
          Discord: <Link to="https://discord.com/invite/n3saqm27QW">Discord</Link>,
          GitHub: <Link to={editUrl}>GitHub</Link>
        }}>{
        "This article has been automatically translated and may contain any kind of errors.\n" +
        "It is a challenging task to provide more than a dozen translation targets, and we are looking for your help with translations.\n" +
        "Please contact us on {Discord} if you want to help us improve the quality of our translations.\n" +
        "Also, you can suggest corrections directly via {GitHub}."
      }
      </Translate>
    </Admonition>
  );
}
