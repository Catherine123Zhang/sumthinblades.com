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

/* ── Compatibility data (for /compatibility/ page) ── */

export interface CompatibilityBrand {
  name: string;
  origin: string;
  models: string[];
}

export interface CompatibilitySeries {
  series: string;
  slug: string;
  description: string;
  sizes?: string[];
  brands: CompatibilityBrand[];
}

export const compatibilityData: CompatibilitySeries[] = [
  {
    series: "128 Pet Guard Comb Blades",
    slug: "pet-128",
    description:
      "Snap-on guard comb blades in MIM powder metallurgy. Available in 0.2mm, 3mm, 6mm, 9mm, and 12mm cutting lengths.",
    sizes: ["1mm", "3mm", "6mm", "9mm", "12mm"],
    brands: [
      {
        name: "Codos",
        origin: "China (Shenzhen)",
        models: [
          "CP-6800", "CP-7800", "CP-8000", "CP-9200", "CP-9600",
          "KP-3000", "CP-3100", "CP-3180", "CP-5500", "TP-1680", "TP-2680",
        ],
      },
      {
        name: "YOS",
        origin: "China (Jiangxi)",
        models: ["LB-8780", "LB-9860", "LB-9870", "LB-9880", "LB-9890", "LB-628", "LB-8180", "LB-8580"],
      },
      {
        name: "AUX",
        origin: "China (Ningbo)",
        models: ["C1", "C2", "C3", "C5", "C6", "C6S", "Pro", "AUX-01", "A5", "A6", "A7", "S9"],
      },
      {
        name: "KONKA",
        origin: "China (Shenzhen)",
        models: ["KLFQ-3305-T", "KLFQ-3709-T", "KZ-J01", "KZ-J05"],
      },
      {
        name: "CHIGO",
        origin: "China (Foshan)",
        models: ["ZG-F838", "ZG-F828", "ZG-F938", "ZG-F1138"],
      },
    ],
  },
  {
    series: "128 Hair Clipper Guard Combs",
    slug: "human-128",
    description:
      "Snap-on guard comb blades for human hair clippers. Imported stainless steel blade with ABS body. Available in 1mm, 3mm, 6mm, 9mm, and 12mm cutting lengths.",
    sizes: ["1mm", "3mm", "6mm", "9mm", "12mm"],
    brands: [
      { name: "Wahl", origin: "China (Haining)", models: ["WF808", "WF809"] },
      { name: "FLYCO", origin: "China", models: ["FC5902", "FC5908", "FC5910", "FC5915"] },
      { name: "Kangfu", origin: "China", models: ["KF-T109", "KF-T110"] },
      { name: "AUX", origin: "China (Ningbo)", models: ["A5", "A6", "A7"] },
    ],
  },
  {
    series: "D-Series Pet Blades",
    slug: "pet-d",
    description:
      "Professional detachable pet clipper blades in MIM powder metallurgy. Full range from #40 (0.25mm) to #3F (13mm).",
    sizes: ["0.25mm (#40)", "1.5mm (#10)", "3.2mm (#7F)", "6.4mm (#5F)", "9.6mm (#4F)", "13mm (#3F)"],
    brands: [
      { name: "LAUBE", origin: "USA", models: ["322", "208", "318", "320", "304", "306", "329"] },
      { name: "Wahl", origin: "USA", models: ["8260"] },
      { name: "Shenjian", origin: "China", models: ["S1", "K1"] },
      { name: "TAA", origin: "China", models: ["T1", "T2"] },
      { name: "YOS / Yingkun", origin: "China", models: ["970D", "980D"] },
      { name: "LOVE SHOW", origin: "China", models: ["L4 (Yangmei Series)", "L5 (Pantao Series)"] },
      { name: "Shernbao", origin: "China", models: ["878"] },
      { name: "Telite", origin: "China", models: ["970D", "D1"] },
    ],
  },
  {
    series: "A5 Universal Snap-On Blades",
    slug: "pet-a5",
    description:
      "Industry-standard A5 detachable blades. Fits Andis®, Oster®, Wahl® KM series, and most professional pet clippers worldwide.",
    sizes: [
      "Paw Blade", "0.2mm (#50)", "0.25mm (#40)", "0.5mm (#30)",
      "1.5mm (#10)", "2.0mm (#9)", "3.2mm (#7F)", "6.3mm (#5F)",
      "9.5mm (#4F)", "13mm (#3F)",
    ],
    brands: [
      { name: "Andis", origin: "USA", models: ["AGC", "UltraEdge", "Excel", "ProClip"] },
      { name: "Oster", origin: "USA", models: ["A5", "Golden A5", "Turbo A5", "PowerPro"] },
      { name: "Wahl", origin: "USA", models: ["KM2", "KM5", "KM10", "Bravura"] },
      { name: "LAUBE", origin: "USA", models: ["All A5-compatible models"] },
      { name: "Heiniger", origin: "Switzerland", models: ["Saphir", "Opal", "Xplorer"] },
    ],
  },
];

export const surfaceFinishes = [
  { name: "Gold", color: "#C5961A" },
  { name: "Silver Grey", color: "#A0A0A0" },
  { name: "Black", color: "#2A2A2A" },
  { name: "Rose Gold", color: "#B76E79" },
];
