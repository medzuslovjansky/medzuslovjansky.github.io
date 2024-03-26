import {translate} from "@docusaurus/Translate";
import clsx from 'clsx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import {Abbr} from "@site/src/components";
import {CodeCell as Cell} from "./_td";

export default function Endings() {
  return (
    <Tabs groupId="number">
      <TabItem value="singular"
               label={translate({id: 'com.grammar.singular', message: 'Singular forms (grammatical number)'})}>
        <Singular/>
      </TabItem>
      <TabItem value="plural"
               label={translate({id: 'com.grammar.plural', message: 'Plural forms (grammatical number)'})}>
        <Plural/>
      </TabItem>
    </Tabs>
  );
}

function Singular() {
  return (
    <table className={clsx('table_sticky')}>
      <Header/>
      <tbody>
      <tr align="center">
        <th><Abbr>nom.</Abbr></th>
        <Cell colSpan={2}>-Ø</Cell>
        <Cell rowSpan={2}>-o (-e)</Cell>
        <Cell>-a</Cell>
        <Cell rowSpan={2}>-Ø</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>acc.</Abbr></th>
        <Cell>-a</Cell>
        <Cell>-Ø</Cell>
        <Cell className="noRight">-u</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>gen.</Abbr></th>
        <Cell colSpan={3}>-a</Cell>
        <Cell>-y (-e)</Cell>
        <Cell>-i</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>dat.</Abbr></th>
        <Cell colSpan={3}>-u</Cell>
        <Cell>-ě (-i)</Cell>
        <Cell>-i</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>ins.</Abbr></th>
        <Cell colSpan={3}>-om (-em)</Cell>
        <Cell>-oju (-eju)</Cell>
        <Cell>-ju</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>loc.</Abbr></th>
        <Cell colSpan={3}>-u</Cell>
        <Cell>-ě (-i)</Cell>
        <Cell>-i</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>voc.</Abbr></th>
        <Cell colSpan={2}>-e (-u)</Cell>
        <Cell>-o (-e)</Cell>
        <Cell>-o</Cell>
        <Cell>-i</Cell>
      </tr>
      </tbody>
    </table>
  );
}

function Plural() {
  return (
    <table className={clsx('table_sticky')}>
      <Header/>
      <tbody>
      <tr align="center">

        <th><Abbr>nom.</Abbr></th>
        <Cell>-i</Cell>
        <Cell rowSpan={2}>-y (-e)</Cell>
        <Cell rowSpan={2}>-a</Cell>
        <Cell rowSpan={2}>-y (-e)</Cell>
        <Cell rowSpan={2}>-i</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>acc.</Abbr></th>
        <Cell className="noRight">-ov (-ev)</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>gen.</Abbr></th>
        <Cell colSpan={2}>-ov (-ev)</Cell>
        <Cell>-Ø</Cell>
        <Cell>-Ø</Cell>
        <Cell>-ij</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>dat.</Abbr></th>
        <Cell colSpan={5}>-am</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>ins.</Abbr></th>
        <Cell colSpan={5}>-ami</Cell>
      </tr>
      <tr align="center">
        <th><Abbr>loc.</Abbr></th>
        <Cell colSpan={5}>-ah</Cell>
      </tr>
      </tbody>
    </table>
  );
}

function Header() {
  return (
    <thead>
    <tr valign="top">
      <th rowSpan={2} className={clsx('sticky', 'invisible')}/>
      <th colSpan={3}>I {translate({id: 'com.grammar.declension', message: 'Declension'})}</th>
      <th>II</th>
      <th>III</th>
    </tr>
    <tr>
      <th className={'noLeft'}>
        <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.animate', message: 'Animate (grammar)'})})
      </th>
      <th>
        <Abbr>m.</Abbr><br/>({translate({id: 'com.grammar.inanimate', message: 'Inanimate (grammar)'})})
      </th>
      <th><Abbr>n.</Abbr></th>
      <th colSpan={2}><Abbr>f.</Abbr></th>
    </tr>
    </thead>
  );
}
