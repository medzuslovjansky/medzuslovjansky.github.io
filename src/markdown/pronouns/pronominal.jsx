import React from 'react';

export default function Pronominal({children}) {
  const {
    _which,
    _who,
    _what,
    _howmuch,
    _whose,
    _whatkindof,
    _how,
    _where,
    _whereto,
    _when,
    _whither,
    _whence,
    _whypurpose,
    _whyreason,
  } = childrenToRowHeaders(children);

  const {
    _question,
    _here,
    _there,
    _yonder,
    _some,
    _several,
    _any,
    _no,
    _every,
    _else,
  } = childrenToColumnHeaders(children);

  return (
    <table className="table_sticky">
      <tbody>
      <tr>
        <th></th>
        <th>
          {_question}
          <br/>
          <i>k-</i>
        </th>
        <th>
          {_here}
          <br/>
          <i>s-</i>
        </th>
        <th>
          {_there}
          <br/>
          <i>t-</i>
        </th>
        <th>
          {_yonder}
          <br/>
          <i>on-</i>
        </th>
        <th>
          {_some}
          <br/>
          <i>něk-</i>
        </th>
        <th>
          {_several}
          <br/>
          <i>poněk-</i>
        </th>
        <th colSpan={2}>
          {_any}
          <br/>
          <i>k-nebud, k-koli</i>
        </th>
        <th>
          {_no}
          <br/>
          <i>nik-</i>
        </th>
        <th>
          {_every}
          <br/>
          <i>vs-</i>
        </th>
        <th>
          {_else}
          <br/>
          <i>in-</i>
        </th>
      </tr>
      <tr>
        <th> {_which}?</th>
        <Cell> koj </Cell>
        <Cell rowSpan={2}>
          sej,
          <br/>
          <i>tutoj</i>
        </Cell>
        <Cell rowSpan={2}>
          toj,
          <br/>
          <i>tamtoj</i>
        </Cell>
        <Cell rowSpan={2}> onoj </Cell>
        <Cell> někoj </Cell>
        <Cell> poněkoj </Cell>
        <Cell> koj-nebud </Cell>
        <Cell> kojkoli </Cell>
        <Cell>
          nikoj, <i>nijedin</i>
        </Cell>
        <Cell>
          <i>vsaky</i>
        </Cell>
        <Cell>
          <i>iny</i>
        </Cell>
      </tr>
      <tr>
        <th> {_who}?</th>
        <Cell> kto </Cell>
        <Cell> někto </Cell>
        <Cell/>
        <Cell> kto-nebud </Cell>
        <Cell> ktokoli </Cell>
        <Cell> nikto </Cell>
        <Cell>
          vsekto, <i>vsi</i>
        </Cell>
        <Cell> inokto </Cell>
      </tr>
      <tr>
        <th> {_what}?</th>
        <Cell> čto </Cell>
        <Cell> se </Cell>
        <Cell> to </Cell>
        <Cell> ono </Cell>
        <Cell> něčto </Cell>
        <Cell> poněčto </Cell>
        <Cell> čto-nebud </Cell>
        <Cell> čtokoli </Cell>
        <Cell rowSpan={2}> ničto </Cell>
        <Cell rowSpan={2}>
          vsečto, <i>vse</i>
        </Cell>
        <Cell> inočto </Cell>
      </tr>
      <tr>
        <th> {_howmuch}?</th>
        <Cell> koliko </Cell>
        <Cell> seliko </Cell>
        <Cell> toliko </Cell>
        <Cell> onoliko </Cell>
        <Cell> několiko </Cell>
        <Cell/>
        <Cell> koliko-nebud </Cell>
        <Cell> kolikokoli </Cell>
        <Cell/>
      </tr>
      <tr>
        <th> {_whose}?</th>
        <Cell> čij </Cell>
        <Cell colSpan={3}> — </Cell>
        <Cell> něčij </Cell>
        <Cell/>
        <Cell> čij-nebud </Cell>
        <Cell> čijkoli </Cell>
        <Cell> ničij </Cell>
        <Cell> vsečij </Cell>
        <Cell> inočij</Cell>
      </tr>
      <tr>
        <th> {_whatkindof}?</th>
        <Cell> kaky </Cell>
        <Cell> saky </Cell>
        <Cell> taky </Cell>
        <Cell> onaky </Cell>
        <Cell> někaky </Cell>
        <Cell> poněkaky </Cell>
        <Cell> kaky-nebud </Cell>
        <Cell> kakykoli </Cell>
        <Cell> nikaky </Cell>
        <Cell> vsaky </Cell>
        <Cell> inaky </Cell>
      </tr>
      <tr>
        <th> {_how}?</th>
        <Cell> kako </Cell>
        <Cell> sako </Cell>
        <Cell> tako </Cell>
        <Cell> onako </Cell>
        <Cell> někako </Cell>
        <Cell> poněkako </Cell>
        <Cell> kako-nebud </Cell>
        <Cell> kakokoli </Cell>
        <Cell> nikako </Cell>
        <Cell> vsako </Cell>
        <Cell> inako </Cell>
      </tr>
      <tr>
        <th> {_where}?</th>
        <Cell> kde </Cell>
        <Cell>
          sde, <i>tu</i>
        </Cell>
        <Cell>
          tude, <i>tam</i>
        </Cell>
        <Cell> onde </Cell>
        <Cell> někde </Cell>
        <Cell> poněkde </Cell>
        <Cell> kde-nebud </Cell>
        <Cell> kdekoli </Cell>
        <Cell> nikde </Cell>
        <Cell> vesde </Cell>
        <Cell> inde </Cell>
      </tr>
      <tr>
        <th> {_whereto}?</th>
        <Cell> kamo </Cell>
        <Cell> samo </Cell>
        <Cell> tamo </Cell>
        <Cell> onamo </Cell>
        <Cell> někamo </Cell>
        <Cell/>
        <Cell> kamo-nebud </Cell>
        <Cell> kamokoli </Cell>
        <Cell> nikamo </Cell>
        <Cell> vsamo </Cell>
        <Cell> inamo </Cell>
      </tr>
      <tr>
        <th> {_when}?</th>
        <Cell> kogda </Cell>
        <Cell>
          segda, <i>sejčas</i>
        </Cell>
        <Cell> togda </Cell>
        <Cell> onogda </Cell>
        <Cell> někogda </Cell>
        <Cell> poněkogda </Cell>
        <Cell> kogda-nebud </Cell>
        <Cell> kogdakoli </Cell>
        <Cell> nikogda </Cell>
        <Cell> vsegda </Cell>
        <Cell> inogda </Cell>
      </tr>
      <tr>
        <th> {_whither}?</th>
        <Cell> kudy </Cell>
        <Cell> sudy </Cell>
        <Cell> tudy </Cell>
        <Cell> onudy </Cell>
        <Cell> někudy </Cell>
        <Cell/>
        <Cell> kudy-nebud </Cell>
        <Cell> kudykoli </Cell>
        <Cell> nikudy </Cell>
        <Cell> vsudy </Cell>
        <Cell> inudy </Cell>
      </tr>
      <tr>
        <th> {_whence}?</th>
        <Cell> odkudy </Cell>
        <Cell> odsudy </Cell>
        <Cell> odtudy </Cell>
        <Cell> odonudy </Cell>
        <Cell> odněkudy </Cell>
        <Cell/>
        <Cell> odkudy-nebud </Cell>
        <Cell> odkudykoli </Cell>
        <Cell> odnikudy </Cell>
        <Cell> odvsudy </Cell>
        <Cell> odinudy </Cell>
      </tr>
      <tr>
        <th> {_whypurpose}?</th>
        <Cell> čemu </Cell>
        <Cell/>
        <Cell> tomu </Cell>
        <Cell/>
        <Cell> něčemu </Cell>
        <Cell/>
        <Cell> čemu-nebud </Cell>
        <Cell> čemukoli </Cell>
        <Cell> ničemu </Cell>
        <Cell/>
        <Cell/>
      </tr>
      <tr>
        <th> {_whyreason}?</th>
        <Cell> začto </Cell>
        <Cell/>
        <Cell> zato </Cell>
        <Cell/>
        <Cell> zaněčto </Cell>
        <Cell/>
        <Cell> začto-nebud </Cell>
        <Cell> začtokoli </Cell>
        <Cell> zaničto </Cell>
        <Cell/>
        <Cell/>
      </tr>
      </tbody>
    </table>

  )
}

function Cell(props) {
  const {children = '—'} = props;
  return <td {...props} lang="art-x-interslv">{children}</td>
}

function childrenToRowHeaders(children) {
  const [, listItem] = extractListItems(children);

  const rawString = listItem ? String(listItem.props.children) : '';

  return rawString.split(/\s*\?\s*/)
    .reduce(translationsReducer, Object.entries({
        _which: 'which',
        _who: 'who',
        _what: 'what',
        _howmuch: 'how much',
        _whose: 'whose',
        _whatkindof: 'what kind of',
        _how: 'how',
        _where: 'where',
        _whereto: 'whereto',
        _when: 'when',
        _whither: 'whither',
        _whence: 'whence',
        _whypurpose: 'why (purpose)',
        _whyreason: 'why (reason)',
      })
    ).reduce(reduceEntriesToObject, {});
}

function childrenToColumnHeaders(children) {
  const [listItem] = extractListItems(children);
  const rawString = listItem ? String(listItem.props.children) : '';

  return rawString.split(/\s*;\s*/)
    .reduce(translationsReducer, Object.entries({
      _question: 'question',
      _here: 'here',
      _there: 'there',
      _yonder: 'yonder',
      _some: 'some',
      _several: 'several',
      _any: 'any',
      _no: 'no',
      _every: 'every',
      _else: 'else',
    }))
    .reduce(reduceEntriesToObject, {});
}

function extractListItems(children) {
  if (!children) return [];

  return React.Children.toArray(
    React.Children.only(children).props.children
  ).filter(item => item.type === 'li');
}

function translationsReducer(acc, translation, index) {
  if (translation) {
    acc[index][1] = translation;
  }

  return acc;
}

function reduceEntriesToObject(acc, [key, value]) {
  acc[key] = value;
  return acc;
}
