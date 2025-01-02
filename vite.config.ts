import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import ViteYaml from '@modyfi/vite-plugin-yaml';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteYaml(), react()],
  define: {
    'process.env': process.env
  }
});
