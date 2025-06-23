// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    fallback: {
      en: "ko"
    },
    routing: "manual"
  }
});
