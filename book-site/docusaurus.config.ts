import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '📚 Physical AI & Humanoid Robotics Book',
  tagline: 'A comprehensive guide to Physical AI and Humanoid Robotics.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Muhammad-Fraooq.github.io',
  baseUrl: '/',

  organizationName: 'Muhammad-Fraooq',
  projectName: 'ai-humaniod-robotics-book',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  clientModules: [require.resolve('./src/theme/Root.tsx')],

  plugins: ['docusaurus-plugin-search-local'],

  scripts: ['/js/theme.js'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "📚 Physical AI & Humanoid Robotics Book",
      logo: {
        alt: 'Book Logo',
        src: 'img/book_icon.png',
      },
      items: [
         {
          to: '/docs/intro',
          label: 'Book',
          position: 'left',
        },
        {
          href: 'https://github.com/Muhammad-Fraooq/ai-humaniod-robotics-book.git',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        }
        // Custom Auth Navbar Item
        // {
        //   type: 'custom-auth-navbar-item',
        //   position: 'right',
        // },
        // Custom Auth Navbar Item
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Socail Links',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/in/muhammad-farooq-developer/',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/muhammad.farooq.2007',
            },
            {
              label: 'Twitter',
              href: 'x.com/Muhammaddev2007',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://Muhammad-Fraooq.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Book Built by Muhammad Farooq Agentic AI Developer.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
