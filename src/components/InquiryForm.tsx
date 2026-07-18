"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import type { Dictionary } from "@/dictionaries/en";
import { siteConfig } from "@/lib/siteConfig";

interface InquiryFormProps {
  dict: Dictionary;
  productName?: string;
}

const productOptions = [
  "Hair Clipper Blades",
  "Detachable A5 Blades",
  "T-Blades / U-Blades",
  "Ceramic Blades",
  "Nose Hair Trimmer Heads",
  "Eyebrow Trimmer Blades",
  "Pet Grooming Blades",
  "Sheep Shearing Blades",
  "MIM / Powder Metallurgy Parts",
  "OEM / Custom Tooling",
  "Private Label / Retail Packaging",
  "Other",
];

export function InquiryForm({ dict, productName }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const country = data.get("country") as string;
    const product = data.get("product") as string;
    const message = data.get("message") as string;

    const subject = `Inquiry: ${product}${country ? ` from ${country}` : ""} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Country: ${country}`,
      `Product: ${product}`,
      ``,
      `Message:`,
      message,
      ``,
      `---`,
      `Sent from ${siteConfig.url}${typeof window !== "undefined" ? window.location.pathname : ""}`,
    ].join("\n");

    const mailto = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, "_self");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-success/10 border border-success/30 rounded-lg p-8 text-center">
        <p className="text-lg font-semibold text-success mb-2">Thank you!</p>
        <p className="text-text-light">
          Your email client should have opened with the inquiry. If not, please email us directly at{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="text-primary underline">
            {siteConfig.contact.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            {dict.contact.formName}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            {dict.contact.formEmail} <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1.5">
            {dict.contact.formCountry}
          </label>
          <input
            id="country"
            name="country"
            type="text"
            className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="product" className="block text-sm font-medium mb-1.5">
            {dict.contact.formProduct}
          </label>
          <select
            id="product"
            name="product"
            defaultValue={productName || ""}
            className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition bg-white"
          >
            <option value="">Select a product category</option>
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          {dict.contact.formMessage}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-y"
          placeholder="Tell us about your needs — product type, quantity, specifications, timeline..."
        />
      </div>

      <button type="submit" className="btn-primary text-base w-full sm:w-auto">
        <Send className="w-4 h-4" />
        {dict.contact.formSubmit}
      </button>
    </form>
  );
}
