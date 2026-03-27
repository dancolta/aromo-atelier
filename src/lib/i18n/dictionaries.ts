import type { Locale } from "./locales";

const dictionaries = {
  ro: () => import("./ro.json").then((m) => m.default),
  ru: () => import("./ru.json").then((m) => m.default),
  en: () => import("./en.json").then((m) => m.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
