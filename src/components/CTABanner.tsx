import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  variant?: "primary" | "dark";
}

export function CTABanner({
  title,
  subtitle,
  ctaText,
  ctaHref = "/en/contact/",
  variant = "primary",
}: CTABannerProps) {
  const bgClass =
    variant === "dark"
      ? "bg-bg-dark text-text-inverse"
      : "bg-primary text-text-inverse";

  return (
    <section className={bgClass}>
      <div className="section-container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">{subtitle}</p>
        <Link href={ctaHref} className="btn-accent text-base">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
