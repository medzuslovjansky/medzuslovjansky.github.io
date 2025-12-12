# CLAUDE.md

## What This Project Is

This is **interslavic.fun** — a Docusaurus 3 rewrite of Jan van Steenbergen's legacy Interslavic grammar site (`steen.free.fr/interslavic`). The legacy site was 77 hand-coded HTML pages with no templating, no build process, and content duplicated across Latin/Cyrillic columns.

**The core insight**: Linguistic rules belong in code, not in static tables. Authors write content once; the system handles script conversion, localization, and rendering.

## The Architecture in One Sentence

MDX content + custom directives (`:isv[]`, `:abbr[]`) + JSX components + `@interslavic/utils` library = grammar that adapts to reader preferences.

## Commands

```bash
yarn                  # Install dependencies (Yarn 4)
yarn start            # Dev server
yarn build            # Build all locales
DOCUSAURUS_LOCALE=en yarn build  # Build single locale (faster)
yarn test             # Unit tests
yarn write-translations  # Generate i18n files
```

## The Linguistic Engine: `@interslavic/utils`

This npm package is the brain. Before writing any grammar component, check what it provides:

```js
import {
  declensionNoun,      // Generate noun declension tables
  declensionAdjective, // Generate adjective declension tables
  conjugationVerb,     // Generate verb conjugation tables
  transliterate        // Convert between scripts
} from '@interslavic/utils';
```

**Rule**: If `@interslavic/utils` can compute it, don't hardcode it. Fix the rule once in the library, every table updates.

## Converting Legacy HTML Pages

Source: `medzuslovjansky/steen-legacy` repo (mirror of `steen.free.fr/interslavic/`)

### Workflow

1. **Compare** legacy HTML with existing `docs/` MDX — check what's already converted
2. **Identify tables** — can they be generated via `@interslavic/utils`, or must be static?
3. **Apply directives** to ALL Interslavic text (see table below)
4. **Create JSX components** for complex tables in `src/markdown/{topic}/`
5. **Register components** in `src/theme/MDXContent/MDXComponents.js`
6. **Reference in MDX** via `:::component{name=MDComponentName}:::`

### Directive Conversion (EVERY word matters)

| Legacy HTML | MDX Directive | Example |
|-------------|---------------|---------|
| `<i>slovo</i>` or `<b>slovo</b>` | `:isv[slovo]` | Any Interslavic word |
| `<b>-ati</b>` (ending) | `:isv[\`-ati\`]` | Grammatical suffixes |
| `<i>klad-</i>` (stem) | `:isv[\`klad-\`]` | Word stems |
| `(impf.)`, `(pf.)` | `:abbr[impf.]`, `:abbr[pf.]` | Aspect markers |
| `m.`, `f.`, `n.` | `:abbr[m.]`, `:abbr[f.]`, `:abbr[n.]` | Gender markers |
| `nom.`, `gen.`, `dat.` | `:abbr[nom.]`, `:abbr[gen.]`, `:abbr[dat.]` | Case markers |
| `sg.`, `pl.` | `:abbr[sg.]`, `:abbr[pl.]` | Number markers |
| `lit.` | `:abbr[lit.]` | "literally" |

The `:abbr[]` directive provides **localized tooltips** — readers see explanations in their UI language.

### JSX Component Rules

**CRITICAL**: Always wrap Interslavic text in `<TransliteratorElement>`:

```jsx
// WRONG - no transliteration support
<td>dělati</td>

// RIGHT - respects user's script preference
<td><TransliteratorElement>dělati</TransliteratorElement></td>
```

**Pattern for computed tables** (preferred):

```jsx
import { declensionNoun } from '@interslavic/utils';
import { TransliteratorElement } from '@site/src/components';

export default function NounTable({ lemma, gender, animate }) {
  const forms = declensionNoun(lemma, '', gender, animate);
  return (
    <table>
      {/* Map over forms, wrap each in TransliteratorElement */}
    </table>
  );
}
```

**Pattern for static tables** (when no util function exists):

```jsx
import { TransliteratorElement } from '@site/src/components';

export default function MotionVerbs() {
  return (
    <table>
      <tr>
        <td><TransliteratorElement>hoditi</TransliteratorElement></td>
        {/* ... */}
      </tr>
    </table>
  );
}
```

Use `<Tabs>` from `@theme/Tabs` for variants (singular/plural, hard/soft, conjugation classes).

## Directory Structure

```
docs/                          # English MDX source (authoritative)
i18n/{locale}/docusaurus-plugin-content-docs/  # Translations
src/
  components/
    Transliterator/            # User-facing script converter tool
    TransliteratorElement/     # Inline transliteration wrapper
    IPA/                       # Phonetic symbols with audio
    Abbr/                      # Abbreviation tooltips
  markdown/                    # JSX components for MDX embedding
    nouns/                     # Noun declension tables
    verbs/                     # Verb conjugation tables
    adjectives/                # Adjective tables
    numerals/                  # Numeral tables + converter
    ...
  remark/                      # MDX preprocessing plugins
    custom-directives.js       # :isv[], :abbr[], :ipa[], etc.
    abbr-i18n.js              # Abbreviation translations
  utils/                       # Site-specific utilities
  theme/MDXContent/MDXComponents.js  # Component registration
```

## Component Naming Convention

Components are numbered per topic for sequential use in MDX:

- `MDNouns1` - basic endings table
- `MDNouns2` - masculine declension examples
- `MDNouns3` - neuter declension examples
- etc.

This allows referencing specific tables: `:::component{name=MDNouns2}:::`

## i18n

- Default locale: `en`
- Locales: be, bg, bs, cs, hr, mk, pl, ru, sk, sl, sr-Cyrl, uk
- UI strings: `i18n/{locale}/` JSON files
- Doc translations: `i18n/{locale}/docusaurus-plugin-content-docs/current/`

Build auto-detects changed locale from `git-changes.log` for CI optimization.

## Known Technical Debt

1. **Verb components don't use `conjugationVerb()`** — they're hardcoded tables that should be refactored to use the util function
2. **Missing `TransliteratorElement`** in some JSX components — audit needed
3. **Inconsistent component patterns** — some use Tabs, some don't; some compute, some hardcode

## Testing

```bash
yarn test                              # Unit tests (Jest + jsdom)
yarn start & yarn test --config e2e/jest.config.js  # Visual regression
```

## Before You Start Any Task

1. **Read the legacy HTML** in `steen-legacy` repo if converting a page
2. **Check `@interslavic/utils`** for existing functions before hardcoding
3. **Check existing components** in `src/markdown/` — similar ones may exist
4. **Wrap ALL Interslavic text** in directives (`:isv[]`) or `TransliteratorElement`
5. **Test with script toggle** — content must work in both Latin and Cyrillic
