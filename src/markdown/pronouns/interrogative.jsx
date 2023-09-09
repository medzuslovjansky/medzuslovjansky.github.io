import { Abbr } from "@site/src/components";

export default function Interrogative() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th> </th>
          <th> who? </th>
          <th> what? </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><Abbr>nom.</Abbr></th>
          <td> kto </td>
          <td rowSpan={2}> čto </td>
        </tr>
        <tr>
          <th><Abbr>acc.</Abbr></th>
          <td rowSpan={2}> kogo </td>
        </tr>
        <tr>
          <th><Abbr>gen.</Abbr></th>
          <td> čego </td>
        </tr>
        <tr>
          <th><Abbr>dat.</Abbr></th>
          <td> komu </td>
          <td> čemu </td>
        </tr>
        <tr>
          <th><Abbr>ins.</Abbr></th>
          <td> kym </td>
          <td> čim </td>
        </tr>
        <tr>
          <th><Abbr>loc.</Abbr></th>
          <td> kom </td>
          <td> čem </td>
        </tr>
      </tbody>
    </table>
  )
}

