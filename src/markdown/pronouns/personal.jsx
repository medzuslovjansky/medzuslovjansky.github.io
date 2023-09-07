import React from 'react'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Personal() {
  return (
    <Tabs>
      <TabItem value="singular" label="Singular number">
        <Singular />
      </TabItem>
      <TabItem value="plural" label="Plural number">
        <Plural />
      </TabItem>
      <TabItem value="reflexive" label="Reflexive">
        <Reflexive />
      </TabItem>
    </Tabs>)
}

function Singular() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th rowSpan={3}>
          </th>
          <th colSpan={5}> Singular </th>
        </tr>
        <tr>
          <th rowSpan={2}>
            1st person
          </th>
          <th rowSpan={2}>
            2nd person
          </th>
          <th colSpan={3}> 3rd person </th>
        </tr>
        <tr>
          <th > masc. </th>
          <th> neut. </th>
          <th> fem. </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> Nom </th>
          <td> ja </td>
          <td> ty </td>
          <td> on </td>
          <td> ono </td>
          <td> ona </td>
        </tr>
        <tr>
          <th> Acc </th>
          <td> mene (me) </td>
          <td> tebe (te) </td>
          <td colSpan={2}> jego (go) </td>
          <td> ju </td>
        </tr>
        <tr>
          <th> Gen </th>
          <td> mene </td>
          <td> tebe </td>
          <td colSpan={2}> jego </td>
          <td> jej </td>
        </tr>
        <tr>
          <th> Dat </th>
          <td> mně (mi) </td>
          <td> tobě (ti) </td>
          <td colSpan={2}> jemu (mu) </td>
          <td> jej </td>
        </tr>
        <tr>
          <th> Ins </th>
          <td> mnoju </td>
          <td> toboju </td>
          <td colSpan={2}> jim </td>
          <td> jeju </td>
        </tr>
        <tr>
          <th> Loc </th>
          <td> mně </td>
          <td> tobě </td>
          <td colSpan={2}> jim </td>
          <td> jej </td>
        </tr>
      </tbody>
    </table>
  )
}

function Plural() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th rowSpan={3}>
          </th>
          <th colSpan={4}> Plural </th>
        </tr>
        <tr>
          <th rowSpan={2}>
            1st person
          </th>
          <th rowSpan={2}>
            2nd person
          </th>
          <th colSpan={2}> 3rd person </th>
        </tr>
        <tr>
          <th> masc.anim. </th>
          <th> other</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> Nom </th>
          <td> my </td>
          <td> vy </td>
          <td> oni </td>
          <td> one </td>
        </tr>
        <tr>
          <th> Acc </th>
          <td rowSpan={2}> nas </td>
          <td rowSpan={2}> vas </td>
          <td rowSpan={2}> jih </td>
          <td> je </td>
        </tr>
        <tr>
          <th> Gen </th>
          <td> jih </td>
        </tr>
        <tr>
          <th> Dat </th>
          <td> nam </td>
          <td> vam </td>
          <td colSpan={2}> jim </td>
        </tr>
        <tr>
          <th> Ins </th>
          <td> nami </td>
          <td> vami </td>
          <td colSpan={2}> jimi </td>
        </tr>
        <tr>
          <th> Loc </th>
          <td> nas </td>
          <td> vas </td>
          <td colSpan={2}> jih </td>
        </tr>
      </tbody>
    </table>
  )
}

function Reflexive() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th></th>
          <th> Reflexive </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> Nom </th>
          <td> — </td>
        </tr>
        <tr>
          <th> Acc </th>
          <td> sebe (se) </td>
        </tr>
        <tr>
          <th> Gen </th>
          <td> sebe </td>
        </tr>
        <tr>
          <th> Dat </th>
          <td> sobě (si) </td>
        </tr>
        <tr>
          <th> Ins </th>
          <td> soboju </td>
        </tr>
        <tr>
          <th> Loc </th>
          <td> sobě </td>
        </tr>
      </tbody>
    </table>
  )
}
