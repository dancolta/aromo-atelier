"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "@/lib/products";
import { HeroBackground } from "@/components/hero-background";
import { useI18n } from "@/lib/i18n/context";
import { useLocalizedProduct } from "@/lib/use-product";
import { useCart } from "@/lib/cart-context";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  const { t } = useI18n();

  const marqueeNotes = [...t.marquee, ...t.marquee.slice(0, 8)];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <HeroBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 md:pt-0 flex items-center justify-center">
          <div className="max-w-3xl text-center flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-up">
              <span className="block w-10 h-px bg-amber-gold" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-amber-gold font-medium">
                {t.hero.tagline}
              </span>
              <span className="block w-10 h-px bg-amber-gold" />
            </div>

            <h1
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[0.06em] uppercase text-warm-linen animate-fade-in-up animate-delay-100"
              style={{ textShadow: "0 0 80px rgba(154,139,181,0.20)" }}
            >
              {t.hero.headline1}
              {t.hero.headline2 && <><br />{t.hero.headline2}</>}
            </h1>

            <div className="text-[15px] text-soft-cream/55 font-light leading-[1.9] mt-8 max-w-md animate-fade-in-up animate-delay-200 flex flex-col items-center">
              {t.hero.subtitle_lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-10 animate-fade-in-up animate-delay-300">
              <Link
                href="/shop"
                className="px-8 py-3.5 border border-amber-gold/60 text-amber-gold text-[11px] tracking-[0.15em] uppercase hover:bg-amber-gold hover:text-deep-black transition-all duration-500"
              >
                {t.hero.cta_discover}
              </Link>
              <Link
                href="/about"
                className="text-[11px] tracking-[0.15em] uppercase text-warm-linen/50 border-b border-warm-linen/20 pb-0.5 hover:text-warm-linen hover:border-warm-linen/50 transition-all duration-300"
              >
                {t.hero.cta_story}
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-500">
          <span className="text-[8px] tracking-[0.3em] uppercase text-warm-linen/20">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-linen/20 to-transparent" />
        </div>
      </section>

      {/* Ingredient marquee */}
      <section className="py-5 border-b border-dark-oud/10 overflow-hidden bg-warm-linen">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeNotes.map((note, i) => (
            <span
              key={i}
              className="mx-8 text-[11px] tracking-[0.2em] uppercase text-warm-stone/40 font-light"
            >
              {note}
            </span>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="py-24 px-6 bg-warm-linen">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-3">
                {t.collection.label}
              </p>
              <h2 className="font-serif text-2xl md:text-3xl font-normal text-deep-black tracking-wide">
                {t.collection.heading1}
                <br />
                {t.collection.heading2}
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-block text-[11px] tracking-[0.15em] uppercase text-dark-oud border-b border-amber-gold/40 pb-0.5 hover:border-amber-gold transition-colors"
            >
              {t.collection.view_all}
            </Link>
          </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 4).map((product) => (
              <HomeProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/shop"
              className="px-7 py-3.5 bg-dark-oud text-warm-linen text-[11px] tracking-[0.15em] uppercase hover:bg-amber-gold transition-colors duration-500 inline-block"
            >
              {t.collection.view_all_mobile}
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section
        id="manifesto"
        className="py-28 px-6 text-warm-linen relative"
        style={{
          backgroundImage: "url('/manifesto-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-deep-black/75" />
        <ScrollReveal className="max-w-3xl mx-auto text-center relative z-10">
          <p className="font-serif text-2xl md:text-[32px] font-normal leading-[1.6] tracking-[0.02em] italic text-soft-cream/90 flex flex-col">
            {t.manifesto.quote_lines.map((line, i) => (
              <span key={i}>
                {i === 0 && <>&ldquo;</>}{line}{i === t.manifesto.quote_lines.length - 1 && <>&rdquo;</>}
              </span>
            ))}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="block w-12 h-px bg-amber-gold/30" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-amber-gold/50">
              {t.manifesto.brand}
            </span>
            <span className="block w-12 h-px bg-amber-gold/30" />
          </div>
        </ScrollReveal>
      </section>

      {/* Atelier story */}
      <section className="py-24 px-6 bg-warm-linen">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <ScrollReveal className="order-2 md:order-1">
          <div className="aspect-[4/5] relative rounded-sm overflow-hidden bg-soft-cream">
            <Image
              src="/products/atelier.jpg"
              alt="Aromo Atelier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className="order-1 md:order-2">
          <div>
            <p className="text-[9px] tracking-[0.28em] uppercase text-warm-stone font-medium mb-4">
              {t.atelier.label}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-normal text-deep-black tracking-wide leading-snug">
              {t.atelier.heading1}
              <br />
              {t.atelier.heading2}
            </h2>
            <p className="text-[14px] text-warm-stone font-light leading-[1.9] mt-6">
              {t.atelier.text}
            </p>
            <p className="text-[11px] tracking-[0.1em] uppercase text-amber-gold/70 mt-4 italic">
              {t.atelier.appointment}
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-[11px] tracking-[0.15em] uppercase text-dark-oud border-b border-amber-gold/40 pb-0.5 hover:border-amber-gold transition-colors duration-300"
            >
              {t.atelier.cta}
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

function HomeProductCard({ product }: { product: import("@/lib/products").Product }) {
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
    <Link href={`/shop/${p.slug}`} className="group">
      <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4 relative bg-soft-cream">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-[1.04] group-hover:brightness-[0.8] transition-all duration-700"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
        <button
          onClick={handleAdd}
          aria-label={t.shop?.add_to_cart || "Add to Cart"}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-[10px] tracking-[0.15em] uppercase text-center cursor-pointer transition-all duration-300 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 focus:opacity-100 focus:translate-y-0 ${
            added
              ? "bg-sage-teal text-warm-linen"
              : "bg-dark-oud/90 text-warm-linen hover:bg-amber-gold"
          }`}
        >
          {added ? "✓" : (t.shop?.add_to_cart || "Add to Cart")}
        </button>
      </div>
      <h3 className="font-serif text-[15px] font-normal tracking-wide text-deep-black group-hover:text-amber-gold transition-colors duration-300">
        {p.name}
      </h3>
      <p className="text-[11px] tracking-[0.04em] text-warm-stone/60 mt-1">
        {p.subtitle}
      </p>
      <p className="text-[12px] text-dark-oud mt-1.5">
        {p.price} MDL
      </p>
    </Link>
  );
}
