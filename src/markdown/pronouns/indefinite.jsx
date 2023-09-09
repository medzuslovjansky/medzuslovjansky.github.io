import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

export default function Indefinite() {
  return (
    <Tabs>
      <TabItem value="singular" label="Singular number">
        <Singular />
      </TabItem>
      <TabItem value="plural" label="Plural number">
        <Plural />
      </TabItem>
    </Tabs>)
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
          <td colSpan={2}> ves </td>
          <td rowSpan={2}> vse </td>
          <td> vsa </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> vsego </td>
          <td> ves </td>
          <td> vsu </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> vsego </td>
          <td> vsej </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> vsemu </td>
          <td> vsej </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> vsim </td>
          <td> vseju </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> vsem </td>
          <td> vsej </td>
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
          <td> vsi </td>
          <td colSpan={3} rowSpan={2}> vse </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> vsih </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> vsih </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> vsim </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> vsimi </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> vsih </td>
        </tr>
      </tbody>
    </table>)
} 