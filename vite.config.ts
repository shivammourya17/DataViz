import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // fixes MIME type issues on static hosts
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // path alias
    },
  },
  build: {
    minify: "esbuild",  // removes dev-only React code
    sourcemap: false,
    target: "es2022",   // modern JS
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "datavizxxstreamlitauthxxai.netlify.app"
    ],
  },
});
