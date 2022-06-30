// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const siteName = 'NFTValuations'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${ siteName } Documentation`,
  tagline: 'One platform for all your NFT needs',
  url: 'https://nftvaluations.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',
  organizationName: 'UniversityOfNicosia', // Usually your GitHub org/user name.
  projectName: 'nftvaluations-documentation', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/UniversityOfNicosia/nftvaluations-documentation/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // plugins: [
  //   [
  //     'content-docs',
  //     /** @type {import('@docusaurus/plugin-content-docs').Options} */
  //     {
  //       id: 'guides',
  //       path: 'guides',
  //       routeBasePath: 'guides',
  //       // sidebarPath: require.resolve('./sidebarsGuides.js'),
  //       // ... other options
  //     },
  //   ],
  // ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: `${ siteName } Logo`,
          src: 'img/logo-dark-beta.svg',
          srcDark: 'img/logo-light-beta.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/about',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/guides/portfolio-management',
            label: 'Guides',
            position: 'left',
            activeBaseRegex: '/guides/',
          },
          { 
            href: 'https://nftvaluations.com', 
            label: 'Back to Site', 
            position: 'left' 
          },
          {
            href: 'https://blog.nftvaluations.com',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/UniversityOfNicosia/nftvaluations-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About us',
                to: '/documentation/about',
              },
              {
                label: 'Methodologies',
                to: '/documentation/methodology',
              },
              {
                label: 'Roadmap',
                to: '/documentation/roadmap',
              },
              {
                label: 'Guides',
                to: '/guides/portfolio-management',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/nftvaluations',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nftvaluations',
              },
              {
                label: 'Twitter Bot',
                href: 'https://twitter.com/nftvalbot',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.nftvaluations.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/UniversityOfNicosia/nftvaluations-documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${ siteName }. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
