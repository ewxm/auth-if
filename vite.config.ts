import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  esbuild: {
    drop: [
      'console',
    ],
  },
  build: {
    lib: {
      entry: resolve("./lib/index.ts"),
      name: "test",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
