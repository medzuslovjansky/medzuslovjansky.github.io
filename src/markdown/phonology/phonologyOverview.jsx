import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function PhonologyOverview() {
  return (
    <Tabs>
      <TabItem value="labial" label="Labial">
        <Labian />
      </TabItem>
      <TabItem value="dental/alveolar" label="Dental/alveolar">
        <DentalAlveolar />
      </TabItem>
      <TabItem value="velar/palata" label="Velar/palatar">
        <VelarPalatar />
      </TabItem>
      <TabItem value="clusters" label="Clusters">
        <Clusters />
      </TabItem>
    </Tabs>
  )
}

function Labian() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th />
          <th colSpan={5}>labial</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Hard</th>
          <td>p</td>
          <td>b</td>
          <td>f</td>
          <td>v</td>
          <td>m</td>
        </tr>
        <tr>
          <th>Soft (’)</th>
          <td colSpan={5}>—</td>
        </tr>
        <tr>
          <th>Hard + j</th>
          <td rowSpan={2}>pj</td>
          <td rowSpan={2}>bj</td>
          <td rowSpan={2}>fj</td>
          <td rowSpan={2}>vj</td>
          <td rowSpan={2}>mj</td>
        </tr>
        <tr>
          <th>Cons. + ’ + j</th>
        </tr>
      </tbody>
    </table>
  )
}

function DentalAlveolar() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th />
          <th colSpan={8}>dental/alveolar</th>
        </tr>
        <tr>
          <th>Hard</th>
          <td>s</td>
          <td>z</td>
          <td>t</td>
          <td>d</td>
          <td>r</td>
          <td>n</td>
          <td>l</td>
          <td>c</td>
        </tr>
        <tr>
          <th>Soft (’)</th>
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
          <td rowSpan={2}>č</td>
        </tr>
        <tr>
          <th>Hard + j</th>
          <td>š</td>
          <td>ž</td>
          <td>
            č <font color="gray">(ć)</font>
          </td>
          <td>
            dž <font color="gray">(đ)</font>
          </td>
          <td>rj</td>
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
          <td>čj</td>
        </tr>
      </tbody>
    </table>
  )
}

function VelarPalatar() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th />
          <th colSpan={3}>velar</th>
          <th>palatal</th>
        </tr>
        <tr>
          <th>Hard</th>
          <td>k</td>
          <td>g</td>
          <td>h</td>
          <td>—</td>
        </tr>
        <tr>
          <th>Soft (’)</th>
          <td rowSpan={2}>č</td>
          <td rowSpan={2}>ž</td>
          <td rowSpan={2}>š</td>
          <td rowSpan={3}>j</td>
        </tr>
        <tr>
          <th>Hard + j</th>
        </tr>
        <tr>
          <th>Cons. + ’ + j</th>
          <td>čj</td>
          <td>žj</td>
          <td>šj</td>
        </tr>
      </tbody>
    </table>
  )
}

function Clusters() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th />
          <th colSpan={4}>clusters</th>
        </tr>
        <tr>
          <th>Hard</th>
          <td>st</td>
          <td>zd</td>
          <td>sk</td>
          <td>zg</td>
        </tr>
        <tr>
          <th>Soft (’)</th>
          <td>st́</td>
          <td>zd́</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <th>Hard + j</th>
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
  )
}