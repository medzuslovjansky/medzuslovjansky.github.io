import {declensionNoun, transliterate} from '@interslavic/utils';
import {Abbr} from '@site/src/components';
import Translate from '@docusaurus/Translate';

export default function Declinator(props) {
  const {lemma, additional = '', gender, animate = false, plural = false, singular = false, indeclinable = false, athematic = false } = props;
  const conv = useRecommendedForm(athematic);
  const { nom, acc, gen, dat, ins, loc, voc } = declensionNoun(lemma, additional, gender, animate, plural, singular, indeclinable);

  return (
    <table className="table_sticky table_mw">
      <thead>
      <tr>
        <th className="invisible"></th>
        <th>
          <Abbr>sg.</Abbr>
        </th>
        <th>
          <Abbr>pl.</Abbr>
        </th>
      </tr>
      </thead>
      <tbody>
      <Case title="nom." row={conv(nom)} />
      <Case title="acc." row={conv(acc)} />
      <Case title="gen." row={conv(gen)} />
      <Case title="dat." row={conv(dat)} />
      <Case title="ins." row={conv(ins)} />
      <Case title="loc." row={conv(loc)} />
      <Case title="voc." row={conv(voc)} />
      </tbody>
    </table>
  );
}

function Case({row: [singular, plural], title}) {
  const [[s1, s2], [p1, p2]] = calculateStems(singular, plural);

  const s = s2 ? <>{s1}<b>{s2}</b></> : s1;
  const p = p2 ? <>{p1}<b>{p2}</b></> : p1;

  return (
    <tr>
      <th><Abbr>{title}</Abbr></th>
      <td lang="art-x-interslv">{s}</td>
      <td lang="art-x-interslv">{p}</td>
    </tr>
  );
}

function useRecommendedForm(athematic) {
  const regexp = athematic ? /^[^\/]*\/\s*/ : /\s*\/.*$/;
  const processWord = (word) => transliterate(word.replace(regexp, ''), 'art-Latn-x-interslv');

  return (words) => words.map(processWord);
}

function calculateStems(singular, plural) {
  const n = Math.max(singular.length, plural.length);
  for (let i = 0; i < n; i++) {
    if (singular[i] !== plural[i]) {
      return [[singular.slice(0, i), singular.slice(i)], [plural.slice(0, i), plural.slice(i)]];
    }
  }

  return [[singular, ''], [plural, '']];
}
