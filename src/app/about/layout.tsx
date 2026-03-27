import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Povestea",
  description: "Povestea Aromo Atelier — o parfumerie independentă din Chișinău, Moldova.",
  openGraph: {
    title: "Povestea | Aromo Atelier",
    description: "Povestea Aromo Atelier — o parfumerie independentă din Chișinău, Moldova.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
