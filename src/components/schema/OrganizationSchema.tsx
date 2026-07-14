import { siteConfig } from "@/lib/siteConfig";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.legalName,
    alternateName: siteConfig.company.brandName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: String(siteConfig.company.founded),
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.company.employees,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 9-11 Chuangye Road, Yanguan Industrial Park",
      addressLocality: "Haining",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "sales",
      availableLanguage: ["English", "Chinese"],
    },
    knowsAbout: [
      "Clipper blade manufacturing",
      "MIM powder metallurgy",
      "Ceramic clipper blades",
      "Pet grooming blades",
      "Sheep shearing blades",
      "OEM blade manufacturing",
      "Private label clipper blades",
    ],
    hasCredential: siteConfig.company.certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: cert,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
