"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Locale } from "./locales";
import { defaultLocale } from "./locales";
import roDict from "./ro.json";
import ruDict from "./ru.json";
import enDict from "./en.json";

type Dictionary = typeof roDict;

const dicts: Record<Locale, Dictionary> = { ro: roDict, ru: ruDict, en: enDict };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
  t: roDict,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && dicts[saved]) setLocaleState(saved);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("locale", l);
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dicts[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
