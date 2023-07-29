// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes: prismThemes } = require('prism-react-renderer');

async function createConfig() {
  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Interslavic',
    url: 'https://interslavic.fun',
    baseUrl: '/',
    trailingSlash: true,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'medzuslovjansky',
    projectName: 'medzuslovjansky.github.io',
    deploymentBranch: 'gh-pages',
    plugins: [
      '@noomorph/docusaurus-plugin-sass',
      require.resolve('@noomorph/docusaurus-search-local'),
      require.resolve('./src/plugins/webpack.js'),
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl: 'https://github.com/medzuslovjansky/medzuslovjansky.github.io/edit/main/',
            editLocalizedFiles: true,
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            remarkPlugins: [
              require('./src/remark/mdx-before-after-plugin'),
              require('./src/remark/custom-directives'),
            ],
          },
          blog: {
            routeBasePath: 'articles',
            path: './articles',
            showReadingTime: true,
            editUrl:
              'https://github.com/medzuslovjansky/medzuslovjansky.github.io/edit/main/',
            editLocalizedFiles: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.scss'),
          },
        }),
      ],
    ],

    i18n: {
      defaultLocale: 'en',
      locales: [
        'en',
        'be',
        'bg',
        'bs',
        'cs',
        'hr',
        'mk',
        'pl',
        'ru',
        'sk',
        'sl',
        'sr-Cyrl',
        'uk',
      ],
    },

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'Interslavic',
          hideOnScroll: true,
          logo: {
            alt: 'Logo',
            src: 'img/logo.png',
          },
          items: [
            {
              type: 'doc',
              docId: 'learn/introduction/index',
              position: 'left',
              label: 'Learn',
            },
            {
              type: 'doc',
              docId: 'resources/index',
              position: 'left',
              label: 'Resources',
            },
            // {
            //   to: '/articles',
            //   label: 'Articles',
            //   position: 'left'
            // },
            {
              href: 'https://interslavic-dictionary.com',
              label: 'Online Dictionary',
              className: 'navbar__item--cta-button',
              position: 'left',
            },
            {
              type: 'localeDropdown',
              className: 'navbar__item--locale-dropdown',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Sitemap',
              items: [
                {
                  label: 'Home',
                  to: '/',
                },
                {
                  label: 'Learn',
                  to: '/learn/introduction',
                },
                {
                  label: 'Resources',
                  to: '/resources',
                },
                // {
                //   label: 'Articles',
                //   to: '/articles',
                // },
              ],
            },
            {
              title: 'Community',
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
          ]
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
      }),
  };
}

module.exports = createConfig;
