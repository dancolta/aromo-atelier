import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n/context";
import { CartProvider } from "@/lib/cart-context";
import { HtmlLang } from "@/components/html-lang";
import { OrganizationJsonLd } from "@/components/json-ld";
import { AddToCartToast } from "@/components/add-to-cart-toast";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aromo.md"),
  title: {
    default: "Aromo Atelier — Parfumerie Artizanală",
    template: "%s | Aromo Atelier",
  },
  description:
    "Parfumuri artizanale, difuzoare și lumânări create manual în Chișinău, Moldova. Artă olfactivă în serii mici de un parfumier format în Franța.",
  openGraph: {
    title: "Aromo Atelier — Parfumerie Artizanală",
    description: "Parfumuri artizanale, difuzoare și lumânări create manual în Chișinău, Moldova.",
    url: "https://aromo.md",
    siteName: "Aromo Atelier",
    locale: "ro_MD",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aromo Atelier — Parfumerie Artizanală",
    description: "Parfumuri artizanale, difuzoare și lumânări create manual în Chișinău, Moldova.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    languages: {
      "ro": "/",
      "ru": "/",
      "en": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${bodoni.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-warm-linen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-dark-oud focus:text-warm-linen focus:text-sm"
        >
          Skip to content
        </a>
        <OrganizationJsonLd />
        <I18nProvider>
          <HtmlLang />
          <CartProvider>
            <Navbar />
            <AddToCartToast />
            <main id="main-content" className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
