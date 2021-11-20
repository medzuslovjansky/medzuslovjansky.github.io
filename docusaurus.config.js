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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Medžuslovjanska funkcija',
        logo: {
          alt: '',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
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
                href: 'https://www.youtube.com/channel/UCShYXuD2TyJlYd9UWUUiYiA',
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
        copyright: `© ${new Date().getFullYear()}, Medžuslovjanska organizacija.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
