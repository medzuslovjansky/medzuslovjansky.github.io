import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';
import {translate} from "@docusaurus/Translate";

export default function Neuter() {
  const soft = translate({ id: 'com.grammar.soft', message: 'Soft (grammar)' });
  const hard = translate({ id: 'com.grammar.hard', message: 'Hard (grammar)' });
  const declension = translate({ id: 'com.grammar.declension', message: 'Declension' });

  return (
    <Tabs>
      <TabItem value="žena" label={`II ${declension} (${hard})`}>
        <Declinator lemma="žena" gender="feminine" />
      </TabItem>
      <TabItem value="zemja" label={`II ${declension} (${soft})`}>
        <Declinator lemma="zemja" gender="feminine" />
      </TabItem>
      <TabItem value="kost" label={`III ${declension}`}>
        <Declinator lemma="kost" gender="feminine" />
      </TabItem>
    </Tabs>
  );
}
