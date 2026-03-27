import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductDetail } from "@/components/product-detail";
import { ProductJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Aromo Atelier`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  return (
    <>
      {product && (
        <>
          <ProductJsonLd product={product} />
          <BreadcrumbJsonLd
            items={[
              { name: "Aromo Atelier", url: "https://aromo.md" },
              { name: "Colecția", url: "https://aromo.md/shop" },
              { name: product.name, url: `https://aromo.md/shop/${product.slug}` },
            ]}
          />
        </>
      )}
      <ProductDetail slug={slug} />
    </>
  );
}
