import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';
import {translate} from "@docusaurus/Translate";

export default function Masculine() {
  const animate = translate({ id: 'com.grammar.animate', message: 'Animate (grammar)' });
  const inanimate = translate({ id: 'com.grammar.inanimate', message: 'Inanimate (grammar)' });
  const soft = translate({ id: 'com.grammar.soft', message: 'Soft (grammar)' });
  const hard = translate({ id: 'com.grammar.hard', message: 'Hard (grammar)' });

  return (
    <Tabs>
      <TabItem value="brat" label={`${animate} (${hard})`}>
        <Declinator lemma="brat" gender="masculine" animate />
      </TabItem>
      <TabItem value="muž" label={`${animate} (${soft})`}>
        <Declinator lemma="muž" gender="masculine" animate />
      </TabItem>
      <TabItem value="dom" label={`${inanimate} (${hard})`}>
        <Declinator lemma="dom" gender="masculine" />
      </TabItem>
      <TabItem value="kraj" label={`${inanimate} (${soft})`}>
        <Declinator lemma="kraj" gender="masculine" />
      </TabItem>
    </Tabs>
  );
}
