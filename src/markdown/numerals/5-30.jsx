import { Abbr } from "@site/src/components";

export default function FiveThirty() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th> </th>
          <th> 5 </th>
          <th> 12 </th>
          <th> 30 </th>
        </tr>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td rowSpan={2}> pet </td>
          <td rowSpan={2}> dvanadset </td>
          <td rowSpan={2}> trideset </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td> peti </td>
          <td> dvanadseti </td>
          <td> trideseti </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td> peti </td>
          <td> dvanadseti </td>
          <td> trideseti </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td> petju </td>
          <td> dvanadsetju </td>
          <td> tridesetju </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td> peti </td>
          <td> dvanadseti </td>
          <td> trideseti </td>
        </tr>
      </tbody>
    </table>
  )
}
