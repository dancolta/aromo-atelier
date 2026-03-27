"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { t } = useI18n();

  const links = [
    { href: "/shop", label: t.nav.shop },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-warm-linen/90 backdrop-blur-md border-b border-dark-oud/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
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

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] font-light tracking-[0.1em] uppercase transition-colors duration-300 ${
                solid
                  ? "text-dark-oud hover:text-amber-gold"
                  : "text-warm-linen/70 hover:text-amber-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher solid={solid} />
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden flex flex-col gap-1.5 p-2"
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
              {/* Top: Language switcher */}
              <div className="pt-6 pb-4 border-b border-dark-oud/10 flex items-center justify-between">
                <LanguageSwitcher solid />
              </div>

              {/* Logo */}
              <div className="py-8 flex justify-center">
                <Image
                  src="/logo.png"
                  alt="Aromo Atelier"
                  width={100}
                  height={135}
                  className="h-16 w-auto opacity-60"
                />
              </div>

              {/* Nav links */}
              <div className="flex flex-col gap-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl font-light text-deep-black hover:text-amber-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
