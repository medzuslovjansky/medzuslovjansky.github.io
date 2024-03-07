import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Abbr } from "@site/src/components";

import { Cell } from "./_td";

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
    </Tabs>
  )
}

function Singular() {
  return (
    <table className="table_sticky">
      <thead>
      <tr>
          <th rowSpan={2} className="invisible"></th>
          <th rowSpan={2}>
            1st person
          </th>
          <th rowSpan={2}>
            2nd person
          </th>
          <th colSpan={3}> 3rd person</th>
      </tr>
      <tr>
          <th className="noLeft"><Abbr>masc.</Abbr></th>
          <th><Abbr>neut.</Abbr></th>
          <th><Abbr>fem.</Abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><Abbr>nom.</Abbr></th>
          <Cell> ja </Cell>
          <Cell> ty </Cell>
          <Cell> on </Cell>
          <Cell> ono </Cell>
          <Cell> ona </Cell>
        </tr>
        <tr>
          <th><Abbr>acc.</Abbr></th>
          <Cell> mene (me) </Cell>
          <Cell> tebe (te) </Cell>
          <Cell colSpan={2}> jego (go) </Cell>
          <Cell> ju </Cell>
        </tr>
        <tr>
          <th><Abbr>gen.</Abbr></th>
          <Cell> mene </Cell>
          <Cell> tebe </Cell>
          <Cell colSpan={2}> jego </Cell>
          <Cell> jej </Cell>
        </tr>
        <tr>
          <th><Abbr>dat.</Abbr></th>
          <Cell> mně (mi) </Cell>
          <Cell> tobě (ti) </Cell>
          <Cell colSpan={2}> jemu (mu) </Cell>
          <Cell> jej </Cell>
        </tr>
        <tr>
          <th><Abbr>ins.</Abbr></th>
          <Cell> mnoju </Cell>
          <Cell> toboju </Cell>
          <Cell colSpan={2}> jim </Cell>
          <Cell> jeju </Cell>
        </tr>
        <tr>
          <th><Abbr>loc.</Abbr></th>
          <Cell> mně </Cell>
          <Cell> tobě </Cell>
          <Cell colSpan={2}> jim </Cell>
          <Cell> jej </Cell>
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
          <th rowSpan={2} className="invisible"></th>
          <th rowSpan={2}>
            1st person
          </th>
          <th rowSpan={2}>
            2nd person
          </th>
          <th colSpan={2}> 3rd person</th>
      </tr>
      <tr>
        <th><Abbr>m.anim.</Abbr></th>
          <th> other</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><Abbr>nom.</Abbr></th>
          <Cell> my </Cell>
          <Cell> vy </Cell>
          <Cell> oni </Cell>
          <Cell> one </Cell>
        </tr>
        <tr>
          <th><Abbr>acc.</Abbr></th>
          <Cell rowSpan={2}> nas </Cell>
          <Cell rowSpan={2}> vas </Cell>
          <Cell rowSpan={2}> jih </Cell>
          <Cell> je </Cell>
        </tr>
        <tr>
          <th><Abbr>gen.</Abbr></th>
          <Cell> jih </Cell>
        </tr>
        <tr>
          <th><Abbr>dat.</Abbr></th>
          <Cell> nam </Cell>
          <Cell> vam </Cell>
          <Cell colSpan={2}> jim </Cell>
        </tr>
        <tr>
          <th><Abbr>ins.</Abbr></th>
          <Cell> nami </Cell>
          <Cell> vami </Cell>
          <Cell colSpan={2}> jimi </Cell>
        </tr>
        <tr>
          <th><Abbr>loc.</Abbr></th>
          <Cell> nas </Cell>
          <Cell> vas </Cell>
          <Cell colSpan={2}> jih </Cell>
        </tr>
      </tbody>
    </table>
  )
}

function Reflexive() {
  return (
    <table className="table_sticky">
      <tbody>
        <tr>
          <th><Abbr>nom.</Abbr></th>
          <Cell> — </Cell>
        </tr>
        <tr>
          <th><Abbr>acc.</Abbr></th>
          <Cell> sebe (se) </Cell>
        </tr>
        <tr>
          <th><Abbr>gen.</Abbr></th>
          <Cell> sebe </Cell>
        </tr>
        <tr>
          <th><Abbr>dat.</Abbr></th>
          <Cell> sobě (si) </Cell>
        </tr>
        <tr>
          <th><Abbr>ins.</Abbr></th>
          <Cell> soboju </Cell>
        </tr>
        <tr>
          <th><Abbr>loc.</Abbr></th>
          <Cell> sobě </Cell>
        </tr>
      </tbody>
    </table>
  )
}
