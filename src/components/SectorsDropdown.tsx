"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, copy } from "@/context/LanguageContext";
import {
  Calendar,
  Palmtree,
  Coffee,
  Utensils,
  Sofa,
  Car,
  Compass,
  Waves,
  Sparkles,
  Ticket
} from "lucide-react";

interface SectorsDropdownProps {
  isOpen: boolean;
}

const SECTORS = [
  { key: "booking", href: "/booking", icon: Calendar },
  { key: "beach", href: "/beach", icon: Palmtree },
  { key: "breakfast", href: "/breakfast", icon: Coffee },
  { key: "restaurant", href: "/restaurant", icon: Utensils },
  { key: "furniture", href: "/furniture", icon: Sofa },
  { key: "limousine", href: "/limousine", icon: Car },
  { key: "golfCar", href: "/golf-car", icon: Compass },
  { key: "lagoon", href: "/lagoon-activities", icon: Waves },
  { key: "entertainment", href: "/entertainment", icon: Sparkles },
  { key: "ticket", href: "/ticket", icon: Ticket },
] as const;

export default function SectorsDropdown({ isOpen }: SectorsDropdownProps) {
  const { lang } = useLang();
  const t = copy[lang];

  // Safeguard in case translations are not fully loaded during initial hydration
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectorsMenuData = (t as any).sectorsDropdownLabels || (t as any).sectorsMenu || {};

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-2 grid grid-cols-2 gap-4 w-[480px] p-6 rounded-2xl bg-kaza-navy/95 backdrop-blur-md shadow-2xl border border-kaza-navy-light"
          role="menu"
          aria-label="Sectors Menu"
        >
          {SECTORS.map((sector) => {
            const Icon = sector.icon;
            const labelName = sectorsMenuData[sector.key] || sector.key;
            return (
              <Link
                key={sector.key}
                href={sector.href}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-white/80 transition-all hover:bg-white/10 hover:text-kaza-gold whitespace-nowrap min-w-[180px] w-full"
                role="menuitem"
              >
                <Icon className="h-4.5 w-4.5 shrink-0 text-kaza-gold" />
                <span className="text-sm font-medium tracking-wide">
                  {labelName}
                </span>
              </Link>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
