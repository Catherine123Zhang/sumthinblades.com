import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { isValidLocale, locales } from "@/lib/i18n";
import { categories, getCategoryBySlug } from "@/data/products";
import { InquiryForm } from "@/components/InquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { getDictionary } from "@/dictionaries";
import { getCategoryImages } from "@/data/product-images";

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
      <section className="bg-primary text-text-inverse overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative section-container py-16 md:py-20">
          <Link
            href={`${prefix}/products/`}
            className="hero-animate hero-animate-delay-1 inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white mb-4 hover:gap-2.5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> All Products
          </Link>
          <h1 className="hero-animate hero-animate-delay-2 text-3xl md:text-4xl font-bold mb-4">
            {cat.icon} {cat.name}
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-lg text-gray-300 max-w-3xl">{cat.heroDescription}</p>
        </div>
      </section>

      {/* Key info */}
      <section className="bg-bg-alt border-b border-border">
        <div className="section-container py-8">
          <div className="grid sm:grid-cols-3 gap-6">
            <AnimateOnScroll animation="count-up" delay={0} duration={0.5}>
              <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                Material
              </p>
              <p className="font-semibold">{cat.material}</p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="count-up" delay={0.1} duration={0.5}>
              <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                Applications
              </p>
              <p className="font-semibold">{cat.applications.join(", ")}</p>
            </AnimateOnScroll>
            {cat.compatibleBrands.length > 0 && (
              <AnimateOnScroll animation="count-up" delay={0.2} duration={0.5}>
                <p className="text-sm font-medium text-text-light uppercase tracking-wider mb-1">
                  Compatible With
                </p>
                <p className="font-semibold">{cat.compatibleBrands.join(", ")}</p>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </section>

      {/* Product Gallery — show category images */}
      {(() => {
        const catImages = getCategoryImages(category);
        const displayImages = cat.products.length > 0 ? catImages : catImages.slice(0, 8);
        return displayImages.length > 0 ? (
          <section className="section-padding bg-white">
            <div className="section-container">
              <AnimateOnScroll animation="fade-up" className="mb-8">
                <h2 className="text-2xl font-bold">Product Gallery</h2>
              </AnimateOnScroll>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayImages.map((img, i) => (
                  <AnimateOnScroll key={img} animation="scale-in" delay={i * 0.05} duration={0.4}>
                    <div className="aspect-square bg-bg-alt rounded-lg flex items-center justify-center overflow-hidden border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                      <Image
                        src={img}
                        alt={`${cat.name} - ${i + 1}`}
                        width={300}
                        height={300}
                        className="object-contain w-full h-full p-3 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </section>
        ) : null;
      })()}

      {/* Products list */}
      {cat.products.length > 0 ? (
        <section className="section-padding bg-bg-alt">
          <div className="section-container">
            <AnimateOnScroll animation="fade-up" className="mb-8">
              <h2 className="text-2xl font-bold">Available Models</h2>
            </AnimateOnScroll>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.products.map((product, i) => {
                const catImgs = getCategoryImages(category);
                const productImg = catImgs[i % catImgs.length];
                return (
                <AnimateOnScroll key={product.id} animation="scale-in" delay={i * 0.08} duration={0.5}>
                  <div className="bg-white rounded-lg border border-border p-6 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="aspect-square bg-bg-alt rounded-md mb-4 flex items-center justify-center overflow-hidden">
                      {productImg ? (
                        <Image
                          src={productImg}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="object-contain w-full h-full p-3"
                        />
                      ) : (
                        <span className="text-text-light text-sm">Product Image</span>
                      )}
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
                </AnimateOnScroll>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding">
          <div className="section-container text-center py-12">
            <AnimateOnScroll animation="fade-up">
              <p className="text-text-light text-lg mb-4">
                Product catalog for this category is being prepared.
                Contact us for the full spec sheet and pricing.
              </p>
              <Link href={`${prefix}/contact/`} className="btn-primary">
                Request Product Catalog
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Why choose section */}
      <section className="bg-bg-alt section-padding">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="mb-8">
            <h2 className="text-2xl font-bold">Why Choose SUMTHIN {cat.name}?</h2>
          </AnimateOnScroll>
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
            ].map((point, i) => (
              <AnimateOnScroll key={point} animation="fade-up" delay={i * 0.05} duration={0.4}>
                <div className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-text-light">{point}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inline inquiry */}
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold mb-2">
              Interested in {cat.name}?
            </h2>
            <p className="text-text-light mb-6">
              Send us your requirements — we typically respond within 12 hours with pricing and specs.
            </p>
            <InquiryForm dict={dict} productName={cat.name} />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
