import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { locales } from "@/lib/i18n";

export const dynamic = "force-static";

const productSlugs = [
  "hair-clipper-blades",
  "detachable-a5-blades",
  "t-blades",
  "ceramic-blades",
  "nose-hair-trimmer-heads",
  "eyebrow-trimmer-blades",
  "pet-grooming-blades",
  "sheep-shearing-blades",
];

const staticPages = [
  "",
  "products",
  "oem-custom",
  "private-label",
  "compatibility",
  "about",
  "faq",
  "contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date().toISOString();

  for (const locale of locales) {
    // Static pages
    for (const page of staticPages) {
      const path = page ? `/${locale}/${page}/` : `/${locale}/`;
      entries.push({
        url: `${siteConfig.url}${path}`,
        lastModified: now,
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1.0 : page === "products" ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}/${page ? page + "/" : ""}`])
          ),
        },
      });
    }

    // Product category pages
    for (const slug of productSlugs) {
      entries.push({
        url: `${siteConfig.url}/${locale}/products/${slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}/products/${slug}/`])
          ),
        },
      });
    }
  }

  return entries;
}
