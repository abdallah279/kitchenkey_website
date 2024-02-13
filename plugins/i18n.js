import { createI18n } from "vue-i18n";
import en from "~/i18n/lang/en.json";
import ar from "~/i18n/lang/ar.json";

let locale = "ar";
if (process.client) {
  locale = localStorage.getItem("lang") ? localStorage.getItem("lang") : "ar";
}

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: locale,
    messages: {
      en,
      ar,
    },
  });

  vueApp.use(i18n);
});
