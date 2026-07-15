import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { categories } from "@/data/products";
import { getCategoryHeroImage } from "@/data/product-images";
import { CTABanner } from "@/components/CTABanner";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

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
      <section className="bg-primary text-text-inverse overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative section-container py-16 md:py-20">
          <p className="hero-animate hero-animate-delay-1 text-accent font-semibold text-sm uppercase tracking-widest mb-3">Full Product Range</p>
          <h1 className="hero-animate hero-animate-delay-2 text-3xl md:text-4xl font-bold mb-4">
            Our Product Lines
          </h1>
          <p className="hero-animate hero-animate-delay-3 text-lg text-gray-300 max-w-3xl">
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
                  className="group bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden block hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] bg-bg-alt flex items-center justify-center overflow-hidden">
                    {heroImg ? (
                      <Image
                        src={heroImg}
                        alt={cat.name}
                        width={400}
                        height={250}
                        className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <span className="text-5xl">{cat.icon}</span>
                    )}
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
                    <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <AnimateOnScroll animation="fade-up">
        <CTABanner
          title="Need a Custom Blade?"
          subtitle="We offer independent tooling design and full-process manufacturing. Send us your drawings or specs — free consultation."
          ctaText="Request a Quote"
          ctaHref={`${prefix}/contact/`}
          variant="dark"
        />
      </AnimateOnScroll>
    </>
  );
}
