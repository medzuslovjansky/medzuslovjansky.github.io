import {translate} from "@docusaurus/Translate";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

import { Cell } from "./_td";

export default function Posessive() {
  return (
    <Tabs>
      <TabItem value="singular" label={translate({ id: 'com.grammar.singular', message: 'Singular forms (grammatical number)' })}>
        <Singular />
      </TabItem>
      <TabItem value="plural" label={translate({ id: 'com.grammar.plural', message: 'Plural forms (grammatical number)' })}>
        <Plural />
      </TabItem>
    </Tabs>
  )
}

function Singular() {
  return (
    <table className="table_sticky">
      <thead>
      <tr align="center">
        <th className="invisible"></th>
        <th>
          <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.animate', message: 'Animate (grammar)'})})
        </th>
        <th>
          <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.inanimate', message: 'Inanimate (grammar)'})})
        </th>
        <th><Abbr>n.</Abbr></th>
        <th><Abbr>f.</Abbr></th>
      </tr>
      </thead>
      <tbody>
      <tr align="center">
        <th><Abbr>nom.</Abbr></th>
        <Cell colSpan={2}> moj </Cell>
        <Cell rowSpan={2}> moje </Cell>
          <Cell> moja </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell> mojego </Cell>
          <Cell> moj </Cell>
          <Cell> moju </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={3}> mojego </Cell>
          <Cell> mojej </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={3}> mojemu </Cell>
          <Cell> mojej </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={3}> mojim </Cell>
          <Cell> mojeju </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={3}> mojem </Cell>
          <Cell> mojej </Cell>
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
          <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.animate', message: 'Animate (grammar)'})})
        </th>
        <th>
          <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.inanimate', message: 'Inanimate (grammar)'})})
        </th>
        <th><Abbr>n.</Abbr></th>
        <th><Abbr>f.</Abbr></th>
      </tr>
      </thead>
      <tbody>
      <tr align="center">
        <th><Abbr>nom.</Abbr></th>
        <Cell> moji </Cell>
        <Cell colSpan={3} rowSpan={2}> moje </Cell>
      </tr>
      <tr align="center">
        <th><Abbr>acc.</Abbr></th>
        <Cell className="noRight"> mojih </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={4}> mojih </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={4}> mojim </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={4}> mojimi </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={4}> mojih </Cell>
        </tr>
      </tbody>
    </table>)
}
