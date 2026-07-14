const en = {
  // ── Site-wide ──
  site: {
    name: "SUMTHIN Blades",
    tagline: "Precision Clipper & Trimmer Blade Manufacturer",
    description:
      "Professional clipper blades, trimmer blades & pet grooming blades from a 20-year OEM manufacturer. MIM powder metallurgy, ceramic & stainless steel blades.",
  },

  // ── Navigation ──
  nav: {
    home: "Home",
    products: "Products",
    oem: "OEM & Custom",
    privateLabel: "Private Label",
    compatibility: "Compatibility",
    about: "About",
    blog: "Blog",
    faq: "FAQ",
    contact: "Contact",
    getQuote: "Get a Quote",
  },

  // ── Product categories ──
  categories: {
    hairClipperBlades: "Hair Clipper Blades",
    detachableA5: "Detachable A5 Blades",
    tBlades: "T-Blades & U-Blades",
    ceramicBlades: "Ceramic Blades",
    noseHairTrimmer: "Nose Hair Trimmer Heads",
    eyebrowTrimmer: "Eyebrow Trimmer Blades",
    petGrooming: "Pet Grooming Blades",
    sheepShearing: "Sheep Shearing Blades",
  },

  // ── Home page ──
  home: {
    heroTitle: "Precision Clipper Blades.\nFactory Direct.",
    heroSubtitle:
      "20 years of blade-making expertise — supplying leading professional clipper brands worldwide. Now available direct with SUMTHIN® quality.",
    heroCta: "Request a Quote",
    heroCtaSecondary: "Browse Products",
    trustBar: {
      years: "20+ Years",
      area: "40,000 m² Factory",
      patents: "20+ Patents",
      certifications: "ISO 9001 & 14001",
    },
    whyTitle: "Why SUMTHIN Blades?",
    whyItems: [
      {
        title: "OEM Heritage",
        desc: "Precision blade machining partner to leading US professional clipper brands — the same tooling, the same steel, now under our own brand.",
      },
      {
        title: "Full-Process Manufacturing",
        desc: "From raw material to finished blade — 30+ processes including MIM powder metallurgy, CNC grinding, heat treatment & laser marking.",
      },
      {
        title: "Ceramic + Steel + MIM",
        desc: "Three material platforms covering every application — cooler-running ceramics, hardened stainless steel, and precision MIM powder metallurgy parts.",
      },
      {
        title: "Custom & Private Label",
        desc: "Independent tooling capability. Your design, your brand — blister packs, card backs, laser engraving, retail-ready packaging.",
      },
    ],
    ctaBanner: {
      title: "Ready to Source Premium Blades?",
      subtitle:
        "Whether you need OEM components, private label retail packs, or custom-tooled blades — we have the capacity and expertise.",
      cta: "Get a Quote",
    },
  },

  // ── About page ──
  about: {
    heroTitle: "Built on 20 Years of Blade Precision",
    heroSubtitle:
      "From a small workshop in Haining to a 40,000 m² manufacturing campus — SUMTHIN has grown into one of China's leading clipper blade manufacturers.",
    milestones: [
      { year: "2004", event: "Founded in Haining, Zhejiang" },
      { year: "2008", event: "Began OEM supply to international brands" },
      { year: "2012", event: "Introduced MIM powder metallurgy line" },
      { year: "2016", event: "Ceramic blade series launched" },
      { year: "2020", event: "National High-Tech Enterprise certified" },
      { year: "2024", event: "20th anniversary — 360 employees, 45-acre campus" },
    ],
  },

  // ── OEM page ──
  oem: {
    heroTitle: "OEM & Custom Blade Manufacturing",
    heroSubtitle:
      "Independent tooling design. 30+ precision processes. From concept to mass production — your blades, your specs, our expertise.",
    processSteps: [
      { step: "1", title: "Share Your Design", desc: "Send us drawings, samples, or specs. We sign NDA on day one." },
      { step: "2", title: "Tooling & Prototype", desc: "Our engineers design the mold. First samples in 15-20 days." },
      { step: "3", title: "Testing & Approval", desc: "Hardness, sharpness, dimensional checks. You approve before production." },
      { step: "4", title: "Mass Production", desc: "Full-scale production with in-line QC at every critical step." },
      { step: "5", title: "Packaging & Delivery", desc: "Custom packaging, laser marking, FOB Ningbo or door-to-door." },
    ],
  },

  // ── Contact / inquiry ──
  contact: {
    heroTitle: "Let's Talk Blades",
    heroSubtitle:
      "Whether you need a quote, samples, or technical consultation — our team typically responds within 12 hours.",
    formName: "Your Name",
    formEmail: "Email Address",
    formCountry: "Country",
    formMessage: "How can we help?",
    formProduct: "Product of Interest",
    formSubmit: "Send Inquiry",
    formSuccess: "Thank you! We'll get back to you within 12 hours.",
    whatsappCta: "Chat on WhatsApp",
    or: "or",
  },

  // ── Footer ──
  footer: {
    tagline: "Precision clipper & trimmer blade manufacturer since 2004.",
    quickLinks: "Quick Links",
    productCategories: "Products",
    contactUs: "Contact Us",
    copyright: "© {year} Haining Sanxin Razor & Scissors Co., Ltd. All rights reserved.",
    brandNote: "SUMTHIN® is a registered trademark. Wahl®, Andis®, Oster® and other brand names mentioned are trademarks of their respective owners, used here solely for compatibility reference.",
  },

  // ── Common ──
  common: {
    learnMore: "Learn More",
    viewAll: "View All",
    requestQuote: "Request a Quote",
    downloadCatalog: "Download Catalog",
    moq: "MOQ",
    leadTime: "Lead Time",
    material: "Material",
    specs: "Specifications",
    relatedProducts: "Related Products",
    faq: "Frequently Asked Questions",
    backToTop: "Back to Top",
  },
} as const;

export type Dictionary = typeof en;
export default en;
