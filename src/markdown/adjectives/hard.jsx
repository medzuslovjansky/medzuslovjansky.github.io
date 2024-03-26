import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

import { Cell } from "./_td";

export default function Hard() {
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
      <thead>
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
      </thead>
      <tbody>
      <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <Cell colSpan={2}>dobry</Cell>
          <Cell rowSpan={2}>dobro</Cell>
          <Cell>dobra</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell>dobrogo</Cell>
          <Cell>dobry</Cell>
          <Cell>dobru</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={3}>dobrogo</Cell>
          <Cell>dobroj</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={3}>dobromu</Cell>
          <Cell>dobroj</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={3}>dobrym</Cell>
          <Cell>dobroju</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={3}>dobrom</Cell>
          <Cell>dobroj</Cell>
        </tr>
      </tbody>
    </table>
  )
}

function Plural() {
  return (
    <table className="table_sticky">
      <thead>
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
      </thead>
      <tbody>
      <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <Cell>dobri</Cell>
          <Cell colSpan={3} rowSpan={2}>dobre</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell class="noRight">dobryh</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={4}>dobryh</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={4}>dobrym</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={4}>dobrymi</Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={4}>dobryh</Cell>
        </tr>
      </tbody>
    </table>
  )
}
