import { createI18n } from "vue-i18n";
import en from "@/i18n/locales/en.json";
import vn from "@/i18n/locales/vn.json";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  globalInjection: true,
  messages: { en, vn },
  runtimeOnly: false,
});

export { i18n };
