import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { InquiryForm } from "@/components/InquiryForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { Cog, FileCheck, Factory, Package, ArrowRight, CheckCircle } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "OEM & Custom Blade Manufacturing — Independent Tooling",
    description:
      "OEM clipper blade manufacturing with independent tooling design. MIM powder metallurgy, CNC grinding, ceramic blades, DLC nano coating. From concept to mass production in 15-20 days.",
    alternates: { canonical: `/${locale}/oem-custom/` },
  };
}

const processSteps = [
  {
    step: "01",
    icon: FileCheck,
    title: "Share Your Design",
    desc: "Send us drawings, samples, or specifications. We sign NDA on day one. Our engineers review feasibility within 48 hours.",
  },
  {
    step: "02",
    icon: Cog,
    title: "Tooling & Prototype",
    desc: "Our mold team designs the tooling (¥30K-60K depending on complexity). First MIM or machined samples ready in 15-20 days.",
  },
  {
    step: "03",
    icon: FileCheck,
    title: "Testing & Approval",
    desc: "Hardness (HRC), sharpness, dimensional accuracy — full QC report with every sample. You approve before we proceed.",
  },
  {
    step: "04",
    icon: Factory,
    title: "Mass Production",
    desc: "Full-scale production with in-line quality control at every critical step. Daily capacity: 250,000+ blades across all lines.",
  },
  {
    step: "05",
    icon: Package,
    title: "Packaging & Delivery",
    desc: "Custom packaging options — blister packs, card backs, box sets, laser marking. FOB Ningbo or door-to-door delivery.",
  },
];

const capabilities = [
  "Hair clipper blades (all sizes and tooth patterns)",
  "T-blades and U-blades for trimmers",
  "A5 detachable snap-on blades (MIM)",
  "Ceramic moving blades (19 models)",
  "Pet grooming blades and combs",
  "Sheep shearing combs and cutters",
  "Horse clipping blades",
  "Nose/ear hair trimmer heads",
  "Eyebrow and facial trimmer blades",
  "MIM powder metallurgy custom parts",
  "DLC nano coating (5 colors)",
  "PVD decorative coating (rose gold, black gold)",
  "Custom mold / tooling design",
  "Private label packaging (blister, card, box)",
];

export default async function OEMPage({
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
      <section className="bg-primary text-text-inverse overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative section-container py-16 md:py-24">
          <p className="hero-animate hero-animate-delay-1 text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            OEM & Custom Manufacturing
          </p>
          <h1 className="hero-animate hero-animate-delay-2 text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
            Your Blades. Your Specs.{" "}
            <span className="text-shimmer">Our Expertise.</span>
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Independent tooling design and full-process manufacturing — from concept to mass production.
            The same precision machining that serves leading professional clipper brands, now for your product.
          </p>
          <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 mt-8">
            <Link href={`${prefix}/contact/`} className="btn-accent text-base pulse-glow">
              Request OEM Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              From Concept to Mass Production
            </h2>
          </AnimateOnScroll>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={i * 0.1} duration={0.6}>
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-xs font-bold text-primary">STEP</span>
                    <span className="text-xl font-bold text-primary">{step.step}</span>
                  </div>
                  <div className="flex-1 pb-8 border-b border-border last:border-0">
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-text-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary">
              What We Can Manufacture
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {capabilities.map((item, i) => (
              <AnimateOnScroll key={item} animation="fade-up" delay={i * 0.04} duration={0.4}>
                <div className="flex items-start gap-2.5 group">
                  <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-text-light">{item}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Inline form */}
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl font-bold mb-2">Start Your OEM Project</h2>
            <p className="text-text-light mb-6">
              Tell us about your blade requirements — we&apos;ll respond with a feasibility assessment and quote within 48 hours.
            </p>
            <InquiryForm dict={dict} productName="OEM / Custom Tooling" />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
