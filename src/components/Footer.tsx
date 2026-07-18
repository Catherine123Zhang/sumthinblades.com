import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Dictionary } from "@/dictionaries/en";
import { siteConfig } from "@/lib/siteConfig";

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark text-text-inverse">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              SUMTHIN<span className="text-accent">®</span> Blades
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {dict.footer.tagline}
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-xs font-medium">
                ISO 9001
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-xs font-medium">
                ISO 14001
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-xs font-medium">
                SGS
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/en/oem-custom/" className="hover:text-white transition-colors">{dict.nav.oem}</Link></li>
              <li><Link href="/en/private-label/" className="hover:text-white transition-colors">{dict.nav.privateLabel}</Link></li>
              <li><Link href="/en/compatibility/" className="hover:text-white transition-colors">{dict.nav.compatibility}</Link></li>
              <li><Link href="/en/about/" className="hover:text-white transition-colors">{dict.nav.about}</Link></li>
              <li><Link href="/en/faq/" className="hover:text-white transition-colors">{dict.nav.faq}</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              {dict.footer.productCategories}
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/en/products/hair-clipper-blades/" className="hover:text-white transition-colors">{dict.categories.hairClipperBlades}</Link></li>
              <li><Link href="/en/products/detachable-a5-blades/" className="hover:text-white transition-colors">{dict.categories.detachableA5}</Link></li>
              <li><Link href="/en/products/ceramic-blades/" className="hover:text-white transition-colors">{dict.categories.ceramicBlades}</Link></li>
              <li><Link href="/en/products/pet-grooming-blades/" className="hover:text-white transition-colors">{dict.categories.petGrooming}</Link></li>
              <li><Link href="/en/products/t-blades/" className="hover:text-white transition-colors">{dict.categories.tBlades}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">
              {dict.footer.contactUs}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500 text-center">
            {dict.footer.copyright.replace("{year}", String(year))}
          </p>
          <p className="text-xs text-gray-600 text-center mt-2 max-w-2xl mx-auto">
            {dict.footer.brandNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
