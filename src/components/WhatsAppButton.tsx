"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hi, I'm interested in SUMTHIN clipper blades. Could you send me more information?"
  );
  const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
