// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      title: "Kitchenkey",
      htmlAttrs: {
        lang: "ar",
      },
      meta: [
        {
          name: "description",
          content:
            "Elevate your dining experience - KitchenKey offers a stunning collection of dinner sets, tableware, and kitchenware.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
  },
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  router: {
    middleware: ["auth"],
    // options: {
    //   hashMode: true
    // }
  },

  devtools: { enabled: false },
  modules: [
    "nuxt-primevue",
    "@hypernym/nuxt-anime",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: [
    "bootstrap/dist/css/bootstrap.rtl.css",
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/main.scss",
  ],
});