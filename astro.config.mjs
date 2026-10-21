// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://cariti.github.io',
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Sora",
            cssVariable: "--font-sora",
            weights: [400, 600, 700]
        },
        {
            provider: fontProviders.fontsource(),
            name: "Manrope",
            cssVariable: "--font-manrope",
            weights: [400, 600, 700]
        }
    ]
});
