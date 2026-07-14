import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { categories } from "@/data/products";
import { CTABanner } from "@/components/CTABanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Clipper Blades & Trimmer Blades — Full Product Range",
    description:
      "Browse SUMTHIN's complete range: hair clipper blades, A5 detachable blades, T-blades, ceramic blades, pet grooming blades, sheep shearing blades. OEM & private label available.",
    alternates: { canonical: `/${locale}/products/` },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const prefix = `/${validLocale}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Lines
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            From professional barber blades to pet grooming and livestock shearing —
            8 product categories covering every clipper blade application.
            All manufactured in our 40,000 m² facility with 30+ precision processes.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`${prefix}/products/${cat.slug}/`}
                className="group bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-bg-alt flex items-center justify-center text-5xl">
                  {cat.icon}
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  {cat.compatibleBrands.length > 0 && (
                    <p className="text-xs text-text-light mb-4">
                      <span className="font-medium">Compatible with: </span>
                      {cat.compatibleBrands.join(", ")}
                    </p>
                  )}
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Blade?"
        subtitle="We offer independent tooling design and full-process manufacturing. Send us your drawings or specs — free consultation."
        ctaText="Request a Quote"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />
    </>
  );
}
