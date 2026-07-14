import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { posts } from "@/data/blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog — Clipper Blade Guides, Comparisons & Industry Knowledge",
    description:
      "Expert guides on clipper blade sizes, sharpening, ceramic vs steel, compatibility, and MIM manufacturing. Written by a 20-year blade manufacturer.",
    alternates: { canonical: `/${locale}/blog/` },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const prefix = `/${validLocale}`;

  return (
    <>
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Clipper Blade Knowledge Base
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Expert guides, comparisons, and industry knowledge — written by engineers with 20 years of blade manufacturing experience.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`${prefix}/blog/${post.slug}/`}
                className="group bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="aspect-[16/9] bg-bg-alt flex items-center justify-center">
                  <span className="text-4xl">
                    {post.category === "Guides" ? "📊" : post.category === "Maintenance" ? "🔧" : post.category === "Comparison" ? "⚖️" : "🏭"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-text-light mb-3">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {post.description}
                  </p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
