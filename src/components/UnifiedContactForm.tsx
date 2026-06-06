"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { z } from "zod";
import { copy, useLang } from "@/context/LanguageContext";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  unitType: string;
  location: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const whatsappBaseUrl = "https://wa.me/201000082960";

const routeSectorMap: Record<"en" | "ar", Record<string, string>> = {
  en: {
    "/booking": "KAZA Property Booking Operations",
    "/beach": "KAZA Luxury Beach Clubs",
    "/breakfast": "KAZA Elite Breakfast Services",
    "/restaurant": "KAZA Culinary & Restaurant Partnerships",
    "/furniture": "KAZA Bespoke Furnishing Solutions",
    "/limousine": "KAZA Private Limousine Fleet",
    "/golf-car": "KAZA Smart Golf Car Operations",
    "/lagoon-activities": "KAZA Lagoon & Watersports Activities",
    "/entertainment": "KAZA Luxury Entertainment Lines",
    "/ticket": "KAZA Executive Ticket Management",
    "/": "KAZA Main Landing Page — General Inquiry",
  },
  ar: {
    "/booking": "منظومة كازا لحجز وإدارة الوحدات",
    "/beach": "قطاع كازا للشواطئ الفاخرة",
    "/breakfast": "خدمات كازا لضيافة الإفطار النخبوية",
    "/restaurant": "شراكات كازا الحصرية مع المطاعم الفاخرة",
    "/furniture": "حلول كازا للأثاث الفاخر والتجهيز المتكامل",
    "/limousine": "أسطول كازا لسيارات الليموزين الخاصة",
    "/golf-car": "منظومة كازا لسيارات الجولف الذكية",
    "/lagoon-activities": "كازا للأنشطة البحرية والبحيرات",
    "/entertainment": "قطاع كازا للترفيه الفاخر",
    "/ticket": "إدارة كازا للتذاكر والخدمات الخاصة",
    "/": "المنصة الرئيسية لكازا — استفسار عام",
  },
};

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "").trim();
}

function normalizePathname(pathname: string | null) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "");
}

export default function UnifiedContactForm() {
  const pathname = usePathname();
  const { lang, dir } = useLang();
  const t = copy[lang];
  const formCopy = t.unifiedContactForm;
  const currentLanguage = lang === "ar" ? "ar" : "en";
  const currentPathname = normalizePathname(pathname);
  const activeSector = routeSectorMap[currentLanguage][currentPathname] || routeSectorMap[currentLanguage]["/"];

  const [formData, setFormData] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    unitType: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, formCopy.errors.name),
        phone: z
          .string()
          .trim()
          .refine((value) => normalizePhone(value).replace(/^\+/, "").length >= 8, formCopy.errors.phone),
        location: z.string().trim().min(2, formCopy.errors.location),
      }),
    [formCopy.errors.location, formCopy.errors.name, formCopy.errors.phone]
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function buildMessage(values: Pick<FormValues, "name" | "phone" | "location">) {
    const trimmedName = values.name.trim();
    const trimmedPhone = values.phone.trim();
    const trimmedLocation = values.location.trim();

    if (lang === "ar") {
      return `السادة إدارة شركة كازا الفاخرة لإدارة الأصول والضيافة،

تحية طيبة وبعد،

أتوجه إليكم عبر المنصة الرسمية لطلب تنسيق استشارة تنفيذية بخصوص خدماتكم المتكاملة لإدارة وتشغيل الوحدات وحلول التأثيث الفاخر. تدوّن أدناه البيانات الأولية ومواصفات المشروع الخاص بي:

• اسم العميل: ${trimmedName}
• رقم تواصل أساسي: ${trimmedPhone}
• موقع الوحدة / المشروع المعماري: ${trimmedLocation}
• القطاع التشغيلي المطلوب: ${activeSector}

برجاء مراجعة الطلب وتنسيق موعد المقابلة الاستشارية من قبل فريق الإدارة التنفيذية.

مع خالص التقدير،
${trimmedName}`;
    }

    return `Dear KAZA Luxury Asset Management Team,

I am reaching out through your official digital portfolio to schedule an executive consultation regarding your premium asset management and bespoke development solutions. Please find my initial profile and property requirements detailed below:

• Client Name: ${trimmedName}
• Primary Contact: ${trimmedPhone}
• Property Location / Project: ${trimmedLocation}
• Interested Sector: ${activeSector}

Kindly coordinate this request with the executive team for verification and scheduling.

Best regards,
${trimmedName}`;
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = schema.safeParse(formData);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormValues | undefined;
        if (field) nextErrors[field] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    const compiledMessage = buildMessage(result.data);
    const target = `${whatsappBaseUrl}?text=${encodeURIComponent(compiledMessage)}`;
    const whatsappWindow = window.open(target, "_blank", "noopener,noreferrer");
    if (whatsappWindow) whatsappWindow.opener = null;
  }

  return (
    <section id="contact" dir={dir} className="bg-kaza-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-white"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-kaza-gold/15 border border-kaza-gold/30 text-kaza-gold text-sm font-semibold mb-6">
              {t.ctaEyebrow}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-7 leading-tight">
              {t.ctaHeadline}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {t.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-block bg-kaza-gold hover:bg-kaza-gold-light text-kaza-navy font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-kaza-gold/20 text-center"
              >
                {t.ctaCta1}
              </a>
              <a
                href={`tel:+201000082960`}
                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-center"
              >
                {t.ctaCta2}
              </a>
            </div>
            <p className="mt-6 text-white/40 text-xs max-w-sm leading-relaxed">{t.ctaMicrocopy}</p>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-10">
              <h3 className="text-white font-serif font-bold text-2xl mb-7">{t.formTitle}</h3>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.formName}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 focus:bg-white/8 transition-all"
                      autoComplete="name"
                    />
                    {errors.name && <p className="mt-2 text-xs text-kaza-gold">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.formPhone}
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 transition-all"
                      autoComplete="tel"
                      inputMode="tel"
                    />
                    {errors.phone && <p className="mt-2 text-xs text-kaza-gold">{errors.phone}</p>}
                  </div>
                </div>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.formEmail}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 transition-all"
                  autoComplete="email"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="unitType"
                    value={formData.unitType}
                    onChange={handleChange}
                    placeholder={t.formUnitType}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 transition-all"
                  />

                  <div>
                    <input
                      required
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={t.formLocation}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 transition-all"
                      autoComplete="street-address"
                    />
                    {errors.location && <p className="mt-2 text-xs text-kaza-gold">{errors.location}</p>}
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.formMessage}
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-kaza-gold/50 transition-all resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-kaza-gold hover:bg-kaza-gold-light text-kaza-navy font-bold py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-kaza-gold/20"
                >
                  {t.formSubmit}
                </button>
                <p className="text-center text-white/30 text-xs">{t.formPrivacy}</p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
