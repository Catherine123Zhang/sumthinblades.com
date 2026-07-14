import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { locales, isValidLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";
import { getDictionary } from "@/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import Script from "next/script";
import { OrganizationSchema } from "@/components/schema/OrganizationSchema";
import "../globals.css";

const GA_ID = "G-31ZH48BKGX";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(isValidLocale(locale) ? locale : "en");

  return {
    title: {
      default: `${dict.site.name} — ${dict.site.tagline}`,
      template: `%s | ${dict.site.name}`,
    },
    description: dict.site.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}/`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/`])
      ),
    },
    openGraph: {
      type: "website",
      locale: locale,
      url: `${siteConfig.url}/${locale}/`,
      siteName: dict.site.name,
      title: `${dict.site.name} — ${dict.site.tagline}`,
      description: dict.site.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const dict = await getDictionary(validLocale);

  return (
    <html lang={validLocale} className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        <OrganizationSchema />
        <Header dict={dict} locale={validLocale} />
        <main className="flex-1">{children}</main>
        <Footer dict={dict} />
        <WhatsAppButton />
      </body>
    </html>
  );
}
