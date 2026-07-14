import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { CTABanner } from "@/components/CTABanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blade Compatibility Guide — Wahl, Andis, Oster, Lister & More",
    description:
      "Find replacement clipper blades compatible with Wahl®, Andis®, Oster®, Lister Star®, Heiniger®, Codos, LAUBE, and more. Cross-reference guide by brand and model.",
    alternates: { canonical: `/${locale}/compatibility/` },
  };
}

const compatibilityData = [
  {
    brand: "Andis®",
    series: "128 / A5 / D-series",
    models: "AGC, AGC2, AGC Super 2, AGC Pro, AGP, AGRC, UltraEdge",
    bladeTypes: "A5 snap-on blades, 128 retention blades",
  },
  {
    brand: "Wahl®",
    series: "128 / A5 / Personal care",
    models: "KM10, KM5, KM2, KM Cordless, Sterling, Show Pro, 8260",
    bladeTypes: "A5 snap-on, 128 retention, hair clipper blades",
  },
  {
    brand: "Oster®",
    series: "A5",
    models: "Golden A5, Turbo A5, A5 Turbo 2, A6, PowerPro",
    bladeTypes: "A5 snap-on blades, all standard sizes",
  },
  {
    brand: "Lister Star®",
    series: "Sheep shearing / Horse clipping",
    models: "Lister Star, Lister Legend, Lister Liberty",
    bladeTypes: "Shearing combs & cutters (MIM powder metallurgy)",
  },
  {
    brand: "Heiniger®",
    series: "Sheep shearing / Cattle",
    models: "Heiniger Xtra, Heiniger Icon, Heiniger Opal",
    bladeTypes: "Shearing combs & cutters (MIM powder metallurgy)",
  },
  {
    brand: "LAUBE",
    series: "D-series / 128",
    models: "322, 208, 318, 320, 304, 306, 329, 620, 630",
    bladeTypes: "D-series MIM blades, 128 retention blades",
  },
  {
    brand: "Codos (科德士)",
    series: "128",
    models: "CP-6800, CP-7800, CP-8000, CP-9200, CP-9600, KP-3000, CP-3100, CP-3180, CP-5500, TP-1680, TP-2680",
    bladeTypes: "128 retention blades (all leave lengths)",
  },
  {
    brand: "AUX (奥克斯)",
    series: "128",
    models: "C1, C2, C3, C5, C6, C6S, Pro, AUX-01, A5, A6, A7, S9",
    bladeTypes: "128 retention blades",
  },
  {
    brand: "Shernbao (神宝)",
    series: "D-series",
    models: "878",
    bladeTypes: "D-series MIM blades",
  },
  {
    brand: "Moser / Wella / Geib",
    series: "128",
    models: "Various — contact us for specific model compatibility",
    bladeTypes: "128 retention blades",
  },
];

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
            Find SUMTHIN replacement blades for your clipper. We manufacture blades compatible with all major professional
            and consumer clipper brands — same dimensional specs, same performance, factory-direct pricing.
          </p>
        </div>
      </section>

      {/* Table */}
      <section className="section-padding">
        <div className="section-container">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-bg-alt border-b-2 border-border">
                  <th className="text-left p-4 font-semibold">Brand</th>
                  <th className="text-left p-4 font-semibold">Blade Series</th>
                  <th className="text-left p-4 font-semibold">Compatible Models</th>
                  <th className="text-left p-4 font-semibold">Blade Types Available</th>
                </tr>
              </thead>
              <tbody>
                {compatibilityData.map((row, i) => (
                  <tr key={row.brand} className={`border-b border-border ${i % 2 === 0 ? "" : "bg-bg-alt/50"}`}>
                    <td className="p-4 font-semibold text-primary whitespace-nowrap">{row.brand}</td>
                    <td className="p-4 text-text-light">{row.series}</td>
                    <td className="p-4 text-text-light">{row.models}</td>
                    <td className="p-4 text-text-light">{row.bladeTypes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-5 bg-bg-alt rounded-lg border border-border text-sm text-text-light">
            <p className="font-medium text-text mb-2">Trademark Notice</p>
            <p>
              Wahl®, Andis®, Oster®, Lister Star®, Heiniger®, and other brand names mentioned are registered trademarks
              of their respective owners. SUMTHIN blades are aftermarket replacement parts manufactured to the same
              dimensional specifications. They are not made by or authorized by these brands.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Can't Find Your Clipper Model?"
        subtitle="We cover hundreds of models across dozens of brands. Contact us with your clipper model and we'll check compatibility."
        ctaText="Ask About Compatibility"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />
    </>
  );
}
