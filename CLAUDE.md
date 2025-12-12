# CLAUDE.md

## What This Project Is

**interslavic.fun** — Docusaurus 3 site for Interslavic grammar. Content once, rendered everywhere (Latin/Cyrillic, 13 locales).

## Commands

```bash
yarn start            # Dev server
yarn build            # Build all locales
DOCUSAURUS_LOCALE=en yarn build  # Single locale (faster)
yarn test             # Unit tests (node:test)
```

## Core Principle: Data First, Not Components First

**Wrong approach**: "I need a MotionVerbsTable component" → create MotionVerbsTable.jsx, MotionVerbsTable.data.json, MotionVerbsTable.i18n.json...

**Right approach**: "I need to display motion verbs" → use existing `@lemma/` data + `flatten()` + `buildTable()` → thin React wrapper.

## The Pipeline

```
@lemma/*.json → flatten() → buildTable(config) → TableStructure → React renders
```

### Lemma Data (`@lemma/`)

Each lemma is a CoNLL-U style JSON in `src/data/lemma/`:

```json
{
  "lemma": "hoditi",
  "upos": "VERB",
  "forms": [
    { "form": "hodi*ti*", "feats": { "VerbForm": "Inf" } },
    { "form": "hož*u*", "feats": { "Person": "1", "Number": "Sing", "Tense": "Pres" } }
  ]
}
```

Import: `import hoditi from '@lemma/hoditi.json'`

### Functions, Not Config Objects

**Wrong** - passing config objects around:
```js
const motionConfig = { rows: 'lemma', columns: 'misc.Motion' };
const table = buildTable(tokens, motionConfig);
```

**Right** - self-contained functions:
```js
export function buildMotionVerbsTable() {
  return buildTable(
    [...flatten(hoditi), ...flatten(idti), ...flatten(pojdti)],
    { rows: 'lemma', columns: 'misc.Motion', filter: { include: { 'feats.VerbForm': 'Inf' } } }
  );
}
```

Functions encapsulate **both** the lemma imports AND the config. They're testable units.

## File Organization: Consolidate by Topic

**Wrong** - one file per table:
```
src/markdown/verbs/
  MotionVerbsTable.logic.ts
  MotionVerbsTable.i18n.json
  PresentTenseTable.logic.ts
  PresentTenseTable.i18n.json
  ... (40+ files)
```

**Right** - one file per topic:
```
src/markdown/verbs/
  index.jsx         # All verb table components
  verbs.logic.ts    # All build functions: buildMotionVerbsTable(), buildPresentTenseTable()...
  verbs.i18n.json   # All verb-related translations
  verbs.test.ts     # Snapshot tests for each function
```

### Example Structure

```ts
// verbs.logic.ts
import { flatten } from '@site/src/utils/inflection/flatten';
import { buildTable } from '@site/src/utils/inflection/buildTable';
import hoditi from '@lemma/hoditi.json';
import idti from '@lemma/idti.json';

export function buildMotionVerbsTable() {
  return buildTable([...flatten(hoditi), ...flatten(idti)], {
    rows: 'lemma',
    columns: 'misc.Motion',
  });
}

export function buildPresentTenseTable() {
  return buildTable([...flatten(delati)], {
    rows: 'feats.Person',
    columns: 'feats.Number',
    filter: { include: { 'feats.Tense': 'Pres' } },
  });
}
```

```jsx
// index.jsx
import { buildMotionVerbsTable, buildPresentTenseTable } from './verbs.logic';
import { InflectionTable } from '@site/src/components';

export function MotionVerbsTable() {
  return <InflectionTable table={buildMotionVerbsTable()} />;
}

export function PresentTenseTable() {
  return <InflectionTable table={buildPresentTenseTable()} />;
}
```

```ts
// verbs.test.ts
it('buildMotionVerbsTable', (t) => t.assert.snapshot(buildMotionVerbsTable()));
it('buildPresentTenseTable', (t) => t.assert.snapshot(buildPresentTenseTable()));
```

## Utilities (`src/utils/inflection/`)

| Function | Purpose |
|----------|---------|
| `flatten(paradigm)` | Paradigm JSON → Token[] |
| `buildTable(tokens, config)` | Token[] → TableStructure |
| `buildTableGroups(tokens, config)` | Split into multiple tables (tabs) |
| `renderForm(form)` | Markup (`*ending*`, `~aux~`) → HTML |

### Form Markup

- `*...*` → emphasized ending: `děla*ti*`
- `~...~` → grayed auxiliary: `~budu~ děla*ti*`

## Language Components (`src/components/Lang/`)

| Component | Usage |
|-----------|-------|
| `<Lang lang="isv">` | Base component, reads script pref from localStorage |
| `<Isv>` | Shorthand for `<Lang lang="isv">` |
| `TransliteratorElement` | Deprecated alias for `<Isv>` |

Script preference stored in `localStorage.interslavic-script-pref` as `Latn` or `Cyrl`.

Remark directives (`:isv[]`, `:sr[]`, `:ru[]`) all render to `<Lang lang="...">`.

## Common Patterns

### Locale
```js
const { i18n } = useDocusaurusContext();
const locale = i18n.currentLocale;
```
**Never** parse URL. Always `useDocusaurusContext()`.

### ISV Text in JSX
```jsx
import { Isv } from '@site/src/components';
<Isv>dělati</Isv>
```

### ISV Text in MDX
```md
:isv[dělati]
```

Both render to `<Lang lang="isv">` which reads user's script preference from localStorage.

### Abbreviations
`:abbr[m.]` → uses `src/remark/abbr-i18n.js` (supports composition: `m.sg.` = masculine + singular)

## Before Any Task

1. **Start from data** — What lemmas do I need? Do they exist in `@lemma/`?
2. **Use existing utilities** — `flatten()`, `buildTable()` do the heavy lifting
3. **Write functions** — Each function = lemmas + config, fully testable
4. **Consolidate** — One `.logic.ts` per topic, not per table
5. **Snapshot test** — Test the `TableStructure`, not rendered HTML
6. **Explore first** — Run `grep`, read files. Don't reinvent.
