import Link from "next/link";
import { ArrowRight, Factory, Cog, Shield, PackageCheck, Award, Users, Wrench } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { CTABanner } from "@/components/CTABanner";

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
        {/* Gradient overlay for future hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="relative section-container py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
              China's Top 3 Clipper Blade Manufacturer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Precision Clipper Blades.{" "}
              <span className="text-accent">Factory Direct.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              20 years of blade-making expertise — the same factory that machines blades for leading US professional clipper brands.
              Now available direct under SUMTHIN® or your own brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`${prefix}/contact/`} className="btn-accent text-base">
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

      {/* ── Trust Bar ── */}
      <section className="bg-bg-alt border-b border-border">
        <div className="section-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <s.icon className="w-6 h-6 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-primary">{s.value}</span>
                <span className="text-sm text-text-light">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compatibility Bar ── */}
      <section className="bg-white py-8 border-b border-border">
        <div className="section-container text-center">
          <p className="text-sm text-text-light uppercase tracking-wider mb-4">
            Compatible with leading clipper brands
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-lg font-semibold text-primary/70">
            {["Wahl®", "Andis®", "Oster®", "Wmark", "VGR", "KEMEI", "Lister Star®", "Heiniger®", "Codos"].map((brand) => (
              <span key={brand} className="hover:text-primary transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SUMTHIN ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why SUMTHIN Blades?
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From raw steel to finished blade — 30+ precision processes, all under one roof.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "OEM Heritage, Brand-Owner Approved",
                desc: "Precision blade machining partner to leading US professional clipper brands. The same tooling, the same steel, the same quality standards — now available direct.",
              },
              {
                icon: Cog,
                title: "Full-Process Manufacturing",
                desc: "MIM powder metallurgy, CNC grinding, heat treatment, surface finishing, laser marking — 30+ processes in our 40,000 m² facility. No outsourcing, total quality control.",
              },
              {
                icon: Factory,
                title: "Three Material Platforms",
                desc: "Hardened stainless steel (440C), stay-cool ceramics, and precision MIM powder metallurgy. The right material for every application — barber, pet grooming, or livestock.",
              },
              {
                icon: PackageCheck,
                title: "OEM, Private Label & Custom Tooling",
                desc: "Your design, your brand. Independent mold design capability, blister packs, card backs, laser engraving — retail-ready or bulk, we ship FOB Ningbo.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-6 rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-text-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="section-padding bg-bg-alt">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Product Lines
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              From professional barber blades to pet grooming and livestock shearing — one factory, every blade type.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`${prefix}/products/${cat.slug}/`}
                className="group bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-3xl mb-4 block">{cat.icon}</span>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-sm font-medium text-primary flex items-center gap-1">
                  View Products <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OEM Heritage Section ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                From OEM Partner to Global Brand
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Founded in 2004 in Haining, Zhejiang — the heart of China's blade-making industry —
                SUMTHIN has spent two decades perfecting the art of clipper blade manufacturing.
                Our precision machining serves some of the most recognized professional clipper brands in the world.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                With 360 employees, 50+ R&D engineers, 20+ patents, and a 45-acre manufacturing campus,
                we bring OEM-grade quality to every blade — whether it carries our SUMTHIN® brand or yours.
              </p>
              <Link href={`${prefix}/about/`} className="btn-primary text-sm">
                Learn Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-bg-alt rounded-lg aspect-[4/3] flex items-center justify-center text-text-light">
              {/* Factory photo placeholder */}
              <div className="text-center p-8">
                <Factory className="w-16 h-16 mx-auto mb-4 text-primary/30" />
                <p className="text-sm">Factory Photo Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to Source Premium Blades?"
        subtitle="Whether you need OEM components, private label retail packs, or custom-tooled blades — we have the capacity and expertise. Typical response within 12 hours."
        ctaText="Get a Quote"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />
    </>
  );
}
