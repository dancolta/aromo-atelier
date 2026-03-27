import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n/context";

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
  title: {
    default: "Aromo Atelier — Parfumerie Artizanală",
    template: "%s | Aromo Atelier",
  },
  description:
    "Parfumuri artizanale, difuzoare și lumânări create manual în Chișinău, Moldova. Artă olfactivă în serii mici de un parfumier format în Franța.",
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
      <body className="min-h-full flex flex-col font-sans">
        <I18nProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
