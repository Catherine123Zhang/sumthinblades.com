"use client";

const brands = [
  "Wahl®",
  "Andis®",
  "Oster®",
  "Wmark",
  "VGR",
  "KEMEI",
  "Lister Star®",
  "Heiniger®",
  "Codos",
];

export function BrandMarquee() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...brands, ...brands];

  return (
    <section className="relative bg-primary-dark overflow-hidden py-6 md:py-8">
      {/* Gradient fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-primary-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />

      {/* Label */}
      <p className="text-center text-xs md:text-sm uppercase tracking-[0.2em] text-accent/80 font-semibold mb-4 md:mb-5">
        Compatible with leading clipper brands
      </p>

      {/* Marquee track */}
      <div className="brand-marquee-track">
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="flex items-center gap-3 mx-6 md:mx-10 shrink-0"
          >
            {/* Decorative dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white/90 whitespace-nowrap tracking-wide hover:text-accent transition-colors duration-300">
              {brand}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
