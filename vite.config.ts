/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5050,
    proxy: {
      "^/notes/.*$": {
        target: "https://eduardorangel.netlify.app", // cambia la URL base a tu aplicación
        changeOrigin: true,
        rewrite: (path) => "/index.html",
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
