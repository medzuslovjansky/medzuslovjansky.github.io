import {declensionNoun, transliterate} from '@interslavic/utils';

export default function Declinator(props) {
  const {lemma, additional = '', gender, animate = false, plural = false, singular = false, indeclinable = false, athematic = false } = props;
  const conv = useRecommendedForm(athematic);
  const { nom, acc, gen, dat, ins, loc, voc } = declensionNoun(lemma, additional, gender, animate, plural, singular, indeclinable);

  return (
    <table className="table_full">
      <thead>
      <tr>
        <th>Case</th>
        <th>Singular</th>
        <th>Plural</th>
      </tr>
      </thead>
      <tbody>
      <Case title="Nom" row={conv(nom)} />
      <Case title="Acc" row={conv(acc)} />
      <Case title="Gen" row={conv(gen)} />
      <Case title="Dat" row={conv(dat)} />
      <Case title="Ins" row={conv(ins)} />
      <Case title="Loc" row={conv(loc)} />
      <Case title="Voc" row={conv(voc)} />
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
      <th>{title}</th>
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
