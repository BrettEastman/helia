import { defineConfig } from "astro/config";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://www.heliamusiccollective.com/",
  integrations: [
    icon(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 10,
        },
      ],
    }),
  ],
});
