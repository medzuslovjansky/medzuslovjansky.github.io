/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'introduction',
    {
      type: 'category',
      label: 'O języku',
      items: [
        'design-criteria',
        'history',
      ],
    },
    {
      type: 'category',
      label: 'Gramatika',
      items: [
        'grammar/orthography',
        'grammar/phonology',
        'grammar/nouns',
        'grammar/adjectives',
        'grammar/pronouns',
        'grammar/numerals',
        'grammar/verbs',
        'grammar/prepositions',
        'grammar/conjunctions',
        'grammar/pronunciation',
        'grammar/syntax',
      ],
    },
    {
      type: 'category',
      label: 'Oproščeny kurs',
      items: [
        'grammar/simplified/1',
        'grammar/simplified/2',
      ],
    },
    'faq'
  ],
};

module.exports = sidebars;
