"use client";

import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n/context";

export function CartDrawer({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { items, totalPrice, updateQuantity, removeItem } = useCart();
  const { t } = useI18n();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="bg-warm-linen border-dark-oud/10 w-80 sm:max-w-sm flex flex-col">
        <div className="flex items-center justify-between pt-10 pb-4 border-b border-dark-oud/10 px-4">
          <h2 className="font-serif text-lg text-deep-black font-normal">
            {t.cart?.title || "Your Selection"}
          </h2>
          <span className="text-[11px] text-warm-stone">
            {items.length} {items.length === 1 ? (t.cart?.item || "item") : (t.cart?.items || "items")}
          </span>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-4">
            <p className="text-[14px] text-warm-stone font-light">
              {t.cart?.empty || "Your selection is empty"}
            </p>
            <Link
              href="/shop"
              onClick={() => onOpenChange(false)}
              className="text-[11px] tracking-[0.15em] uppercase text-dark-oud border-b border-amber-gold/40 pb-0.5 hover:border-amber-gold transition-colors"
            >
              {t.cart?.browse || "Browse Collection"}
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-2">
              {items.map((item) => (
                <div key={item.slug} className="flex gap-4 py-4 border-b border-dark-oud/10">
                  <div className="w-16 h-16 bg-soft-cream rounded-sm overflow-hidden relative shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm text-deep-black truncate">{item.name}</p>
                    <p className="text-[11px] text-warm-stone mt-0.5">{item.price} MDL</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => item.quantity === 1 ? removeItem(item.slug) : updateQuantity(item.slug, item.quantity - 1)}
                        aria-label={item.quantity === 1 ? "Remove item" : "Decrease quantity"}
                        className="w-7 h-7 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-xs hover:border-amber-gold transition-colors"
                      >
                        {item.quantity === 1 ? "×" : "−"}
                      </button>
                      <span className="text-xs text-deep-black w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-7 h-7 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-xs hover:border-amber-gold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-dark-oud/10 px-4 pt-4 pb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] tracking-[0.1em] uppercase text-warm-stone">{t.cart?.subtotal || "Subtotal"}</span>
                <span className="font-serif text-lg text-deep-black">{totalPrice} MDL</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => onOpenChange(false)}
                className="block w-full py-3.5 bg-dark-oud text-warm-linen text-[11px] tracking-[0.15em] uppercase text-center hover:bg-amber-gold transition-colors duration-300"
              >
                {t.cart?.checkout || "Proceed to Checkout"}
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
