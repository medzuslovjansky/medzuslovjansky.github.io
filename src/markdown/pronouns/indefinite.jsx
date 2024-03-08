import {translate} from "@docusaurus/Translate";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

import { Cell } from "./_td";

export default function Indefinite() {
  return (
    <Tabs>
      <TabItem value="singular" label={translate({ id: 'com.grammar.singular', message: 'Singular forms (grammatical number)' })}>
        <Singular />
      </TabItem>
      <TabItem value="plural" label={translate({ id: 'com.grammar.plural', message: 'Plural forms (grammatical number)' })}>
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
          <Cell colSpan={2}> ves </Cell>
          <Cell rowSpan={2}> vse </Cell>
          <Cell> vsa </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell> vsego </Cell>
          <Cell> ves </Cell>
          <Cell> vsu </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={3}> vsego </Cell>
          <Cell> vsej </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={3}> vsemu </Cell>
          <Cell> vsej </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={3}> vsim </Cell>
          <Cell> vseju </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={3}> vsem </Cell>
          <Cell> vsej </Cell>
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
          <Cell> vsi </Cell>
          <Cell colSpan={3} rowSpan={2}> vse </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell className="noRight"> vsih </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={4}> vsih </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={4}> vsim </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={4}> vsimi </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={4}> vsih </Cell>
        </tr>
      </tbody>
    </table>)
}
