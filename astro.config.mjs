// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://afriglyph.com';
const rawBase = process.env.BASE_PATH?.trim();
const base =
  !rawBase || rawBase === '/'
    ? '/'
    : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  compressHTML: true,
});
