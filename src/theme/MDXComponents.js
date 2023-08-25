import MDXComponents from "@theme-original/MDXComponents";
import DocCardList from "@theme/DocCardList";
import {
  Abbr,
  CustomBeforeSection,
  CustomAfterSection,
  IPA,
} from "@site/src/components";
import MDPronunciation1 from "@site/src/markdown/pronunciation-of-the-alphabet";
import MDPronunciation2 from "@site/src/markdown/etymological-alphabet-extensions";
import MDNouns1 from "@site/src/markdown/nouns/endings";
import MDNouns2 from "@site/src/markdown/nouns/masculine";
import MDNouns3 from "@site/src/markdown/nouns/neuter";
import MDNouns4 from "@site/src/markdown/nouns/feminine";
import MDNouns5 from "@site/src/markdown/nouns/athematic";
import MDAdjectives1 from "@site/src/markdown/basic-endings.mdx";
import MDAdjectives2 from "@site/src/markdown/adjectives-good.mdx";
import MDAdjectives3 from "@site/src/markdown/adjectives-fresh.mdx";
import MDPronouns1 from "@site/src/markdown/pronouns/personal";
import MDPronouns2 from "@site/src/markdown/pronouns/posessive";
import MDPronouns3 from "@site/src/markdown/pronouns/demonstrative";
import MDPronouns4 from "@site/src/markdown/pronouns/interrogative";
import MDPronouns5 from "@site/src/markdown/pronouns/indefinite";
import MDPronouns6 from "@site/src/markdown/pronouns/pronomonal";
import MDNumerals1 from "@site/src/markdown/numerals/2-4";
import MDNumerals2 from "@site/src/markdown/numerals/5-30";
import MDVerbs1 from "@site/src/markdown/verbs/motion";
import MDVerbs2 from "@site/src/markdown/verbs/presentTense";
import MDVerbs3 from "@site/src/markdown/verbs/pastTense";

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
  MDNumerals1,
  MDNumerals2,
  MDVerbs1,
  MDVerbs2,
  MDVerbs3,
};
