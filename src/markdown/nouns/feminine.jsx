import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';

export default function Neuter() {
  return (
    <Tabs>
      <TabItem value="žena" label="II decl. (hard)">
        <Declinator lemma="žena" gender="feminine" />
      </TabItem>
      <TabItem value="zemja" label="II decl. (soft)">
        <Declinator lemma="zemja" gender="feminine" />
      </TabItem>
      <TabItem value="kost" label="III decl.">
        <Declinator lemma="kost" gender="feminine" />
      </TabItem>
    </Tabs>
  );
}
