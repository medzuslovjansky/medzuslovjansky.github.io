import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { translate } from "@docusaurus/Translate";
import { Abbr } from "@site/src/components";

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
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td colSpan={2}> <code>-y</code> <code>(-i)</code></td>
          <td rowSpan={2}> <code>-o</code> <code>(-e)</code></td>
          <td> <code>-a</code></td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>-ogo</code> <code>(-ego)</code> </td>
          <td> <code>-y</code> <code>(-i)</code></td>
          <td> <code>-u</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={3}> <code>-ogo</code> <code>(-ego)</code></td>
          <td> <code>-oj</code> <code>(-ej)</code></td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={3}> <code>-omu</code> <code>(-emu)</code></td>
          <td> <code>-oj</code> <code>(-ej)</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={3}> <code>-ym</code> <code>(-im)</code></td>
          <td> <code>-oju</code> <code>(-eju)</code></td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={3}> <code>-om</code> <code>(-em)</code></td>
          <td> <code>-oj</code> <code>(-ej)</code> </td>
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
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td> <code>-i</code></td>
          <td colSpan={3} rowSpan={2}>
            <code>-e</code>
          </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
          <td> <code>-yh</code> <code>(-ih)</code></td>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={4}> <code>-yh</code> <code>(-ih)</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={4}> <code>-ym</code> <code>(-im)</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={4}> <code>-ymi</code> <code>(-imi)</code> </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={4}> <code>-yh</code> <code>(-ih)</code> </td>
        </tr>
      </tbody>
    </table>
  )
}