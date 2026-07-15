import type { Metadata } from "next";
import Image from "next/image";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { CTABanner } from "@/components/CTABanner";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { factoryImages } from "@/data/product-images";
import {
  Factory,
  Users,
  Award,
  Wrench,
  Microscope,
  Shield,
  Zap,
  Layers,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About SUMTHIN — 20-Year Clipper Blade Manufacturer",
    description:
      "Founded in 2004, SUMTHIN is a top-3 clipper blade manufacturer in China. 360 employees, 40,000 m² factory, 200+ SKUs. ISO 9001, ISO 14001, SGS certified. OEM partner to global clipper brands.",
    alternates: { canonical: `/${locale}/about/` },
  };
}

const milestones = [
  { year: "2004", event: "Founded in Haining, Zhejiang — the heart of China's blade industry" },
  { year: "2008", event: "Began OEM supply to international professional clipper brands" },
  { year: "2012", event: "Invested in MIM (Metal Injection Molding) production line" },
  { year: "2015", event: "In-house DLC nano coating and PVD plating capability online" },
  { year: "2016", event: "Launched ceramic moving blade series — 19 models" },
  { year: "2020", event: "Awarded National High-Tech Enterprise certification" },
  { year: "2024", event: "20th anniversary — 360 employees, 45-acre campus, 200+ SKUs" },
];

const certifications = [
  { name: "ISO 9001", desc: "Quality Management System", body: "IAF / CNAS / CSI" },
  { name: "ISO 14001", desc: "Environmental Management System", body: "IAF / CNAS / CSI" },
  { name: "SGS", desc: "Product Testing & Certification", body: "SGS Société Générale de Surveillance" },
  { name: "National High-Tech Enterprise", desc: "GR202133005053", body: "China Ministry of Science & Technology" },
  { name: "20+ Utility Patents", desc: "Blade design & MIM processes", body: "CNIPA" },
  { name: "Rewell Excellent Supplier", desc: "Top supplier award from Rewell (日威)", body: "Rewell Electric" },
];

export default async function AboutPage({
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
            About SUMTHIN
          </p>
          <h1 className="hero-animate hero-animate-delay-2 text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
            Built on 20 Years of Blade Precision
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-lg text-gray-300 max-w-3xl leading-relaxed">
            From a workshop in Haining to one of China&apos;s top 3 clipper blade manufacturers —
            SUMTHIN has grown into a 45-acre, 360-person manufacturing campus that produces
            250,000+ blades every day for professional brands worldwide.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-bg-alt border-b border-border">
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: Factory, value: "40,000 m²", label: "Factory Area" },
              { icon: Users, value: "360", label: "Employees" },
              { icon: Wrench, value: "20+", label: "Patents" },
              { icon: Layers, value: "200+", label: "SKUs" },
              { icon: Zap, value: "250K+", label: "Blades / Day" },
              { icon: Award, value: "20+", label: "Years" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} animation="count-up" delay={i * 0.1} duration={0.5} className="flex flex-col items-center gap-1.5">
                <s.icon className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">{s.value}</span>
                <span className="text-xs text-text-light">{s.label}</span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll animation="fade-left" duration={0.8}>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-light leading-relaxed">
                <p>
                  SUMTHIN was founded in 2004 in Haining, Zhejiang — the historic center of China&apos;s personal care
                  blade manufacturing industry. What started as a precision machining workshop has grown into
                  one of the country&apos;s top 3 clipper blade manufacturers, with a 45-acre campus and over 360 employees.
                </p>
                <p>
                  For over two decades, we have been the behind-the-scenes precision machining partner to some
                  of the world&apos;s most recognized professional clipper brands. The same materials, the same tooling,
                  the same quality standards that go into brand-name blades are now available direct from our factory
                  under the SUMTHIN® brand — or with your own brand and packaging.
                </p>
                <p>
                  Our 50+ member R&amp;D and quality team drives continuous innovation in MIM powder metallurgy,
                  ceramic blade technology, and nano coating. With 20+ utility patents and a fully vertically
                  integrated production process, we control quality from raw material to finished blade —
                  no outsourcing at any step.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={0.2} duration={0.8}>
              <div className="grid grid-cols-2 gap-3">
                {factoryImages.slice(0, 4).map((img, i) => (
                  <div key={img} className="aspect-[4/3] bg-bg-alt rounded-lg overflow-hidden border border-border">
                    <Image
                      src={img}
                      alt={`SUMTHIN factory - ${i + 1}`}
                      width={300}
                      height={225}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Manufacturing capabilities */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">
              Manufacturing Capabilities
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Microscope,
                title: "MIM Powder Metallurgy",
                desc: "In-house MIM production line — metal powder injection molding for complex geometries impossible with traditional machining. ~20 processes vs 30-42 for conventional methods.",
              },
              {
                icon: Layers,
                title: "Ceramic Blade Production",
                desc: "19 ceramic moving blade models — zirconia ceramic that stays cool, lasts 5× longer, and generates 75% less friction heat than steel.",
              },
              {
                icon: Zap,
                title: "DLC Nano Coating",
                desc: "In-house DLC (Diamond-Like Carbon) nano graphene coating in 5 colors — black, gold, green, yellow, pink. Plus PVD decorative coating in rose gold and black gold.",
              },
              {
                icon: Shield,
                title: "Electroplating Facility",
                desc: "Own electroplating plant for surface finishing — polishing, brushing, and nano coating all done in-house for complete quality control.",
              },
              {
                icon: Wrench,
                title: "Independent Mold Design",
                desc: "Full tooling capability — from CAD design to mold fabrication. Blade molds ¥30K-60K depending on complexity. First samples in 15-20 days.",
              },
              {
                icon: Factory,
                title: "3 Testing Laboratories",
                desc: "Hardness testing (HRC), dimensional inspection, sharpness testing, surface finish measurement — rigorous QC at every critical process step.",
              },
            ].map((cap, i) => (
              <AnimateOnScroll key={cap.title} animation="scale-in" delay={i * 0.08} duration={0.5}>
                <div className="bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full group">
                  <cap.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{cap.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">
              Company Milestones
            </h2>
          </AnimateOnScroll>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <AnimateOnScroll key={m.year} animation="fade-left" delay={i * 0.1} duration={0.5}>
                <div className="flex gap-6 relative">
                  {/* Line */}
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[23px] top-10 w-0.5 h-full bg-border" />
                  )}
                  {/* Dot */}
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-text-inverse flex items-center justify-center text-sm font-bold z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="pb-8">
                    <span className="text-sm font-semibold text-primary">{m.year}</span>
                    <p className="text-text-light mt-1">{m.event}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary">
              Certifications & Awards
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <AnimateOnScroll key={cert.name} animation="scale-in" delay={i * 0.08} duration={0.5}>
                <div className="bg-white rounded-lg p-6 border border-border text-center hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full group">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                  <p className="text-sm text-text-light mb-2">{cert.desc}</p>
                  <p className="text-xs text-text-light">{cert.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <AnimateOnScroll animation="fade-up">
        <CTABanner
          title="Visit Our Factory"
          subtitle="We welcome factory visits and audits. See our 40,000 m² facility, meet our team, and experience the quality firsthand."
          ctaText="Schedule a Visit"
          ctaHref={`${prefix}/contact/`}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
