import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';

export default function Neuter() {
  return (
    <Tabs>
      <TabItem value="kamenj" label="m. (‑en‑)">
        <Declinator lemma="kamenj" gender="masculine" />
      </TabItem>
      <TabItem value="ime" label="n. (‑men‑)">
        <Declinator lemma="imę" gender="neuter" />
      </TabItem>
      <TabItem value="tele" label="n. (‑et‑)">
        <Declinator lemma="tele" gender="neuter" />
      </TabItem>
      <TabItem value="nebo" label="n. (‑es‑)">
        <Declinator athematic lemma="nebo" gender="neuter" />
      </TabItem>
      <TabItem value="crkov" label="f. (‑v‑)">
        <Declinator lemma="crkov" gender="feminine" />
      </TabItem>
      <TabItem value="mati" label="f. (‑r‑)">
        <Declinator lemma="mati" gender="feminine" />
      </TabItem>
    </Tabs>
  );
}
