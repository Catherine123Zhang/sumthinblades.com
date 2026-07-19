import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Scissors, CheckCircle } from "lucide-react";
import { isValidLocale, locales } from "@/lib/i18n";
import { breeds, getBreedBySlug } from "@/data/breeds";
import { siteConfig } from "@/lib/siteConfig";
import { CTABanner } from "@/components/CTABanner";

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const breed of breeds) {
      params.push({ locale, slug: breed.slug });
    }
  }
  return params.map((p) => ({ locale: p.locale, breed: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; breed: string }>;
}): Promise<Metadata> {
  const { locale, breed: breedSlug } = await params;
  const breed = getBreedBySlug(breedSlug);
  if (!breed) return { title: "Breed Not Found" };

  return {
    title: breed.title,
    description: breed.description,
    alternates: { canonical: `/${locale}/blades-for/${breedSlug}/` },
    openGraph: {
      type: "article",
      title: breed.title,
      description: breed.description,
    },
  };
}

export default async function BreedPage({
  params,
}: {
  params: Promise<{ locale: string; breed: string }>;
}) {
  const { locale, breed: breedSlug } = await params;
  if (!isValidLocale(locale)) return null;
  const breed = getBreedBySlug(breedSlug);
  if (!breed) return null;

  const prefix = locale === "en" ? "/en" : `/${locale}`;

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-8 pb-4">
        <div className="section-container">
          <div className="flex items-center gap-2 text-sm text-text-light">
            <Link href={`${prefix}/products/`} className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link href={`${prefix}/products/pet-grooming-blades/`} className="hover:text-primary transition-colors">
              Pet Grooming Blades
            </Link>
            <span>/</span>
            <span className="text-text">Blades for {breed.name}</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="pb-12">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {breed.title}
            </h1>
            <p className="text-lg text-text-light leading-relaxed">
              {breed.description}
            </p>
          </div>
        </div>
      </section>

      {/* Coat Info */}
      <section className="pb-12">
        <div className="section-container">
          <div className="bg-surface rounded-xl border border-border p-8 max-w-3xl">
            <h2 className="text-xl font-semibold text-primary mb-3">
              Understanding the {breed.name} Coat
            </h2>
            <p className="text-sm text-accent font-medium mb-2">
              Coat type: {breed.coatType}
            </p>
            <p className="text-text-light leading-relaxed">
              {breed.coatDescription}
            </p>
            <p className="text-sm text-text-light mt-3">
              <strong>Grooming frequency:</strong> {breed.groomingFrequency}
            </p>
          </div>
        </div>
      </section>

      {/* Blade Recommendations Table */}
      <section className="pb-12">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Recommended A5 Blade Sizes for {breed.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-primary">Blade #</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Cut Length</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                {breed.recommendedBlades.map((b, i) => (
                  <tr key={i} className="border-b border-border hover:bg-surface transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-accent">{b.blade}</td>
                    <td className="py-3 px-4">{b.length}</td>
                    <td className="py-3 px-4 text-text-light">{b.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-light mt-4 max-w-3xl">
            All SUMTHIN A5 blades are compatible with Andis, Wahl KM, Oster A5, Moser, and all standard A5-interface clippers.
            Made with MIM powder metallurgy for consistent cutting geometry and superior edge retention.
          </p>
        </div>
      </section>

      {/* Grooming Tips */}
      <section className="pb-12">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {breed.name} Grooming Tips
          </h2>
          <div className="max-w-3xl space-y-3">
            {breed.groomingTips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-text-light leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links to other breeds */}
      <section className="pb-12">
        <div className="section-container">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Blades for Other Breeds
          </h2>
          <div className="flex flex-wrap gap-2">
            {breeds
              .filter((b) => b.slug !== breedSlug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`${prefix}/blades-for/${b.slug}/`}
                  className="px-3 py-1.5 rounded-full bg-surface border border-border text-sm hover:border-primary hover:text-primary transition-colors"
                >
                  {b.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Related content links */}
      <section className="pb-12">
        <div className="section-container">
          <div className="max-w-3xl grid sm:grid-cols-2 gap-4">
            <Link
              href={`${prefix}/blog/a5-clipper-blade-guide/`}
              className="p-4 rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <p className="text-sm text-accent mb-1">Guide</p>
              <p className="font-medium group-hover:text-primary transition-colors">
                Complete A5 Blade Size Guide →
              </p>
            </Link>
            <Link
              href={`${prefix}/blog/clipper-blade-size-chart/`}
              className="p-4 rounded-lg border border-border hover:border-primary transition-colors group"
            >
              <p className="text-sm text-accent mb-1">Reference</p>
              <p className="font-medium group-hover:text-primary transition-colors">
                Clipper Blade Size Chart (mm) →
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title={`Need ${breed.name} Grooming Blades in Bulk?`}
        subtitle="Whether you're a grooming salon, pet store, or online retailer — we offer A5 blades from 100 pieces per size with private label packaging available."
        ctaText="Get a Quote"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: breed.title,
            description: breed.description,
            author: {
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
            },
            publisher: {
              "@type": "Organization",
              name: siteConfig.name,
            },
          }),
        }}
      />
    </>
  );
}
