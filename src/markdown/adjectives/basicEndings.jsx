import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

import { CodeCell } from "./_td";

export default function BasicEndings() {
  return (
    <Tabs groupId="number">
      <TabItem value="sg" label={translate({ id: 'com.grammar.singular', message: 'Singular' })} default>
        <Singular />
      </TabItem>
      <TabItem value="pl" label={translate({ id: 'com.grammar.plural', message: 'Plural' })}>
        <Plural />
      </TabItem>
    </Tabs>)
}

function Singular() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr align="center">
          <th className="invisible"></th>
          <th>
            <Abbr>m.</Abbr><br/>({translate({ id: 'com.grammar.animate', message: 'Animate (grammar)' })})
          </th>
          <th>
            <Abbr>m.</Abbr><br/>({translate({ id: 'com.grammar.inanimate', message: 'Inanimate (grammar)' })})
          </th>
          <th><Abbr>n.</Abbr></th>
          <th><Abbr>f.</Abbr></th>
        </tr>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <CodeCell colSpan={2}>-y (-i)</CodeCell>
          <CodeCell rowSpan={2}>-o (-e)</CodeCell>
          <CodeCell>-a</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <CodeCell>-ogo (-ego)</CodeCell>
          <CodeCell>-y (-i)</CodeCell>
          <CodeCell>-u</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <CodeCell colSpan={3}>-ogo (-ego)</CodeCell>
          <CodeCell>-oj (-ej)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <CodeCell colSpan={3}>-omu (-emu)</CodeCell>
          <CodeCell>-oj (-ej)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <CodeCell colSpan={3}>-ym (-im)</CodeCell>
          <CodeCell>-oju (-eju)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <CodeCell colSpan={3}>-om (-em)</CodeCell>
          <CodeCell>-oj (-ej)</CodeCell>
        </tr>
      </tbody>
    </table>
  )
}

function Plural() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr align="center">
          <th className="invisible"></th>
          <th>
            <Abbr>m.</Abbr><br/>({translate({ id: 'com.grammar.animate', message: 'Animate (grammar)' })})
          </th>
          <th>
            <Abbr>m.</Abbr><br/>({translate({ id: 'com.grammar.inanimate', message: 'Inanimate (grammar)' })})
          </th>
          <th><Abbr>n.</Abbr></th>
          <th><Abbr>f.</Abbr></th>
        </tr>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <CodeCell>-i</CodeCell>
          <CodeCell colSpan={3} rowSpan={2}>-e</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <CodeCell className="noRight">-yh (-ih)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <CodeCell colSpan={4}>-yh (-ih)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <CodeCell colSpan={4}>-ym (-im)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <CodeCell colSpan={4}>-ymi (-imi)</CodeCell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <CodeCell colSpan={4}>-yh (-ih)</CodeCell>
        </tr>
      </tbody>
    </table>
  )
}
