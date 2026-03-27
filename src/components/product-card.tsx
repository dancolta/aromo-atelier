"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { useLocalizedProduct } from "@/lib/use-product";

export function ProductCard({ product }: { product: Product }) {
  const p = useLocalizedProduct(product);

  return (
    <Link href={`/shop/${p.slug}`} className="group block">
      <div className="aspect-[3/4] bg-soft-cream rounded-sm overflow-hidden mb-4 relative">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <h3 className="font-serif text-lg font-light tracking-wide text-deep-black group-hover:text-amber-gold transition-colors duration-300">
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
