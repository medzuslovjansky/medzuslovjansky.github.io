import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Declinator from './declinator';

export default function Masculine() {
  return (
    <Tabs>
      <TabItem value="brat" label="animate (hard)">
        <Declinator lemma="brat" gender="masculine" animate />
      </TabItem>
      <TabItem value="muž" label="animate (soft)">
        <Declinator lemma="muž" gender="masculine" animate />
      </TabItem>
      <TabItem value="dom" label="inanimate (hard)">
        <Declinator lemma="dom" gender="masculine" />
      </TabItem>
      <TabItem value="kraj" label="inanimate (soft)">
        <Declinator lemma="kraj" gender="masculine" />
      </TabItem>
    </Tabs>
  );
}
