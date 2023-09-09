import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

export default function Good() {
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
          <th rowSpan={2}>
          </th>
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
          <td colSpan={2}> <code>dobry</code> </td>
          <td rowSpan={2}> <code>dobro</code> </td>
          <td> <code>dobra</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>dobrogo</code> </td>
          <td> <code>dobry</code> </td>
          <td> <code>dobru</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> <code>dobrogo</code> </td>
          <td> <code>dobroj</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> <code>dobromu</code> </td>
          <td> <code>dobroj</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> <code>dobrym</code> </td>
          <td> <code>dobroju</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> <code>dobrom</code> </td>
          <td> <code>dobroj</code> </td>
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
          <th rowSpan={2}>
          </th>
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
          <td> <code>dobri</code></td>
          <td colSpan={3} rowSpan={2}>
            <code>dobre</code>
          </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>dobryh</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> <code>dobryh</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> <code>dobrym</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> <code>dobrymi</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> <code>dobryh</code> </td>
        </tr>
      </tbody>
    </table>
  )
}