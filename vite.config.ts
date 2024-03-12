import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
const root = resolve(__dirname, "src");

export default defineConfig(({ mode }) => ({
  plugins: [react(), svgr()],
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
    alias: {
      "@/": resolve(root, "src"),
      "@/assets": resolve(root, "assets"),
      "@/components": resolve(root, "components"),
      "@/content": resolve(root, "content"),
      "@/fonts": resolve(root, "fonts"),
      "@/hooks": resolve(root, "hooks"),
      "@/routes": resolve(root, "routes"),
      "@/stores": resolve(root, "stores"),
      "@/test": resolve(root, "test"),
      "@/themes": resolve(root, "themes"),
      "@/views": resolve(root, "views"),
    },
  },
}));
