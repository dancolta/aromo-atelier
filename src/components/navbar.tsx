"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { CartTrigger } from "@/components/cart-trigger";
import { CartDrawer } from "@/components/cart-drawer";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useI18n();

  const links = [
    { href: "/shop", label: t.nav.shop },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > window.innerHeight - 96);

      // Hide on scroll down, show on scroll up (mobile only)
      if (y > lastScrollY.current && y > 100) {
        setMobileHidden(true);
      } else {
        setMobileHidden(false);
      }
      lastScrollY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-warm-linen/70 backdrop-blur-md border-b border-dark-oud/10"
          : "bg-transparent"
      } ${mobileHidden ? "md:translate-y-0 -translate-y-full" : "translate-y-0"}`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between relative">
        <Link
          href="/"
          className="flex items-center translate-y-[5%]"
        >
          <Image
            src="/logo.png"
            alt="Aromo Atelier"
            width={145}
            height={195}
            className={`h-20 w-auto transition-all duration-500 ${
              solid ? "opacity-70" : "brightness-0 invert opacity-70"
            }`}
          />
        </Link>

        {/* Desktop — centered nav links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-light tracking-[0.1em] uppercase transition-colors duration-300 relative pb-1 ${
                  solid
                    ? isActive ? "text-amber-gold" : "text-dark-oud hover:text-amber-gold"
                    : isActive ? "text-amber-gold" : "text-warm-linen/70 hover:text-amber-gold"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-amber-gold" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop — right side: lang + cart */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher solid={solid} />
          <CartTrigger solid={solid} onClick={() => setCartOpen(true)} />
        </div>

        {/* Mobile — lang + cart + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <LanguageSwitcher solid={solid} />
          <CartTrigger solid={solid} onClick={() => setCartOpen(true)} />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span
                className={`block w-5 h-px transition-colors ${
                  solid ? "bg-deep-black" : "bg-warm-linen"
                }`}
              />
              <span
                className={`block w-5 h-px transition-colors ${
                  solid ? "bg-deep-black" : "bg-warm-linen"
                }`}
              />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-warm-linen border-dark-oud/10 w-72"
            >
              <div className="flex flex-col h-full px-4">
                {/* Logo */}
                <div className="pt-10 pb-6 border-b border-dark-oud/10 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Aromo Atelier"
                    width={120}
                    height={162}
                    className="h-[68px] w-auto opacity-60"
                  />
                </div>

                {/* Nav links */}
                <div className="flex-1 flex flex-col gap-8 pt-8">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl font-normal text-deep-black hover:text-amber-gold transition-colors"
                  >
                    {t.nav.home}
                  </Link>
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-serif text-2xl font-normal text-deep-black hover:text-amber-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
      </nav>
    </header>
  );
}
