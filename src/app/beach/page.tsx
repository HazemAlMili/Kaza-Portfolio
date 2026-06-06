"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, copy } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnifiedContactForm from "@/components/UnifiedContactForm";
import { CheckCircle2, ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SECTOR_KEY = "beach";
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200";

export default function BeachPage() {
  const [mounted, setMounted] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<"all" | "karl" | "massimo">("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, dir } = useLang();

  const videosData = [
    {
      src: "/videos/beach/karl-video-1.mp4",
      id: "karl-video-1",
      category: "karl",
      labelAr: "كارل بيتش كلوب - لقطات ١",
      labelEn: "Karl Beach Club - Highlight 1",
      poster: "/images/beach/karl-video-1-cover.jpg"
    },
    {
      src: "/videos/beach/karl-video-2.mp4",
      id: "karl-video-2",
      category: "karl",
      labelAr: "كارل بيتش كلوب - لقطات ٢",
      labelEn: "Karl Beach Club - Highlight 2",
      poster: "/images/beach/karl-video-2-cover.jpg"
    },
    {
      src: "/videos/beach/massimo-video-1.mp4",
      id: "massimo-video-1",
      category: "massimo",
      labelAr: "ماسيمو بيتش كلوب - لقطات ١",
      labelEn: "Massimo Beach Club - Highlight 1",
      poster: "/images/beach/massimo-video-1-cover.jpg"
    },
    {
      src: "/videos/beach/massimo-video-2.mp4",
      id: "massimo-video-2",
      category: "massimo",
      labelAr: "ماسيمو بيتش كلوب - لقطات ٢",
      labelEn: "Massimo Beach Club - Highlight 2",
      poster: "/images/beach/massimo-video-2-cover.jpg"
    }
  ];

  const filteredVideos = videosData.filter(
    (video) => activeCategory === "all" || video.category === activeCategory
  );

  const handlePrevVideo = useCallback(() => {
    setActiveVideoIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredVideos.length) % filteredVideos.length;
    });
  }, [filteredVideos.length]);

  const handleNextVideo = useCallback(() => {
    setActiveVideoIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredVideos.length;
    });
  }, [filteredVideos.length]);

  useEffect(() => {
    let active = true;
    setTimeout(() => {
      if (active) setMounted(true);
    }, 0);
    return () => {
      active = false;
    };
  }, []);

  // Handle keyboard events for Video lightbox
  useEffect(() => {
    if (activeVideoIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoIndex(null);
      } else if (e.key === "ArrowRight") {
        handleNextVideo();
      } else if (e.key === "ArrowLeft") {
        handlePrevVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideoIndex, handleNextVideo, handlePrevVideo]);

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".sector-hero-bg", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-kaza-navy flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-kaza-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  const t = copy[lang];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectorData = ((t as any).sectors?.[SECTOR_KEY]) || {};
  const features = sectorData.features || [];

  return (
    <main dir={dir} className="min-h-screen bg-kaza-pearl text-kaza-navy flex flex-col justify-between">
      <div>
        <Header />

        {/* Parallax Hero */}
        <section ref={containerRef} className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center pt-20">
          <div className="sector-hero-bg absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
            <div className="absolute inset-0 bg-gradient-to-b from-kaza-navy/85 via-kaza-navy/60 to-kaza-navy/90 z-10" />
            <Image
              src={HERO_IMAGE_URL}
              alt={t.beachPage.hero.title || "Beach"}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="relative z-20 flex flex-col items-center max-w-4xl mx-auto px-6 text-center text-kaza-pearl">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-block px-4 py-1 rounded-full border border-kaza-gold/30 bg-kaza-gold/15 text-kaza-gold text-xs font-semibold tracking-wider uppercase"
            >
              {lang === "ar" ? "قطاعات KAZA المميزة" : "KAZA Specialized Sectors"}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-serif leading-tight drop-shadow-md"
            >
              {t.beachPage.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-200"
            >
              {t.beachPage.hero.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-28 bg-kaza-pearl">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Copywriting */}
              <motion.div
                initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                  {lang === "ar" ? "عن الخدمة التشغيلية" : "Operational Overview"}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6 text-kaza-navy leading-tight">
                  {lang === "ar"
                    ? `إعادة تعريف خدمات ${sectorData.title} بمعايير فندقية`
                    : `Redefining ${sectorData.title} with luxury hotel-grade operations`}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {sectorData.aboutSection}
                </p>

                <ul className="space-y-4">
                  {features.map((feature: string, idx: number) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: dir === "rtl" ? -15 : 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3.5 text-gray-700"
                    >
                      <CheckCircle2 className="w-5.5 h-5.5 text-kaza-gold shrink-0 mt-0.5" />
                      <span className="text-base md:text-lg leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Imagery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-kaza-gold/25"
              >
                <Image
                  src={HERO_IMAGE_URL}
                  alt={sectorData.title || "Beach"}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Luxury Showroom Matrix Section */}
        <section className="py-20 lg:py-28 bg-kaza-pearl border-t border-kaza-gold/10">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                {lang === "ar" ? "شركاء الضيافة النخبوية" : "Luxury Hospitality Partners"}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-4 text-kaza-navy">
                {lang === "ar" ? "الوجهات الساحلية الشريكة" : "Partner Destinations"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Karl Beach Club Card */}
              <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-kaza-gold/10 group">
                <div className="relative aspect-[16/10] w-full bg-kaza-navy-light overflow-hidden">
                  <Image
                    src="/images/beach/karl-beach-cover.jpg"
                    alt={t.beachPage.partners.karl.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating Action Badge overlay */}
                  <div className={`absolute top-4 ${dir === "rtl" ? "left-4" : "right-4"} z-20 flex gap-2`}>
                    <a
                      href="https://share.google/h2shCwU55RAhmoZ2T"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-kaza-navy/95 border border-kaza-navy hover:border-kaza-gold text-kaza-gold transition-all duration-300 backdrop-blur-sm shadow-md"
                      aria-label={t.beachPage.badges.google}
                      title={t.beachPage.badges.google}
                    >
                      <MapPin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/karlbeachclub?igsh=MWE3dTI2MWNldTFocg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-kaza-navy/95 border border-kaza-navy hover:border-kaza-gold text-kaza-gold transition-all duration-300 backdrop-blur-sm shadow-md"
                      aria-label={t.beachPage.badges.instagram}
                      title={t.beachPage.badges.instagram}
                    >
                      <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1BRfT9kuWm/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-kaza-navy/95 border border-kaza-navy hover:border-kaza-gold text-kaza-gold transition-all duration-300 backdrop-blur-sm shadow-md"
                      aria-label={t.beachPage.badges.facebook}
                      title={t.beachPage.badges.facebook}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-kaza-navy mb-4 whitespace-nowrap">
                      {t.beachPage.partners.karl.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                      {t.beachPage.partners.karl.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Massimo Beach Club Card */}
              <div className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-kaza-gold/10 group">
                <div className="relative aspect-[16/10] w-full bg-kaza-navy-light overflow-hidden">
                  <Image
                    src="/images/beach/massimo-beach-cover.jpg"
                    alt={t.beachPage.partners.massimo.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Floating Action Badge overlay */}
                  <div className={`absolute top-4 ${dir === "rtl" ? "left-4" : "right-4"} z-20 flex gap-2`}>
                    <a
                      href="https://share.google/bw9jTJxXDCIxZeH9i"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-kaza-navy/95 border border-kaza-navy hover:border-kaza-gold text-kaza-gold transition-all duration-300 backdrop-blur-sm shadow-md"
                      aria-label={t.beachPage.badges.google}
                      title={t.beachPage.badges.google}
                    >
                      <MapPin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/massimobeachclubegypt?igsh=dzd4bzQzMnNndWtt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-kaza-navy/95 border border-kaza-navy hover:border-kaza-gold text-kaza-gold transition-all duration-300 backdrop-blur-sm shadow-md"
                      aria-label={t.beachPage.badges.instagram}
                      title={t.beachPage.badges.instagram}
                    >
                      <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-kaza-navy mb-4 whitespace-nowrap">
                      {t.beachPage.partners.massimo.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                      {t.beachPage.partners.massimo.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instagram Video Showcase Grid */}
        <section className="py-20 lg:py-28 bg-kaza-navy text-kaza-pearl relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                {lang === "ar" ? "معرض الفيديو" : "Video Showcase"}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-4 text-white">
                {t.beachPage.videoSection.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {t.beachPage.videoSection.subtitle}
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {[
                { id: "all", labelEn: "All Highlights", labelAr: "الكل" },
                { id: "karl", labelEn: "Karl Beach Club", labelAr: "كارل بيتش كلوب" },
                { id: "massimo", labelEn: "Massimo Beach Club", labelAr: "ماسيمو بيتش كلوب" }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id as "all" | "karl" | "massimo");
                    setActiveVideoIndex(null);
                  }}
                  className={`px-6 py-2.5 rounded-full border text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-kaza-gold border-kaza-gold text-kaza-navy font-bold shadow-lg"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {lang === "ar" ? category.labelAr : category.labelEn}
                </button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {filteredVideos.map((video, idx) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 bg-kaza-navy-light shadow-2xl group cursor-pointer"
                  onClick={() => setActiveVideoIndex(idx)}
                >
                  {/* Overlay for premium look */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-kaza-navy/90 z-10 pointer-events-none" />
                  
                  {/* HTML5 video element */}
                  <video
                    src={video.src}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                    }}
                  />
                  
                  {/* Subtle video icon helper */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-2 pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-kaza-gold/90 flex items-center justify-center text-kaza-navy shadow-md shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-white/95 font-medium tracking-wide truncate">
                      {lang === "ar" ? video.labelAr : video.labelEn}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* External CTA Link */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {(activeCategory === "all" || activeCategory === "karl") && (
                <a
                  href="https://www.instagram.com/karlbeachclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-kaza-gold text-kaza-gold hover:bg-kaza-gold hover:text-kaza-navy font-semibold tracking-wide transition-all duration-300 whitespace-nowrap transform hover:-translate-y-0.5 shadow-lg"
                >
                  <span>{t.beachPage.karlCta}</span>
                  {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              )}
              {(activeCategory === "all" || activeCategory === "massimo") && (
                <a
                  href="https://www.instagram.com/massimobeachclubegypt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-kaza-gold text-kaza-gold hover:bg-kaza-gold hover:text-kaza-navy font-semibold tracking-wide transition-all duration-300 whitespace-nowrap transform hover:-translate-y-0.5 shadow-lg"
                >
                  <span>{t.beachPage.massimoCta}</span>
                  {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Video Lightbox Modal */}
        <AnimatePresence>
          {activeVideoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-kaza-navy/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setActiveVideoIndex(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-kaza-gold p-2 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveVideoIndex(null);
                }}
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                className="absolute left-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevVideo();
                }}
                aria-label="Previous Video"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                className="absolute right-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextVideo();
                }}
                aria-label="Next Video"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Lightbox Content Container */}
              <div
                className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    key={activeVideoIndex}
                    src={filteredVideos[activeVideoIndex]?.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10 object-contain"
                  />
                </div>
                {/* Caption / Progress */}
                <div className="absolute bottom-[-40px] text-center text-white">
                  <p className="text-sm font-medium tracking-wide">
                    {lang === "ar"
                      ? `فيديو لقطات ساحلية ${activeVideoIndex + 1} من ${filteredVideos.length}`
                      : `Coastal Highlights Video ${activeVideoIndex + 1} of ${filteredVideos.length}`}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Banner */}
        <section className="pb-24 lg:pb-32 bg-kaza-pearl">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-r from-kaza-navy to-kaza-navy-light text-white p-8 lg:p-14 text-center flex flex-col items-center relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(197,160,89,0.15),transparent_60%)]" />
              
              <div className="relative z-10 flex flex-col items-center">
                <span className="text-kaza-gold text-xs font-semibold uppercase tracking-wider mb-4">
                  {lang === "ar" ? "ارفع أداء وحدتك اليوم" : "Elevate Your Asset Today"}
                </span>
                <h3 className="text-2xl md:text-3.5xl font-serif font-bold mb-4 leading-tight max-w-2xl">
                  {lang === "ar"
                    ? `هل ترغب في إدارة وتشغيل ${sectorData.title} لوحدتك باحترافية؟`
                    : `Partner with KAZA for premium ${sectorData.title} operations.`}
                </h3>
                <p className="text-white/80 max-w-xl text-sm md:text-base mb-8 leading-relaxed">
                  {lang === "ar"
                    ? "ابدأ بتزويدنا ببيانات عقارك، وسيتواصل معك فريق الشراكات والتقييم الفني لـ KAZA."
                    : "Request an initial operational evaluation. Our luxury hospitality specialists will guide you through onboarding."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
                  <Link
                    href="/#contact"
                    className="w-full sm:w-auto bg-kaza-gold hover:bg-kaza-gold-light text-kaza-navy font-bold px-8 py-3.5 rounded-full transition-all text-center inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>{sectorData.ctaText}</span>
                    {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>
                  <Link
                    href="/"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3.5 rounded-full transition-all text-center"
                  >
                    {lang === "ar" ? "العودة للرئيسية" : "Back to Home"}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <UnifiedContactForm />
      </div>

      <Footer />
    </main>
  );
}
