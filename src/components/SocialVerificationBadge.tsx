"use client";

import React from "react";
import { useLang } from "@/context/LanguageContext";

const FACEBOOK_BOOKING_URL = "https://www.facebook.com/share/1DxF5W25eJ/?mibextid=wwXIfr";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export default function SocialVerificationBadge() {
  const { lang, dir } = useLang();

  return (
    <a
      href={FACEBOOK_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      dir={dir}
      className="inline-flex items-center gap-2 rounded-full border border-kaza-navy-light bg-kaza-navy/60 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-kaza-gold hover:text-kaza-gold"
    >
      <FacebookIcon className="h-4 w-4 shrink-0 text-kaza-gold" />
      <span>{lang === "ar" ? "قناة حجز موثقة عبر فيسبوك" : "Verified Facebook Booking Channel"}</span>
    </a>
  );
}
