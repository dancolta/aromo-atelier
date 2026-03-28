"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/locales";

const locales: Locale[] = ["ro", "ru", "en"];

export function LanguageSwitcher({ solid, openUp = false }: { solid: boolean; openUp?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`text-[11px] tracking-[0.08em] uppercase transition-colors duration-300 flex items-center gap-1 cursor-pointer ${
          solid
            ? "text-dark-oud hover:text-amber-gold"
            : "text-warm-linen/70 hover:text-warm-linen"
        }`}
      >
        {locale.toUpperCase()}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className={`absolute ${openUp ? "bottom-full mb-2" : "top-full mt-2"} left-0 bg-warm-linen border border-dark-oud/10 rounded-sm shadow-lg overflow-hidden min-w-[52px] z-50`}>
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                setLocale(l);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-[11px] tracking-[0.08em] uppercase text-left cursor-pointer transition-colors ${
                locale === l
                  ? "text-dark-oud font-medium bg-soft-cream/50"
                  : "text-warm-stone hover:text-dark-oud hover:bg-soft-cream/30"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
