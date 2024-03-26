import { Abbr } from "@site/src/components";

import { Cell } from "./_td";
import React from "react";

export default function Interrogative({ children }) {
  const [who, what] = extractListItems(children);
  const _who = who ? who.props.children : 'who?';
  const _what = what ? what.props.children : 'what?';

  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th className="invisible"></th>
          <th>{_who}</th>
          <th>{_what}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th><Abbr>nom.</Abbr></th>
          <Cell> kto </Cell>
          <Cell rowSpan={2}> čto </Cell>
        </tr>
        <tr>
          <th><Abbr>acc.</Abbr></th>
          <Cell rowSpan={2} className="noRight"> kogo </Cell>
        </tr>
        <tr>
          <th><Abbr>gen.</Abbr></th>
          <Cell> čego </Cell>
        </tr>
        <tr>
          <th><Abbr>dat.</Abbr></th>
          <Cell> komu </Cell>
          <Cell> čemu </Cell>
        </tr>
        <tr>
          <th><Abbr>ins.</Abbr></th>
          <Cell> kym </Cell>
          <Cell> čim </Cell>
        </tr>
        <tr>
          <th><Abbr>loc.</Abbr></th>
          <Cell> kom </Cell>
          <Cell> čem </Cell>
        </tr>
      </tbody>
    </table>
  )
}

function extractListItems(children) {
  if (!children) return [];

  return React.Children.toArray(
    React.Children.only(children).props.children
  ).filter(item => item.type === 'li');
}
