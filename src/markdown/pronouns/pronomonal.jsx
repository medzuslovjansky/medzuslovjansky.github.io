import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Pronomonal() {
  return (
    <Tabs>
      <TabItem value="examples1" label="Table of correlatives">
        <Examples1 />
      </TabItem>
      <TabItem value="examples2" label="Part 2">
        <Examples2 />
      </TabItem>
      <TabItem value="examples3" label="Part 3">
        <Examples3 />
      </TabItem>
      <TabItem value="examples4" label="Part 4">
        <Examples4 />
      </TabItem>
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

        </tr>
        <tr>
          <th> who? </th>
          <td> kto </td>
        </tr>
        <tr>
          <th> what? </th>
          <td> čto </td>
          <td> se </td>
          <td> to </td>
        </tr>
        <tr>
          <th> how much? </th>
          <td> koliko </td>
          <td> seliko </td>
          <td> toliko </td>
        </tr>
        <tr>
          <th> whose? </th>
          <td> čij </td>
          <td colSpan={2}> — </td>
        </tr>
        <tr>
          <th> what kind of? </th>
          <td> kaky </td>
          <td> saky </td>
          <td> taky </td>
        </tr>
        <tr>
          <th> how? </th>
          <td> kako </td>
          <td> sako </td>
          <td> tako </td>
        </tr>
        <tr>
          <th> where? </th>
          <td> kde </td>
          <td> sde, <i>tu</i></td>
          <td> tude, <i>tam</i></td>
        </tr>
        <tr>
          <th> whereto? </th>
          <td> kamo </td>
          <td> samo </td>
          <td> tamo </td>
        </tr>
        <tr>
          <th> when? </th>
          <td> kogda </td>
          <td> segda, <i>sejčas</i></td>
          <td> togda </td>
        </tr>
        <tr>
          <th> whither? </th>
          <td> kudy </td>
          <td> sudy </td>
          <td> tudy </td>
        </tr>
        <tr>
          <th> whence? </th>
          <td> odkudy </td>
          <td> odsudy </td>
          <td> odtudy </td>
        </tr>
        <tr>
          <th> why? (purpose) </th>
          <td> čemu </td>
          <td> — </td>
          <td> tomu </td>
        </tr>
        <tr>
          <th> why? (reason) </th>
          <td> začto </td>
          <td> — </td>
          <td> zato </td>
        </tr>
      </tbody>
    </table>
  )
}

function Examples2() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th> </th>
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> which? </th>
          <td rowSpan={2}> onoj </td>
          <td> někoj </td>
          <td> poněkoj </td>
        </tr>
        <tr>
          <th> who? </th>
          <td> někto </td>
          <td> — </td>
        </tr>
        <tr>
          <th> what? </th>
          <td> ono </td>
          <td> něčto </td>
          <td> poněčto </td>
        </tr>
        <tr>
          <th> how much? </th>
          <td> onoliko </td>
          <td> několiko </td>
          <td> — </td>
        </tr>
        <tr>
          <th> whose? </th>
          <td> — </td>
          <td> něčij </td>
          <td> — </td>
        </tr>
        <tr>
          <th> what kind of? </th>
          <td> onaky </td>
          <td> někaky </td>
          <td> poněkaky </td>
        </tr>
        <tr>
          <th> how? </th>
          <td> onako </td>
          <td> někako </td>
          <td> poněkako </td>
        </tr>
        <tr>
          <th> where? </th>
          <td> onde </td>
          <td> někde </td>
          <td> poněkde </td>
        </tr>
        <tr>
          <th> whereto? </th>
          <td> onamo </td>
          <td> někamo </td>
          <td> — </td>
        </tr>
        <tr>
          <th> when? </th>
          <td> onogda </td>
          <td> někogda </td>
          <td> poněkogda </td>
        </tr>
        <tr>
          <th> whither? </th>
          <td> onudy </td>
          <td> někudy </td>
          <td> — </td>
        </tr>
        <tr>
          <th> whence? </th>
          <td> odonudy </td>
          <td> odněkudy </td>
          <td> — </td>
        </tr>
        <tr>
          <th> why? (purpose) </th>
          <td> — </td>
          <td> něčemu </td>
          <td> — </td>
        </tr>
        <tr>
          <th> why? (reason) </th>
          <td> — </td>
          <td> zaněčto </td>
          <td> — </td>
        </tr>
      </tbody>
    </table>)
}

function Examples3() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th> </th>
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <th> which? </th>
          <td> koj-nebud </td>
          <td> kojkoli </td>
          <td>nikoj, <i>nijedin</i></td>
        </tr>
        <tr>
          <th> who? </th>
          <td> kto-nebud </td>
          <td> ktokoli </td>
          <td> nikto </td>
        </tr>
        <tr>
          <th> what? </th>
          <td> čto-nebud </td>
          <td> čtokoli </td>
          <td rowSpan={2}> ničto </td>
        </tr>
        <tr>
          <th> how much? </th>
          <td> koliko-nebud </td>
          <td> kolikokoli </td>
        </tr>
        <tr>
          <th> whose? </th>
          <td> čij-nebud </td>
          <td> čijkoli </td>
          <td> ničij </td>
        </tr>
        <tr>
          <th> what kind of? </th>
          <td> kaky-nebud </td>
          <td> kakykoli </td>
          <td> nikaky </td>
        </tr>
        <tr>
          <th> how? </th>
          <td> kako-nebud </td>
          <td> kakokoli </td>
          <td> nikako </td>
        </tr>
        <tr>
          <th> where? </th>
          <td> kde-nebud </td>
          <td> kdekoli </td>
          <td> nikde </td>
        </tr>
        <tr>
          <th> whereto? </th>
          <td> kamo-nebud </td>
          <td> kamokoli </td>
          <td> nikamo </td>
        </tr>
        <tr>
          <th> when? </th>
          <td> kogda-nebud </td>
          <td> kogdakoli </td>
          <td> nikogda </td>
        </tr>
        <tr>
          <th> whither? </th>
          <td> kudy-nebud </td>
          <td> kudykoli </td>
          <td> nikudy </td>
        </tr>
        <tr>
          <th> whence? </th>
          <td> odkudy-nebud </td>
          <td> odkudykoli </td>
          <td> odnikudy </td>
        </tr>
        <tr>
          <th> why? (purpose) </th>
          <td> čemu-nebud </td>
          <td> čemukoli </td>
          <td> ničemu </td>
        </tr>
        <tr>
          <th> why? (reason) </th>
          <td> začto-nebud </td>
          <td> začtokoli </td>
          <td> zaničto </td>
        </tr>
      </tbody>
    </table>
  )
}

function Examples4() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th> </th>
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
          <td>nikoj, <i>nijedin</i></td>
          <td><i>vsaky</i></td>
          <td><i>iny</i></td>
        </tr>
        <tr>
          <th> who? </th>
          <td> nikto </td>
          <td> vsekto, <i>vsi</i></td>
          <td> inokto </td>
        </tr>
        <tr>
          <th> what? </th>
          <td rowSpan={2}> ničto </td>
          <td rowSpan={2}> vsečto, <i>vse</i></td>
          <td> inočto </td>
        </tr>
        <tr>
          <th> how much? </th>
          <td> — </td>
        </tr>
        <tr>
          <th> whose? </th>
          <td> ničij </td>
          <td> vsečij </td>
          <td> inočij</td>
        </tr>
        <tr>
          <th> what kind of? </th>
          <td> nikaky </td>
          <td> vsaky </td>
          <td> inaky </td>
        </tr>
        <tr>
          <th> how? </th>
          <td> nikako </td>
          <td> vsako </td>
          <td> inako </td>
        </tr>
        <tr>
          <th> where? </th>
          <td> nikde </td>
          <td> vesde </td>
          <td> inde </td>
        </tr>
        <tr>
          <th> whereto? </th>
          <td> nikamo </td>
          <td> vsamo </td>
          <td> inamo </td>
        </tr>
        <tr>
          <th> when? </th>
          <td> nikogda </td>
          <td> vsegda </td>
          <td> inogda </td>
        </tr>
        <tr>
          <th> whither? </th>
          <td> nikudy </td>
          <td> vsudy </td>
          <td> inudy </td>
        </tr>
        <tr>
          <th> whence? </th>
          <td> odnikudy </td>
          <td> odvsudy </td>
          <td> odinudy </td>
        </tr>
        <tr>
          <th> why? (purpose) </th>
          <td> ničemu </td>
          <td> — </td>
          <td> — </td>
        </tr>
        <tr>
          <th> why? (reason) </th>
          <td> zaničto </td>
          <td> — </td>
          <td> — </td>
        </tr>
      </tbody>
    </table>
  )
}