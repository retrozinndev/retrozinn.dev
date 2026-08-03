import { defineConfig, fontProviders } from 'astro/config';
import react from "@astrojs/react";


import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
    site: "https://retrozinn.dev",
    base: ".",
    output: "server",

    fonts: [
        {
            provider: fontProviders.google(),
            cssVariable: "--font-fredoka",
            name: "Fredoka",
            weights: [300, 400, 600, 800],
            styles: ["normal"]
        }, {
            provider: fontProviders.google(),
            cssVariable: "--font-cherry",
            name: "Cherry Bomb One"
        }
    ],
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
