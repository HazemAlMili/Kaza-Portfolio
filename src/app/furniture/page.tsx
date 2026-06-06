"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang, copy } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UnifiedContactForm from "@/components/UnifiedContactForm";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  PhoneCall,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HERO_IMAGE = "/kaza-furniture/kaza-furniture-1.jpeg";
const MAIN_IMAGE = "/kaza-furniture/kaza-furniture-2.jpeg";
const ARCHITECTURE_IMAGE_BASE = "/kaza-furniture/architectural-kitchens/catalog/";

const GALLERY_IMAGES = Array.from(
  { length: 27 },
  (_, i) => `/kaza-furniture/kaza-furniture-${i + 1}.jpeg`
);

const ARCHITECTURAL_GALLERY_IMAGES = [
  "KITCHEN-page4-image1.jpg",
  "KITCHEN-page5-image2.jpg",
  "KITCHEN-page5-image4.jpg",
  "KITCHEN-page6-image1.jpg",
  "KITCHEN-page7-image2.jpg",
  "KITCHEN-page7-image4.jpg",
  "KITCHEN-page8-image1.jpg",
  "KITCHEN-page9-image2.jpg",
  "KITCHEN-page9-image4.jpg",
  "KITCHEN-page10-image2.jpg",
  "KITCHEN-page11-image2.jpg",
  "KITCHEN-page12-image2.jpg",
  "KITCHEN-page13-image1.jpg",
  "KITCHEN-page14-image2.jpg",
  "KITCHEN-page15-image1.jpg",
  "KITCHEN-page16-image2.jpg",
  "KITCHEN-page17-image2.jpg",
  "KITCHEN-page18-image2.jpg",
  "KITCHEN-page19-image2.jpg",
  "KITCHEN-page19-image4.jpg",
  "KITCHEN-page20-image2.jpg",
  "KITCHEN-page21-image2.jpg",
  "KITCHEN-page22-image2.jpg",
  "KITCHEN-page22-image4.jpg",
  "KITCHEN-page23-image2.jpg",
  "KITCHEN-page23-image4.jpg",
  "KITCHEN-page24-image2.jpg",
  "KITCHEN-page25-image2.jpg",
  "KITCHEN-page26-image2.jpg",
].map((imageName) => `${ARCHITECTURE_IMAGE_BASE}${imageName}`);

const LOOKBOOK_IMAGES = [
  ARCHITECTURAL_GALLERY_IMAGES[1],
  ARCHITECTURAL_GALLERY_IMAGES[4],
  ARCHITECTURAL_GALLERY_IMAGES[7],
  ARCHITECTURAL_GALLERY_IMAGES[10],
];

export default function FurniturePage() {
  const [mounted, setMounted] = useState(false);
  const [kazaVisibleCount, setKazaVisibleCount] = useState(8);
  const [activeKazaIndex, setActiveKazaIndex] = useState<number | null>(null);
  const [architecturalVisibleCount, setArchitecturalVisibleCount] = useState(8);
  const [activeArchitecturalIndex, setActiveArchitecturalIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, dir } = useLang();

  useEffect(() => {
    let active = true;
    setTimeout(() => {
      if (active) setMounted(true);
    }, 0);
    return () => {
      active = false;
    };
  }, []);

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

      gsap.fromTo(
        ".metric-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  useEffect(() => {
    if (activeKazaIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveKazaIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveKazaIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      } else if (e.key === "ArrowLeft") {
        setActiveKazaIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeKazaIndex]);

  useEffect(() => {
    if (activeArchitecturalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveArchitecturalIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveArchitecturalIndex((prev) =>
          prev !== null ? (prev + 1) % ARCHITECTURAL_GALLERY_IMAGES.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveArchitecturalIndex((prev) =>
          prev !== null ? (prev - 1 + ARCHITECTURAL_GALLERY_IMAGES.length) % ARCHITECTURAL_GALLERY_IMAGES.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArchitecturalIndex]);

  const triggerResize = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("resize"));
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-kaza-navy flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-kaza-gold border-t-transparent animate-spin" />
      </div>
    );
  }

  const t = copy[lang];
  const page = t.furniturePage;

  return (
    <main dir={dir} className="min-h-screen bg-kaza-pearl text-kaza-navy flex flex-col justify-between">
      <div>
        <Header />

        <section ref={containerRef} className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center pt-20">
          <div className="sector-hero-bg absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
            <div className="absolute inset-0 bg-gradient-to-b from-kaza-navy/85 via-kaza-navy/60 to-kaza-navy/90 z-10" />
            <Image
              src={HERO_IMAGE}
              alt={page.hero.title}
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
              {page.sectorEyebrow}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-serif leading-tight drop-shadow-md"
            >
              {page.hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-gray-200"
            >
              {page.hero.subtitle}
            </motion.p>
          </div>
        </section>

        <section id="kaza-furniture" className="relative w-full py-20 lg:py-32">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                  {page.sectionOne.eyebrow}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold font-serif mb-6 text-kaza-navy leading-tight">
                  {page.sectionOne.overviewTitle}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {page.sectionOne.description}
                </p>

                <ul className="space-y-4">
                  {page.sectionOne.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
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

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-kaza-gold/25"
              >
                <Image
                  src={MAIN_IMAGE}
                  alt={page.sectionOne.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  onLoad={triggerResize}
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-kaza-navy text-kaza-pearl">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                {page.gallery.eyebrow}
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-4 text-white">
                {page.gallery.title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {page.gallery.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              <AnimatePresence>
                {GALLERY_IMAGES.slice(0, kazaVisibleCount).map((imgUrl, index) => (
                  <motion.div
                    key={imgUrl}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-kaza-navy-light cursor-pointer shadow-lg hover:shadow-2xl"
                    onClick={() => setActiveKazaIndex(index)}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${page.gallery.designCaption} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onLoad={triggerResize}
                    />
                    <div className="absolute inset-0 bg-kaza-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-kaza-gold text-kaza-navy p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {kazaVisibleCount < GALLERY_IMAGES.length && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setKazaVisibleCount((prev) => Math.min(prev + 8, GALLERY_IMAGES.length))}
                  className="bg-transparent hover:bg-kaza-gold text-kaza-gold hover:text-kaza-navy border border-kaza-gold hover:border-kaza-gold-light font-bold px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                >
                  <span>{page.gallery.loadMore}</span>
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-kaza-pearl text-kaza-navy relative overflow-hidden border-t border-gray-100">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-24">
              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: dir === "rtl" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                  {page.sectionTwo.eyebrow}
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-6 text-kaza-navy leading-tight">
                  {page.sectionTwo.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  {page.sectionTwo.description}
                </p>

                <div className="space-y-4">
                  {page.sectionTwo.commitments.map((commitment) => (
                    <div key={commitment} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-kaza-gold shrink-0 mt-1" />
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {commitment}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-7 flex flex-col gap-6"
                initial={{ opacity: 0, x: dir === "rtl" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-kaza-gold/20 bg-gray-50">
                  <Image
                    src={ARCHITECTURAL_GALLERY_IMAGES[6]}
                    alt={page.sectionTwo.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    onLoad={triggerResize}
                  />
                </div>
                <div className="text-center lg:text-end italic text-kaza-navy/70 text-base md:text-lg font-serif">
                  &ldquo;{page.sectionTwo.visualCaption}&rdquo;
                </div>
              </motion.div>
            </div>

            <div className="metrics-grid grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
              {page.sectionTwo.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`metric-card p-8 rounded-3xl shadow-lg flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-300 ${
                    index === 1
                      ? "bg-gradient-to-br from-kaza-navy to-kaza-navy-light text-white border border-white/5"
                      : "bg-white border border-gray-100 hover:border-kaza-gold/30"
                  }`}
                >
                  <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest mb-3 block">
                    {metric.label}
                  </span>
                  <span className={`text-3xl lg:text-4xl font-bold font-serif mb-4 block ${index === 1 ? "text-white" : "text-kaza-navy"}`}>
                    {metric.value}
                  </span>
                  <p className={`text-sm italic ${index === 1 ? "text-gray-300" : "text-gray-500"}`}>
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-24">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                  {page.sectionTwo.lookbookEyebrow}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif text-kaza-navy mb-4">
                  {page.sectionTwo.lookbookTitle}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {page.sectionTwo.lookbookDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
                {LOOKBOOK_IMAGES.map((imageUrl, index) => (
                  <motion.div
                    key={imageUrl}
                    className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-kaza-navy-light shadow-xl w-full ${
                      index % 2 === 0 ? "aspect-[4/5]" : "aspect-square lg:self-center"
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image
                      src={imageUrl}
                      alt={page.sectionTwo.characteristics[index]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      loading="lazy"
                      onLoad={triggerResize}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kaza-navy via-kaza-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 select-none">
                      <p className="text-white text-xs md:text-sm font-medium leading-relaxed text-start">
                        {page.sectionTwo.characteristics[index]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-24">
              <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-kaza-gold text-xs font-bold uppercase tracking-widest block mb-3">
                  {page.extendedGallery.eyebrow}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif text-kaza-navy mb-4">
                  {page.extendedGallery.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base">
                  {page.extendedGallery.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                <AnimatePresence>
                  {ARCHITECTURAL_GALLERY_IMAGES.slice(0, architecturalVisibleCount).map((imgUrl, index) => (
                    <motion.div
                      key={imgUrl}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className="group relative aspect-square rounded-2xl overflow-hidden border border-gray-150 bg-white cursor-pointer shadow-md hover:shadow-xl"
                      onClick={() => setActiveArchitecturalIndex(index)}
                    >
                      <Image
                        src={imgUrl}
                        alt={`${page.extendedGallery.designCaption} ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        onLoad={triggerResize}
                      />
                      <div className="absolute inset-0 bg-kaza-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-kaza-gold text-kaza-navy p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-md">
                          <Eye className="w-5 h-5" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {architecturalVisibleCount < ARCHITECTURAL_GALLERY_IMAGES.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() =>
                      setArchitecturalVisibleCount((prev) => Math.min(prev + 8, ARCHITECTURAL_GALLERY_IMAGES.length))
                    }
                    className="bg-transparent hover:bg-kaza-navy text-kaza-navy hover:text-kaza-pearl border border-kaza-navy hover:border-kaza-navy-light font-bold px-8 py-3.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>{page.extendedGallery.loadMore}</span>
                  </button>
                </div>
              )}
            </div>

            <motion.div
              className="bg-kaza-navy text-kaza-pearl rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(197,160,89,0.1),transparent_50%)]" />
              <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-center justify-between text-center lg:text-start">
                <div>
                  <span className="text-kaza-gold text-xs font-bold uppercase tracking-wider block mb-3">
                    {page.contactInquiries.label}
                  </span>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
                    {page.sectionOne.description}
                  </p>
                </div>
                <a
                  href={page.contactInquiries.phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-kaza-gold px-7 py-4 text-kaza-navy font-bold text-lg hover:bg-kaza-gold-light transition-all shadow-lg whitespace-nowrap"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{page.contactInquiries.phoneValue}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {activeKazaIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-kaza-navy/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setActiveKazaIndex(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-kaza-gold p-2 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveKazaIndex(null);
                }}
                aria-label={page.aria.closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="absolute left-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveKazaIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
                }}
                aria-label={page.aria.previousImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                className="absolute right-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveKazaIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
                }}
                aria-label={page.aria.nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div
                className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={GALLERY_IMAGES[activeKazaIndex]}
                    alt={`${page.gallery.designCaption} ${activeKazaIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-[-40px] text-center text-white">
                  <p className="text-sm font-medium tracking-wide">
                    {page.gallery.designCaption} {activeKazaIndex + 1}/{GALLERY_IMAGES.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeArchitecturalIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-kaza-navy/95 backdrop-blur-md flex items-center justify-center p-4 select-none"
              onClick={() => setActiveArchitecturalIndex(null)}
            >
              <button
                className="absolute top-6 right-6 text-white/80 hover:text-kaza-gold p-2 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveArchitecturalIndex(null);
                }}
                aria-label={page.aria.closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="absolute left-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveArchitecturalIndex((prev) =>
                    prev !== null ? (prev - 1 + ARCHITECTURAL_GALLERY_IMAGES.length) % ARCHITECTURAL_GALLERY_IMAGES.length : null
                  );
                }}
                aria-label={page.aria.previousImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                className="absolute right-6 text-white/80 hover:text-kaza-gold p-3 transition-colors cursor-pointer bg-white/5 rounded-full border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveArchitecturalIndex((prev) =>
                    prev !== null ? (prev + 1) % ARCHITECTURAL_GALLERY_IMAGES.length : null
                  );
                }}
                aria-label={page.aria.nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div
                className="relative max-w-4xl max-h-[80vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={ARCHITECTURAL_GALLERY_IMAGES[activeArchitecturalIndex]}
                    alt={`${page.extendedGallery.designCaption} ${activeArchitecturalIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
                <div className="absolute bottom-[-40px] text-center text-white">
                  <p className="text-sm font-medium tracking-wide">
                    {page.extendedGallery.designCaption} {activeArchitecturalIndex + 1}/{ARCHITECTURAL_GALLERY_IMAGES.length}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="pb-24 lg:pb-32">
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
                  {page.cta.eyebrow}
                </span>
                <h3 className="text-2xl md:text-3.5xl font-serif font-bold mb-4 leading-tight max-w-2xl">
                  {page.cta.title}
                </h3>
                <p className="text-white/80 max-w-xl text-sm md:text-base mb-8 leading-relaxed">
                  {page.cta.body}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
                  <a
                    href={page.contactInquiries.phoneHref}
                    className="w-full sm:w-auto bg-kaza-gold hover:bg-kaza-gold-light text-kaza-navy font-bold px-8 py-3.5 rounded-full transition-all text-center inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>{page.cta.primary}</span>
                    <PhoneCall className="w-4 h-4" />
                  </a>
                  <Link
                    href="/"
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-8 py-3.5 rounded-full transition-all text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>{page.cta.secondary}</span>
                    {dir === "rtl" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <UnifiedContactForm />

      <Footer />
    </main>
  );
}
