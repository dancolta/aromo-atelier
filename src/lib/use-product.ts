"use client";

import { useI18n } from "@/lib/i18n/context";
import type { Product } from "@/lib/products";

export function useLocalizedProduct(product: Product) {
  const { t } = useI18n();
  const localized = (t.products as Record<string, { subtitle: string; notes: string; description: string; ingredients: string[] }>)?.[product.slug];

  if (!localized) return product;

  return {
    ...product,
    subtitle: localized.subtitle,
    notes: localized.notes,
    description: localized.description,
    ingredients: localized.ingredients,
  };
}
