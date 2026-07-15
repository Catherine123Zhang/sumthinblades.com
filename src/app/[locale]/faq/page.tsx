import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n";
import { CTABanner } from "@/components/CTABanner";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "FAQ — Clipper Blade Manufacturing Questions",
    description:
      "Common questions about OEM clipper blades, MIM powder metallurgy, ceramic blades, MOQ, lead time, private label packaging, and more.",
    alternates: { canonical: `/${locale}/faq/` },
  };
}

const faqs = [
  {
    q: "What is your MOQ for clipper blades?",
    a: "For existing mold products, MOQ is typically 1,000-2,000 pieces per SKU. For custom-tooled blades, MOQ is negotiable and depends on the complexity of the tooling.",
  },
  {
    q: "What is the lead time for production?",
    a: "For orders using existing molds, lead time is 15-20 days after order confirmation. For new tooling projects, add 15-20 days for mold fabrication and sample approval.",
  },
  {
    q: "What materials do you use for clipper blades?",
    a: "We work with three main material platforms: 440C stainless steel (hardness HRC 58-62), zirconia ceramic (stays cool, 5× edge life), and MIM powder metallurgy (complex geometries, high consistency). Surface treatments include DLC nano coating, PVD plating, and electroplating.",
  },
  {
    q: "What is MIM (Metal Injection Molding)?",
    a: "MIM is an advanced manufacturing process similar to plastic injection molding but using metal powder mixed with a binder. After injection, the part undergoes debinding and sintering at 1,000°C+. MIM allows complex shapes impossible with traditional machining, with ~20 process steps versus 30-42 for conventional manufacturing.",
  },
  {
    q: "Can you make blades compatible with Wahl / Andis / Oster clippers?",
    a: "Yes. We manufacture blades compatible with all major clipper brands including Wahl®, Andis®, Oster®, Wmark, VGR, KEMEI, Codos, Lister Star®, and Heiniger®. These are manufactured to the same dimensional specifications as the originals.",
  },
  {
    q: "Do you offer private label / OEM packaging?",
    a: "Yes. We offer complete private label services: laser engraving of your logo on blades, custom packaging (blister packs, card backs, display boxes), and retail-ready fulfillment. We already serve Amazon sellers, distributors, and grooming salon chains.",
  },
  {
    q: "What certifications do you have?",
    a: "We hold ISO 9001 (Quality Management), ISO 14001 (Environmental Management), SGS certification, and National High-Tech Enterprise designation from China's Ministry of Science & Technology. We also hold 20+ utility patents for blade design and MIM processes.",
  },
  {
    q: "Can I visit your factory?",
    a: "Absolutely. We welcome factory visits and quality audits. Our 45-acre manufacturing campus is located in Haining, Zhejiang — about 1.5 hours from Shanghai Pudong Airport (PVG) or Hangzhou Xiaoshan Airport (HGH). We'll arrange pickup and a full tour.",
  },
  {
    q: "What is your DLC nano coating?",
    a: "DLC (Diamond-Like Carbon) is a nano-scale graphene coating applied in-house using our ZZFS-1300 coating equipment. Unlike decorative PVD, DLC is a functional coating that reduces friction, increases hardness, and extends blade life. Available in 5 colors: black, gold, green, yellow, and pink.",
  },
  {
    q: "What shipping terms do you offer?",
    a: "We typically ship FOB Ningbo — one of China's largest ports, about 100 km from our factory. We can also arrange CIF or door-to-door delivery through our logistics partners.",
  },
];

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const prefix = `/${validLocale}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary text-text-inverse overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative section-container py-16 md:py-20">
          <h1 className="hero-animate hero-animate-delay-1 text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="hero-animate hero-animate-delay-2 text-lg text-gray-300 max-w-2xl">
            Everything you need to know about ordering clipper blades, OEM manufacturing, and working with SUMTHIN.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 0.06} duration={0.5}>
                <details
                  className="group border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all duration-300"
                  open={i === 0}
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold hover:bg-bg-alt transition-colors">
                    {faq.q}
                    <span className="shrink-0 ml-4 text-text-light group-open:rotate-45 transition-transform duration-300 text-xl">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-text-light leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll animation="fade-up">
        <CTABanner
          title="Still Have Questions?"
          subtitle="Our team is happy to help. Reach out and we'll respond within 12 hours."
          ctaText="Contact Us"
          ctaHref={`${prefix}/contact/`}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
