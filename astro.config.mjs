import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react'; // Import the React renderer

export default defineConfig({
  integrations: [
    tailwind(),
    react() // Add the React renderer
  ]
});
