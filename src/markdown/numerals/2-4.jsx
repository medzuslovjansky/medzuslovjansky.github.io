import { Abbr } from "@site/src/components";

export default function TwoFour() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th rowSpan={2}></th>
          <th colSpan={2}> 2 </th>
          <th rowSpan={2}> 3 </th>
          <th rowSpan={2}> 4 </th>
        </tr>
        <tr>
          <th> masculine </th>
          <th> feminine </th>
        </tr>
        <tr align="center">
          <th><Abbr>nom.</Abbr></th>
          <td rowSpan={2}> dva </td>
          <td rowSpan={2}> dvě </td>
          <td rowSpan={2}> tri </td>
          <td rowSpan={2}> četyri </td>
        </tr>
        <tr align="center">
          <th><Abbr>acc.</Abbr></th>
        </tr>
        <tr align="center">
          <th><Abbr>gen.</Abbr></th>
          <td colSpan={2}> dvoh </td>
          <td> trěh </td>
          <td> četyrěh </td>
        </tr>
        <tr align="center">
          <th><Abbr>dat.</Abbr></th>
          <td colSpan={2}> dvom </td>
          <td> trěm </td>
          <td> četyrěm </td>
        </tr>
        <tr align="center">
          <th><Abbr>ins.</Abbr></th>
          <td colSpan={2}> dvoma </td>
          <td> trěmi </td>
          <td> četyrěmi </td>
        </tr>
        <tr align="center">
          <th><Abbr>loc.</Abbr></th>
          <td colSpan={2}> dvoh </td>
          <td> trěh </td>
          <td> četyrěh </td>
        </tr>
      </tbody>
    </table>
  );
}
