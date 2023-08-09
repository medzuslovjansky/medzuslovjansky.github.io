import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';

export default function Neuter() {
  return (
    <Tabs>
      <TabItem value="slovo" label="hard">
        <Declinator lemma="slovo" gender="neuter" />
      </TabItem>
      <TabItem value="morje" label="soft">
        <Declinator lemma="morje" gender="neuter" />
      </TabItem>
      <TabItem value="ime" label="(ę)">
        <Declinator lemma="ime" gender="neuter" />
      </TabItem>
    </Tabs>
  );
}
