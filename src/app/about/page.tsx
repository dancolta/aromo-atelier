"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n/context";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="w-full aspect-[16/7] rounded-sm mb-16 relative overflow-hidden">
          <Image
            src="/products/atelier.jpg"
            alt="Aromo Atelier"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-4">
            {t.about.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-wide text-deep-black mb-10">
            {t.about.heading1}
            <br />
            {t.about.heading2}
          </h1>

          <div className="space-y-6 text-[14.5px] text-warm-stone font-light leading-[1.95]">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <p>{t.about.text3}</p>
          </div>

          <p className="text-[11px] tracking-[0.1em] uppercase text-amber-gold/60 mt-10 italic">
            {t.about.appointment}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="block w-8 h-px bg-amber-gold/40" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-amber-gold/60 italic font-serif">
              {t.about.location}
            </span>
            <span className="block w-8 h-px bg-amber-gold/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
