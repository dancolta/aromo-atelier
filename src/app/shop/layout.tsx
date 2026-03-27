import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colecția",
  description: "Parfumuri artizanale, difuzoare și lumânări create manual. Fiecare compoziție este unică.",
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
