import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const LIVE_URL = 'https://carlos0318.github.io'
const BASE = 'newsletter-sign-up-with-success-message-main'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: LIVE_URL,
  base: BASE
});