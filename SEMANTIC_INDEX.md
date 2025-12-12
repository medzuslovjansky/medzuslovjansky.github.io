# SEMANTIC_INDEX.md

A catalog of **every visualization** on Jan van Steenbergen's legacy Interslavic site that needs to be represented in this Docusaurus rewrite.

---

## NOUNS (`nouns.html` → `docs/learn/grammar/nouns.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| N1 | `NounEndingsChart` | Basic endings for all 3 declensions, singular + plural, all 7 cases. Hard/soft variants in brackets. | 14 × 6 | Static paradigm |
| N2 | `MasculineDeclension` | Full paradigm with 4 examples: brat (anim hard), muž (anim soft), dom (inanim hard), kraj (inanim soft) | 14 × 5 | `declensionNoun()` |
| N3 | `NeuterDeclension` | Full paradigm with 3 examples: slovo (hard), morje (soft), ime (-ę type) | 12 × 4 | `declensionNoun()` |
| N4 | `FeminineDeclension` | Full paradigm with 3 examples: žena (hard -a), zemja (soft -a), kost (3rd decl) | 14 × 4 | `declensionNoun()` |
| N5 | `AthematicDeclension` | Special declension with 6 examples: kamenj, ime, tele, nebo, crkov, mati | 14 × 7 | `declensionNoun()` with athematic flag |

**Notes**: Currently implemented as `MDNouns1-5`. Verify all use `declensionNoun()` and wrap in `TransliteratorElement`.

---

## ADJECTIVES (`adjectives.html` → `docs/learn/grammar/adjectives.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| A1 | `AdjectiveEndingsChart` | Basic endings for all genders/numbers, 6 cases. Hard/soft variants. | 6 × 9 | Static paradigm |
| A2 | `HardAdjectiveParadigm` | Full paradigm with example: dobry (good) | 6 × 9 | `declensionAdjective()` |
| A3 | `SoftAdjectiveParadigm` | Full paradigm with example: svěži (fresh) | 6 × 9 | `declensionAdjective()` |

**Notes**: Currently implemented as `MDAdjectives1-3`. Verify computed vs hardcoded.

---

## VERBS (`verbs.html` → `docs/learn/grammar/verbs.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| V1 | `MotionVerbsChart` | Three-way aspect for motion verbs: non-directional, directional impf., perfective. 12 verb rows. | 12 × 4 | Static reference data |
| V2 | `PresentTenseConjugation` | Two conjugations × 2 examples each. Shows -u/-ju and -em/-im variants. | 8 × 5 | `conjugationVerb()` |
| V3 | `CompoundPastTense` | L-participle past with 3 examples. 3rd person drops auxiliary. | 8 × 4 | `conjugationVerb()` |
| V4 | `SimplePastTense` | Aorist/imperfect forms with 3 examples: dělati, nesti, hvaliti | 6 × 4 | `conjugationVerb()` |
| V5 | `FutureTenseConjugation` | Future with bud- auxiliary + infinitive | 6 × 2 | `conjugationVerb()` |
| V6 | `ConditionalMood` | Conditional with by particle | 8 × 2 | `conjugationVerb()` |
| V7 | `ImperativeMood` | 2sg, 1pl, 2pl forms for both conjugations | 3 × 4 | `conjugationVerb()` |
| V8 | `ParticiplesChart` | Present active/passive, past active/passive, gerund | 5 × 4 | `conjugationVerb()` |
| V9 | `BytiConjugation` | Complete paradigm of "to be" across all tenses/moods | 8 × 7 | Static (irregular) |
| V10 | `BytiParticiples` | Participles and gerund of byti | 3 × 2 | Static (irregular) |
| V11 | `AthematicVerbsPresent` | Present tense of dati, jesti, věděti | 6 × 4 | Static (irregular) |

**Notes**: Currently implemented as `MDVerbs1-11`. **CRITICAL**: Most are HARDCODED. Should use `conjugationVerb()` from `@interslavic/utils`.

---

## PRONOUNS (`pronouns.html` → `docs/learn/grammar/pronouns.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| P1 | `PersonalPronounChart` | All personal pronouns + reflexive, 6 cases. Clitic forms in brackets. | 6 × 10 | Static paradigm |
| P2 | `PossessivePronounParadigm` | Declension of "moj" (my) pattern | 6 × 9 | Static paradigm |
| P3 | `DemonstrativePronounParadigm` | Declension of "toj" (that) pattern | 6 × 9 | Static paradigm |
| P4 | `InterrogativePronounChart` | kto (who) vs čto (what) declension | 6 × 3 | Static paradigm |
| P5 | `IndefinitePronounParadigm` | Declension of "ves" (all) | 6 × 9 | Static paradigm |
| P6 | `CorrelativesTable` | **LARGE**: 14 question types × 10 answer series (k-, s-, t-, on-, ně-, etc.) | 14 × 12 | Static reference data |

**Notes**: Currently implemented as `MDPronouns1-6`. The correlatives table (P6) is the largest visualization on the site.

---

## NUMERALS (`numerals.html` → `docs/learn/grammar/numerals.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| Nu1 | `CardinalNumbers2-4` | Declension of dva, tri, četyri (with dual remnants) | 6 × 4 | Static paradigm |
| Nu2 | `CardinalNumbers5-99` | Declension pattern for larger numbers (pet, dvanadset, trideset) | 6 × 4 | Static paradigm |
| Nu3 | `NumeralsConverter` | **INTERACTIVE**: Input number → output Interslavic text | N/A | `toInterslavicNumeral()` |

**Notes**: Currently implemented as `MDNumerals1-2` + `MDNumeralsConverter`. **GOOD EXAMPLE** of interactive component pattern.

---

## PHONOLOGY (`phonology.html` → `docs/learn/phonology.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| Ph1 | `VowelChart` | IPA vowel trapezoid with basic + optional vowels positioned | Visual diagram | Static |
| Ph2 | `ConsonantChart` | IPA consonant table by place/manner of articulation | 10 × 6 | Static |
| Ph3 | `MorphophonemicAlternations` | Consonant transformations: hard → soft, +j variants | 4 × 20+ | Static reference |

**Notes**: Currently implemented as `MDPhonology1-3`.

---

## ORTHOGRAPHY (`orthography.html` → `docs/learn/orthography.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| O1 | `LatinAlphabet` | Single row: A B C Č D DŽ E Ě F G H I J K L LJ M N NJ O P R S Š T U V Y Z Ž | 1 × 27 | Static |
| O2 | `CyrillicAlphabet` | Single row: А Б В Г... | 1 × 29 | Static |
| O3 | `LatinCyrillicCorrespondence` | Full correspondence table: Latin, Cyrillic, Etymological, IPA | 27 × 4 | Static |
| O4 | `EtymologicalAlphabet` | Extended characters: Ę Ų Å Ė Ȯ Ć Đ Ĺ Ń Ŕ T́ D́ Ś Ź | 1 × 15 | Static |

**Notes**: Currently implemented as `MDOrthography1-4`.

---

## PRONUNCIATION (`pronunciation.html` → `docs/learn/pronunciation.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| Pr1 | `PronunciationGuide` | Letter → IPA → English approximation for all 32 letters | 32 × 4 | Static |
| Pr2 | `EtymologicalPronunciation` | Extended characters pronunciation | 14 × 3 | Static |

**Notes**: Currently implemented as `MDPronunciation1-2`.

---

## SIMPLE GRAMMAR / SLOVIANTO (`slovianto*.html` → `docs/learn/simple-grammar/`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| S1 | `SloviantoAlphabet` | Simplified pronunciation guide for beginners | 3 columns | Static |
| S2 | `SloviantoPresentTense` | Simplified present: dělati, prositi, nesti | 6 × 4 | Static or `conjugationVerb()` |
| S3 | `SloviantoPastTense` | Simplified L-participle past | 4 × 4 | Static |
| S4 | `SloviantoImperative` | Simplified imperative (2sg, 2pl only) | 2 × 4 | Static |
| S5 | `SloviantoDialogue` | Sample dialogue text | Text | Static |
| S6 | `SloviantoVocabulary` | Basic vocabulary list | List | Static |

**Notes**: Currently implemented as `MDSlovianto1-3`, `MDSimpleGrammar1-5`.

---

## DERIVATION (`derivation.html` → `docs/learn/vocabulary/derivation.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| D1 | `ProtoSlavicCorrespondences` | **LARGE**: Proto-Slavic → OCS → Slavic → Interslavic (etymological + standard) | 43 × 7 | Static reference |

**Notes**: Currently implemented as `MDDerivation` (743 lines!). Should be data-driven.

---

## FLAVOURISATION (`flavorizacija.html` → `docs/learn/vocabulary/flavourisation.md`)

| ID | Component Name | Description | Rows × Cols | Data Source |
|----|----------------|-------------|-------------|-------------|
| F1 | `RegionalPhonologyVariants` | Northern vs Standard vs Southern phonology | 3 × 10 | Static |
| F2 | `LatinOrthographyVariants` | Polish/Czech/Croatian keyboard adaptations | 3 × 10 | Static |
| F3 | `CyrillicOrthographyVariants` | Serbian/Bulgarian/East Slavic Cyrillic variants | 3 × 10 | Static |

**Notes**: Currently implemented as `MDFlavourisation1-3`.

---

## PREPOSITIONS & CONJUNCTIONS

These are **not tables** but organized reference lists. Currently in prose form, which is appropriate.

---

## SUMMARY

### Total Visualizations: 42

| Category | Count | Computed | Static |
|----------|-------|----------|--------|
| Nouns | 5 | 4 | 1 |
| Adjectives | 3 | 2 | 1 |
| Verbs | 11 | 9 | 2 |
| Pronouns | 6 | 0 | 6 |
| Numerals | 3 | 1 | 2 |
| Phonology | 3 | 0 | 3 |
| Orthography | 4 | 0 | 4 |
| Pronunciation | 2 | 0 | 2 |
| Simple Grammar | 6 | 1 | 5 |
| Derivation | 1 | 0 | 1 |
| Flavourisation | 3 | 0 | 3 |

### Naming Convention

```
MD[Category][Number] → [SemanticName]

MDNouns1    → NounEndingsChart
MDNouns2    → MasculineDeclension
MDVerbs2    → PresentTenseConjugation
MDPronouns6 → CorrelativesTable
```

### Priority Actions

1. **CRITICAL**: Audit all verb components — replace hardcoded tables with `conjugationVerb()`
2. **CRITICAL**: Add `TransliteratorElement` to all components
3. **HIGH**: Convert `ProtoSlavicCorrespondences` (743 lines) to data-driven
4. **MEDIUM**: Standardize component naming to semantic names

---

## COMPONENT TEMPLATE

For the next AI agent implementing/refactoring components:

```jsx
// Pattern for computed paradigms
import { declensionNoun } from '@interslavic/utils';
import { TransliteratorElement } from '@site/src/components';

export default function MasculineDeclension() {
  // Use the library to compute forms
  const brat = declensionNoun('brat', '', 'masculine', true);
  const dom = declensionNoun('dom', '', 'masculine', false);

  return (
    <table className="table_sticky">
      <tbody>
        {CASES.map(case_ => (
          <tr key={case_}>
            <th>{case_}</th>
            <td><TransliteratorElement>{brat[case_][0]}</TransliteratorElement></td>
            <td><TransliteratorElement>{dom[case_][0]}</TransliteratorElement></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

```jsx
// Pattern for static reference data
const MOTION_VERBS = [
  { meaning: 'go (by foot)', nonDir: 'hoditi', dir: 'idti', pf: 'pojdti' },
  { meaning: 'go (by transport)', nonDir: 'jezditi', dir: 'jehati', pf: 'pojehati' },
  // ...
];

export default function MotionVerbsChart() {
  return (
    <table className="table_sticky">
      <thead>
        <tr>
          <th/>
          <th>non-directional</th>
          <th>directional impf.</th>
          <th>perfective</th>
        </tr>
      </thead>
      <tbody>
        {MOTION_VERBS.map(v => (
          <tr key={v.meaning}>
            <th>{v.meaning}</th>
            <td><TransliteratorElement>{v.nonDir}</TransliteratorElement></td>
            <td><TransliteratorElement>{v.dir}</TransliteratorElement></td>
            <td><TransliteratorElement>{v.pf}</TransliteratorElement></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```
