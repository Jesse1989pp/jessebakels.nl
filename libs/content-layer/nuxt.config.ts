import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/ui"],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
    sources: {
      content: {
        driver: "fs",
        prefix: "/docs",
        base: resolve(__dirname, "content"),
      },
    },
  },
});
