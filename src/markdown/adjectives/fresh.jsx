import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

export default function Fresh() {
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
          <td colSpan={2}> <code>svěži</code> </td>
          <td rowSpan={2}> <code>svěže</code> </td>
          <td> <code>svěža</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>svěžego</code> </td>
          <td> <code>svěži</code> </td>
          <td> <code>svěžu</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> <code>svěžego</code> </td>
          <td> <code>svěžej</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> <code>svěžemu</code> </td>
          <td> <code>svěžej</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> <code>svěžim</code> </td>
          <td> <code>svěžeju</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> <code>svěžem</code> </td>
          <td> <code>svěžej</code> </td>
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
          <td> <code>svěži</code></td>
          <td colSpan={3} rowSpan={2}>
            <code>svěže</code>
          </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>svěžih</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> <code>svěžih</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> <code>svěžim</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> <code>svěžimi</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> <code>svěžih</code> </td>
        </tr>
      </tbody>
    </table>
  )
}