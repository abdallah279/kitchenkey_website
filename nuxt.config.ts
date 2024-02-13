// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
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
  css: [
    'bootstrap/dist/css/bootstrap.rtl.css',
    "primevue/resources/themes/lara-light-green/theme.css",
    "primeicons/primeicons.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "@/assets/css/main.scss",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  modules: ["nuxt-primevue", "@hypernym/nuxt-anime", 'vue3-carousel-nuxt'],
  carousel: {
    prefix: 'MyPrefix'
  },
  devtools: { enabled: true },
});
