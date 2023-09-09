import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Byti1() {
  return (
    <Tabs>
      <TabItem value="first" label="Present, imperfect, perfect">
        <FirstPart />
      </TabItem>
      <TabItem value="second" label="Future, conditional, imperative">
        <SecondPart />
      </TabItem>
    </Tabs>
  )
}

function FirstPart() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th> </th>
          <th> present </th>
          <th> simple past (imperfect) </th>
          <th> compound past (perfect)</th>
        </tr>
        <tr>
          <th> ja </th>
          <td> jesm </td>
          <td> běh </td>
          <td> jesm byl(a) </td>
        </tr>
        <tr>
          <th> ty </th>
          <td> jesi </td>
          <td> běše </td>
          <td> jesi byl(a) </td>
        </tr>
        <tr>
          <th>
            on
            <br />
            ona
            <br />
            ono
          </th>
          <td> jest (je) </td>
          <td> běše (bě) </td>
          <td>
            byl
            <br />
            byla
            <br />
            bylo
          </td>
        </tr>
        <tr>
          <th> my </th>
          <td> jesmo </td>
          <td> běhmo </td>
          <td> byli jesmo </td>
        </tr>
        <tr>
          <th> vy </th>
          <td> jeste </td>
          <td> běste </td>
          <td> byli jeste </td>
        </tr>
        <tr>
          <th> oni/one </th>
          <td> sut </td>
          <td> běhu </td>
          <td> byli </td>
        </tr>
      </tbody>
    </table>
  )
}

function SecondPart() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th> </th>
          <th> future </th>
          <th> conditional </th>
          <th> imperative </th>
        </tr>
        <tr>
          <th> ja </th>
          <td> budu </td>
          <td> byh </td>
          <td> — </td>
        </tr>
        <tr>
          <th> ty </th>
          <td> budeš</td>
          <td> bys </td>
          <td> budi </td>
        </tr>
        <tr>
          <th>
            on
            <br />
            ona
            <br />
            ono
          </th>
          <td> bude </td>
          <td> by </td>
          <td> — </td>
        </tr>
        <tr>
          <th> my </th>
          <td> budemo </td>
          <td> byhmo </td>
          <td> budimo </td>
        </tr>
        <tr>
          <th> vy </th>
          <td> budete </td>
          <td> byste </td>
          <td> budite </td>
        </tr>
        <tr>
          <th> oni/one </th>
          <td> budut</td>
          <td> by </td>
          <td> — </td>
        </tr>
      </tbody>
    </table>
  )
}
