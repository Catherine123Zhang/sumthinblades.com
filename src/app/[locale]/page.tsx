import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Factory, Cog, Shield, PackageCheck, Award, Users, Wrench } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { CTABanner } from "@/components/CTABanner";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { BrandMarquee } from "@/components/BrandMarquee";
import { getCategoryHeroImage, factoryImages } from "@/data/product-images";

const stats = [
  { value: "20+", label: "Years of Excellence", icon: Award },
  { value: "360", label: "Employees", icon: Users },
  { value: "40,000 m²", label: "Factory Area", icon: Factory },
  { value: "20+", label: "Patents", icon: Wrench },
];

const categories = [
  {
    slug: "hair-clipper-blades",
    title: "Hair Clipper Blades",
    desc: "Precision blades for professional and consumer clippers. Compatible with Wahl®, Andis®, VGR, KEMEI and more.",
    icon: "✂️",
  },
  {
    slug: "detachable-a5-blades",
    title: "Detachable A5 Blades",
    desc: "Universal A5 snap-on blades for professional pet and livestock clippers. MIM powder metallurgy, #10 through #40.",
    icon: "🐕",
  },
  {
    slug: "t-blades",
    title: "T-Blades & U-Blades",
    desc: "Zero-gap trimmers and outline blades. Sharp lines, fade-ready. T-blade and U-blade configurations.",
    icon: "〒",
  },
  {
    slug: "ceramic-blades",
    title: "Ceramic Blades",
    desc: "Stay-cool ceramic moving blades. 5× longer edge life, 75% less heat. Drop-in replacement for steel.",
    icon: "💎",
  },
  {
    slug: "pet-grooming-blades",
    title: "Pet Grooming Blades",
    desc: "Full-range pet clipper blades and combs. Compatible with Codos, LAUBE, Wahl KM, Shernbao and more.",
    icon: "🐾",
  },
  {
    slug: "sheep-shearing-blades",
    title: "Sheep Shearing Blades",
    desc: "MIM powder metallurgy blades for livestock clippers. Compatible with Lister Star®, Heiniger® and standard combs.",
    icon: "🐑",
  },
];

export default async function HomePage({
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
      {/* ── Hero ── */}
      <section className="relative bg-primary-dark text-text-inverse overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

        <div className="relative section-container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="hero-animate hero-animate-delay-1 text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              China&apos;s Top 3 Clipper Blade Manufacturer
            </p>
            <h1 className="hero-animate hero-animate-delay-2 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision Clipper Blades.{" "}
              <span className="text-shimmer">Factory Direct.</span>
            </h1>
            <p className="hero-animate hero-animate-delay-3 text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              20 years of blade-making expertise — the same factory that machines blades for leading US professional clipper brands.
              Now available direct under SUMTHIN® or your own brand.
            </p>
            <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4">
              <Link href={`${prefix}/contact/`} className="btn-accent text-base pulse-glow">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={`${prefix}/products/`} className="btn-outline border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-base">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Compatibility Marquee — PRIMARY POSITION ── */}
      <BrandMarquee />

      {/* ── Trust Bar ── */}
      <section className="bg-bg-alt border-b border-border">
        <div className="section-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll
                key={s.label}
                animation="count-up"
                delay={i * 0.12}
                duration={0.6}
                className="flex flex-col items-center gap-2"
              >
                <s.icon className="w-6 h-6 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{s.value}</span>
                <span className="text-sm text-text-light">{s.label}</span>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SUMTHIN ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why SUMTHIN Blades?
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From raw steel to finished blade — 30+ precision processes, all under one roof.
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "OEM Heritage, Brand-Owner Approved",
                desc: "Precision blade machining partner to leading US professional clipper brands. The same tooling, the same steel, the same quality standards — now available direct.",
                anim: "fade-left" as const,
              },
              {
                icon: Cog,
                title: "Full-Process Manufacturing",
                desc: "MIM powder metallurgy, CNC grinding, heat treatment, surface finishing, laser marking — 30+ processes in our 40,000 m² facility. No outsourcing, total quality control.",
                anim: "fade-right" as const,
              },
              {
                icon: Factory,
                title: "Three Material Platforms",
                desc: "Hardened stainless steel (440C), stay-cool ceramics, and precision MIM powder metallurgy. The right material for every application — barber, pet grooming, or livestock.",
                anim: "fade-left" as const,
              },
              {
                icon: PackageCheck,
                title: "OEM, Private Label & Custom Tooling",
                desc: "Your design, your brand. Independent mold design capability, blister packs, card backs, laser engraving — retail-ready or bulk, we ship FOB Ningbo.",
                anim: "fade-right" as const,
              },
            ].map((item, i) => (
              <AnimateOnScroll
                key={item.title}
                animation={item.anim}
                delay={i * 0.1}
                className="flex gap-5 p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container">
          <AnimateOnScroll animation="fade-up" className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Product Lines
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From professional barber blades to pet grooming and livestock shearing — one factory, every blade type.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const heroImg = getCategoryHeroImage(cat.slug);
              return (
                <AnimateOnScroll
                  key={cat.slug}
                  animation="scale-in"
                  delay={i * 0.08}
                  duration={0.5}
                >
                  <Link
                    href={`${prefix}/products/${cat.slug}/`}
                    className="group bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 block hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Product image */}
                    <div className="aspect-[16/10] bg-bg-alt flex items-center justify-center overflow-hidden">
                      {heroImg ? (
                        <Image
                          src={heroImg}
                          alt={cat.title}
                          width={400}
                          height={250}
                          className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-5xl group-hover:animate-float">{cat.icon}</span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-text-light leading-relaxed mb-4">
                        {cat.desc}
                      </p>
                      <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Products <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OEM Heritage Section ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll animation="fade-left" duration={0.8}>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From OEM Partner to Global Brand
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Founded in 2004 in Haining, Zhejiang — the heart of China&apos;s blade-making industry —
                SUMTHIN has spent two decades perfecting the art of clipper blade manufacturing.
                Our precision machining serves some of the most recognized professional clipper brands in the world.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                With 200+ employees, a dedicated R&amp;D team, 70+ patents, and a 45-acre manufacturing campus,
                we bring OEM-grade quality to every blade — whether it carries our SUMTHIN® brand or yours.
              </p>
              <Link href={`${prefix}/about/`} className="btn-primary text-sm">
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimateOnScroll>
            <div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <Image
                  src="/images/factory/aboutus-aerial.jpg"
                  alt="SUMTHIN factory aerial view — 45-acre manufacturing campus in Haining, Zhejiang"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <AnimateOnScroll animation="fade-up" duration={0.8}>
        <CTABanner
          title="Ready to Source Premium Blades?"
          subtitle="Whether you need OEM components, private label retail packs, or custom-tooled blades — we have the capacity and expertise. Typical response within 12 hours."
          ctaText="Get a Quote"
          ctaHref={`${prefix}/contact/`}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
