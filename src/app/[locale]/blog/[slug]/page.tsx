import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { isValidLocale, locales } from "@/lib/i18n";
import { posts, getPostBySlug } from "@/data/blog";
import { siteConfig } from "@/lib/siteConfig";
import { CTABanner } from "@/components/CTABanner";

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/${locale}/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML for tables and basic formatting
  const lines = content.trim().split("\n");
  const html: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  function flushTable() {
    if (tableRows.length < 2) return;
    html.push('<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">');
    // Header
    html.push("<thead><tr>");
    tableRows[0].forEach((cell) => {
      html.push(`<th class="text-left p-3 bg-bg-alt border-b-2 border-border font-semibold">${cell.trim()}</th>`);
    });
    html.push("</tr></thead><tbody>");
    // Skip separator row (index 1)
    for (let i = 2; i < tableRows.length; i++) {
      const rowClass = i % 2 === 0 ? "" : ' class="bg-bg-alt/50"';
      html.push(`<tr${rowClass}>`);
      tableRows[i].forEach((cell) => {
        html.push(`<td class="p-3 border-b border-border">${cell.trim()}</td>`);
      });
      html.push("</tr>");
    }
    html.push("</tbody></table></div>");
    tableRows = [];
    inTable = false;
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (inTable) flushTable();
      continue;
    }

    if (trimmed.startsWith("|")) {
      inTable = true;
      const cells = trimmed.split("|").filter((c, i, a) => i > 0 && i < a.length - 1);
      tableRows.push(cells);
      continue;
    }

    if (inTable) flushTable();

    if (trimmed.startsWith("### ")) {
      html.push(`<h3 class="text-xl font-bold mt-8 mb-3">${trimmed.slice(4)}</h3>`);
    } else if (trimmed.startsWith("## ")) {
      html.push(`<h2 class="text-2xl font-bold mt-10 mb-4 text-primary">${trimmed.slice(3)}</h2>`);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      html.push(`<p class="font-semibold mt-4 mb-2">${trimmed.slice(2, -2)}</p>`);
    } else if (trimmed.startsWith("- ")) {
      html.push(`<li class="ml-5 mb-1.5 text-text-light list-disc">${trimmed.slice(2).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</li>`);
    } else {
      html.push(`<p class="text-text-light leading-relaxed mb-4">${trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-text">$1</strong>')}</p>`);
    }
  }
  if (inTable) flushTable();

  return html.join("\n");
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const post = getPostBySlug(slug);
  const prefix = `/${validLocale}`;

  if (!post) {
    return (
      <div className="section-container section-padding text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link href={`${prefix}/blog/`} className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "SUMTHIN Blades",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.legalName,
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Related posts (exclude current)
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-20">
          <Link href={`${prefix}/blog/`} className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" /> All Articles
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> {post.category}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} read</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="section-padding">
        <div className="section-container max-w-3xl">
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* FAQ section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
                <details key={i} className="group border border-border rounded-lg" open={i === 0}>
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold hover:bg-bg-alt transition-colors">
                    {faq.q}
                    <span className="shrink-0 ml-4 text-text-light group-open:rotate-45 transition-transform text-xl">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-text-light leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-bg-alt section-padding">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-primary mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`${prefix}/blog/${r.slug}/`}
                className="bg-white rounded-lg border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-xs font-medium text-primary uppercase">{r.category}</span>
                <h3 className="font-semibold mt-2 mb-2 leading-snug hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <span className="text-sm text-primary flex items-center gap-1">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need Replacement Blades?"
        subtitle="Factory-direct pricing on professional clipper blades — same quality as brand-name, fraction of the price."
        ctaText="Get a Quote"
        ctaHref={`${prefix}/contact/`}
        variant="dark"
      />
    </>
  );
}
