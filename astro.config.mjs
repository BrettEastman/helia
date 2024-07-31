import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), robotsTxt()]
});