# GIMMICKS.md

A catalog of all Docusaurus customizations in this project, their purposes, and known issues.

---

## 1. Remark Plugins

Located in: `src/remark/`

### 1.1 Custom Directives (`custom-directives.js`)

**Purpose:** Transforms MDX directives into React components.

| Directive | Output | Example |
|-----------|--------|---------|
| `:isv[text]` | `<TransliteratorElement>` | `:isv[slovo]` → Interslavic with script toggle |
| `:abbr[text]` | `<abbr>` with tooltip | `:abbr[impf.]` → hover shows "imperfective aspect" |
| `:ipa[phoneme]` | `<IPA>` | `:ipa[ʃ]` → clickable phonetic symbol with audio |
| `:kbd[key]` | `<kbd>` | `:kbd[Ctrl]` → keyboard key styling |
| `:stress[text]` | `<u>` | `:stress[o]` → underlined stress marker |
| `:notr[text]` | `<span class="notranslate">` | Prevents Google Translate |
| `:::component{name=X}` | Named component | `:::component{name=MDVerbs1}:::` |
| `:en[]`, `:ru[]`, etc. | `<span lang="...">` | Language-tagged text |

**Special behavior:**
- Converts `t́` to `ť` in Interslavic text
- Looks up abbreviation tooltips from `abbr-i18n.js`

**Config:** `docusaurus.config.js` line ~113

**Status:** ✅ Core functionality, well-designed

---

### 1.2 Before/After Section Injector (`mdx-before-after-plugin.js`)

**Purpose:** Automatically injects components into doc pages.

**Behavior:**
- Inserts `<CustomBeforeSection>` after first `<h1>`
- Inserts `<CustomAfterSection>` before `<definition>` or at end

**Used for:**
- Translation issue warnings (below title)
- License info (at page bottom)

**Status:** ⚠️ Works but "magical" — not obvious where these sections come from

---

### 1.3 Abbreviation i18n Database (`abbr-i18n.js`)

**Purpose:** Multi-language tooltips for grammatical abbreviations.

**Scope:** ~400 abbreviation combinations across 13 locales.

**Categories:**
- Genders: `m.`, `f.`, `n.`, `masc.`, `fem.`, `neut.`
- Cases: `nom.`, `gen.`, `acc.`, `dat.`, `loc.`, `ins.`, `voc.`
- Numbers: `sg.`, `pl.`
- Aspects: `impf.`, `pf.`
- Composite: `m.nom.sg.`, `f.acc.pl.`, etc.

**Status:** 🔴 **Technical debt**

**Issues:**
- 400+ lines of hardcoded nested objects
- No schema validation
- Easy to have inconsistencies across locales
- Difficult to maintain

**Proposed fix:** Convert to JSON/YAML with JSON Schema validation:
```
src/data/abbreviations/
  schema.json
  en.json
  ru.json
  ...
```

---

## 2. Theme Overrides

Located in: `src/theme/`

### 2.1 MDXContent Override (`MDXContent/`)

**Files:** `index.js`, `MDXComponents.js`

**Purpose:** Register custom components for use in MDX via `:::component{name=X}`.

**Current state:** 70+ manual imports and registrations:

```js
import MDNouns1 from "@site/src/markdown/nouns/endings";
import MDNouns2 from "@site/src/markdown/nouns/masculine";
// ... 68 more imports
export default {
  ...MDXComponents,
  MDNouns1,
  MDNouns2,
  // ... 68 more registrations
}
```

**Status:** 🔴 **Technical debt**

**Issues:**
- Every new component requires: new file + new import + new registration
- No auto-discovery
- Easy to forget registration

**Proposed fix:** Auto-discover components from `src/markdown/` using webpack context or build-time script.

---

### 2.2 Blog Post Footer (`BlogPostItem/Footer/`)

**Purpose:** Add Disqus comments to blog posts.

**Implementation:** Wraps original footer with `<DiscussionEmbed>`.

**Configuration:**
- Shortname: `"interslavic-fun"` (hardcoded)
- URL cleaning: strips locale prefix, removes `-cyrl` suffix
- Locale mapping: `bs/hr → sr-Latn`, `sr-Cyrl → sr`

**Status:** ⚠️ Works but hardcoded shortname

---

## 3. Build Customizations

### 3.1 MDX Loader Patch (`patches/@docusaurus+mdx-loader+3.7.0.patch`)

**Purpose:** Removes `.md` from MDX format extensions.

**Why:** Ensures only `.mdx` files get MDX processing, not plain `.md`.

**Applied via:** `patch-package` in npm `prepare` script.

**Status:** 🔴 **Fragile**

**Issues:**
- Breaks on `@docusaurus/mdx-loader` upgrades
- Must manually update patch for each version
- No upstream fix

**Proposed fix:** Either upstream the change or find alternative solution.

---

### 3.2 Webpack Plugin (`src/plugins/webpack.js`)

**Purpose:** Adds source maps (`devtool: 'source-map'`).

**Status:** ✅ Fine

---

### 3.3 Jest Config Helper (`src/plugins/jest-config.js`)

**Purpose:** Extracts Docusaurus webpack aliases for Jest `moduleNameMapper`.

**How:** Loads Docusaurus site config, extracts `resolve.alias` from webpack config.

**Status:** ✅ Clever solution for testing components with `@site/` imports

---

### 3.4 Single-Locale CI Builds

**Location:** `docusaurus.config.js` lines 22-37

**Purpose:** Optimize CI by building only changed locales.

**How:** Parses `git-changes.log` file to detect changed i18n files.

**Status:** ⚠️ Fragile

**Issues:**
- Fails silently if `git-changes.log` doesn't exist
- Relies on CI generating this file correctly

---

## 4. CSS Customizations

Located in: `src/css/custom.scss` (418 lines)

### 4.1 Legitimate Styling

| Feature | Selector | Purpose |
|---------|----------|---------|
| Fonts | `--ifm-font-family-*` | Alegreya Sans, Noto Serif/Sans |
| Theme colors | `--ifm-color-*` | Brand colors |
| Dark mode | `[data-theme='dark']` | Dark theme overrides |
| ISV text | `[lang*=isv]` | Italic serif for Interslavic |
| Abbreviations | `abbr[title]` | Dotted underline + tooltip |

### 4.2 Layout Hacks

| Class | Purpose | Assessment |
|-------|---------|------------|
| `.table_sticky` | Sticky first column | ⚠️ Should be component prop |
| `.invisible` | Hide table cell | 🔴 Hack |
| `.noLeft`, `.noRight` | Remove cell borders | 🔴 Hack |
| `.table_full`, `.table_mw` | Width control | ⚠️ Should be component prop |

**Status:** 🔴 Mix of legitimate styling and hacks

**Proposed fix:** Move table layout control into components, not CSS classes.

---

## 5. Component Architecture

### 5.1 Core Components (`src/components/`)

| Component | Purpose | Status |
|-----------|---------|--------|
| `TransliteratorElement` | Inline Latin→Cyrillic based on locale | ✅ Core |
| `Transliterator` | Interactive script converter tool | ✅ Good |
| `IPA` | Phonetic symbols with audio playback | ✅ Good |
| `Abbr` | Abbreviation with tooltip | ✅ Good |
| `InflectionTable` | Data-driven grammar tables | ✅ New |
| `CustomBeforeSection` | Translation warnings | ✅ Fine |
| `CustomAfterSection` | License info | ✅ Fine |

### 5.2 Markdown Components (`src/markdown/`)

**Purpose:** JSX components for grammar tables, embedded via `:::component{name=X}`.

**Count:** 50+ files across:
- `nouns/` - 5 components
- `adjectives/` - 3 components
- `pronouns/` - 6 components
- `verbs/` - 11 components
- `numerals/` - 3 components
- `phonology/` - 3 components
- And more...

**Pattern:**
```jsx
import { TransliteratorElement } from '@site/src/components';

export default function MDNouns1() {
  return (
    <table className="table_sticky">
      <tr>
        <td><TransliteratorElement>brat</TransliteratorElement></td>
        ...
      </tr>
    </table>
  );
}
```

**Status:** 🔴 **Major technical debt**

**Issues:**
1. **Hardcoded tables** — Most verb tables don't use `@interslavic/utils` functions
2. **Not translatable** — English headers baked into JSX, not in i18n files
3. **Manual TransliteratorElement** — Every ISV word wrapped manually
4. **No consistency** — Some use Tabs, some don't; some computed, some static

**Proposed fix:**
- Static reference tables → MDX with `:isv[]` directives
- Computed paradigms → `InflectionTable` with JSON data
- See [SEMANTIC_INDEX.md](./SEMANTIC_INDEX.md) for full inventory

---

## 6. i18n Setup

**Default locale:** `en`

**Supported locales (13):**
- Cyrillic: `be`, `bg`, `mk`, `ru`, `sr-Cyrl`, `uk`
- Latin: `bs`, `cs`, `hr`, `pl`, `sk`, `sl`

**Structure:**
```
i18n/{locale}/
  code.json                              # UI strings
  docusaurus-plugin-content-docs/        # Doc translations
  docusaurus-plugin-content-blog/        # Blog translations
  docusaurus-theme-classic/              # Theme translations
```

**Status:** ✅ Standard Docusaurus i18n

---

## 7. Priority Fixes

### High Priority

1. **Convert static tables to MDX**
   - Motion verbs, correlatives, etc.
   - Enables translator workflow
   - Reduces JSX component count

2. **Move `abbr-i18n.js` to JSON**
   - Add schema validation
   - Easier to maintain
   - Can generate TypeScript types

3. **Auto-discover MDX components**
   - Eliminate manual registration in `MDXComponents.js`
   - Use webpack `require.context` or build script

### Medium Priority

4. **Add `table_sticky` via remark plugin**
   - Auto-detect tables with `:isv[]` content
   - Remove need for manual class application

5. **Refactor verb components to use `conjugationVerb()`**
   - Replace hardcoded tables with computed ones
   - Use new `InflectionTable` component

### Low Priority

6. **Upstream MDX loader patch**
   - Or find alternative solution
   - Reduces upgrade friction

7. **Externalize Disqus config**
   - Move shortname to `docusaurus.config.js`

---

## 8. File Index

```
src/
  remark/
    custom-directives.js      # :isv[], :abbr[], etc.
    mdx-before-after-plugin.js # Section injection
    abbr-i18n.js              # Abbreviation tooltips (400+ lines)

  theme/
    MDXContent/
      index.js                # MDX provider wrapper
      MDXComponents.js        # 70+ component registrations
    BlogPostItem/Footer/
      index.js                # Disqus integration

  plugins/
    webpack.js                # Source maps
    jest-config.js            # Alias extraction for tests

  components/
    TransliteratorElement/    # Inline transliteration
    Transliterator/           # Interactive converter
    IPA/                      # Phonetic symbols
    Abbr/                     # Abbreviation wrapper
    InflectionTable/          # Data-driven tables (new)
    sections/                 # Before/After section content

  markdown/
    nouns/                    # 5 table components
    adjectives/               # 3 table components
    pronouns/                 # 6 table components
    verbs/                    # 11 table components
    numerals/                 # 3 components (incl. converter)
    phonology/                # 3 components
    ...                       # ~50 total

  css/
    custom.scss               # 418 lines global styles

  utils/
    inflection/               # New table building utilities

  data/
    paradigms/                # JSON paradigm data (new)

patches/
  @docusaurus+mdx-loader+3.7.0.patch  # MDX extension fix
```
