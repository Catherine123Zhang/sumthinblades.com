"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CompatibilitySeries } from "@/data/products";

interface Props {
  data: CompatibilitySeries[];
  contactHref: string;
}

export function CompatibilitySearch({ data, contactHref }: Props) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!trimmed) return data;

    return data
      .map((series) => {
        const matchedBrands = series.brands.filter(
          (b) =>
            b.name.toLowerCase().includes(trimmed) ||
            b.origin.toLowerCase().includes(trimmed) ||
            b.models.some((m) => m.toLowerCase().includes(trimmed))
        );
        if (matchedBrands.length > 0) {
          return { ...series, brands: matchedBrands };
        }
        // Also match on series name
        if (series.series.toLowerCase().includes(trimmed)) {
          return series;
        }
        return null;
      })
      .filter(Boolean) as CompatibilitySeries[];
  }, [data, trimmed]);

  const totalModels = data.reduce(
    (sum, s) => sum + s.brands.reduce((bs, b) => bs + b.models.length, 0),
    0
  );

  const totalBrands = new Set(data.flatMap((s) => s.brands.map((b) => b.name))).size;

  return (
    <div className="space-y-10">
      {/* Search bar */}
      <div className="max-w-xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by brand or clipper model (e.g. Wahl, CP-6800, LAUBE 322...)"
            className="w-full pl-12 pr-10 py-3.5 rounded-xl border-2 border-border bg-white text-text placeholder:text-text-light/60 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-bg-alt text-text-light transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        {!trimmed && (
          <p className="text-xs text-text-light text-center mt-2">
            {totalBrands} brands · {totalModels}+ clipper models across {data.length} blade series
          </p>
        )}
        {trimmed && (
          <p className="text-xs text-text-light text-center mt-2">
            {filtered.length === 0
              ? "No matches found — try a different brand or model"
              : `Found ${filtered.reduce((s, f) => s + f.brands.length, 0)} brand match${filtered.reduce((s, f) => s + f.brands.length, 0) === 1 ? "" : "es"} in ${filtered.length} series`}
          </p>
        )}
      </div>

      {/* Results */}
      {filtered.map((series) => (
        <div key={series.slug} id={series.slug}>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {series.series}
            </h2>
            <p className="text-text-light max-w-3xl">{series.description}</p>
            {series.sizes && (
              <div className="flex flex-wrap gap-2 mt-4">
                {series.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-bg-alt border-b-2 border-border">
                  <th className="text-left p-4 font-semibold">Brand</th>
                  <th className="text-left p-4 font-semibold">Origin</th>
                  <th className="text-left p-4 font-semibold">
                    Compatible Clipper Models
                  </th>
                </tr>
              </thead>
              <tbody>
                {series.brands.map((brand, i) => (
                  <tr
                    key={brand.name}
                    className={`border-b border-border hover:bg-primary/5 transition-colors ${i % 2 === 0 ? "" : "bg-bg-alt/50"}`}
                  >
                    <td className="p-4 font-semibold text-primary whitespace-nowrap">
                      {brand.name}
                    </td>
                    <td className="p-4 text-text-light whitespace-nowrap">
                      {brand.origin}
                    </td>
                    <td className="p-4 text-text-light">
                      {brand.models.map((model, mi) => {
                        const isMatch =
                          trimmed &&
                          model.toLowerCase().includes(trimmed);
                        return (
                          <span key={mi}>
                            {mi > 0 && ", "}
                            <span
                              className={
                                isMatch
                                  ? "bg-yellow-200 text-yellow-900 px-1 rounded font-medium"
                                  : ""
                              }
                            >
                              {model}
                            </span>
                          </span>
                        );
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <Link
              href={contactHref}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-light hover:gap-2 transition-all"
            >
              Request {series.series} Quote{" "}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}

      {/* No results CTA */}
      {trimmed && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-light mb-4">
            Don&apos;t see your clipper model? We likely still have a compatible blade.
          </p>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 bg-primary text-text-inverse px-6 py-3 rounded-lg font-medium hover:bg-primary-light transition-colors"
          >
            Ask Us About Your Model <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
