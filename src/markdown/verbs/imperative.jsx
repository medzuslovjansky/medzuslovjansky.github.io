import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Imperative() {
  return (
    <Tabs>
      <TabItem value="first" label="First conjugation">
        <First />
      </TabItem>
      <TabItem value="second" label="Second conjugation">
        <Second />
      </TabItem>
    </Tabs>
  )
}

function First() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th>
            <em>infinitive</em>
          </th>
          <td> dělati </td>
          <td> nesti </td>
        </tr>
        <tr>
          <th>
            <em>present-tense stem</em>
          </th>
          <td>
            <b>dělaj- / děla-</b>
          </td>
          <td>
            <b>nes-</b>
          </td>
        </tr>
        <tr>
          <th> 2sg. </th>
          <td> dělaj </td>
          <td> nesi </td>
        </tr>
        <tr>
          <th> 1pl. </th>
          <td> dělajmo </td>
          <td> nesimo </td>
        </tr>
        <tr>
          <th> 2pl. </th>
          <td> dělajte </td>
          <td> nesite </td>
        </tr>
      </tbody>
    </table>
  )
}

function Second() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th>
            <em>infinitive</em>
          </th>
          <td> hvaliti </td>
        </tr>
        <tr>
          <th>
            <em>present-tense stem</em>
          </th>
          <td>
            <b>hval-i-</b>
          </td>
        </tr>
        <tr>
          <th> 2sg. </th>
          <td> hvali </td>
        </tr>
        <tr>
          <th> 1pl. </th>
          <td> hvalimo </td>
        </tr>
        <tr>
          <th> 2pl. </th>
          <td> hvalite </td>
        </tr>
      </tbody>
    </table>)
}