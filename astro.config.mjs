import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example: Provide a custom path to a Tailwind config file
    configFile: './tailwind.config.mjs',
    applyBaseStyles: false,
    nesting: true
  }), icon()]
});