import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { CTABanner } from "@/components/CTABanner";
import { compatibilityData } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blade Compatibility Guide — Wahl, Andis, Oster, LAUBE, Codos & More | SUMTHIN",
    description:
      "Find SUMTHIN replacement clipper blades compatible with Wahl®, Andis®, Oster®, LAUBE, Codos, Shernbao, and 30+ brands. Cross-reference guide by blade series and clipper model.",
    alternates: { canonical: `/${locale}/compatibility/` },
  };
}

export default async function CompatibilityPage({
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
            Blade Compatibility Guide
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Find SUMTHIN replacement blades for your clipper. We manufacture blades compatible with all major
            professional and consumer brands — same dimensional specs, same performance, factory-direct pricing.
          </p>
        </div>
      </section>

      {/* Series Sections */}
      <section className="section-padding">
        <div className="section-container space-y-16">
          {compatibilityData.map((series) => (
            <div key={series.slug} id={series.slug}>
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {series.series}
                </h2>
                <p className="text-text-light max-w-3xl">
                  {series.description}
                </p>
                {series.sizes && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {series.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-bg-alt border-b-2 border-border">
                      <th className="text-left p-4 font-semibold">Brand</th>
                      <th className="text-left p-4 font-semibold">Origin</th>
                      <th className="text-left p-4 font-semibold">Compatible Clipper Models</th>
                    </tr>
                  </thead>
                  <tbody>
                    {series.brands.map((brand, i) => (
                      <tr
                        key={brand.name}
                        className={`border-b border-border ${i % 2 === 0 ? "" : "bg-bg-alt/50"}`}
                      >
                        <td className="p-4 font-semibold text-primary whitespace-nowrap">
                          {brand.name}
                        </td>
                        <td className="p-4 text-text-light whitespace-nowrap">
                          {brand.origin}
                        </td>
                        <td className="p-4 text-text-light">
                          {brand.models.join(", ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4">
                <Link
                  href={`${prefix}/contact/`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light transition-colors"
                >
                  Request {series.series} Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}

          {/* Trademark Notice */}
          <div className="p-5 bg-bg-alt rounded-lg border border-border text-sm text-text-light">
            <p className="font-medium text-text mb-2">Trademark Notice</p>
            <p>
              Wahl®, Andis®, Oster®, Lister Star®, Heiniger®, and other brand names mentioned are
              registered trademarks of their respective owners. SUMTHIN blades are aftermarket
              replacement parts manufactured to the same dimensional specifications. They are not
              manufactured by or affiliated with these brands. &quot;Compatible with&quot;
              designations are for reference only.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Find Your Clipper Model?"
        subtitle="We cover hundreds of models across dozens of brands. Contact us with your clipper model and we'll check compatibility — response within 12 hours."
        ctaText="Ask About Compatibility"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />
    </>
  );
}
