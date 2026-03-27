"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useI18n } from "@/lib/i18n/context";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart, updateQuantity, removeItem } = useCart();
  const { t } = useI18n();
  const router = useRouter();
  const [summaryOpen, setSummaryOpen] = useState(true);

  if (items.length === 0) {
    return (
      <div className="pt-28 pb-24 px-6 text-center">
        <p className="text-[14px] text-warm-stone font-light mb-6">
          {t.cart?.empty || "Your selection is empty"}
        </p>
        <Link
          href="/shop"
          className="text-[11px] tracking-[0.15em] uppercase text-dark-oud border-b border-amber-gold/40 pb-0.5"
        >
          {t.cart?.browse || "Browse Collection"}
        </Link>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearCart();
    router.push("/order-confirmation");
  }

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-normal tracking-wide text-deep-black">
            {t.checkout?.title || "Checkout"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Order summary — mobile: first, desktop: right column */}
          <div className="lg:hidden order-first">
            <button
              onClick={() => setSummaryOpen(!summaryOpen)}
              className="w-full flex items-center justify-between py-3 border-b border-dark-oud/10 mb-4"
            >
              <span className="text-[10px] tracking-[0.2em] uppercase text-warm-stone font-medium">
                {t.checkout?.your_order || "Your Order"} ({items.length})
              </span>
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm text-deep-black">{totalPrice} MDL</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${summaryOpen ? "rotate-180" : ""}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </button>
            {summaryOpen && (
              <div className="mb-8">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.slug} className="flex gap-3 items-center">
                      <div className="w-14 h-14 bg-soft-cream rounded-sm overflow-hidden relative shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                      </div>
                      <div className="flex-1">
                        <p className="font-serif text-sm text-deep-black">{item.name}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <button
                            onClick={() => item.quantity === 1 ? removeItem(item.slug) : updateQuantity(item.slug, item.quantity - 1)}
                            aria-label={item.quantity === 1 ? "Remove" : "Decrease"}
                            className="w-6 h-6 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-[10px] hover:border-amber-gold transition-colors"
                          >
                            {item.quantity === 1 ? "×" : "−"}
                          </button>
                          <span className="text-[11px] text-deep-black w-3 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                            aria-label="Increase"
                            className="w-6 h-6 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-[10px] hover:border-amber-gold transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-deep-black">{item.price * item.quantity} MDL</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-dark-oud/10 mt-4 pt-3 flex justify-between">
                  <span className="text-[11px] tracking-[0.1em] uppercase text-warm-stone">{t.cart?.subtotal || "Total"}</span>
                  <span className="font-serif text-lg text-deep-black">{totalPrice} MDL</span>
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Delivery details */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-warm-stone font-medium mb-6">
                {t.checkout?.delivery_label || "Delivery Details"}
              </p>
              <div className="space-y-5">
                <div>
                  <Label htmlFor="full_name" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.checkout?.full_name || "Full Name"}
                  </Label>
                  <Input id="full_name" required className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.checkout?.phone || "Phone"}
                  </Label>
                  <Input id="phone" required type="tel" placeholder="+373" inputMode="tel" className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light" />
                </div>
                <div>
                  <Label htmlFor="city" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.checkout?.city || "City"}
                  </Label>
                  <Input id="city" required placeholder="Chișinău" className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light" />
                </div>
                <div>
                  <Label htmlFor="address" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.checkout?.address || "Address"}
                  </Label>
                  <Textarea id="address" required rows={2} className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light resize-none" />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-[10px] tracking-[0.15em] uppercase text-warm-stone font-medium">
                    {t.checkout?.notes || "Notes (optional)"}
                  </Label>
                  <Input id="notes" placeholder={t.checkout?.notes_placeholder || "Apartment, entrance code..."} className="mt-2 bg-transparent border-dark-oud/15 focus:border-amber-gold focus:ring-amber-gold/20 text-[14px] font-light" />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-dark-oud text-warm-linen text-[11px] tracking-[0.2em] uppercase hover:bg-amber-gold transition-colors duration-300"
            >
              {t.checkout?.place_order || "Confirm Order"}
            </button>
          </form>

          {/* Order summary — desktop only (mobile version is above) */}
          <div className="hidden lg:block">
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-warm-stone font-medium mb-6">
                {t.checkout?.your_order || "Your Order"}
              </p>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.slug} className="flex gap-3 items-center">
                    <div className="w-14 h-14 bg-soft-cream rounded-sm overflow-hidden relative shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="flex-1">
                      <p className="font-serif text-sm text-deep-black">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button
                          onClick={() => item.quantity === 1 ? removeItem(item.slug) : updateQuantity(item.slug, item.quantity - 1)}
                          aria-label={item.quantity === 1 ? "Remove" : "Decrease"}
                          className="w-6 h-6 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-[10px] hover:border-amber-gold transition-colors"
                        >
                          {item.quantity === 1 ? "×" : "−"}
                        </button>
                        <span className="text-[11px] text-deep-black w-3 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          aria-label="Increase"
                          className="w-6 h-6 flex items-center justify-center border border-dark-oud/15 text-dark-oud text-[10px] hover:border-amber-gold transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-deep-black">{item.price * item.quantity} MDL</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-dark-oud/10 mt-6 pt-4 space-y-2">
                <div className="flex justify-between text-[12px] text-warm-stone">
                  <span>{t.checkout?.delivery_note || "Delivery: Complimentary"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[11px] tracking-[0.1em] uppercase text-warm-stone">{t.cart?.subtotal || "Total"}</span>
                  <span className="font-serif text-lg text-deep-black">{totalPrice} MDL</span>
                </div>
                <p className="text-[10px] text-warm-stone/60 mt-3 flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-warm-stone/50 shrink-0">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  {t.checkout?.payment_title || "Pay upon delivery"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
