import type { Metadata } from "next";
import { LocalBusinessJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactează Aromo Atelier pentru creații personalizate sau vizite la atelier. Str. Alexei Șciusev 64, Chișinău.",
  openGraph: {
    title: "Contact | Aromo Atelier",
    description: "Contactează Aromo Atelier. Str. Alexei Șciusev 64, Chișinău.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd />
      {children}
    </>
  );
}
