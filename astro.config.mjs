import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  adapter: netlify(),
  site: 'https://corvus-mexileaks.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});