export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  modules: ["@nuxt/ui", "@nuxt/content"],
  colorMode: {
    preference: "dark",
  },
  ui: {
    global: true,
  },
  content: {},
  compatibilityDate: "2025-01-09",
});
