"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import type { Dictionary } from "@/dictionaries/en";
import type { Locale } from "@/lib/i18n";

interface HeaderProps {
  dict: Dictionary;
  locale: Locale;
}

const productCategories = [
  { key: "hairClipperBlades", slug: "hair-clipper-blades" },
  { key: "detachableA5", slug: "detachable-a5-blades" },
  { key: "tBlades", slug: "t-blades" },
  { key: "ceramicBlades", slug: "ceramic-blades" },
  { key: "noseHairTrimmer", slug: "nose-hair-trimmer-heads" },
  { key: "eyebrowTrimmer", slug: "eyebrow-trimmer-blades" },
  { key: "petGrooming", slug: "pet-grooming-blades" },
  { key: "sheepShearing", slug: "sheep-shearing-blades" },
] as const;

export function Header({ dict, locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const prefix = `/${locale}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
      <div className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href={`${prefix}/`} className="flex items-center gap-2">
          <Image
            src="/images/about/logo/sumthin-logo.jpg"
            alt="SUMTHIN® Blades"
            width={120}
            height={40}
            className="h-8 lg:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href={`${prefix}/`} className="text-sm font-medium text-text hover:text-primary transition-colors">
            {dict.nav.home}
          </Link>

          {/* Products dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors">
              {dict.nav.products}
              <ChevronDown className="w-4 h-4" />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 pt-2 w-64">
                <div className="bg-white rounded-lg shadow-lg border border-border py-2">
                  <Link
                    href={`${prefix}/products/`}
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-bg-alt"
                  >
                    {dict.nav.products} →
                  </Link>
                  <div className="border-t border-border my-1" />
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`${prefix}/products/${cat.slug}/`}
                      className="block px-4 py-2 text-sm text-text hover:bg-bg-alt hover:text-primary transition-colors"
                    >
                      {dict.categories[cat.key]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={`${prefix}/oem-custom/`} className="text-sm font-medium text-text hover:text-primary transition-colors">
            {dict.nav.oem}
          </Link>
          <Link href={`${prefix}/private-label/`} className="text-sm font-medium text-text hover:text-primary transition-colors">
            {dict.nav.privateLabel}
          </Link>
          <Link href={`${prefix}/about/`} className="text-sm font-medium text-text hover:text-primary transition-colors">
            {dict.nav.about}
          </Link>
          <Link href={`${prefix}/contact/`} className="text-sm font-medium text-text hover:text-primary transition-colors">
            {dict.nav.contact}
          </Link>
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <Link href={`${prefix}/contact/`} className="btn-primary text-sm hidden md:inline-flex">
            {dict.nav.getQuote}
          </Link>
          <button
            className="lg:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="section-container py-4 flex flex-col gap-3">
            <Link href={`${prefix}/`} className="text-base font-medium py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.home}
            </Link>
            <Link href={`${prefix}/products/`} className="text-base font-medium py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.products}
            </Link>
            <Link href={`${prefix}/oem-custom/`} className="text-base font-medium py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.oem}
            </Link>
            <Link href={`${prefix}/private-label/`} className="text-base font-medium py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.privateLabel}
            </Link>
            <Link href={`${prefix}/about/`} className="text-base font-medium py-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.about}
            </Link>
            <Link href={`${prefix}/contact/`} className="btn-primary text-center mt-2" onClick={() => setMobileOpen(false)}>
              {dict.nav.getQuote}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
