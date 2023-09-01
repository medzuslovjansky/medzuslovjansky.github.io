export default function NorthAndSouth() {
  return (
    <table className="table_sticky" style={{ textAlign: "center" }}>
      <tbody>
        <tr>
          <th />
          <th> y </th>
          <th> ě </th>
          <th> ę ų </th>
          <th> å </th>
          <th> ė ȯ </th>
          <th> syll. r ŕ </th>
          <th> lj/ĺ nj/ń ŕ t́ d́ ś ź </th>
          <th> ć đ</th>
          <th> šč</th>
        </tr>
        <tr>
          <th>Northern</th>
          <td> y </td>
          <td style={{ background: "#ff9" }}> e </td>
          <td style={{ background: "#ff9" }}> ja u </td>
          <td style={{ background: "#ff9" }}> o </td>
          <td> e o </td>
          <td style={{ background: "#ff9" }}> or er </td>
          <td style={{ background: "#ff9" }}> ľ ń/ň ŕ/ř ť ď ś ź </td>
          <td> č dž </td>
          <td> šč </td>
        </tr>
        <tr>
          <th>Southern</th>
          <td style={{ background: "#ff9" }}> i </td>
          <td> ě</td>
          <td> e u </td>
          <td> a </td>
          <td style={{ background: "#ff9" }}> e ă </td>
          <td> r</td>
          <td> lj nj r t d s z </td>
          <td style={{ background: "#ff9" }}> ć đ </td>
          <td style={{ background: "#ff9" }}> št </td>
        </tr>
      </tbody>
    </table>
  )
}
