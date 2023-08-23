import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';
import { Abbr, CustomBeforeSection, CustomAfterSection, IPA } from '@site/src/components';
import MDPronunciation1 from '@site/src/markdown/pronunciation-of-the-alphabet';
import MDPronunciation2 from '@site/src/markdown/etymological-alphabet-extensions';
import MDNouns1 from '@site/src/markdown/nouns/endings';
import MDNouns2 from '@site/src/markdown/nouns/masculine';
import MDNouns3 from '@site/src/markdown/nouns/neuter';
import MDNouns4 from '@site/src/markdown/nouns/feminine';
import MDNouns5 from '@site/src/markdown/nouns/athematic'
import MDAdjectives1 from '@site/src/markdown/basic-endings.mdx';
import MDAdjectives2 from '@site/src/markdown/adjectives-good.mdx';
import MDAdjectives3 from '@site/src/markdown/adjectives-fresh.mdx';
import MDPronouns1 from '@site/src/markdown/personal-and-reflexive-pronouns.mdx';
import MDPronouns2 from '@site/src/markdown/moj-pronouns.mdx';
import MDPronouns3 from '@site/src/markdown/toj-pronouns.mdx';
import MDPronouns4 from '@site/src/markdown/kto-pronouns.mdx';
import MDPronouns5 from '@site/src/markdown/ves-is-inflected.mdx';
import MDPronouns6 from '@site/src/markdown/pronominal-adverbs.mdx';

export default {
  ...MDXComponents,
  CustomAfterSection,
  CustomBeforeSection,
  DocCardList,
  IPA,
  MDPronunciation1,
  MDPronunciation2,
  MDNouns1,
  MDNouns2,
  MDNouns3,
  MDNouns4,
  MDNouns5,
  MDAdjectives1,
  MDAdjectives2,
  MDAdjectives3,
  MDPronouns1,
  MDPronouns2,
  MDPronouns3,
  MDPronouns4,
  MDPronouns5,
  MDPronouns6,
};
