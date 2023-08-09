import MDXComponents from '@theme-original/MDXComponents';
import DocCardList from '@theme/DocCardList';
import { CustomBeforeSection, CustomAfterSection, IPA } from '@site/src/components';
import MDPronunciation1 from '@site/src/markdown/pronunciation-of-the-alphabet';
import MDPronunciation2 from '@site/src/markdown/etymological-alphabet-extensions';
import MDNouns1 from '@site/src/markdown/nouns/endings';
import MDNouns2 from '@site/src/markdown/nouns/masculine';
import MDNouns3 from '@site/src/markdown/nouns/neuter';
import MDNouns4 from '@site/src/markdown/nouns/feminine';
import MDNouns5 from '@site/src/markdown/nouns/athematic'

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
};
