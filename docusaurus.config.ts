import type { Config } from '@docusaurus/types';

export default {
  title: 'Peragon Games INC',
  url: 'https://valkyrlabs.com/demo-game',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
      },
    ],
  ],

  
  // your site config ...
} satisfies Config;