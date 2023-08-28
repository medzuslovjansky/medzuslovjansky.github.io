import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function ParticiplesAndGerund() {
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
          <th />
          <th colSpan={2}>
            <em>First conjugation</em>
          </th>
        </tr>
        <tr>
          <th>
            <em>infinitive</em>
          </th>
          <td> dělati </td>
          <td> nesti </td>
        </tr>
        <tr>
          <th>
            <em>infinitive stem</em>
          </th>
          <td>
            <b>děla-</b>
          </td>
          <td>
            <b>nes-</b>
          </td>
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
          <th> present active part. </th>
          <td> dělajuči </td>
          <td> nesuči </td>
        </tr>
        <tr>
          <th> present passive part. </th>
          <td> dělajemy / dělamy </td>
          <td> nesomy </td>
        </tr>
        <tr>
          <th> past active part. </th>
          <td> dělavši </td>
          <td> nesši </td>
        </tr>
        <tr>
          <th> past passive part. </th>
          <td> dělany </td>
          <td> neseny </td>
        </tr>
        <tr>
          <th> gerund </th>
          <td> dělanje </td>
          <td> nesenje </td>
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
          <th />
          <th>
            <em>Second conjugation</em>
          </th>
        </tr>
        <tr>
          <th>
            <em>infinitive</em>
          </th>
          <td> hvaliti </td>
        </tr>
        <tr>
          <th>
            <em>infinitive stem</em>
          </th>
          <td>
            <b>hvali-</b>
          </td>
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
          <th> present active part. </th>
          <td> hvaleči </td>
        </tr>
        <tr>
          <th> present passive part. </th>
          <td> hvalimy </td>
        </tr>
        <tr>
          <th> past active part. </th>
          <td> hvalivši </td>
        </tr>
        <tr>
          <th> past passive part. </th>
          <td> hvaljeny </td>
        </tr>
        <tr>
          <th> gerund </th>
          <td> hvaljenje </td>
        </tr>
      </tbody>
    </table>
  )
}