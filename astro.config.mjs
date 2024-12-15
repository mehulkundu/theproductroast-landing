import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://stargazers.club',
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), mdx(), sitemap(), partytown()],
});