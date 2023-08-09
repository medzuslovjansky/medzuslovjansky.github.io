import clsx from 'clsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './endings.module.scss';

export default function Endings() {
  return (
    <Tabs groupId="number">
      <TabItem value="singular" label="Singular number">
        <Singular/>
      </TabItem>
      <TabItem value="plural" label="Plural number">
        <Plural/>
      </TabItem>
    </Tabs>
  );
}

function Singular() {
  return (
    <table className={clsx('table_sticky', styles.table)}>
      <Header />
      <tbody className={styles.tbody}>
      <tr align="center">
        {" "}
        <th> Nom </th>
        <td colSpan={2}><code>-Ø</code></td>
        <td rowSpan={2}><code>-o</code> <code>(-e)</code></td>
        <td><code>-a</code></td>
        <td rowSpan={2}><code>-Ø</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Acc </th>
        <td><code>-a</code></td>
        <td><code>-Ø</code></td>
        <td><code>-u</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Gen </th>
        <td colSpan={3}><code>-a</code></td>
        <td><code>-y</code> <code>(-e)</code></td>
        <td><code>-i</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Dat </th>
        <td colSpan={3}><code>-u</code></td>
        <td><code>-ě</code> <code>(-i)</code></td>
        <td><code>-i</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Ins </th>
        <td colSpan={3}><code>-om</code> <code>(-em)</code></td>
        <td><code>-oju</code> <code>(-eju)</code></td>
        <td><code>-ju</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Loc </th>
        <td colSpan={3}><code>-u</code></td>
        <td><code>-ě</code> <code>(-i)</code></td>
        <td><code>-i</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Voc </th>
        <td colSpan={2}><code>-e</code> <code>(-u)</code></td>
        <td><code>-o</code> <code>(-e)</code></td>
        <td><code>-o</code></td>
        <td><code>-i</code></td>
      </tr>
      </tbody>
    </table>

  );
}

function Plural() {
  return (
    <table className={clsx('table_sticky')}>
      <Header />
      <tbody>
      <tr align="center">
        {" "}
        <th> Nom </th>
        <td><code>-i</code></td>
        <td rowSpan={2}><code>-y</code> <code>(-e)</code></td>
        <td rowSpan={2}><code>-a</code></td>
        <td rowSpan={2}><code>-y</code> <code>(-e)</code></td>
        <td rowSpan={2}><code>-i</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Acc </th>
        <td><code>-ov</code> <code>(-ev)</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Gen </th>
        <td colSpan={2}><code>-ov</code> <code>(-ev)</code></td>
        <td><code>-Ø</code></td>
        <td><code>-Ø</code></td>
        <td><code>-ij</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Dat </th>
        <td colSpan={5}><code>-am</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Ins </th>
        <td colSpan={5}><code>-ami</code></td>
      </tr>
      <tr align="center">
        {" "}
        <th> Loc </th>
        <td colSpan={5}><code>-ah</code></td>
      </tr>
      </tbody>
    </table>
  );
}

function Header() {
  return (
    <thead>
    <tr valign="top">
      <th rowSpan={2} className={clsx('sticky', styles.invisible)} />
      <th colSpan={3}>1st declension</th>
      <th>2nd</th>
      <th>3rd</th>
    </tr>
    <tr>
      <th className={styles.noLeft}>masculine animate</th>
      <th>masculine inanimate</th>
      <th>neuter</th>
      <th colSpan={2}>feminine</th>
    </tr>
    </thead>
  );
}
