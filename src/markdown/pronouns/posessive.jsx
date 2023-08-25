import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

export default function Posessive() {
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
          <th>masculine
            <br />
            (animate)
          </th>
          <th> masculine
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
          <td colSpan={2}> moj </td>
          <td rowSpan={2}> moje </td>
          <td> moja </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> mojego </td>
          <td> moj </td>
          <td> moju </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> mojego </td>
          <td> mojej </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> mojemu </td>
          <td> mojej </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> mojim </td>
          <td> mojeju </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> mojem </td>
          <td> mojej </td>
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
          <th colSpan={4}> singular </th>
        </tr>
        <tr align="center">
          <th>masculine
            <br />
            (animate)
          </th>
          <th> masculine
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
          <td> moji </td>
          <td colSpan={3} rowSpan={2}> moje </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> mojih </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> mojih </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> mojim </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> mojimi </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> mojih </td>
        </tr>
      </tbody>
    </table>)
}
