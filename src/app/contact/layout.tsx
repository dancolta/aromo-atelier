import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Aromo Atelier pentru creații personalizate sau vizite la atelier.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
