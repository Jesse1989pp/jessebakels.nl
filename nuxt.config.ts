// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxthq/studio"],
  extends: ["./libs/content-layer"],
  colorMode: {
    preference: "dark",
  },
  ui: {
    global: true,
  },
});
