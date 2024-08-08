// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require('node:fs');
const { themes: prismThemes } = require('prism-react-renderer');

const DEPLOYMENT_URL = process.env.DEPLOYMENT_URL;
if (DEPLOYMENT_URL) {
  console.log(`Building for deployment URL: ${DEPLOYMENT_URL}`);
}

const DOCUSAURUS_LOCALE = process.env.DOCUSAURUS_LOCALE || getChangedLocale();
if (DOCUSAURUS_LOCALE) {
  console.log(`Building for locale: ${DOCUSAURUS_LOCALE}`);
}

const GITHUB_PR_NUMBER = process.env.GITHUB_PR_NUMBER;
if (GITHUB_PR_NUMBER) {
  console.log(`Building for PR: ${GITHUB_PR_NUMBER}`);
}

function getChangedLocale() {
  if (!fs.existsSync('git-changes.log')) {
    return;
  }

  /** @type {string[]} */
  const list = fs.readFileSync('git-changes.log', 'utf-8').split('\n');
  const locales = list.reduce((acc, filePath) => {
    const [, locale] = filePath.match(/i18n\/([^/]+)\//) || [];
    return locale ? acc.add(locale) : acc;
  }, new Set());

  if (locales.size === 1) {
    return [...locales][0];
  }
}

const editUrl = GITHUB_PR_NUMBER
  ? `https://github.com/medzuslovjansky/medzuslovjansky.github.io/pull/${GITHUB_PR_NUMBER}/files#`
  : 'https://github.com/medzuslovjansky/medzuslovjansky.github.io/edit/main/';

async function createConfig() {
  const unist_util_visit = await import('unist-util-visit');

  /** @type {import('@docusaurus/types').Config} */
  return {
    title: 'Interslavic',
    url: DEPLOYMENT_URL ?? 'https://interslavic.fun',
    baseUrl: '/',
    trailingSlash: true,
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'medzuslovjansky',
    projectName: 'medzuslovjansky.github.io',
    deploymentBranch: 'gh-pages',
    plugins: [
      'docusaurus-plugin-sass',
      require.resolve('@noomorph/docusaurus-search-local'),
      require.resolve('./src/plugins/webpack.js'),
      ['@docusaurus/plugin-client-redirects', {
        createRedirects(existingPath) {
          if (existingPath.includes('/faq')) {
            return [existingPath.replace('/faq', '/introduction/faq')];
          }

          return undefined;
        },
      }],
    ],
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            routeBasePath: '',
            sidebarPath: require.resolve('./sidebars.js'),
            editUrl,
            editLocalizedFiles: true,
            showLastUpdateTime: true,
            showLastUpdateAuthor: true,
            remarkPlugins: [
              require('./src/remark/mdx-before-after-plugin'),
              require('./src/remark/custom-directives')(unist_util_visit),
            ],
          },
          blog: {
            routeBasePath: 'articles',
            path: './articles',
            showReadingTime: true,
            editUrl,
            editLocalizedFiles: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.scss'),
          },
        }),
      ],
    ],

    i18n: DOCUSAURUS_LOCALE ? {
      defaultLocale: DOCUSAURUS_LOCALE,
      locales: [DOCUSAURUS_LOCALE],
    } : {
      defaultLocale: 'en',
      locales: [
        'en',
        'be',
        'bg',
        'cs',
        'hr',
        'mk',
        'pl',
        'ru',
        'sl',
        'sr-Cyrl',
        'uk',
      ],
    },

    markdown: {
      format: 'mdx',
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
            {
              to: '/articles',
              label: 'Articles',
              position: 'left'
            },
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
                {
                  label: 'FAQ',
                  to: '/learn/faq',
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
