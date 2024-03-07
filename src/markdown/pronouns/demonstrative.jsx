import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

import { Cell } from "./_td";

export default function Demonstrative() {
  return (
    <Tabs>
      <TabItem value="singular" label="Singular number">
        <Singular />
      </TabItem>
      <TabItem value="plural" label="Plural number">
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
            masculine
            <br/>
            (animate)
          </th>
          <th>
            masculine
            <br/>
            (inanimate)
          </th>
          <th> neuter</th>
          <th> feminine</th>
        </tr>
      </thead>
      <tbody>
      <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <Cell colSpan={2}> toj </Cell>
          <Cell rowSpan={2}> to </Cell>
          <Cell> ta </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell> togo </Cell>
          <Cell> toj </Cell>
          <Cell> tu </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={3}> togo </Cell>
          <Cell> toj </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={3}> tomu </Cell>
          <Cell> toj </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={3}> tym </Cell>
          <Cell> toju </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={3}> tom </Cell>
          <Cell> toj </Cell>
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
            masculine
            <br/>
            (animate)
          </th>
          <th>
            masculine
            <br/>
            (inanimate)
          </th>
          <th> neuter</th>
          <th> feminine</th>
        </tr>
      </thead>
      <tbody>
      <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <Cell> ti </Cell>
          <Cell colSpan={3} rowSpan={2}> te </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <Cell className="noRight"> tyh </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <Cell colSpan={4}> tyh </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <Cell colSpan={4}> tym </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <Cell colSpan={4}> tymi </Cell>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <Cell colSpan={4}> tyh </Cell>
        </tr>
      </tbody>
    </table>)
}
