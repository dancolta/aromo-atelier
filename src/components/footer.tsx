"use client";

import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-dark-oud/10 bg-warm-linen">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-4">
        <a
          href="https://www.instagram.com/nos.nas.nose/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-stone hover:text-amber-gold transition-colors"
          aria-label="Instagram"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <p className="text-[11px] tracking-[0.08em] text-warm-stone">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
