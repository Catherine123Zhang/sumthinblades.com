export interface ProductCategory {
  slug: string;
  name: string;
  description: string;
  heroDescription: string;
  icon: string;
  material: string;
  applications: string[];
  compatibleBrands: string[];
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  specs: Record<string, string>;
  moq?: string;
  leadTime?: string;
}

export const categories: ProductCategory[] = [
  {
    slug: "hair-clipper-blades",
    name: "Hair Clipper Blades",
    description: "Precision blades for professional and consumer hair clippers. Compatible with Wahl®, Andis®, VGR, KEMEI and more.",
    heroDescription:
      "Professional-grade clipper blades engineered for barbers and salons. Hardened stainless steel with precision ground edges for clean, consistent cuts. Available in standard sizes and custom configurations.",
    icon: "✂️",
    material: "440C Stainless Steel / Carbon Steel",
    applications: ["Professional barber clippers", "Consumer hair clippers", "Salon equipment"],
    compatibleBrands: ["Wahl®", "Andis®", "Wmark", "VGR", "KEMEI"],
    products: [
      {
        id: "103",
        name: "Model 103 Clipper Blade",
        slug: "model-103",
        description: "Standard clipper blade for professional use.",
        specs: { Material: "440C Stainless Steel", Hardness: "HRC 58-62", Process: "CNC Ground" },
        moq: "500 pcs",
        leadTime: "15-20 days",
      },
      {
        id: "115",
        name: "Model 115 Clipper Blade",
        slug: "model-115",
        description: "Wide-body clipper blade for fast cutting.",
        specs: { Material: "440C Stainless Steel", Hardness: "HRC 58-62", Process: "CNC Ground" },
        moq: "500 pcs",
        leadTime: "15-20 days",
      },
      // TODO: add more products from catalog
    ],
  },
  {
    slug: "detachable-a5-blades",
    name: "Detachable A5 Blades",
    description: "Universal A5 snap-on blades. MIM powder metallurgy. Fits Andis®, Oster®, Wahl® KM series and most professional pet clippers.",
    heroDescription:
      "Industry-standard A5 detachable blades manufactured with MIM (Metal Injection Molding) powder metallurgy for superior edge retention and consistency. Universal snap-on design fits all A5-compatible clippers.",
    icon: "🐕",
    material: "MIM Powder Metallurgy",
    applications: ["Professional pet grooming", "Veterinary clinics", "Livestock clipping"],
    compatibleBrands: ["Andis®", "Oster®", "Wahl® KM Series", "Most A5-compatible clippers"],
    products: [],
  },
  {
    slug: "t-blades",
    name: "T-Blades & U-Blades",
    description: "Zero-gap trimmer blades for precise outlines and fades. T-blade and U-blade configurations.",
    heroDescription:
      "Precision-ground T-blade and U-blade trimmer heads for zero-gap outlining and detail work. The barber's tool of choice for sharp lines and skin fades.",
    icon: "〒",
    material: "Carbon Steel / Stainless Steel",
    applications: ["Outlining", "Detail trimming", "Fading", "Beard trimming"],
    compatibleBrands: ["Wahl®", "Andis®", "VGR", "KEMEI", "Wmark"],
    products: [
      {
        id: "125",
        name: "Model 125 T-Blade",
        slug: "model-125",
        description: "Standard T-blade for outlining trimmers.",
        specs: { Material: "Carbon Steel", Hardness: "HRC 56-60", Type: "T-Blade" },
        moq: "1,000 pcs",
        leadTime: "15-20 days",
      },
    ],
  },
  {
    slug: "ceramic-blades",
    name: "Ceramic Blades",
    description: "Stay-cool ceramic moving blades. 5× longer edge life, 75% less heat than steel.",
    heroDescription:
      "Advanced ceramic moving blades that stay cool during extended use. Zirconia ceramic offers 5× the edge life of steel blades while generating 75% less friction heat — the professional choice for all-day cutting.",
    icon: "💎",
    material: "Zirconia Ceramic",
    applications: ["Professional salon use", "Extended-session cutting", "Heat-sensitive clients"],
    compatibleBrands: ["Drop-in replacement for standard steel blades"],
    products: [],
  },
  {
    slug: "nose-hair-trimmer-heads",
    name: "Nose Hair Trimmer Heads",
    description: "Precision rotary and reciprocating nose/ear hair trimmer heads.",
    heroDescription:
      "Compact trimmer heads for nose and ear hair trimmers. Precision-stamped and deburred for safe, comfortable trimming. Available in rotary and reciprocating configurations.",
    icon: "👃",
    material: "Stainless Steel",
    applications: ["Nose hair trimmers", "Ear hair trimmers", "Detail trimmers"],
    compatibleBrands: [],
    products: [],
  },
  {
    slug: "eyebrow-trimmer-blades",
    name: "Eyebrow Trimmer Blades",
    description: "Ultra-fine blades for precision eyebrow and facial trimming.",
    heroDescription:
      "Ultra-thin, precision-ground blades for eyebrow shapers and facial trimmers. Designed for clean, safe contact with delicate skin areas.",
    icon: "✨",
    material: "Stainless Steel",
    applications: ["Eyebrow trimmers", "Facial groomers", "Beauty tools"],
    compatibleBrands: [],
    products: [],
  },
  {
    slug: "pet-grooming-blades",
    name: "Pet Grooming Blades",
    description: "Full-range pet clipper blades and combs. Compatible with Codos, LAUBE, Wahl KM, Shernbao and more.",
    heroDescription:
      "Professional pet grooming blades covering the full range from coarse (#3) to surgical (#40). Two platform series: 128-type for Asian-brand clippers (Codos, AUX, KEMEI) and D-series MIM blades for international brands (LAUBE, Wahl, Shernbao).",
    icon: "🐾",
    material: "440C Stainless Steel / MIM Powder Metallurgy",
    applications: ["Pet grooming salons", "Veterinary clinics", "Mobile groomers", "Home pet care"],
    compatibleBrands: ["Codos", "LAUBE", "Wahl® 8260", "Shernbao", "AUX", "YOS", "KONKA", "CHIGO"],
    products: [],
  },
  {
    slug: "sheep-shearing-blades",
    name: "Sheep Shearing Blades",
    description: "MIM powder metallurgy blades for livestock clippers. Compatible with Lister Star®, Heiniger® and standard combs.",
    heroDescription:
      "Heavy-duty MIM powder metallurgy blades engineered for livestock shearing. Precision-ground combs and cutters compatible with Lister Star®, Heiniger®, and other professional livestock clippers.",
    icon: "🐑",
    material: "MIM Powder Metallurgy",
    applications: ["Sheep shearing", "Horse clipping", "Cattle grooming", "Alpaca/Llama"],
    compatibleBrands: ["Lister Star®", "Heiniger®", "Standard comb systems"],
    products: [],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}
