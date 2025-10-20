// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://2025.fossforall.org',
  integrations: [react(), mdx()],
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    fallback: {
      en: "ko"
    },
    routing: {
      fallbackType: "rewrite",
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    }
  },
});
