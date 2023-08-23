export default function PhonologyOverview() {
  return (
    <table
      style={{
        textAlign: "center",
        background: 'none',
        borderCollapse: 'collapse',
        verticalAlign: 'middle',
        emptyCells: 'hide',
        fontSize: '90%',
      }}
    >
      <tbody>
      <tr>
        <th className="leeg" />
        <th colSpan={5}>labial</th>
        <th colSpan={8}>dental/alveolar</th>
        <th colSpan={3}>velar</th>
        <th>palatal</th>
        <th colSpan={4}>clusters</th>
      </tr>
      <tr>
        <th>Hard</th>
        <td>p</td>
        <td>b</td>
        <td>f</td>
        <td>v</td>
        <td>m</td>
        <td>s</td>
        <td>z</td>
        <td>t</td>
        <td>d</td>
        <td>r</td>
        <td>n</td>
        <td>l</td>
        <td>c</td>
        <td>k</td>
        <td>g</td>
        <td>h</td>
        <td>—</td>
        <td>st</td>
        <td>zd</td>
        <td>sk</td>
        <td>zg</td>
      </tr>
      <tr>
        <th>Soft (’)</th>
        <td colSpan={5}>—</td>
        <td>
          <font color="gray">ś</font>
        </td>
        <td>
          <font color="gray">ź</font>
        </td>
        <td>
          <font color="gray">t́</font>
        </td>
        <td>
          <font color="gray">d́</font>
        </td>
        <td>
          <font color="gray">ŕ</font>
        </td>
        <td rowSpan={2}>nj</td>
        <td rowSpan={2}>lj</td>
        <td colSpan={2} rowSpan={2}>
          č
        </td>
        <td rowSpan={2}>ž</td>
        <td rowSpan={2}>š</td>
        <td rowSpan={3}>j</td>
        <td>st́</td>
        <td>zd́</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <th>Hard + j</th>
        <td rowSpan={2}>pj</td>
        <td rowSpan={2}>bj</td>
        <td rowSpan={2}>fj</td>
        <td rowSpan={2}>vj</td>
        <td rowSpan={2}>mj</td>
        <td>š</td>
        <td>ž</td>
        <td>
          č <font color="gray">(ć)</font>
        </td>
        <td>
          dž <font color="gray">(đ)</font>
        </td>
        <td>rj</td>
        <td>
          šč <font color="gray">(šć)</font>
        </td>
        <td>
          ždž <font color="gray">(žđ)</font>
        </td>
        <td>šč</td>
        <td>ždž</td>
      </tr>
      <tr>
        <th>Cons. + ’ + j</th>
        <td>
          sj <font color="gray">(śj)</font>
        </td>
        <td>
          zj <font color="gray">(źj)</font>
        </td>
        <td>
          tj <font color="gray">(t́j)</font>
        </td>
        <td>
          dj <font color="gray">(d́j)</font>
        </td>
        <td>
          rj <font color="gray">(ŕj)</font>
        </td>
        <td>
          nj <font color="gray">(ńj)</font>
        </td>
        <td>
          lj <font color="gray">(ĺj)</font>
        </td>
        <td colSpan={2}>čj</td>
        <td>žj</td>
        <td>šj</td>
        <td>
          stj <font color="gray">(st́j)</font>
        </td>
        <td>
          zdj <font color="gray">(zd́j)</font>
        </td>
        <td>ščj</td>
        <td>ždžj</td>
      </tr>
      </tbody>
    </table>
  );
}
