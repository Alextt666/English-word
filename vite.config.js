import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { viteMockServe } from "vite-plugin-mock";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    viteMockServe({
      mockPath: "./mock",
      enable: false,
      // enable:true
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "comp": path.resolve(__dirname, "./src/components"),
      "images":path.resolve(__dirname,'./src/assets/images')
    },
  },
  envDir:'./env',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/base.scss";`,
      },
    },
  },
});
