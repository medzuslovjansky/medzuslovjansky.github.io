# ARCHITECTURE.md

Proposed clean architecture for interslavic.fun.

## Design Principles

1. **Separation of concerns**: Data → Logic → Presentation (MVVM for tables)
2. **Testability first**: Pure functions + snapshot tests for every component
3. **Dual exports**: `buildX()` pure function + `<X/>` React component
4. **Zod everywhere**: Runtime validation + JSON Schema generation
5. **Co-located tests**: `X.tsx` → `X.test.tsx` in same folder
6. **Modular SCSS**: Each heavy element owns its styles

---

## 1. Abbreviation Syntax (New)

### Current Problem
- 400+ lines in `abbr-i18n.js`
- Not translation-friendly
- Hard to maintain

### New Syntax

```md
:abbr[n.]                     <!-- Standard: looks up "n." in locale's abbr database -->
:abbr[n.|neuter gender]       <!-- Custom: uses provided tooltip -->
:abbr[ч.р.|чоловічий рід]     <!-- Ukrainian custom abbreviation -->
```

**Rules:**
1. `:abbr[X]` — looks up `X` in `abbreviations/{locale}.json`
2. `:abbr[X|Y]` — uses `Y` as tooltip, no lookup needed
3. Fallback: if `X` not found and no `|Y`, render without tooltip

**Benefits:**
- Translators write `:abbr[ч.р.|чоловічий рід]` directly in MDX
- Standard abbreviations still work: `:abbr[impf.]`
- No need to maintain all abbreviations in JSON — only common ones
- Fully markdown-native

### Implementation

```ts
// src/utils/abbreviations/parse.ts
export interface AbbrDirective {
  abbr: string;
  tooltip: string | null;
  isCustom: boolean;
}

export function parseAbbr(content: string): AbbrDirective {
  const pipeIndex = content.indexOf('|');
  if (pipeIndex === -1) {
    return { abbr: content, tooltip: null, isCustom: false };
  }
  return {
    abbr: content.slice(0, pipeIndex),
    tooltip: content.slice(pipeIndex + 1),
    isCustom: true,
  };
}
```

```ts
// src/utils/abbreviations/parse.test.ts
describe('parseAbbr', () => {
  it('parses standard abbreviation', () => {
    expect(parseAbbr('n.')).toEqual({ abbr: 'n.', tooltip: null, isCustom: false });
  });

  it('parses custom abbreviation with tooltip', () => {
    expect(parseAbbr('ч.р.|чоловічий рід')).toEqual({
      abbr: 'ч.р.',
      tooltip: 'чоловічий рід',
      isCustom: true,
    });
  });
});
```

---

## 2. Directory Structure

### Current (Messy)

```
src/
  components/          # Mixed: UI + grammar + tools
  markdown/            # 50+ files, numeric naming (MDVerbs1, MDVerbs2)
  remark/              # Plugins + 400-line abbr database
  theme/               # 70+ manual imports
  utils/               # Mixed utilities
```

### Proposed (Clean)

```
src/
  ┌─────────────────────────────────────────────────────────────────┐
  │ DOMAIN: Grammar content organized by topic                      │
  └─────────────────────────────────────────────────────────────────┘
  grammar/
    nouns/
      index.ts                          # Re-exports all components
      data/
        endings.paradigm.json           # NormalizedParadigm format
        masculine.paradigm.json
        neuter.paradigm.json
        feminine.paradigm.json
        athematic.paradigm.json
      NounEndingsTable.tsx              # N1: Basic endings chart
      NounEndingsTable.test.tsx
      MasculineDeclension.tsx           # N2: brat, muž, dom, kraj
      NeuterDeclension.tsx              # N3: slovo, morje, ime
      FeminineDeclension.tsx            # N4: žena, zemja, kost
      AthematicDeclension.tsx           # N5: kamenj, ime, tele...

    adjectives/
      index.ts
      data/
        hard.paradigm.json
        soft.paradigm.json
      AdjectiveEndingsTable.tsx         # A1
      HardAdjectiveParadigm.tsx         # A2: dobry
      SoftAdjectiveParadigm.tsx         # A3: svěži

    verbs/
      index.ts
      data/
        byti.paradigm.json              # Irregular "to be"
        motion.reference.json           # Static reference (not paradigm)
        headers.json                    # Row/column labels
      MotionVerbsTable.tsx              # V1: Static reference table
      PresentTenseConjugation.tsx       # V2
      CompoundPastTense.tsx             # V3
      SimplePastTense.tsx               # V4
      FutureTenseConjugation.tsx        # V5
      ConditionalMood.tsx               # V6
      ImperativeMood.tsx                # V7
      ParticiplesTable.tsx              # V8
      BytiConjugation.tsx               # V9: Full byti paradigm
      BytiParticiples.tsx               # V10
      AthematicVerbsPresent.tsx         # V11: dati, jesti, věděti

    pronouns/
      index.ts
      data/
        personal.paradigm.json
        possessive.paradigm.json
        demonstrative.paradigm.json
        interrogative.paradigm.json
        indefinite.paradigm.json
        correlatives.reference.json     # The big correlatives grid
      PersonalPronounTable.tsx          # P1
      PossessivePronounParadigm.tsx     # P2
      DemonstrativePronounParadigm.tsx  # P3
      InterrogativePronounTable.tsx     # P4
      IndefinitePronounParadigm.tsx     # P5
      CorrelativesTable.tsx             # P6: 14×12 grid

    numerals/
      index.ts
      data/
        cardinals-2-4.paradigm.json
        cardinals-5-99.paradigm.json
      Cardinals2to4Table.tsx            # Nu1
      Cardinals5to99Table.tsx           # Nu2
      NumeralConverter.tsx              # Nu3: Interactive

    phonology/
      index.ts
      VowelChart.tsx                    # Ph1
      ConsonantChart.tsx                # Ph2
      MorphophonemicAlternations.tsx    # Ph3

    orthography/
      index.ts
      LatinAlphabet.tsx                 # O1
      CyrillicAlphabet.tsx              # O2
      LatinCyrillicCorrespondence.tsx   # O3
      EtymologicalAlphabet.tsx          # O4

    pronunciation/
      index.ts
      data/
        sounds.json                     # Letter → IPA → approximation
      PronunciationGuide.tsx            # Pr1
      EtymologicalPronunciation.tsx     # Pr2

  ┌─────────────────────────────────────────────────────────────────┐
  │ INFRASTRUCTURE: Shared components and utilities                 │
  └─────────────────────────────────────────────────────────────────┘
  components/
    InflectionTable/
      InflectionTable.tsx
      InflectionTable.test.tsx
      InflectionTable.module.scss
      index.ts
    TransliteratorElement/
      TransliteratorElement.tsx
      TransliteratorElement.test.tsx
      index.ts
    Transliterator/                     # Interactive tool
      Transliterator.tsx
      Transliterator.test.tsx
      custom/                           # Custom transliteration mappings
      index.ts
    IPA/
      IPA.tsx
      IPA.test.tsx
      database.ts                       # Audio file mappings
      index.ts
    Abbr/
      Abbr.tsx
      Abbr.test.tsx
      index.ts
    ReferenceTable/                     # NEW: For static reference data
      ReferenceTable.tsx
      ReferenceTable.test.tsx
      index.ts

  ┌─────────────────────────────────────────────────────────────────┐
  │ REMARK: MDX preprocessing                                       │
  └─────────────────────────────────────────────────────────────────┘
  remark/
    directives/
      isv.ts                            # :isv[] → TransliteratorElement
      isv.test.ts
      abbr.ts                           # :abbr[x] and :abbr[x|y]
      abbr.test.ts
      ipa.ts                            # :ipa[]
      ipa.test.ts
      component.ts                      # :::component{name=X}
      component.test.ts
      index.ts                          # Combines all directive handlers
    plugins/
      custom-directives.ts              # Main remark plugin
      custom-directives.test.ts
      section-injector.ts               # Before/after sections
      section-injector.test.ts
      sticky-table.ts                   # NEW: Auto-add table_sticky class
      sticky-table.test.ts

  ┌─────────────────────────────────────────────────────────────────┐
  │ UTILS: Pure functions (no React)                                │
  └─────────────────────────────────────────────────────────────────┘
  utils/
    abbreviations/
      parse.ts                          # Parse :abbr[x|y] syntax
      parse.test.ts
      lookup.ts                         # Look up in locale database
      lookup.test.ts
      data/
        schema.json                     # JSON Schema for validation
        en.json                         # Only COMMON abbreviations
        ru.json
        uk.json
        ...
    inflection/
      types.ts
      flatten.ts
      flatten.test.ts
      buildTable.ts
      buildTable.test.ts
      renderForm.ts
      renderForm.test.ts
      preprocessVerb.ts
      preprocessVerb.test.ts
      mergeVariants.ts
      mergeVariants.test.ts
    transliteration/
      index.ts                          # Re-export from @interslavic/utils
      etymological.ts                   # Ѣ→Є conversion
      etymological.test.ts
    numerals/
      toInterslavicNumeral.ts
      toInterslavicNumeral.test.ts

  ┌─────────────────────────────────────────────────────────────────┐
  │ MDX REGISTRY: Auto-discovery                                    │
  └─────────────────────────────────────────────────────────────────┘
  mdx/
    registry.ts                         # Auto-imports from grammar/*/index.ts
    registry.test.ts

  ┌─────────────────────────────────────────────────────────────────┐
  │ THEME: Minimal overrides                                        │
  └─────────────────────────────────────────────────────────────────┘
  theme/
    MDXContent/
      index.tsx                         # Uses mdx/registry.ts
    BlogPostItem/Footer/
      index.tsx                         # Disqus (unchanged)

  ┌─────────────────────────────────────────────────────────────────┐
  │ STYLES                                                          │
  └─────────────────────────────────────────────────────────────────┘
  css/
    custom.scss                         # Global styles (cleaned up)
    variables.scss                      # CSS custom properties only
```

---

## 3. Naming Conventions

### Components

| Old | New | Pattern |
|-----|-----|---------|
| `MDNouns1` | `NounEndingsTable` | `{Topic}{Description}` |
| `MDNouns2` | `MasculineDeclension` | Semantic name |
| `MDVerbs1` | `MotionVerbsTable` | What it shows |
| `MDVerbs9` | `BytiConjugation` | Lemma + type |
| `MDPronouns6` | `CorrelativesTable` | Content description |

### Data Files

| Type | Suffix | Example |
|------|--------|---------|
| Paradigm (for InflectionTable) | `.paradigm.json` | `byti.paradigm.json` |
| Reference (static table) | `.reference.json` | `motion.reference.json` |
| Headers (row/col labels) | `.headers.json` | `verb.headers.json` |
| Lookup database | `{locale}.json` | `en.json`, `uk.json` |

### Tests

Every file `X.ts` or `X.tsx` has `X.test.ts` or `X.test.tsx` alongside it.

---

## 4. Data File Formats

### Paradigm (Computed Tables)

```json
// src/grammar/verbs/data/byti.paradigm.json
{
  "lemma": "byti",
  "upos": "VERB",
  "misc": { "Lang": "isv" },
  "forms": [
    { "form": "jesm", "feats": { "Person": "1", "Number": "Sing", "Tense": "Pres" } },
    ...
  ]
}
```

### Reference (Static Tables)

```json
// src/grammar/verbs/data/motion.reference.json
{
  "columns": [
    { "key": "meaning", "label": "meaning", "i18n": true },
    { "key": "nonDir", "label": "non-directional", "i18n": true },
    { "key": "dirImpf", "label": "directional :abbr[impf.]", "i18n": true },
    { "key": "pf", "label": "perfective", "i18n": true }
  ],
  "rows": [
    { "meaning": "to go (by foot)", "nonDir": "hoditi", "dirImpf": "idti", "pf": "pojdti" },
    { "meaning": "to go (by transport)", "nonDir": "jezditi", "dirImpf": "jehati", "pf": "pojehati" },
    ...
  ]
}
```

### Abbreviations (Minimal)

```json
// src/utils/abbreviations/data/en.json
{
  "m.": "masculine",
  "f.": "feminine",
  "n.": "neuter",
  "sg.": "singular",
  "pl.": "plural",
  "nom.": "nominative",
  "gen.": "genitive",
  "impf.": "imperfective",
  "pf.": "perfective"
}
```

Only ~20-30 common abbreviations per locale. Custom ones use `:abbr[X|tooltip]` syntax.

---

## 5. Component Patterns

### Core Pattern: Dual Export (Pure Function + Component)

Every table component exports TWO things:
1. **Pure function** `buildX()` — returns `TableStructure`, testable without React
2. **React component** `<X/>` — renders the structure, has JSDoc

```tsx
// src/grammar/verbs/MotionVerbsTable.tsx
import { ReferenceTable, type ReferenceTableData } from '@site/src/components/ReferenceTable';
import motionData from './data/motion.reference.json';
import { motionReferenceSchema } from './data/motion.schema';

/**
 * Motion Verbs Table (V1)
 *
 * Displays the three-way aspect distinction for verbs of motion:
 * non-directional imperfective, directional imperfective, and perfective.
 *
 * @example
 * | meaning          | non-directional | directional impf. | perfective |
 * |------------------|-----------------|-------------------|------------|
 * | to go (by foot)  | hoditi          | idti              | pojdti     |
 *
 * @see https://interslavic.fun/learn/grammar/verbs/#motion-verbs
 * @see steen-legacy/verbs.html - original source
 */
export function MotionVerbsTable() {
  return <ReferenceTable data={buildMotionVerbsTable()} />;
}

/**
 * Pure function for building motion verbs table data.
 * Returns validated ReferenceTableData, suitable for snapshot testing.
 */
export function buildMotionVerbsTable(): ReferenceTableData {
  // Runtime validation with Zod
  const validated = motionReferenceSchema.parse(motionData);
  return validated;
}
```

### Why Dual Export?

```tsx
// In tests — no React needed, pure data assertion
import { buildMotionVerbsTable } from './MotionVerbsTable';

describe('MotionVerbsTable', () => {
  it('builds correct table structure', () => {
    const data = buildMotionVerbsTable();
    expect(data).toMatchSnapshot();
  });

  it('has 12 motion verb rows', () => {
    const data = buildMotionVerbsTable();
    expect(data.rows).toHaveLength(12);
  });

  it('includes hoditi/idti/pojdti for "to go"', () => {
    const data = buildMotionVerbsTable();
    const goRow = data.rows.find(r => r.meaning.includes('go (by foot)'));
    expect(goRow).toEqual({
      meaning: 'to go (by foot)',
      nonDir: 'hoditi',
      dirImpf: 'idti',
      pf: 'pojdti',
    });
  });
});
```

### Pattern A: Computed Paradigm (InflectionTable)

```tsx
// src/grammar/verbs/BytiConjugation.tsx
import { InflectionTable } from '@site/src/components/InflectionTable';
import bytiData from './data/byti.paradigm.json';
import verbHeaders from './data/verb.headers.json';

export function BytiConjugation() {
  return (
    <InflectionTable
      data={bytiData}
      config={{
        rows: ['feats.Number', 'misc.PersonRow'],
        columns: 'misc.TenseCol',
        order: {
          'feats.Number': ['Sing', 'Plur'],
          'misc.TenseCol': ['Present', 'SimplePast', 'CompoundPast', 'Future', 'Conditional', 'Imperative'],
        },
      }}
      headers={verbHeaders.tokens}
    />
  );
}
```

### Pattern B: Static Reference (ReferenceTable)

```tsx
// src/grammar/verbs/MotionVerbsTable.tsx
import { ReferenceTable } from '@site/src/components/ReferenceTable';
import motionData from './data/motion.reference.json';

export function MotionVerbsTable() {
  return <ReferenceTable data={motionData} />;
}
```

Where `ReferenceTable`:
- Renders column headers with i18n (via `<Translate>`)
- Wraps ISV cells in `<TransliteratorElement>`
- Applies `table_sticky` class automatically

### Pattern C: Pure MDX (For Very Simple Tables)

For tables so simple they don't need a component:

```md
| | non-directional | directional :abbr[impf.] | perfective |
|---|---|---|---|
| to go | :isv[hoditi] | :isv[idti] | :isv[pojdti] |
```

Remark plugin auto-adds `table_sticky` if table contains `:isv[]`.

---

## 6. MDX Registry (Auto-Discovery)

```ts
// src/mdx/registry.ts
import * as Nouns from '@site/src/grammar/nouns';
import * as Adjectives from '@site/src/grammar/adjectives';
import * as Verbs from '@site/src/grammar/verbs';
import * as Pronouns from '@site/src/grammar/pronouns';
import * as Numerals from '@site/src/grammar/numerals';
import * as Phonology from '@site/src/grammar/phonology';
import * as Orthography from '@site/src/grammar/orthography';
import * as Pronunciation from '@site/src/grammar/pronunciation';

// Flatten all exports into single object
export const grammarComponents = {
  ...Nouns,
  ...Adjectives,
  ...Verbs,
  ...Pronouns,
  ...Numerals,
  ...Phonology,
  ...Orthography,
  ...Pronunciation,
};

// Legacy aliases for backwards compatibility during migration
export const legacyAliases = {
  MDNouns1: Nouns.NounEndingsTable,
  MDNouns2: Nouns.MasculineDeclension,
  MDVerbs1: Verbs.MotionVerbsTable,
  MDVerbs9: Verbs.BytiConjugation,
  // ... etc
};
```

```ts
// src/theme/MDXContent/index.tsx
import MDXComponents from '@theme-original/MDXComponents';
import { grammarComponents, legacyAliases } from '@site/src/mdx/registry';
import { TransliteratorElement, IPA, Abbr } from '@site/src/components';

export default {
  ...MDXComponents,
  ...grammarComponents,
  ...legacyAliases,  // Remove after migration
  TransliteratorElement,
  IPA,
  Abbr,
};
```

---

## 7. Test Organization

Each module has co-located tests:

```
src/utils/abbreviations/
  parse.ts
  parse.test.ts         # Unit tests for parseAbbr()
  lookup.ts
  lookup.test.ts        # Unit tests for lookupAbbr()

src/grammar/verbs/
  BytiConjugation.tsx
  BytiConjugation.test.tsx  # Snapshot test, renders correctly
```

### Test Counts (Target)

| Area | Files | Tests |
|------|-------|-------|
| `utils/abbreviations/` | 2 | 4-6 |
| `utils/inflection/` | 6 | 30+ (already done) |
| `utils/transliteration/` | 2 | 4-6 |
| `utils/numerals/` | 1 | 3-5 |
| `remark/directives/` | 4 | 8-12 |
| `remark/plugins/` | 3 | 6-9 |
| `components/` | 5 | 10-15 |
| `grammar/*/` | ~40 | 40-80 (snapshots) |
| **Total** | ~65 | ~120 |

---

## 8. Migration Path

### Phase 1: Infrastructure
1. Implement new abbr syntax `:abbr[x|y]`
2. Create `ReferenceTable` component
3. Create `src/mdx/registry.ts` with auto-discovery
4. Add `sticky-table` remark plugin

### Phase 2: Data Extraction
1. Extract paradigm data from hardcoded JSX to `.paradigm.json`
2. Extract reference data to `.reference.json`
3. Reduce `abbr-i18n.js` to ~30 common abbreviations per locale

### Phase 3: Component Migration
1. Migrate components one domain at a time (nouns → adjectives → verbs → ...)
2. Add legacy aliases for backwards compatibility
3. Update MDX files to use new names (optional, can keep old names)

### Phase 4: Cleanup
1. Remove legacy aliases
2. Delete old `src/markdown/` directory
3. Delete `abbr-i18n.js`
4. Update documentation

---

## 9. Zod Validation

Use Zod for runtime validation AND JSON Schema generation.

### Installation

```bash
yarn add zod zod-to-json-schema
```

### Schema Definition Pattern

```ts
// src/grammar/verbs/data/motion.schema.ts
import { z } from 'zod';

/**
 * Schema for motion verbs reference table.
 * Validates both JSON import and runtime data.
 */
export const motionVerbRowSchema = z.object({
  meaning: z.string().describe('English meaning, e.g. "to go (by foot)"'),
  nonDir: z.string().describe('Non-directional imperfective form'),
  dirImpf: z.string().describe('Directional imperfective form'),
  pf: z.string().describe('Perfective form'),
});

export const motionReferenceSchema = z.object({
  columns: z.array(z.object({
    key: z.string(),
    label: z.string(),
    i18n: z.boolean().optional(),
    isv: z.boolean().optional(),
  })),
  rows: z.array(motionVerbRowSchema),
});

export type MotionVerbRow = z.infer<typeof motionVerbRowSchema>;
export type MotionReferenceData = z.infer<typeof motionReferenceSchema>;
```

### JSON Schema Generation (Build-Time)

```ts
// scripts/generate-schemas.ts
import { zodToJsonSchema } from 'zod-to-json-schema';
import { motionReferenceSchema } from '../src/grammar/verbs/data/motion.schema';

const jsonSchema = zodToJsonSchema(motionReferenceSchema, 'MotionReference');
// Write to src/grammar/verbs/data/motion.schema.json for IDE validation
```

### Runtime Validation

```ts
// In component
import { motionReferenceSchema } from './data/motion.schema';
import motionData from './data/motion.reference.json';

export function buildMotionVerbsTable() {
  // Throws ZodError with detailed message if invalid
  return motionReferenceSchema.parse(motionData);
}
```

### Common Schemas

```ts
// src/schemas/paradigm.schema.ts
import { z } from 'zod';

export const featsSchema = z.record(z.string()).describe('Morphological features');

export const tokenSchema = z.object({
  form: z.string().describe('Inflected form with optional *ending* and ~aux~ markup'),
  lemma: z.string(),
  upos: z.string().optional(),
  xpos: z.string().optional(),
  feats: featsSchema,
  misc: z.record(z.string()).optional(),
});

export const normalizedParadigmSchema = z.object({
  lemma: z.string(),
  upos: z.string().optional(),
  xpos: z.string().optional(),
  feats: featsSchema.optional(),
  misc: z.record(z.string()).optional(),
  forms: z.array(z.object({
    form: z.string(),
    feats: featsSchema,
    misc: z.record(z.string()).optional(),
  })),
});

export type Token = z.infer<typeof tokenSchema>;
export type NormalizedParadigm = z.infer<typeof normalizedParadigmSchema>;
```

---

## 10. Directive Organization

Each directive has its own folder with handler, tests, and types.

### Structure

```
src/remark/
  directives/
    abbr/
      index.ts              # Main handler
      parse.ts              # Parse :abbr[x|y] syntax
      parse.test.ts
      lookup.ts             # Locale-based lookup
      lookup.test.ts
      schema.ts             # Zod schema for abbr data
      data/
        en.json
        ru.json
        uk.json
        ...

    isv/
      index.ts              # Main handler
      index.test.ts
      transform.ts          # t́ → ť conversion
      transform.test.ts

    ipa/
      index.ts
      index.test.ts
      database.ts           # Sound → audio file mapping
      database.test.ts

    component/
      index.ts
      index.test.ts
      registry.ts           # Component name resolution

    kbd/
      index.ts
      index.test.ts

    stress/
      index.ts
      index.test.ts

    notr/
      index.ts
      index.test.ts

    lang/
      index.ts              # :en[], :ru[], etc.
      index.test.ts

  plugins/
    custom-directives.ts    # Orchestrates all directive handlers
    custom-directives.test.ts
    section-injector.ts
    section-injector.test.ts
    sticky-table.ts
    sticky-table.test.ts
```

### Directive Handler Interface

```ts
// src/remark/directives/types.ts
import type { TextDirective } from 'mdast-util-directive';

export interface DirectiveHandler {
  /** Directive name, e.g. 'isv', 'abbr' */
  name: string;

  /** Transform the directive node */
  transform(node: TextDirective, context: DirectiveContext): void;
}

export interface DirectiveContext {
  /** Current locale */
  locale: string;
  /** File path being processed */
  filePath: string;
}
```

### Example: Abbr Directive

```ts
// src/remark/directives/abbr/index.ts
import type { DirectiveHandler, DirectiveContext } from '../types';
import type { TextDirective } from 'mdast-util-directive';
import { parseAbbr } from './parse';
import { lookupAbbr } from './lookup';

export const abbrDirective: DirectiveHandler = {
  name: 'abbr',

  transform(node: TextDirective, context: DirectiveContext) {
    const content = node.children[0]?.value ?? '';
    const { abbr, tooltip, isCustom } = parseAbbr(content);

    // Custom tooltip takes precedence
    const resolvedTooltip = isCustom
      ? tooltip
      : lookupAbbr(abbr, context.locale);

    // Transform to hast abbr element
    node.data = {
      hName: 'abbr',
      hProperties: resolvedTooltip ? { title: resolvedTooltip } : {},
    };

    // Update children to show just the abbreviation
    node.children = [{ type: 'text', value: abbr }];
  },
};
```

```ts
// src/remark/directives/abbr/parse.ts
export interface ParsedAbbr {
  abbr: string;
  tooltip: string | null;
  isCustom: boolean;
}

export function parseAbbr(content: string): ParsedAbbr {
  const pipeIndex = content.indexOf('|');
  if (pipeIndex === -1) {
    return { abbr: content, tooltip: null, isCustom: false };
  }
  return {
    abbr: content.slice(0, pipeIndex),
    tooltip: content.slice(pipeIndex + 1),
    isCustom: true,
  };
}
```

```ts
// src/remark/directives/abbr/parse.test.ts
import { describe, it, expect } from 'vitest';
import { parseAbbr } from './parse';

describe('parseAbbr', () => {
  it('parses standard abbreviation without tooltip', () => {
    expect(parseAbbr('n.')).toEqual({
      abbr: 'n.',
      tooltip: null,
      isCustom: false,
    });
  });

  it('parses custom abbreviation with tooltip', () => {
    expect(parseAbbr('ч.р.|чоловічий рід')).toEqual({
      abbr: 'ч.р.',
      tooltip: 'чоловічий рід',
      isCustom: true,
    });
  });

  it('handles empty tooltip', () => {
    expect(parseAbbr('x|')).toEqual({
      abbr: 'x',
      tooltip: '',
      isCustom: true,
    });
  });

  it('handles multiple pipes (first one wins)', () => {
    expect(parseAbbr('a|b|c')).toEqual({
      abbr: 'a',
      tooltip: 'b|c',
      isCustom: true,
    });
  });
});
```

---

## 11. SCSS Modularization

Break up `custom.scss` so each heavy element owns its styles.

### Current Problem

```scss
// src/css/custom.scss — 418 lines mixing:
// - CSS variables
// - Font imports
// - Table styles
// - Abbreviation styles
// - Dark mode overrides
// - Layout hacks
// - Component-specific styles
```

### Proposed Structure

```
src/css/
  custom.scss               # Imports all partials
  _variables.scss           # CSS custom properties only
  _fonts.scss               # @font-face and font stacks
  _base.scss                # Body, links, basic elements
  _dark-mode.scss           # [data-theme='dark'] overrides

  elements/
    _tables.scss            # .table_sticky, table borders, etc.
    _abbreviations.scss     # abbr[title] styles
    _code.scss              # Code blocks, pre, kbd
    _language-text.scss     # [lang*=isv] styles

  components/
    _pagination.scss        # Docusaurus pagination overrides
    _sidebar.scss           # Sidebar tweaks
    _disqus.scss            # #disqus_thread margins
```

### Main Entry Point

```scss
// src/css/custom.scss
@use 'variables';
@use 'fonts';
@use 'base';
@use 'dark-mode';

@use 'elements/tables';
@use 'elements/abbreviations';
@use 'elements/code';
@use 'elements/language-text';

@use 'components/pagination';
@use 'components/sidebar';
@use 'components/disqus';
```

### Tables SCSS

```scss
// src/css/elements/_tables.scss

// Sticky first column for horizontal scroll
.table_sticky {
  position: relative;
  border-collapse: separate;
  border-spacing: 0;

  th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    background: var(--ifm-table-background);
    z-index: 1;

    // Shadow to indicate scroll
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: -8px;
      bottom: 0;
      width: 8px;
      background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  // Show shadow when scrolled
  &.is-scrolled th:first-child::after,
  &.is-scrolled td:first-child::after {
    opacity: 1;
  }
}

// Table header styling
table {
  th {
    background: var(--ifm-table-head-background);
    font-weight: var(--ifm-font-weight-bold);
  }

  // Stripe even rows
  &.table_striped tbody tr:nth-child(even) {
    background: var(--ifm-table-stripe-background);
  }
}

// Auxiliary verb styling (used by InflectionTable)
.aux {
  color: var(--ifm-color-secondary-darker);
  font-weight: normal;
}

// Empty cell indicator
.cell-empty {
  color: var(--ifm-color-secondary);
}
```

### Component-Specific SCSS Modules

Heavy components still use CSS Modules:

```
src/components/
  InflectionTable/
    InflectionTable.tsx
    InflectionTable.module.scss    # Component-specific styles

  Transliterator/
    Transliterator.tsx
    Transliterator.module.scss

  IPA/
    IPA.tsx
    IPA.module.scss
```

The global `_tables.scss` provides base table styles; component modules add specifics.

---

## 12. Unified Language System

### The Insight

`:isv[]` is not special — it's just a language with user-selectable script variants.
Many languages have this:

| Language | Variants | Example |
|----------|----------|---------|
| `isv` | `Latn`, `Cyrl` | :isv[slovo] → slovo / слово |
| `sr` | `Latn`, `Cyrl` | :sr[реч] → reč / реч |
| `ru` | `modern`, `petr1708` | :ru[есть] → есть / ѥсть |
| `bg` | `modern`, `ivanchov` | :bg[език] → език / ѥзикъ |

### Architecture

```
src/remark/directives/
  lang/
    index.ts              # Main handler for ALL :xx[] directives
    index.test.ts
    registry.ts           # Language → variant config
    registry.test.ts
    variants/
      isv.ts              # ISV: Latn ↔ Cyrl (uses @interslavic/utils)
      isv.test.ts
      sr.ts               # Serbian: Latn ↔ Cyrl
      sr.test.ts
      ru.ts               # Russian: modern ↔ petr1708
      ru.test.ts
      bg.ts               # Bulgarian: modern ↔ ivanchov
      bg.test.ts
      passthrough.ts      # Default: no transformation
```

### Language Registry

```ts
// src/remark/directives/lang/registry.ts
import { z } from 'zod';

export const variantSchema = z.object({
  id: z.string(),
  label: z.string(),
  transform: z.function()
    .args(z.string())
    .returns(z.string())
    .optional(),
});

export const languageConfigSchema = z.object({
  code: z.string().describe('ISO 639 code'),
  name: z.string(),
  defaultVariant: z.string(),
  variants: z.array(variantSchema),
});

export type LanguageConfig = z.infer<typeof languageConfigSchema>;

export const languageRegistry: Record<string, LanguageConfig> = {
  isv: {
    code: 'isv',
    name: 'Interslavic',
    defaultVariant: 'Latn',
    variants: [
      { id: 'Latn', label: 'Latin' },
      { id: 'Cyrl', label: 'Cyrillic', transform: isvToCyrillic },
    ],
  },
  sr: {
    code: 'sr',
    name: 'Serbian',
    defaultVariant: 'Cyrl',
    variants: [
      { id: 'Cyrl', label: 'Ћирилица' },
      { id: 'Latn', label: 'Latinica', transform: srToLatin },
    ],
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    defaultVariant: 'modern',
    variants: [
      { id: 'modern', label: 'Современный' },
      { id: 'petr1708', label: 'Дореформенный', transform: ruToPreReform },
    ],
  },
  bg: {
    code: 'bg',
    name: 'Bulgarian',
    defaultVariant: 'modern',
    variants: [
      { id: 'modern', label: 'Съвременен' },
      { id: 'ivanchov', label: 'Иванчов', transform: bgToIvanchov },
    ],
  },
  // Languages without variants just have one entry
  en: {
    code: 'en',
    name: 'English',
    defaultVariant: 'default',
    variants: [{ id: 'default', label: 'English' }],
  },
  // ... etc
};
```

### User Preferences (localStorage)

```ts
// src/utils/preferences/languagePreferences.ts

export interface LanguagePreferences {
  /** Map of language code → preferred variant ID */
  variants: Record<string, string>;
}

const STORAGE_KEY = 'interslavic-lang-prefs';

export function getLanguagePreferences(): LanguagePreferences {
  if (typeof window === 'undefined') {
    return { variants: {} };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : { variants: {} };
}

export function setVariantPreference(langCode: string, variantId: string): void {
  const prefs = getLanguagePreferences();
  prefs.variants[langCode] = variantId;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export function getPreferredVariant(langCode: string): string {
  const prefs = getLanguagePreferences();
  const config = languageRegistry[langCode];
  return prefs.variants[langCode] ?? config?.defaultVariant ?? 'default';
}
```

### Unified Component

```tsx
// src/components/LangElement/LangElement.tsx
import React, { useMemo } from 'react';
import { useLanguagePreference } from '@site/src/hooks/useLanguagePreference';
import { languageRegistry } from '@site/src/remark/directives/lang/registry';

interface LangElementProps {
  /** ISO 639 language code */
  lang: string;
  children: React.ReactNode;
}

/**
 * Renders text in a specific language, applying user's preferred script/orthography variant.
 *
 * @example
 * <LangElement lang="isv">slovo</LangElement>
 * // With Cyrillic preference: слово
 * // With Latin preference: slovo
 *
 * <LangElement lang="ru">есть</LangElement>
 * // With modern preference: есть
 * // With petr1708 preference: ѥсть
 */
export function LangElement({ lang, children }: LangElementProps) {
  const preferredVariant = useLanguagePreference(lang);
  const config = languageRegistry[lang];

  const transformedContent = useMemo(() => {
    if (!config) return children;

    const variant = config.variants.find(v => v.id === preferredVariant);
    if (!variant?.transform) return children;

    // Transform text content recursively
    return transformChildren(children, variant.transform);
  }, [children, config, preferredVariant]);

  return (
    <span lang={lang} className="notranslate" translate="no">
      {transformedContent}
    </span>
  );
}

// TransliteratorElement becomes an alias
export const TransliteratorElement = ({ children }) => (
  <LangElement lang="isv">{children}</LangElement>
);
```

### Russian Pre-Reform Example

```ts
// src/remark/directives/lang/variants/ru.ts

/**
 * Transform modern Russian to pre-Petrine orthography (1708).
 *
 * Changes:
 * - е → ѥ (yat) in etymological positions
 * - и → і before vowels
 * - ф → ѳ (fita) in Greek loanwords
 * - Final ъ after consonants
 * - etc.
 */
export function ruToPreReform(text: string): string {
  // This is a simplified example - real implementation would need
  // a dictionary or complex rules
  return text
    // Restore ъ at end of words ending in consonants
    .replace(/\b(\w*[бвгджзклмнпрстфхцчшщ])\b/g, '$1ъ')
    // Common words with yat
    .replace(/\bесть\b/g, 'ѥсть')
    .replace(/\bбелый\b/g, 'бѣлый')
    // ... etc
}
```

### Settings UI Component

```tsx
// src/components/LanguageSettings/LanguageSettings.tsx

/**
 * User interface for selecting script/orthography preferences.
 * Could be in a modal, sidebar, or settings page.
 */
export function LanguageSettings() {
  const [prefs, setPrefs] = useLanguagePreferences();

  const languagesWithVariants = Object.values(languageRegistry)
    .filter(lang => lang.variants.length > 1);

  return (
    <div className="language-settings">
      <h3>Script & Orthography Preferences</h3>
      {languagesWithVariants.map(lang => (
        <div key={lang.code} className="language-setting">
          <label>{lang.name}</label>
          <select
            value={prefs.variants[lang.code] ?? lang.defaultVariant}
            onChange={e => setPrefs(lang.code, e.target.value)}
          >
            {lang.variants.map(v => (
              <option key={v.id} value={v.id}>{v.label}</option>
            ))}
          </select>
          <Preview lang={lang.code} />
        </div>
      ))}
    </div>
  );
}

function Preview({ lang }: { lang: string }) {
  const examples: Record<string, string> = {
    isv: 'Medžuslovjansky jezyk',
    sr: 'Српски језик',
    ru: 'Русский язык есть',
    bg: 'Български език',
  };

  return (
    <span className="preview">
      <LangElement lang={lang}>{examples[lang]}</LangElement>
    </span>
  );
}
```

### Directive Simplification

Now ALL language directives use the same handler:

```ts
// src/remark/directives/lang/index.ts
import { languageRegistry } from './registry';

const SUPPORTED_LANGS = Object.keys(languageRegistry);

export const langDirective: DirectiveHandler = {
  name: SUPPORTED_LANGS, // Array of all supported codes

  transform(node: TextDirective, context: DirectiveContext) {
    const lang = node.name;

    // All languages render to <LangElement lang="xx">
    node.data = {
      hName: 'LangElement',
      hProperties: { lang },
    };
  },
};
```

### Summary

| Before | After |
|--------|-------|
| `:isv[]` → special `TransliteratorElement` | `:isv[]` → `<LangElement lang="isv">` |
| `:sr[]` → static `<span lang="sr">` | `:sr[]` → `<LangElement lang="sr">` with Latn/Cyrl toggle |
| `:ru[]` → static `<span lang="ru">` | `:ru[]` → `<LangElement lang="ru">` with modern/petr1708 toggle |
| 7 handlers + 25 lang codes | 1 unified `lang` handler |

---

## 13. Tooltip Directive

### Syntax Options

```md
:tooltip[This is helpful info]                    <!-- Default: ℹ️ info style -->
:tooltip[Be careful here]{.caution}               <!-- ⚠️ caution style -->
:tooltip[This is dangerous]{.warning}             <!-- 🔴 warning style -->
:tooltip[Pro tip!]{.tip}                          <!-- 💡 tip style -->
:tooltip[Custom icon]{icon=🔍}                    <!-- Custom icon -->
```

### Rendered Output

```html
<span class="tooltip tooltip--info">
  <button
    class="tooltip__trigger"
    aria-describedby="tip-abc123"
    aria-expanded="false"
    type="button"
  >
    <span class="tooltip__icon">ℹ️</span>
  </button>
  <span id="tip-abc123" role="tooltip" class="tooltip__content" hidden>
    This is helpful info
  </span>
</span>
```

### Variants

| Class | Icon | Use case |
|-------|------|----------|
| (default) / `.info` | ℹ️ | Additional information |
| `.caution` | ⚠️ | Something to be aware of |
| `.warning` | 🔴 | Potential problems |
| `.tip` | 💡 | Helpful suggestions |

### Implementation

```ts
// src/remark/directives/tooltip/index.ts
import type { DirectiveHandler } from '../types';

const VARIANT_ICONS: Record<string, string> = {
  info: 'ℹ️',
  caution: '⚠️',
  warning: '🔴',
  tip: '💡',
};

export const tooltipDirective: DirectiveHandler = {
  name: 'tooltip',

  transform(node, context) {
    // Extract variant from classes: {.caution} → 'caution'
    const classes = node.attributes?.class?.split(' ') ?? [];
    const variant = classes.find(c => c in VARIANT_ICONS) ?? 'info';

    // Custom icon overrides variant icon
    const icon = node.attributes?.icon ?? VARIANT_ICONS[variant];

    node.data = {
      hName: 'Tooltip',
      hProperties: {
        variant,
        icon,
      },
    };
  },
};
```

```tsx
// src/components/Tooltip/Tooltip.tsx
import React, { useState, useId } from 'react';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  variant?: 'info' | 'caution' | 'warning' | 'tip';
  icon?: string;
  children: React.ReactNode;
}

/**
 * Accessible inline tooltip with icon trigger.
 *
 * @example MDX
 * :tooltip[This is extra information]
 * :tooltip[Be careful!]{.caution}
 */
export function Tooltip({ variant = 'info', icon, children }: TooltipProps) {
  const [expanded, setExpanded] = useState(false);
  const tooltipId = useId();

  const defaultIcons = {
    info: 'ℹ️',
    caution: '⚠️',
    warning: '🔴',
    tip: '💡',
  };

  return (
    <span className={`${styles.tooltip} ${styles[variant]}`}>
      <button
        className={styles.trigger}
        aria-describedby={tooltipId}
        aria-expanded={expanded}
        type="button"
        onClick={() => setExpanded(!expanded)}
        onBlur={() => setExpanded(false)}
      >
        <span className={styles.icon}>{icon ?? defaultIcons[variant]}</span>
      </button>
      <span
        id={tooltipId}
        role="tooltip"
        className={styles.content}
        hidden={!expanded}
      >
        {children}
      </span>
    </span>
  );
}
```

```scss
// src/components/Tooltip/Tooltip.module.scss
.tooltip {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.trigger {
  background: none;
  border: none;
  padding: 0 0.2em;
  cursor: pointer;
  font-size: 0.9em;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 1;
  }
}

.content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);

  background: var(--ifm-tooltip-background);
  color: var(--ifm-tooltip-color);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  white-space: nowrap;
  max-width: 300px;
  white-space: normal;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 100;

  // Arrow
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: var(--ifm-tooltip-background);
  }

  &[hidden] {
    display: none;
  }
}

// Variant colors
.info .content {
  --ifm-tooltip-background: var(--ifm-color-info);
}

.caution .content {
  --ifm-tooltip-background: var(--ifm-color-warning);
}

.warning .content {
  --ifm-tooltip-background: var(--ifm-color-danger);
}

.tip .content {
  --ifm-tooltip-background: var(--ifm-color-success);
}
```

### Usage Examples in MDX

```md
The verb :isv[byti] :tooltip[This is the only truly irregular verb in Interslavic]
is conjugated as follows...

Be careful when using the simple past tense :tooltip[Most Slavs won't understand
these forms. Avoid in communication with Poles, Russians, etc.]{.caution}

:tooltip[Pro tip: Use compound past for all everyday communication]{.tip}
```

### Alternative: Inline vs Block

For longer content, could also support block tooltips:

```md
:::tooltip{.caution}
This is a longer explanation that spans multiple lines.
It can contain **markdown** and even :isv[Interslavic text].
:::
```

---

## 14. Directive Reference (Final)

| Directive | Syntax | Output |
|-----------|--------|--------|
| Language (unified) | `:isv[]`, `:sr[]`, `:ru[]`, etc. | `<LangElement lang="xx">` with variant support |
| Tooltip | `:tooltip[content]{.variant}` | `<Tooltip>` with icon |
| Abbreviation (standard) | `:abbr[n.]` | `<abbr title="{lookup}">` |
| Abbreviation (custom) | `:abbr[xyz\|tooltip]` | `<abbr title="tooltip">` |
| IPA | `:ipa[ʃ]` | `<IPA sound="ʃ"/>` |
| Keyboard | `:kbd[Ctrl]` | `<kbd>` |
| Stress | `:stress[o]` | `<u>` |
| No translate | `:notr[text]` | `<span class="notranslate">` |
| Component | `:::component{name=X}` | `<X/>` |

### Directive Count

| Category | Count |
|----------|-------|
| `lang` (unified handler) | 1 handler, ~30 language codes |
| `abbr` | 1 handler (with parse + lookup) |
| `tooltip` | 1 handler (with variants) |
| `ipa` | 1 handler |
| `kbd` | 1 handler (trivial) |
| `stress` | 1 handler (trivial) |
| `notr` | 1 handler (trivial) |
| `component` | 1 handler |
| **Total** | **8 handlers** |
