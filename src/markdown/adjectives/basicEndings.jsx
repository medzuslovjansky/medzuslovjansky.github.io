import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

import { CodeCell as Cell } from "./_td";

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
          <Cell colSpan={2}>-y (-i)</Cell>
          <Cell rowSpan={2}>-o (-e)</Cell>
          <Cell>-a</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell>-ogo (-ego)</Cell>
          <Cell>-y (-i)</Cell>
          <Cell>-u</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={3}>-ogo (-ego)</Cell>
          <Cell>-oj (-ej)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={3}>-omu (-emu)</Cell>
          <Cell>-oj (-ej)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={3}>-ym (-im)</Cell>
          <Cell>-oju (-eju)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={3}>-om (-em)</Cell>
          <Cell>-oj (-ej)</Cell>
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
          <Cell>-i</Cell>
          <Cell colSpan={3} rowSpan={2}>-e</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell className="noRight">-yh (-ih)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={4}>-yh (-ih)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={4}>-ym (-im)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={4}>-ymi (-imi)</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={4}>-yh (-ih)</Cell>
        </tr>
      </tbody>
    </table>
  )
}
