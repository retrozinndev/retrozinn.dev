import { defineConfig } from 'astro/config';
import react from "@astrojs/react";


import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  site: "https://retrozinn.dev",
  base: ".",

  integrations: [
      react()
  ],

  vite: {
      server: {
          allowedHosts: [
              "retrozinn.dev",
              "retrozinndev.github.io",
              "*.local",
              "localhost",
              "127.0.0.1"
          ]
      }
  },

  adapter: cloudflare()
});
