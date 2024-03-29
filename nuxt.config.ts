// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
      },
      title: "GPT4-APP",
      meta: [{ name: "description", content: "Nuxt 3 for beginners" }],
    },
  },
});
