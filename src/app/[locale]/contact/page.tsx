import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { isValidLocale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { siteConfig } from "@/lib/siteConfig";
import { InquiryForm } from "@/components/InquiryForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contact Us — Get a Quote for Clipper Blades",
    description:
      "Request a quote for OEM clipper blades, private label blades, or custom tooling. Typical response within 12 hours. WhatsApp, email, or form.",
    alternates: {
      canonical: `/${locale}/contact/`,
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : "en";
  const dict = await getDictionary(validLocale);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to inquire about SUMTHIN clipper blades."
  )}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-text-inverse">
        <div className="section-container py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{dict.contact.heroTitle}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{dict.contact.heroSubtitle}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-6">Send Us an Inquiry</h2>
              <InquiryForm dict={dict} />
            </div>

            {/* Contact info — 2 columns */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>

              {/* WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-base mb-8"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-primary hover:underline">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Factory Address</p>
                    <p className="text-text-light text-sm">{siteConfig.company.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-1">Response Time</p>
                    <p className="text-text-light text-sm">Typically within 12 hours (Mon–Sat)</p>
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-8 p-5 bg-bg-alt rounded-lg border border-border">
                <p className="font-medium mb-3 text-sm">Why buyers trust SUMTHIN:</p>
                <ul className="space-y-2 text-sm text-text-light">
                  <li className="flex items-center gap-2">✓ ISO 9001 & ISO 14001 certified</li>
                  <li className="flex items-center gap-2">✓ 20+ years of manufacturing</li>
                  <li className="flex items-center gap-2">✓ OEM supplier to global clipper brands</li>
                  <li className="flex items-center gap-2">✓ Free samples available</li>
                  <li className="flex items-center gap-2">✓ FOB Ningbo — fast shipping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
