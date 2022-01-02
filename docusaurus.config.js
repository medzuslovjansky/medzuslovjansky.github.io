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
      'en-US'
    ],
    localeConfigs: {
      'en-US': {
        label: 'English (US)',
        direction: 'ltr',
      },
      'art-Latn-x-interslv': {
        label: 'Medžuslovjansky (Latinica)',
        direction: 'ltr',
      },
      'art-Cyrl-x-interslv': {
        label: 'Меджусловјанскы (Кирилица)',
        direction: 'ltr',
      },
      'art-Latn-x-interslv-etymolog': {
        label: 'Međuslovjansky (Etimologičny)',
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
            className: 'navbar__item--locale-dropdown',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'NAVBAR_LEARN',
          },
          {
            // type: 'doc',
            // docId: 'resources',
            to: '/somewhere',
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
            className: 'navbar__item--cta-button',
            position: 'right',
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
      },
      footer: {
        style: 'dark',
        logo: {
          href: '/',
          alt: 'Medžuslovjanska funkcija',
          src: 'img/logo-footer.svg',
        },
        links: [
          {
            title: 'FOOTER_SITEMAP',
            items: [
              {
                label: 'FOOTER_HOME_PAGE',
                to: '/',
              },
              {
                label: 'FOOTER_LEARN',
                to: '/learn',
              },
              {
                label: 'FOOTER_ARTICLES',
                to: '/articles',
              },
              {
                label: 'FOOTER_RESOURCES',
                to: '/resources',
              },
              {
                label: 'FOOTER_LEGAL',
                to: '/legal',
              },
            ],
          },
          {
            title: 'FOOTER_SOCIAL_NETWORKS',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/groups/interslavic',
                icon: {
                  src: 'img/social/facebook-light.svg'
                },
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/n3saqm27QW',
                icon: {
                  src: 'img/social/discord-light.svg'
                },
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/channel/UCShYXuD2TyJlYd9UWUUiYiA',
                icon: {
                  src: 'img/social/youtube-light.svg'
                },
              },
              {
                label: 'TikTok',
                href: 'https://tiktok.com/@interslavic',
                icon: {
                  src: 'img/social/tiktok-light.svg'
                },
              },
              {
                label: 'GitHub',
                href: 'https://github.com/medzuslovjansky',
                icon: {
                  src: 'img/social/github-light.svg'
                },
              },
            ],
          },
          {
            title: 'FOOTER_PREFERENCES',
            items: [
              {
                type: 'localeDropdown',
                html: '<!-- -->'
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
