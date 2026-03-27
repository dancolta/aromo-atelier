import type { Product } from "@/lib/products";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aromo Atelier",
    url: "https://aromo.md",
    logo: "https://aromo.md/logo.png",
    sameAs: ["https://www.instagram.com/nos.nas.nose/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+373-79-112233",
      contactType: "customer service",
      availableLanguage: ["Romanian", "Russian", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aromo Atelier",
    image: "https://aromo.md/logo.png",
    url: "https://aromo.md",
    telephone: "+373-79-112233",
    email: "contact@aromo.md",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Alexei Șciusev 64",
      addressLocality: "Chișinău",
      addressCountry: "MD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.0245,
      longitude: 28.8277,
    },
    priceRange: "$$",
    description:
      "Parfumuri artizanale, difuzoare și lumânări create manual în Chișinău, Moldova.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `https://aromo.md${product.image}`,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "MDL",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Aromo Atelier",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
