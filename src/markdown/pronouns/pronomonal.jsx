import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Pronomonal() {
  return (
    <Tabs>
      <TabItem value="examples1" label="Table of correlatives">
        <Examples1 />
      </TabItem>
      {/* <TabItem value="examples2" label="Part 2">
        <Examples2 />
      </TabItem>
      <TabItem value="examples3" label="Part 3">
        <Examples3 />
      </TabItem> */}
    </Tabs>
  )
}

function Examples1() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th> </th>
          <th>
            question
            <br />
            <i>k-</i>
          </th>
          <th>
            here
            <br />
            <i>s-</i>
          </th>
          <th>
            there
            <br />
            <i>t-</i>
          </th>
          <th>
            yonder
            <br />
            <i>on-</i>
          </th>
          <th>
            some
            <br />
            <i>něk-</i>
          </th>
          <th>
            several
            <br />
            <i>poněk-</i>
          </th>
          <th colSpan={2}>
            any
            <br />
            <i>k-nebud, k-koli</i>
          </th>
          <th>
            no
            <br />
            <i>nik-</i>
          </th>
          <th>
            every
            <br />
            <i>vs-</i>
          </th>
          <th>
            else
            <br />
            <i>in-</i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> which? </th>
          <td> koj </td>
          <td rowSpan={2}>
            sej,
            <br />
            <i>tutoj</i>
          </td>
          <td rowSpan={2}>
            toj,
            <br />
            <i>tamtoj</i>
          </td>
          <td rowSpan={2}> onoj </td>
          <td> někoj </td>
          <td> poněkoj </td>
          <td> koj-nebud </td>
          <td> kojkoli </td>
          <td>nikoj, <i>nijedin</i></td>
          <td><i>vsaky</i></td>
          <td><i>iny</i></td>
        </tr>
        <tr>
          <th> who? </th>
          <td> kto </td>
          <td> někto </td>
          <td> — </td>
          <td> kto-nebud </td>
          <td> ktokoli </td>
          <td> nikto </td>
          <td> vsekto, <i>vsi</i></td>
          <td> inokto </td>
        </tr>
        <tr>
          <th> what? </th>
          <td> čto </td>
          <td> se </td>
          <td> to </td>
          <td> ono </td>
          <td> něčto </td>
          <td> poněčto </td>
          <td> čto-nebud </td>
          <td> čtokoli </td>
          <td rowSpan={2}> ničto </td>
          <td rowSpan={2}> vsečto, <i>vse</i></td>
          <td> inočto </td>
        </tr>
        <tr>
          <th> how much? </th>
          <td> koliko </td>
          <td> seliko </td>
          <td> toliko </td>
          <td> onoliko </td>
          <td> několiko </td>
          <td> — </td>
          <td> koliko-nebud </td>
          <td> kolikokoli </td>
          <td> — </td>
        </tr>
        <tr>
          <th> whose? </th>
          <td> čij </td>
          <td colSpan={3}> — </td>
          <td> něčij </td>
          <td> — </td>
          <td> čij-nebud </td>
          <td> čijkoli </td>
          <td> ničij </td>
          <td> vsečij </td>
          <td> inočij</td>
        </tr>
        <tr>
          <th> what kind of? </th>
          <td> kaky </td>
          <td> saky </td>
          <td> taky </td>
          <td> onaky </td>
          <td> někaky </td>
          <td> poněkaky </td>
          <td> kaky-nebud </td>
          <td> kakykoli </td>
          <td> nikaky </td>
          <td> vsaky </td>
          <td> inaky </td>
        </tr>
        <tr>
          <th> how? </th>
          <td> kako </td>
          <td> sako </td>
          <td> tako </td>
          <td> onako </td>
          <td> někako </td>
          <td> poněkako </td>
          <td> kako-nebud </td>
          <td> kakokoli </td>
          <td> nikako </td>
          <td> vsako </td>
          <td> inako </td>
        </tr>
        <tr>
          <th> where? </th>
          <td> kde </td>
          <td> sde, <i>tu</i></td>
          <td> tude, <i>tam</i></td>
          <td> onde </td>
          <td> někde </td>
          <td> poněkde </td>
          <td> kde-nebud </td>
          <td> kdekoli </td>
          <td> nikde </td>
          <td> vesde </td>
          <td> inde </td>
        </tr>
        <tr>
          <th> whereto? </th>
          <td> kamo </td>
          <td> samo </td>
          <td> tamo </td>
          <td> onamo </td>
          <td> někamo </td>
          <td> — </td>
          <td> kamo-nebud </td>
          <td> kamokoli </td>
          <td> nikamo </td>
          <td> vsamo </td>
          <td> inamo </td>
        </tr>
        <tr>
          <th> when? </th>
          <td> kogda </td>
          <td> segda, <i>sejčas</i></td>
          <td> togda </td>
          <td> onogda </td>
          <td> někogda </td>
          <td> poněkogda </td>
          <td> kogda-nebud </td>
          <td> kogdakoli </td>
          <td> nikogda </td>
          <td> vsegda </td>
          <td> inogda </td>
        </tr>
        <tr>
          <th> whither? </th>
          <td> kudy </td>
          <td> sudy </td>
          <td> tudy </td>
          <td> onudy </td>
          <td> někudy </td>
          <td> — </td>
          <td> kudy-nebud </td>
          <td> kudykoli </td>
          <td> nikudy </td>
          <td> vsudy </td>
          <td> inudy </td>
        </tr>
        <tr>
          <th> whence? </th>
          <td> odkudy </td>
          <td> odsudy </td>
          <td> odtudy </td>
          <td> odonudy </td>
          <td> odněkudy </td>
          <td> — </td>
          <td> odkudy-nebud </td>
          <td> odkudykoli </td>
          <td> odnikudy </td>
          <td> odvsudy </td>
          <td> odinudy </td>
        </tr>
        <tr>
          <th> why? (purpose) </th>
          <td> čemu </td>
          <td> — </td>
          <td> tomu </td>
          <td> — </td>
          <td> něčemu </td>
          <td> — </td>
          <td> čemu-nebud </td>
          <td> čemukoli </td>
          <td> ničemu </td>
          <td> — </td>
          <td> — </td>
        </tr>
        <tr>
          <th> why? (reason) </th>
          <td> začto </td>
          <td> — </td>
          <td> zato </td>
          <td> — </td>
          <td> zaněčto </td>
          <td> — </td>
          <td> začto-nebud </td>
          <td> začtokoli </td>
          <td> zaničto </td>
          <td> — </td>
          <td> — </td>
        </tr>
      </tbody>
    </table>
  )
}

function Examples2() {
  return (
    <table></table>
  )
}

function Examples3() {
  return (
    <table></table>
  )
}