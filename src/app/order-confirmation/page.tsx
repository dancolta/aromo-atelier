"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export default function OrderConfirmationPage() {
  const { t } = useI18n();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-md mx-auto text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-amber-gold mb-4">
          {t.confirmation?.subtitle || "Order Placed"}
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-deep-black font-normal">
          {t.confirmation?.title || "Thank you"}
        </h1>
        <div className="w-8 h-px bg-amber-gold/40 mx-auto my-8" />
        <p className="text-[14px] text-warm-stone font-light leading-relaxed">
          {t.confirmation?.message || "Your fragrance will arrive within 1-3 days. Our courier will contact you before delivery."}
        </p>

        <div className="mt-12">
          <Link
            href="/shop"
            className="text-[11px] tracking-[0.15em] uppercase text-dark-oud border-b border-amber-gold/40 pb-0.5 hover:border-amber-gold transition-colors"
          >
            {t.confirmation?.continue || "Continue Exploring"}
          </Link>
        </div>

      </div>
    </div>
  );
}
