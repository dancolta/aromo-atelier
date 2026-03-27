"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { useLocalizedProduct } from "@/lib/use-product";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n/context";
import { useState } from "react";

export function ProductCard({ product }: { product: Product }) {
  const p = useLocalizedProduct(product);
  const { addItem } = useCart();
  const { t } = useI18n();
  const [added, setAdded] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({ slug: p.slug, name: p.name, price: p.price, image: p.image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <Link href={`/shop/${p.slug}`} className="group block">
      <div className="aspect-[3/4] bg-soft-cream rounded-sm overflow-hidden mb-4 relative">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-[1.04] group-hover:brightness-[0.8] transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <button
          onClick={handleAdd}
          aria-label={t.shop?.add_to_cart || "Add to Cart"}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-[10px] tracking-[0.15em] uppercase text-center transition-all duration-300 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 ${
            added
              ? "bg-sage-teal text-warm-linen"
              : "bg-dark-oud/90 text-warm-linen hover:bg-amber-gold"
          }`}
        >
          {added ? "✓" : (t.shop?.add_to_cart || "Add to Cart")}
        </button>
      </div>
      <h3 className="font-serif text-lg font-normal tracking-wide text-deep-black group-hover:text-amber-gold transition-colors duration-300">
        {p.name}
      </h3>
      <p className="text-[12px] tracking-[0.05em] text-warm-stone mt-1">
        {p.subtitle}
      </p>
      <p className="text-[13px] font-light text-dark-oud mt-2">
        {p.price} MDL
      </p>
    </Link>
  );
}
