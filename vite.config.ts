import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 👇 base path: "/" in dev, "/YOUR_REPO_NAME/" in production for GitHub Pages
  base: mode === "development" ? "/" : "/self-healing-demos/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 👇 Put build output in "docs" folder (GitHub Pages will use this)
  build: {
    outDir: "docs",
  },
}));
