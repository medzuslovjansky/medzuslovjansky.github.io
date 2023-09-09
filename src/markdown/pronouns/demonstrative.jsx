import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

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
          <th rowSpan={2}></th>
          <th colSpan={4}> singular </th>
        </tr>
        <tr align="center">
          <th>
            masculine
            <br />
            (animate)
          </th>
          <th>
            masculine
            <br />
            (inanimate)
          </th>
          <th> neuter </th>
          <th> feminine </th>
        </tr>
      </thead>
      <tbody>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td colSpan={2}> toj </td>
          <td rowSpan={2}> to </td>
          <td> ta </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> togo </td>
          <td> toj </td>
          <td> tu </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> togo </td>
          <td> toj </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> tomu </td>
          <td> toj </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> tym </td>
          <td> toju </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> tom </td>
          <td> toj </td>
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
          <th rowSpan={2}></th>
          <th colSpan={4}> plural </th>
        </tr>
        <tr align="center">
          <th>
            masculine
            <br />
            (animate)
          </th>
          <th>
            masculine
            <br />
            (inanimate)
          </th>
          <th> neuter </th>
          <th> feminine </th>
        </tr>
      </thead>
      <tbody>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td> ti </td>
          <td colSpan={3} rowSpan={2}> te </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> tyh </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> tyh </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> tym </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> tymi </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> tyh </td>
        </tr>
      </tbody>
    </table>)
}