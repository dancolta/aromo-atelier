"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n/context";

export function AddToCartToast() {
  const { badgeKey } = useCart();
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const prevKey = useRef(0);

  useEffect(() => {
    if (badgeKey > 0 && badgeKey !== prevKey.current) {
      prevKey.current = badgeKey;
      if (timerRef.current) clearTimeout(timerRef.current);
      setVisible(true);
      timerRef.current = setTimeout(() => setVisible(false), 1500);
    }
  }, [badgeKey]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-dark-oud text-warm-linen px-5 py-2.5 text-[11px] tracking-[0.1em] uppercase shadow-lg flex items-center gap-2 rounded-sm">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage-teal">
          <path d="M20 6L9 17l-5-5" />
        </svg>
        {t.cart?.added || "Added"}
      </div>
    </div>
  );
}
