// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Medžuslovjanska funkcija',
  tagline: 'Język směsta råzumlivy vsim slovjanam bez učeńja',
  url: 'https://interslavic.fun',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'medzuslovjansky', // Usually your GitHub org/user name.
  projectName: 'interslavic.fun', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/medzuslovjansky/database/edit/main/ucenje/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/medzuslovjansky/database/edit/main/blogy/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'en-US',
    locales: [
      'en-US',
      'sla-Latn-x-isv',
      'sla-Cyrl-x-isv',
      'sla-Latn-x-isv-etymolog',
    ],
    localeConfigs: {
      'en': {
        label: 'English (US)',
        direction: 'ltr',
      },
      'sla-Latn-x-isv': {
        label: 'Medžuslovjansky',
        direction: 'ltr',
      },
      'sla-Cyrl-x-isv': {
        label: 'Меджусловјанскы',
        direction: 'ltr',
      },
      'sla-Latn-x-isv-etymolog': {
        label: 'Međuslovjansky (etimologičny)',
        direction: 'ltr',
      },
    },
  },

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: false,
      navbar: {
        title: null,
        logo: {
          alt: 'Medžuslovjanska funkcija',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'NAVBAR_LEARN',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'NAVBAR_RESOURCES',
          },
          {
            to: '/blog',
            label: 'NAVBAR_BLOGS',
            position: 'right'
          },
          {
            href: 'https://interslavic-dictionary.com',
            label: 'NAVBAR_ONLINE_DICTIONARY',
            position: 'right',
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Mapa sajta',
            items: [
              {
                label: 'Glåvna stranica',
                to: '/',
              },
              {
                label: 'Učeńje',
                to: '/study',
              },
              {
                label: 'Članky',
                to: '/blogs/',
              },
              {
                label: 'Resursy',
                to: '/resources',
              },
              {
                label: 'Pravna informacija',
                to: '/legal',
              },
            ],
          },
          {
            title: 'Sociaĺne mrěži',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/interslavic',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/GZxzZ5sNbr',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCShYXuD2TyJlYd9UWUUiYiA',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@interslavic',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()}, [Medžuslovjanska organizacija](https://github.com/medzuslovjansky).`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
