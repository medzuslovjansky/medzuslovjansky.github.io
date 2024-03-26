import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';
import {translate} from "@docusaurus/Translate";

export default function Neuter() {
  const soft = translate({ id: 'com.grammar.soft', message: 'Soft (grammar)' });
  const hard = translate({ id: 'com.grammar.hard', message: 'Hard (grammar)' });

  return (
    <Tabs>
      <TabItem value="slovo" label={hard}>
        <Declinator lemma="slovo" gender="neuter" />
      </TabItem>
      <TabItem value="morje" label={soft}>
        <Declinator lemma="morje" gender="neuter" />
      </TabItem>
      <TabItem value="ime" label="ę (ѧ)">
        <Declinator lemma="ime" gender="neuter" />
      </TabItem>
    </Tabs>
  );
}
