import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { CTABanner } from "@/components/CTABanner";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { CompatibilitySearch } from "@/components/CompatibilitySearch";
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
      <section className="bg-primary text-text-inverse overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative section-container py-16 md:py-20">
          <h1 className="hero-animate hero-animate-delay-1 text-3xl md:text-4xl font-bold mb-4">
            Blade Compatibility Guide
          </h1>
          <p className="hero-animate hero-animate-delay-2 text-lg text-gray-300 max-w-3xl">
            Find SUMTHIN replacement blades for your clipper. Search by brand name or clipper model number — we manufacture blades compatible with all major professional and consumer brands.
          </p>
        </div>
      </section>

      {/* Interactive search + tables */}
      <section className="section-padding">
        <div className="section-container">
          <CompatibilitySearch
            data={compatibilityData}
            contactHref={`${prefix}/contact/`}
          />

          {/* Trademark Notice */}
          <AnimateOnScroll animation="fade-up">
            <div className="mt-16 p-5 bg-bg-alt rounded-lg border border-border text-sm text-text-light">
              <p className="font-medium text-text mb-2">Trademark Notice</p>
              <p>
                Wahl®, Andis®, Oster®, Lister Star®, Heiniger®, FLYCO, and other brand names mentioned are
                registered trademarks of their respective owners. SUMTHIN blades are aftermarket
                replacement parts manufactured to the same dimensional specifications. They are not
                manufactured by or affiliated with these brands. &quot;Compatible with&quot;
                designations are for reference only.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <AnimateOnScroll animation="fade-up">
        <CTABanner
          title="Can't Find Your Clipper Model?"
          subtitle="We cover hundreds of models across dozens of brands. Contact us with your clipper model and we'll check compatibility — response within 12 hours."
          ctaText="Ask About Compatibility"
          ctaHref={`${prefix}/contact/`}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
