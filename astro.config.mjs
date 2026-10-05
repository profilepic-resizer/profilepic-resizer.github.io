import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://profilepic-resizer.github.io',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.cjs',
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'pt', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
