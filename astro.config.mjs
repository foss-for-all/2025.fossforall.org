// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    fallback: {
      en: "ko"
    },
    routing: {
      fallbackType: "rewrite",
        prefixDefaultLocale: true
    }
  }
});