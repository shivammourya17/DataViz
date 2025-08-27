// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // Fixes white page & MIME type issues on static hosts
  server: {
    host: "0.0.0.0", // allow external access
    port: 8080,
    allowedHosts: [
      "dataviz-h073.onrender.com", // your host
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [
    react(), // React 18 + SWC JSX
    mode === "development" && componentTagger(), // dev-only plugin
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // path alias
    },
  },
  build: {
    minify: "esbuild", // production minification
    sourcemap: false,   // disable source maps
    target: "es2022",   // modern JS output
  },
}));
