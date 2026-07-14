import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { InquiryForm } from "@/components/InquiryForm";
import { ArrowRight, Package, Tag, Printer, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Private Label Clipper Blades — Your Brand, Our Quality",
    description:
      "Private label clipper blades: blister packs, card backs, laser engraving, retail-ready packaging. OEM-quality blades under your brand. MOQ from 1,000 pcs.",
    alternates: { canonical: `/${locale}/private-label/` },
  };
}

export default async function PrivateLabelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const dict = await getDictionary(validLocale);
  const prefix = `/${validLocale}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-24">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            Private Label Program
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
            Your Brand.{" "}
            <span className="text-accent">Our Blades.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            Retail-ready replacement blades with your branding — blister packs, card backs, laser engraving.
            Perfect for Amazon sellers, distributors, and grooming supply chains.
          </p>
          <Link href={`${prefix}/contact/`} className="btn-accent text-base mt-8 inline-flex">
            Start Private Label <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            How Private Label Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Tag,
                title: "Choose Your Products",
                desc: "Pick from our 200+ existing SKUs — hair clipper blades, pet grooming, ceramic, A5 detachable. Compatible with all major clipper brands.",
              },
              {
                icon: Printer,
                title: "Add Your Branding",
                desc: "Your logo laser-engraved on blades. Custom packaging — blister packs, card backs, display boxes. We handle design and production.",
              },
              {
                icon: Package,
                title: "Ship to Your Market",
                desc: "Retail-ready packaging, FOB Ningbo. Direct to your Amazon FBA, distributor warehouse, or grooming supply chain.",
              },
            ].map((step) => (
              <div key={step.title} className="text-center p-6">
                <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-text-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Perfect For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Amazon FBA sellers — replacement blades are a high-repeat consumable",
              "Pet grooming supply distributors",
              "Barber supply wholesalers",
              "Grooming salon chains — house brand blades",
              "E-commerce brands on Shopify / Etsy / eBay",
              "Regional clipper blade distributors",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-text-light">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-white rounded-lg border border-border">
            <p className="font-semibold mb-2">Minimum Order Quantities</p>
            <p className="text-text-light text-sm leading-relaxed">
              Replacement blades (existing mold): MOQ 1,000-2,000 pcs per SKU.
              Custom-tooled blades: MOQ negotiable, tooling fee ¥30K-60K.
              Monthly retail blade sales: 5,000-10,000 units and growing.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Start Your Private Label</h2>
          <p className="text-text-light mb-6">
            Tell us what products and packaging you need — we'll send a quote with pricing tiers.
          </p>
          <InquiryForm dict={dict} productName="Private Label / Retail Packaging" />
        </div>
      </section>
    </>
  );
}
