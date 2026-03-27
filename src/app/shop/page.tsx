"use client";

import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { useI18n } from "@/lib/i18n/context";

export default function ShopPage() {
  const { t } = useI18n();

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-3">
            {t.shop.label}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-normal tracking-wide text-deep-black">
            {t.shop.heading}
          </h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-10 sm:gap-y-14">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
