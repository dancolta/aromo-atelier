"use client";

import { useCart } from "@/lib/cart-context";

export function CartTrigger({ solid, onClick }: { solid: boolean; onClick: () => void }) {
  const { itemCount, badgeKey } = useCart();

  return (
    <button
      onClick={onClick}
      aria-label={`Cart, ${itemCount} items`}
      className="relative p-2 group cursor-pointer"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors duration-300 ${
          solid
            ? "text-dark-oud group-hover:text-amber-gold"
            : "text-warm-linen/70 group-hover:text-amber-gold"
        }`}
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      {itemCount > 0 && (
        <span
          key={badgeKey}
          className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-dark-oud text-warm-linen text-[9px] font-medium rounded-full leading-none animate-badge-pop"
        >
          {itemCount}
        </span>
      )}
    </button>
  );
}
