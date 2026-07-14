import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { isValidLocale, locales } from "@/lib/i18n";
import { categories, getCategoryBySlug } from "@/data/products";
import { CTABanner } from "@/components/CTABanner";
import { InquiryForm } from "@/components/InquiryForm";
import { getDictionary } from "@/dictionaries";

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const cat of categories) {
      params.push({ locale, category: cat.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Product Not Found" };

  return {
    title: `${cat.name} — SUMTHIN Blades`,
    description: cat.heroDescription,
    alternates: { canonical: `/${locale}/products/${category}/` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale, category } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const cat = getCategoryBySlug(category);
  const dict = await getDictionary(validLocale);
  const prefix = `/${validLocale}`;

  if (!cat) {
    return (
      <div className="section-container section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <Link href={`${prefix}/products/`} className="text-primary hover:underline">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    name: cat.name,
    description: cat.heroDescription,
    manufacturer: {
      "@type": "Organization",
      name: "Haining Sanxin Razor & Scissors Co., Ltd.",
    },
    brand: { "@type": "Brand", name: "SUMTHIN" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-20">
          <Link
            href={`${prefix}/products/`}
            className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4" /> All Products
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {cat.icon} {cat.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">{cat.heroDescription}</p>
        </div>
      </section>

      {/* Key info */}
      <section className="bg-bg-alt border-b border-border">
        <div className="section-container py-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                Material
              </p>
              <p className="font-semibold">{cat.material}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                Applications
              </p>
              <p className="font-semibold">{cat.applications.join(", ")}</p>
            </div>
            {cat.compatibleBrands.length > 0 && (
              <div>
                <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                  Compatible With
                </p>
                <p className="font-semibold">{cat.compatibleBrands.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products list */}
      {cat.products.length > 0 ? (
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl font-bold mb-8">Available Models</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
                >
                  {/* Product image placeholder */}
                  <div className="aspect-square bg-bg-alt rounded-md mb-4 flex items-center justify-center text-text-light text-sm">
                    Product Image
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-sm text-text-light mb-4">{product.description}</p>
                  <div className="space-y-1.5 mb-4">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-text-light">{key}</span>
                        <span className="font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                  {product.moq && (
                    <p className="text-xs text-text-light">
                      MOQ: {product.moq} · Lead time: {product.leadTime}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding">
          <div className="section-container text-center py-12">
            <p className="text-text-light text-lg mb-4">
              Product catalog for this category is being prepared.
              Contact us for the full spec sheet and pricing.
            </p>
            <Link href={`${prefix}/contact/`} className="btn-primary">
              Request Product Catalog
            </Link>
          </div>
        </section>
      )}

      {/* Why choose section */}
      <section className="bg-bg-alt section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold mb-8">Why Choose SUMTHIN {cat.name}?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Manufactured in ISO 9001 & ISO 14001 certified facility",
              "Same factory that supplies leading US clipper brands",
              "Full in-house process — from raw material to finished blade",
              "Independent mold design & custom tooling capability",
              "Rigorous QC: hardness testing, dimensional inspection, sharpness test",
              "Private label & retail packaging available (blister, card, box)",
              "FOB Ningbo — fast, reliable international shipping",
              "Free samples for qualified buyers",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <p className="text-text-light">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline inquiry */}
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">
            Interested in {cat.name}?
          </h2>
          <p className="text-text-light mb-6">
            Send us your requirements — we typically respond within 12 hours with pricing and specs.
          </p>
          <InquiryForm dict={dict} productName={cat.name} />
        </div>
      </section>
    </>
  );
}
