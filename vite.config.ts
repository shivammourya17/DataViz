import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./", // ⚡ Fixes white page & MIME type issues on Netlify
  server: {
    host: "0.0.0.0", // allow external access
    port: 8080,
    allowedHosts: [
      "dataviz-h073.onrender.com", // ✅ Add your host here
      "localhost",
      "127.0.0.1",
    ],
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
