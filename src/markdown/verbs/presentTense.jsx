import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function PresentTense() {
  return (
    <Tabs groupId="number">
      <TabItem value="first" label="First conjugation">
        <FirstConjugation />
      </TabItem>
      <TabItem value="second" label="Second conjugation">
        <SecondConjugation />
      </TabItem>
    </Tabs>)
}

function FirstConjugation() {
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
            <b>dělaj- / děl-</b>
          </td>
          <td>
            <b>nes-</b>
          </td>
        </tr>
        <tr>
          <th> ja </th>
          <td> dělaju / dělam </td>
          <td> nesu / nesem </td>
        </tr>
        <tr>
          <th> ty </th>
          <td> dělaješ / dělaš </td>
          <td> neseš </td>
        </tr>
        <tr>
          <th> on/ona/ono </th>
          <td> dělaje / děla </td>
          <td> nese </td>
        </tr>
        <tr>
          <th> my </th>
          <td> dělajemo / dělamo </td>
          <td> nesemo </td>
        </tr>
        <tr>
          <th> vy </th>
          <td> dělajete / dělate </td>
          <td> nesete </td>
        </tr>
        <tr>
          <th> oni/one </th>
          <td> dělajut </td>
          <td> nesut </td>
        </tr>
      </tbody>
    </table>
  )
}

function SecondConjugation() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th>
            <em>infinitive</em>
          </th>
          <td> hvaliti </td>
          <td> viděti </td>
        </tr>
        <tr>
          <th>
            <em>present-tense stem</em>
          </th>
          <td>
            <b>hval-i-</b>
          </td>
          <td>
            <b>vid-i-</b>
          </td>
        </tr>
        <tr>
          <th> ja </th>
          <td> hvalju / hvalim </td>
          <td> vidžu / vidim </td>
        </tr>
        <tr>
          <th> ty </th>
          <td> hvališ </td>
          <td> vidiš </td>
        </tr>
        <tr>
          <th> on/ona/ono </th>
          <td> hvali </td>
          <td> vidi </td>
        </tr>
        <tr>
          <th> my </th>
          <td> hvalimo </td>
          <td> vidimo </td>
        </tr>
        <tr>
          <th> vy </th>
          <td> hvalite </td>
          <td> vidite </td>
        </tr>
        <tr>
          <th> oni/one </th>
          <td> hvalet </td>
          <td> videt </td>
        </tr>
      </tbody>
    </table>)
}