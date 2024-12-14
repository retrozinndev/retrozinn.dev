import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: "https://retrozinn.dev",
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern"
                }
            }
        }
    }
});
