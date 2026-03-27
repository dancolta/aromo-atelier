"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";
import { useLocalizedProduct } from "@/lib/use-product";

export function ProductDetail({ slug }: { slug: string }) {
  const { t } = useI18n();
  const baseProduct = products.find((p) => p.slug === slug);
  if (!baseProduct) notFound();
  const product = useLocalizedProduct(baseProduct);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/shop"
          className="text-[11px] tracking-[0.15em] uppercase text-warm-stone hover:text-amber-gold transition-colors mb-12 inline-block"
        >
          {t.shop.back}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="aspect-[3/4] bg-soft-cream rounded-sm overflow-hidden relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-3">
              {t.shop.category_parfum}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-deep-black">
              {product.name}
            </h1>
            <p className="text-[13px] tracking-[0.05em] text-amber-gold mt-2">
              {product.subtitle}
            </p>

            <div className="w-8 h-px bg-amber-gold/40 my-8" />

            <p className="text-[14px] text-warm-stone font-light leading-[1.9]">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-[9px] tracking-[0.2em] uppercase text-warm-stone/70 font-medium mb-3">
                {t.shop.key_notes}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((note) => (
                  <span
                    key={note}
                    className="text-[11px] px-3 py-1.5 border border-dark-oud/15 text-dark-oud rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-8">
              <span className="font-serif text-2xl font-light text-deep-black">
                {product.price} MDL
              </span>
              <button className="px-8 py-3 bg-dark-oud text-warm-linen text-[11px] tracking-[0.15em] uppercase hover:bg-amber-gold transition-colors duration-300">
                {t.shop.add_to_cart}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
