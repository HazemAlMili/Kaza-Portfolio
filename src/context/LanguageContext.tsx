"use client";

import React, { createContext, useContext, useState } from "react";

export type Lang = "ar" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLang: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

// ---- All site copy ----
export const copy = {
  ar: {
    // Hero
    heroEyebrow: "إدارة فندقية فاخرة للوحدات الساحلية والمصيفية",
    heroHeadline: "حوّل وحدتك في العلمين أو الساحل إلى أصل ضيافة مُدار باحتراف.",
    heroSub: "KAZA تدير وحدتك بنظام ضيافة فندقي متكامل: تسويق، تسعير ديناميكي، إدارة حجوزات، استقبال ضيوف، Housekeeping، صيانة، وتقارير مالية واضحة — بهدف تعظيم العائد مع الحفاظ على قيمة وحدتك.",
    heroCta1: "اطلب تقييم وحدتك",
    heroCta2: "تحدث مع فريق الشراكات",
    heroTrust: "تحت قيادة خبرة تنفيذية في إدارة الفنادق والمنتجعات الفاخرة، وعمليات ضيافة على مستوى علامات دولية ومشروعات كبرى.",

    // Authority
    authorityTitle: "خبرة Hospitality حقيقية وليست إدارة حجوزات فقط",
    authorityPoints: [
      "قيادة تنفيذية بخبرة تتجاوز 30 عامًا في الفنادق والمنتجعات الفاخرة.",
      "خبرة في تشغيل وإعادة هيكلة وافتتاح فنادق ومنتجعات 5 نجوم.",
      "خلفية في إدارة عمليات متعددة، Revenue Optimization، SOPs، وAsset Management.",
      "خبرة مرتبطة بعلامات مثل InterContinental، Crowne Plaza، Mövenpick، Holiday Inn، Palm Hills، وCoral Sea.",
    ],
    authorityBrands: ["InterContinental", "Crowne Plaza", "Mövenpick", "Holiday Inn", "Rotana", "Palm Hills", "Coral Sea"],

    // Problem
    problemHeadline: "امتلاك وحدة فاخرة لا يعني بالضرورة أنها تحقق أفضل عائد.",
    problemBody: "كثير من الوحدات الممتازة في العلمين والساحل تفقد جزءًا كبيرًا من فرصتها بسبب الإدارة العشوائية: تسعير غير دقيق، صور غير احترافية، حجوزات موسمية فقط، وغياب تقارير مالية واضحة.",
    problemPoints: [
      { title: "إشغال غير منتظم", body: "الوحدة متاحة لكن معدل الإشغال أقل من إمكانياتها الحقيقية." },
      { title: "تسعير عشوائي", body: "السعر يتحدد بالإحساس لا بالطلب والموسم والمنافسة." },
      { title: "ضغط يومي على المالك", body: "المالك يتعامل مع سماسرة أو ضيوف أو شكاوى بنفسه." },
      { title: "غياب الرقابة", body: "لا توجد متابعة دقيقة للتنظيف والصيانة والتسليم والاستلام." },
      { title: "لا تقارير واضحة", body: "لا توجد تقارير شهرية عن الإيرادات والمصاريف وصافي العائد." },
      { title: "استهلاك الوحدة", body: "الوحدة تستهلك مع الوقت بدون Brand Standards أو Quality Control." },
    ],

    // Solution
    solutionHeadline: "KAZA تدير وحدتك كأصل فندقي، لا كإعلان إيجار.",
    solutionBody: "نحن لا نكتفي بعرض وحدتك على الإنترنت. نحن نبني حولها نظام تشغيل كامل: positioning، تسعير، توزيع على قنوات الحجز، إدارة الضيوف، متابعة التشغيل، حماية التجربة، وتقارير مالية تساعدك ترى أداء وحدتك بوضوح.",
    solutionPromise: "We treat your property as our own.",
    solutionPoints: [
      { title: "التسعير الديناميكي", body: "تحليل يومي للسوق لرفع أو خفض السعر لضمان أعلى عائد سنوي ممكن." },
      { title: "تسويق احترافي متعدد القنوات", body: "ظهور على Airbnb، Booking.com، Expedia، وقنوات الحجز المباشر وB2C." },
      { title: "حماية الأصل والصيانة", body: "فحص دوري، واستلام وتسليم فندقي يحافظ على جودة وحدتك." },
      { title: "إدارة الضيوف بالكامل", body: "ردود فورية، تأهيل ضيوف، وإدارة التجربة من الوصول للمغادرة." },
      { title: "شفافية تامة", body: "بوابة للمالك تتيح لك متابعة الحجوزات والإيرادات والمصروفات بضغطة زر." },
      { title: "تقارير شهرية واضحة", body: "تقرير عن الإيرادات، المصاريف، نسب الإشغال، ومتوسط سعر الليلة." },
    ],

    // Services
    servicesEyebrow: "خدماتنا الكاملة",
    servicesHeadline: "نغطي دورة التشغيل بالكامل من أول تجهيز الوحدة حتى تقرير الأداء.",
    servicesBody: "كل ما يحتاجه المالك الذكي — من الإعداد للإطلاق حتى التقارير الشهرية — تحت إدارة واحدة متكاملة.",
    services: [
      { icon: "launch", title: "Property Launch & Setup", body: "نقيّم الوحدة، نحدد أفضل positioning لها، ونجهزها للظهور بشكل يليق بسعرها وموقعها." },
      { icon: "furnishing", title: "Luxury Furnishing & Full Setup", body: "لو وحدتك غير مفروشة، KAZA تتولى التأثيث والتجهيز بالكامل بمعايير ضيافة فاخرة: اختيار القطع، التنسيق، التجهيزات الأساسية، واللمسات النهائية الجاهزة للتشغيل." },
      { icon: "revenue", title: "Revenue Management & Dynamic Pricing", body: "نستخدم تسعيرًا ديناميكيًا حسب الموسم، أيام الأسبوع، الطلب، والمنافسة." },
      { icon: "channels", title: "Channel & Booking Management", body: "إدارة الظهور والحجوزات عبر Airbnb، Booking.com، Expedia، والحجوزات المباشرة." },
      { icon: "marketing", title: "Professional Marketing", body: "تصوير، محتوى، positioning، وإعلانات تساعد الضيف على الثقة في الوحدة." },
      { icon: "guest", title: "Guest Experience Management", body: "الرد على الاستفسارات، تأهيل الضيوف، تأكيد التفاصيل، ودعم أثناء الإقامة." },
      { icon: "housekeeping", title: "Housekeeping & Quality Control", body: "تنسيق التنظيف، checklists قبل وبعد الإقامة، وضمان مستوى ثابت للجودة." },
      { icon: "maintenance", title: "Maintenance Coordination", body: "متابعة الأعطال، التنسيق مع الفنيين، وتقليل أثر أي مشكلة على الوحدة." },
      { icon: "reporting", title: "Transparent Owner Reporting", body: "تقرير واضح عن الإيرادات، المصاريف، نسب الإشغال، ومتوسط سعر الليلة." },
    ],

    // Why Kaza
    whyEyebrow: "مقارنة سريعة",
    whyHeadline: "الفرق بين إدارة الحجوزات وإدارة الضيافة.",
    whyColFeature: "المعيار",
    whyColOthers: "الإدارة العشوائية",
    whyRows: [
      { old: "سعر ثابت أو تفاوضي", others: "سعر ثابت أو تفاوضي", kaza: "Dynamic Pricing حسب الطلب والموسم" },
      { old: "صور عادية أو غير كافية", kaza: "Presentation احترافي وتجربة موثقة" },
      { old: "الاعتماد على سمسار أو جروبات", others: "الاعتماد على سمسار أو جروبات", kaza: "Multi-channel distribution + Direct booking" },
      { old: "المالك يتابع التفاصيل بنفسه", others: "المالك يتابع التفاصيل بنفسه", kaza: "فريق يدير التشغيل والضيوف والمتابعة" },
      { old: "لا توجد تقارير واضحة", others: "لا توجد تقارير واضحة", kaza: "Owner reports وPerformance metrics" },
      { old: "الوحدة تستهلك بدون متابعة", others: "الوحدة تستهلك بدون متابعة", kaza: "Quality control وAsset protection" },
    ],
    whyColOld: "الإدارة العشوائية",
    whyColKaza: "KAZA",

    // Leadership
    leaderEyebrow: "من يقف وراء KAZA",
    leaderHeadline: "فريق قاد فنادق عالمية يدير الآن وحدتك بنفس المعايير.",
    leaderBody: "تقودنا خبرة تنفيذية تمتد لأكثر من 30 عامًا في إدارة الفنادق الفاخرة والمنتجعات الدولية، تشمل الافتتاحات من الصفر، إعادة الهيكلة التشغيلية، إدارة P&L، وتطوير معايير الضيافة الدولية عبر علامات تجارية كبرى في مصر والشرق الأوسط وأفريقيا. هذا ليس مكتب وساطة — هذا فريق يُدير وحدتك بعقلية مدير عام فندق خمس نجوم.",
    leaderBullets: [
      "خبرة تشغيلية مباشرة مع Mövenpick، InterContinental، Crowne Plaza، Holiday Inn، Rotana، وMillennium Hotels",
      "افتتاح وإعادة هيكلة منتجعات كبرى: Coral Sea، Tolip El Galala Majestic، وعمليات Palm Hills Hospitality",
      "إدارة P&L وإيرادات محافظ فندقية متعددة المواقع على المستوى الدولي",
      "تطوير وتطبيق SOPs ومعايير جودة الضيافة الدولية من الصفر",
      "إدارة علاقات الملاك والمستثمرين بمعايير مؤسسية احترافية",
      "تحويل وحدات متعثرة إلى أصول ضيافة مربحة ومستدامة",
    ],
    leadershipHeadline: "فريق قاد فنادق عالمية يدير الآن وحدتك بنفس المعايير.",
    leadershipBody: "تقودنا خبرة تنفيذية تمتد لأكثر من 30 عامًا في إدارة الفنادق الفاخرة والمنتجعات الدولية، تشمل الافتتاحات من الصفر، إعادة الهيكلة التشغيلية، إدارة P&L، وتطوير معايير الضيافة الدولية عبر علامات تجارية كبرى في مصر والشرق الأوسط وأفريقيا. هذا ليس مكتب وساطة — هذا فريق يُدير وحدتك بعقلية مدير عام فندق خمس نجوم.",
    leadershipBullets: [
      "خبرة تشغيلية مباشرة مع Mövenpick، InterContinental، Holiday Inn، Rotana، وMillennium Hotels",
      "افتتاح وإعادة هيكلة منتجعات كبرى: Coral Sea، Tolip El Galala Majestic، وعمليات Palm Hills Hospitality",
      "إدارة P&L وإيرادات محافظ فندقية متعددة المواقع على المستوى الدولي",
      "تطوير وتطبيق SOPs ومعايير جودة الضيافة الدولية من الصفر",
      "إدارة علاقات الملاك والمستثمرين بمعايير مؤسسية احترافية",
      "تحويل وحدات متعثرة إلى أصول ضيافة مربحة ومستدامة",
    ],

    // Process
    processEyebrow: "مسار الانضمام",
    processHeadline: "رحلة انضمام وحدتك إلى KAZA",
    steps: [
      { num: "01", title: "التواصل والاهتمام", body: "تملأ بيانات الوحدة أو تتواصل معنا لطلب تقييم مبدئي." },
      { num: "02", title: "تقييم الوحدة", body: "نراجع الموقع، نوع الوحدة، الحالة، الفرش، والإطلالة وقواعد المشروع." },
      { num: "03", title: "مراجعة العائد والجاهزية", body: "نحدد فرص العائد، نقاط التحسين، متطلبات التصوير والتسعير." },
      { num: "04", title: "هيكل الشراكة", body: "نتفق على نموذج الإدارة، المسؤوليات، الرسوم، والتقارير." },
      { num: "05", title: "الإطلاق والتجهيز", body: "نجهز الوحدة للتسويق: محتوى، قنوات، pricing، قواعد، وchecklists." },
      { num: "06", title: "الإدارة المستمرة", body: "نبدأ إدارة الحجوزات والضيوف والتقارير والتحسين المستمر." },
    ],
    processSteps: [
      { num: "01", title: "التواصل والاهتمام", body: "تملأ بيانات الوحدة أو تتواصل معنا لطلب تقييم مبدئي." },
      { num: "02", title: "تقييم الوحدة", body: "نراجع الموقع، نوع الوحدة، الحالة، الفرش، والإطلالة وقواعد المشروع." },
      { num: "03", title: "مراجعة العائد والجاهزية", body: "نحدد فرص العائد، نقاط التحسين، متطلبات التصوير والتسعير." },
      { num: "04", title: "هيكل الشراكة", body: "نتفق على نموذج الإدارة، المسؤوليات، الرسوم، والتقارير." },
      { num: "05", title: "الإطلاق والتجهيز", body: "نجهز الوحدة للتسويق: محتوى، قنوات، pricing، قواعد، وchecklists." },
      { num: "06", title: "الإدارة المستمرة", body: "نبدأ إدارة الحجوزات والضيوف والتقارير والتحسين المستمر." },
    ],

    // Final CTA
    ctaEyebrow: "ابدأ الآن",
    ctaHeadline: "هل وحدتك جاهزة لتصبح أصل ضيافة عالي الأداء؟",
    ctaBody: "إذا كنت تمتلك وحدة Premium في العلمين، الساحل، العين السخنة، القاهرة، أو وجهة سياحية راقية داخل مصر، يمكننا تقييم فرصتها التشغيلية والعائد المتوقع وطريقة إدارتها باحتراف.",
    ctaCta1: "اطلب تقييم وحدتك الآن",
    ctaCta2: "احجز مكالمة مع فريق KAZA",
    ctaMicrocopy: "التقييم الأولي لا يعني قبول كل الوحدات. نقبل فقط الوحدات القابلة للإدارة بمعايير KAZA.",
    finalHeadline: "هل وحدتك جاهزة لتصبح أصل ضيافة عالي الأداء؟",
    finalBody: "إذا كنت تمتلك وحدة Premium في العلمين، الساحل، العين السخنة، القاهرة، أو وجهة سياحية راقية داخل مصر، يمكننا تقييم فرصتها التشغيلية والعائد المتوقع وطريقة إدارتها باحتراف.",
    finalCta1: "اطلب تقييم وحدتك الآن",
    finalCta2: "احجز مكالمة مع فريق KAZA",
    finalMicro: "التقييم الأولي لا يعني قبول كل الوحدات. نقبل فقط الوحدات القابلة للإدارة بمعايير KAZA.",

    // Nav
    navLinks: ["مزايا الملاك", "خدماتنا", "لماذا KAZA", "من نحن", "تواصل معنا"],
    navPortal: "بوابة الملاك",
    navCta: "ابدأ الآن",
    navSectors: "القطاعات",
    sectorsMenu: {
      booking: "كازا للحجوزات",
      beach: "كازا للشاطئ",
      breakfast: "كازا للإفطار",
      restaurant: "كازا للمطعم",
      furniture: "كازا للأثاث",
      limousine: "كازا ليموزين",
      golfCar: "كازا سيارات الجولف",
      lagoon: "كازا أنشطة البحيرة",
      entertainment: "كازا للترفيه",
      ticket: "كازا للتذاكر"
    },
    sectorsDropdownLabels: {
      booking: "كازا للحجوزات",
      beach: "كازا للشاطئ",
      breakfast: "كازا للإفطار",
      restaurant: "كازا للمطعم",
      furniture: "كازا للأثاث",
      limousine: "كازا ليموزين",
      golfCar: "كازا سيارات الجولف",
      lagoon: "كازا أنشطة البحيرة",
      entertainment: "كازا للترفيه",
      ticket: "كازا للتذاكر"
    },

    // Sectors
    sectors: {
      booking: {
        title: "كازا لإدارة الحجوزات المتكاملة",
        heroSubtitle: "عظّم عوائدك من خلال أنظمة حجز آلية ومتعددة القنوات وبمعايير ضيافة خمس نجوم.",
        aboutSection: "تدمج كازا KAZA قوائم الوحدات عبر إير بي إن بي، وبوكينج، وإكسبيديا، وقنوات الحجز المباشر لمنع تكرار الحجوزات وتعظيم نسب الإشغال ديناميكيًا.",
        features: [
          "المزامنة متعددة القنوات: تحديثات فورية لتوفر الوحدات عبر جميع مواقع السفر العالمية.",
          "محرك الحجز المباشر: حجوزات خالية من العمولات عبر شبكة كازا الخاصة.",
          "إدارة التقويم الذكية: فحص مرن للضيوف وتنسيق تلقائي للتقاويم المتاحة."
        ],
        ctaText: "اطلب تقييم تكامل الحجوزات"
      },
      beach: {
        title: "كازا لتشغيل الوحدات الساحلية والشاطئية",
        heroSubtitle: "حوّل الفيلات والشاليهات الشاطئية إلى أصول ضيافة فاخرة ذات عوائد مرتفعة.",
        aboutSection: "تتطلب الإيجارات الساحلية رعاية متخصصة. توفر كازا KAZA إدارة متكاملة مخصصة للعقارات الساحلية الراقية في العلمين والساحل والسخنة لضمان الصيانة المثالية ورضا الضيوف.",
        features: [
          "الحماية والصيانة من الرطوبة والملوحة: رعاية استباقية ضد الرطوبة وتآكل الشواطئ.",
          "إدارة مستلزمات الشاطئ: تجهيز كامل لمستلزمات الشاطئ الفاخرة والمناشف والضيافة الخارجية.",
          "تعظيم العائد الموسمي: تسعير ديناميكي للاستفادة القصوى من مواسم الصيف والعطلات الأسبوعية."
        ],
        ctaText: "اطلب تقييم إدارة وحدة ساحلية"
      },
      breakfast: {
        title: "كازا لخدمات الفطور والطهي داخل الفيلات",
        heroSubtitle: "قدّم لضيوفك وجبات فطور فندقية فاخرة من فئة الخمس نجوم مباشرة إلى موائدهم.",
        aboutSection: "تبدأ تجربة الضيافة المميزة من الصباح الباكر. توفر كازا KAZA خدمات تقديم فطور منسقة وخيارات طهي داخل الوحدة لتمييز عقارك عن الإيجارات العادية.",
        features: [
          "سلال الفطور المنسقة: مكونات طازجة وفاخرة يتم تسليمها يومياً للضيوف.",
          "تجربة الشيف الخاص: إعداد طعام مخصص داخل الفيلا بواسطة طهاة محترفين بمعايير الفنادق.",
          "خطط وجبات مرنة: خيارات أساسية وفاخرة تلبي الاحتياجات الغذائية المفضلة للضيوف."
        ],
        ctaText: "استكشف تكامل خدمات الطعام"
      },
      restaurant: {
        title: "كازا لشراكات المطاعم وتجارب الطهي",
        heroSubtitle: "مزايا حصرية ووصول خاص لأرقى المطاعم لضيوف عقارك الفاخر.",
        aboutSection: "نتعاون مع المطاعم المحلية الكبرى لتقديم حجوزات ذات أولوية لضيوف كازا KAZA، وخدمة التوصيل الحصرية من قوائم طعام راقية، وتنسيق فعاليات تناول طعام خاصة لتعزيز مستوى الإقامة.",
        features: [
          "حجوزات كبار الشخصيات (VIP): مقاعد مضمونة وحجز ذو أولوية في أرقى مطاعم المنطقة.",
          "قوائم طعام حصرية بالوحدة: قوائم طعام منسقة خصيصاً من طهاة المطاعم الشريكة تُوصل للوحدة.",
          "فعاليات تناول طعام خاصة: تنسيق بوفيهات وحفلات عشاء خاصة للمناسبات داخل الفيلا."
        ],
        ctaText: "اطلب تفاصيل برنامج الشراكات"
      },
      furniture: {
        title: "كازا للأثاث والتجهيز الداخلي",
        heroSubtitle: "حوّل الوحدات الفارغة إلى مساحات ضيافة مذهلة وذات أداء تشغيلي مرتفع بتصميم متكامل وتجهيزات أثاث راقية.",
        aboutSection: "التصميم يحدد مستوى الطلب. يعمل قسم كازا للأثاث والتجهيز الداخلي مع مصممي ديكور محترفين لتجهيز وتوريد وتركيب أثاث فاخر عالي التحمل ومحسن للتشغيل التجاري.",
        features: [
          "حزم كازا للأثاث المتكاملة (مفتاح باليد): تنسيق كامل للمخططات، المشتريات، التوصيل، والتركيب.",
          "متانة تجارية فندقية: أقمشة ومواد راقية مصممة لتحمل تشغيل الإيجارات المتكرر.",
          "تنسيق داخلي جذاب للصور: تنسيق جمالي استراتيجي لتعزيز معدلات الحجز عبر الإنترنت."
        ],
        ctaText: "اطلب مقايسة كازا للأثاث والتجهيز"
      },
      limousine: {
        title: "كازا ليموزين والخدمات اللوجستية",
        heroSubtitle: "سافر براحة وفخامة مع خدمات النقل الخاص والتنقل الفاخر بين المطارات والمحافظات.",
        aboutSection: "توفر كازا ليموزين حلول نقل راقية للضيوف والعملاء. من الاستقبال في المطار وحتى الانتقالات بين المدن، يضمن سائقونا المحترفون رحلة مريحة وآمنة وبأعلى معايير الرفاهية.",
        features: [
          "أسطول فاخر: سيارات صالون ودفع رباعي حديثة مجهزة بالكامل لراحتك.",
          "سائقون محترفون: خبرة طويلة، التزام تام بالمواعيد، ومظهر لائق.",
          "متاح على مدار الساعة: مرونة كاملة في المواعيد مع تتبع الرحلات لضمان دقة الاستقبال."
        ],
        ctaText: "احجز انتقالك الفاخر الآن"
      },
      golfCar: {
        title: "كازا لسيارات الجولف والتنقل الداخلي",
        heroSubtitle: "تنقل داخلي سلس ومريح داخل المنتجعات والمجمعات السكنية الراقية.",
        aboutSection: "تنقل داخل الكمبوندات والمنتجعات الساحلية الراقية بكل سهولة. توفر كازا لسيارات الجولف خيارات تأجير وتنقل مريحة للتنقل السريع بين الشاطئ والمطاعم والوحدات السكنية.",
        features: [
          "أسطول كهربائي حديث: سيارات جولف صديقة للبيئة، صامتة وآمنة تماماً.",
          "إيجار مرن: حزم تأجير يومية، أسبوعية، أو موسمية تناسب فترة إقامتك.",
          "دعم وصيانة مستمرة: صيانة دورية سريعة مع توفير بديل فوري عند الأعطال."
        ],
        ctaText: "احجز سيارة الجولف الخاصة بك"
      },
      lagoon: {
        title: "كازا لأنشطة البحيرات والألعاب المائية",
        heroSubtitle: "تجارب ألعاب مائية ورياضات بحرية لا تُنسى في البحيرات الساحلية الخلابة.",
        aboutSection: "انطلق في مغامرتك المائية مع أنشطة كازا للبحيرات. نوفر باقة من الرياضات والألعاب المائية، وتأجير المعدات، والتجارب الترفيهية المنظمة لجعل إقامتك مليئة بالحيوية والمتعة.",
        features: [
          "معدات متميزة: قوارب كاياك، ألواح تجديف، ومعدات ألعاب مائية عالية الجودة والأمان.",
          "مدربون معتمدون: إشراف وتوجيه احترافي لضمان السلامة والمتعة لجميع الأعمار.",
          "وصول حصري: حجز مسبق ومضمون للأنشطة في أجمل البحيرات والشواطئ."
        ],
        ctaText: "استكشف أنشطة البحيرة المتاحة"
      },
      entertainment: {
        title: "كازا للترفيه وتنظيم الفعاليات",
        heroSubtitle: "تنظيم فعاليات مميزة، عروض ترفيهية حية، وتجارب ترفيهية مخصصة لنخبة الضيوف.",
        aboutSection: "تضفي كازا للترفيه حيوية خاصة على إقامتك. من تنظيم الحفلات الخاصة بالفيلا والعروض الموسيقية الحية إلى الفعاليات العائلية المبتكرة، نصمم لك تجارب ترفيهية تليق بضيوفنا.",
        features: [
          "تخطيط وتصميم الفعاليات: تنظيم متكامل للصوت والإضاءة والديكورات المخصصة.",
          "حجز فنانين وموسيقيين: وصول لأفضل منسقي الأغاني (DJs) والعازفين لإحياء حفلاتكم.",
          "أنشطة عائلية مخصصة: مناطق ترفيه للأطفال، سينما في الهواء الطلق، وألعاب تفاعلية."
        ],
        ctaText: "احجز عرضاً أو فعالية ترفيهية"
      },
      ticket: {
        title: "كازا لحجز التذاكر والخدمات الحصرية",
        heroSubtitle: "وصول ذو أولوية وحجوزات مضمونة لأهم الحفلات والمناسبات والوجهات الترفيهية.",
        aboutSection: "كن دائماً في قلب الحدث. توفر كازا لحجز التذاكر خدمات كونسيرج ممتازة لحجز تذاكر الحفلات الموسيقية، النوادي الشاطئية، وأرقى الوجهات الترفيهية والمطاعم ذات الطلب العالي.",
        features: [
          "تذاكر كبار الشخصيات (VIP): حجز مقاعد ممتازة وتذاكر للمناسبات كاملة العدد.",
          "حجز سهل وسريع: إصدار فوري للتذاكر وتوصيلها دون عناء أو أسعار مبالغ فيها.",
          "خدمة الكونسيرج: دخول سريع وحجز طاولات مميزة في الوجهات الشريكة."
        ],
        ctaText: "اطلب تذكرتك ذات الأولوية الآن"
      }
    },
    // Form
    formTitle: "اطلب تقييم وحدتك",
    formName: "الاسم",
    formPhone: "رقم الهاتف / واتساب",
    formEmail: "البريد الإلكتروني",
    formLocation: "موقع الوحدة",
    formProject: "اسم المشروع / الكمباوند",
    formType: "نوع الوحدة",
    formUnitType: "نوع الوحدة (شاليه، فيلا، شقة...)",
    formMessage: "ملاحظات أو تفاصيل إضافية",
    formTypes: ["Studio", "1 BR", "2 BR", "3 BR", "Villa", "Chalet"],
    formSubmit: "أرسل الطلب",
    formNote: "سيتواصل معك فريق KAZA خلال 24 ساعة.",
    formPrivacy: "سيتواصل معك فريق KAZA خلال 24 ساعة. لن يتم مشاركة بياناتك مع أي طرف ثالث.",
    unifiedContactForm: {
      eyebrow: "استشارة تنفيذية",
      title: "نسّق استشارتك مع فريق كازا",
      body: "أرسل بياناتك الأساسية وسيتم فتح رسالة واتساب احترافية جاهزة للإرسال إلى فريق كازا التنفيذي.",
      nameLabel: "اسم العميل",
      namePlaceholder: "اكتب اسمك الكامل",
      phoneLabel: "رقم تواصل أساسي",
      phonePlaceholder: "+20 10 00082960",
      locationLabel: "موقع الوحدة / المشروع المعماري",
      locationPlaceholder: "مثال: العلمين الجديدة، مراسي، القاهرة الجديدة",
      sectorLabel: "القطاع التشغيلي المطلوب",
      submit: "فتح واتساب للتنسيق",
      privacy: "سيتم تجهيز الرسالة في واتساب فقط، ولن يتم إرسال أي بيانات قبل مراجعتك لها.",
      errors: {
        name: "يرجى إدخال اسم لا يقل عن حرفين.",
        phone: "يرجى إدخال رقم تواصل صحيح.",
        location: "يرجى إدخال موقع الوحدة أو اسم المشروع."
      },
      sectorFallback: "خدمات كازا المتكاملة"
    },
    placeholderMetaData: {
      golfCarAlt: "منظومة كازا الذكية لسيارات الجولف الفاخرة - قريباً",
      limousineAlt: "أسطول كازا لسيارات الليموزين الخاصة - قريباً",
      entertainmentAlt: "قطاع كازا للترفيه الفاخر والفعاليات النخبوية - قريباً",
      ticketAlt: "إدارة كازا للتذاكر والخدمات الخاصة وكبار الشخصيات - قريباً"
    },
    beachPage: {
      hero: {
        title: "إدارة تشغيل الشواطئ النخبوية",
        subtitle: "دخول حصري وإدارة ساحلية فئة الخمس نجوم في أرقى الوجهات الشاطئية."
      },
      ctaButton: "اكتشف المزيد على إنستاجرام",
      karlCta: "اكتشف كارل بيتش كلوب على إنستاجرام",
      massimoCta: "اكتشف ماسيمو بيتش كلوب على إنستاجرام",
      videoSection: {
        title: "أبرز لقطات إنستاجرام",
        subtitle: "شاهد كواليس عملياتنا الحية وخبرتنا في تشغيل الشواطئ والمناطق الساحلية."
      },
      partners: {
        karl: {
          name: "كارل بيتش كلوب",
          desc: "ملاذ عائلي ساحر، حيث تمنحك الأكواخ الخاصة الفاخرة فرصة الاسترخاء وسكينة الأمواج."
        },
        massimo: {
          name: "ماسيمو بيتش كلوب",
          desc: "ماسيمو يضفي الحياة والجمال أينما وُجد 🌴\n🌴 العلمين الجديدة، الساحل الشمالي"
        }
      },
      badges: {
        google: "ملف جوجل",
        instagram: "إنستاجرام",
        facebook: "فيسبوك"
      }
    },
    furniturePage: {
      hero: {
        title: "حلول الأثاث الفاخر والتجهيز المتكامل",
        subtitle: "إدارة وتجهيز الفراغات الداخلية مصممة خصيصاً لملاك الوحدات النخبوية."
      },
      sectorEyebrow: "قطاعات كازا المتخصصة",
      sectionOne: {
        eyebrow: "خط كازا للتصنيع",
        title: "خط كازا للتصنيع والحرفية الفاخرة",
        description: "نحن نتولى المسؤولية الكاملة عن دورة تأثيث وحدتك؛ بدءاً من المخططات الهندسية وحتى التصنيع الفاخر.",
        overviewTitle: "حلول تأثيث مصممة بمعايير فندقية",
        features: [
          "تصميم وتخطيط داخلي مخصص لطبيعة الوحدة وتجربة الضيف المستهدفة.",
          "إدارة تصنيع وتشطيب كاملة بمواد فاخرة مناسبة للاستخدام التشغيلي المتكرر.",
          "تنسيق وتسليم نهائي يضمن جاهزية الوحدة للتصوير والتشغيل والاستضافة."
        ]
      },
      gallery: {
        eyebrow: "معرض التصميمات",
        title: "معرض كازا للأثاث الفاخر",
        description: "تصفح مجموعة من وحدات كازا المجهزة بتصميمات داخلية فاخرة وتجهيزات تشغيلية متكاملة.",
        designCaption: "تصميم كازا للأثاث",
        loadMore: "عرض المزيد من التصميمات"
      },
      sectionTwo: {
        eyebrow: "أنظمة المطابخ والخزائن",
        title: "أنظمة كازا للمطابخ وغرف الملابس المعمارية",
        description: "أنظمة الخزائن المدمجة والمطابخ الفاخرة المجهزة بالكامل لتناسب نمط حياتك العصرية.",
        visualCaption: "تفاصيل معمارية مصممة للراحة اليومية والانطباع الفندقي الفاخر.",
        commitments: [
          "تخطيط معماري ذكي للمطابخ وغرف الملابس ومساحات التخزين المدمجة.",
          "خامات وتشطيبات فاخرة مع حلول إضاءة وتفاصيل عملية عالية الاعتمادية.",
          "إدارة تنفيذ وتركيب متكاملة لضمان تسليم متناسق وجاهز للاستخدام."
        ],
        metrics: [
          { label: "إدارة دورة التأثيث", value: "من التصميم للتسليم", note: "مسار واحد تحت إشراف كازا" },
          { label: "جاهزية التشغيل", value: "ضيافة فاخرة", note: "تصميم يخدم الضيف والمالك" },
          { label: "جودة التنفيذ", value: "معايير مؤسسية", note: "تفاصيل قابلة للفحص والمتابعة" }
        ],
        lookbookEyebrow: "كتالوج الإلهام",
        lookbookTitle: "تفاصيل متكاملة لمساحات فاخرة",
        lookbookDescription: "حلول عملية وجمالية للمطابخ وغرف الملابس والخزائن المدمجة داخل وحدات الضيافة الراقية.",
        characteristics: [
          "إضاءة تأكيدية مدمجة تبرز الخامات وتعمق الإحساس بالفراغ.",
          "خامات وتشطيبات فاخرة مختارة لتحمل الاستخدام مع الحفاظ على المظهر الراقي.",
          "مساحات خدمة وتخزين مخفية تحافظ على نظافة المشهد وسهولة التشغيل.",
          "جزر مطبخ عملية ومساحات عمل مصممة لتجربة يومية مريحة."
        ]
      },
      extendedGallery: {
        eyebrow: "معرض المطابخ والخزائن",
        title: "معرض المشاريع المتكاملة",
        description: "استعرض حلول المطابخ وغرف الملابس والخزائن المدمجة ضمن منظومة كازا للتجهيز الداخلي.",
        designCaption: "تصميم كازا للمطابخ والخزائن",
        loadMore: "عرض المزيد من التصميمات"
      },
      contactInquiries: {
        label: "الخط الساخن للاستشارات التنفيذية",
        phoneValue: "+20 10 00082960",
        phoneHref: "tel:+201000082960"
      },
      cta: {
        eyebrow: "ارفع أداء وحدتك اليوم",
        title: "هل ترغب في تجهيز وحدتك بحلول كازا للأثاث الفاخر؟",
        body: "ابدأ بتزويدنا ببيانات عقارك، وسيتواصل معك فريق كازا لمراجعة احتياجات التأثيث والتجهيز المناسبة.",
        primary: "اطلب عرض تجهيز من كازا",
        secondary: "العودة للرئيسية"
      },
      aria: {
        closeLightbox: "إغلاق المعرض",
        previousImage: "الصورة السابقة",
        nextImage: "الصورة التالية"
      }
    },
    restaurantPage: {
      hero: {
        title: "شراكات الطهي الحصرية",
        subtitle: "تجارب طهي فاخرة ومنتقاة بعناية، مخصصة حصرياً لنزلاء كازا."
      },
      featuredPartner: {
        badge: "شريك متميز",
        title: "مطعم برنسس",
        description: "تعمل كازا كوسييط حصري لتزويد زوارنا بفرص استثنائية للوصول إلى مطعم برنسس. استمتع بقوائم طعام مخصصة وحجوزات ممتازة خلال فترة إقامتك."
      },
      gallery: {
        title: "معرض مطعم برنسس",
        description: "استمتع بمشاهدة أطباق مطعم برنسس وتصميمه الراقي وخدمته المتميزة.",
        designCaption: "أطباق وتصميم مطعم برنسس"
      }
    },
    lagoonActivitiesPage: {
      hero: {
        title: "أنشطة البحيرة من كازا",
        subtitle: "إعادة تعريف رفاهية المياه الفيروزية من خلال الرياضات المائية المنسقة وتجارب البحيرة النخبوية."
      },
      videoSection: {
        title: "كواليس أنشطة البحيرة",
        subtitle: "شاهد الحيوية والرفاهية المائية في بحيرات كازا المميزة."
      },
      cards: {
        card1: { title: "خدمات الجيت سكي الخاصة" },
        card2: { title: "رحلات الكاياك الخاصة" },
        card3: { title: "رياضة الويك بورد الفاخرة" }
      },
      externalCta: "تابع رحلتنا على تيك توك"
    },
  },
  en: {
    heroEyebrow: "Luxury Vacation Rental Management & Hospitality Services",
    heroHeadline: "Turn your premium property into a professionally managed hospitality asset.",
    heroSub: "KAZA manages premium vacation rentals through hotel-grade operations: dynamic pricing, professional marketing, multi-channel distribution, guest relations, housekeeping, maintenance coordination, and transparent owner reporting.",
    heroCta1: "Request a Property Evaluation",
    heroCta2: "Speak to Partnerships",
    heroTrust: "Led by senior hospitality expertise with experience across luxury hotels, resorts, openings, turnarounds, asset management, and large-scale operations.",

    authorityTitle: "Real hospitality leadership — not just booking management.",
    authorityPoints: [
      "30+ years of executive hospitality experience.",
      "Luxury hotel, resort, and multi-property operations background.",
      "Experience in hotel openings, repositioning, SOP implementation, and profitability growth.",
      "Leadership experience connected to InterContinental, Holiday Inn, Mövenpick, Palm Hills, and Coral Sea.",
    ],
    authorityBrands: ["InterContinental", "Mövenpick", "Holiday Inn", "Rotana", "Palm Hills", "Coral Sea"],

    problemHeadline: "Owning a premium property does not automatically mean it performs like one.",
    problemBody: "Many high-value units in New Alamein and the North Coast underperform because they are managed casually: inconsistent pricing, weak marketing, broker dependency, no performance reporting, and no structured hospitality standards.",
    problemPoints: [
      { title: "Low occupancy", body: "The unit is available but occupancy is below its real potential." },
      { title: "Pricing guesswork", body: "Rates set on intuition rather than demand, seasonality, and competition." },
      { title: "Daily owner stress", body: "The owner handles guests, complaints, cleaning, and coordination personally." },
      { title: "No quality control", body: "No structured housekeeping, maintenance, or handover process." },
      { title: "No financial visibility", body: "No clear monthly reporting on revenue, expenses, and net yield." },
      { title: "Asset depreciation", body: "Property wears down over time without brand standards or quality oversight." },
    ],

    solutionHeadline: "KAZA manages your property as a hospitality asset — not just a rental listing.",
    solutionBody: "We do more than publish your unit online. We build the operating system around it: positioning, pricing, distribution, guest experience, operations, quality control, and transparent reporting.",
    solutionPromise: "We treat your property as our own.",
    solutionPoints: [
      { title: "Dynamic Pricing", body: "Daily market analysis to optimize rates and maximize annual yield." },
      { title: "Professional Multi-Channel Marketing", body: "Visibility on Airbnb, Booking.com, Expedia, direct booking channels, and B2C marketplaces." },
      { title: "Asset Protection & Maintenance", body: "Regular inspections and hotel-grade handover process to protect your unit." },
      { title: "Full Guest Management", body: "Instant responses, guest screening, arrival coordination, and experience management." },
      { title: "Total Transparency", body: "Owner portal to track bookings, revenue, and expenses at any time." },
      { title: "Clear Monthly Reporting", body: "Revenue, expenses, occupancy rate, and ADR in one clear report." },
    ],

    servicesEyebrow: "Our Full Services",
    servicesHeadline: "A complete management system from property readiness to performance reporting.",
    servicesBody: "Everything a smart property owner needs — from launch to monthly reporting — under one integrated management system.",
    services: [
      { icon: "launch", title: "Property Launch & Setup", body: "We assess the property, define its positioning, identify readiness gaps, and prepare it for market." },
      { icon: "furnishing", title: "Luxury Furnishing & Full Setup", body: "If your unit is unfurnished, KAZA can handle the full hospitality-grade furnishing setup: furniture selection, styling, core equipment, and final readiness for premium guest operations." },
      { icon: "revenue", title: "Revenue Management & Dynamic Pricing", body: "We optimize pricing based on seasonality, demand, weekday/weekend patterns, and competitive context." },
      { icon: "channels", title: "Channel & Booking Management", body: "Distribution across Airbnb, Booking.com, Expedia, direct booking, and partner networks." },
      { icon: "marketing", title: "Professional Marketing", body: "Photography direction, content, positioning, and conversion-focused presentation." },
      { icon: "guest", title: "Guest Experience Management", body: "Inquiry handling, guest qualification, arrival coordination, stay support, and review management." },
      { icon: "housekeeping", title: "Housekeeping & Quality Control", body: "Cleaning coordination, readiness checklists, pre-arrival and post-departure checks." },
      { icon: "maintenance", title: "Maintenance Coordination", body: "Issue tracking, vendor coordination, and operational follow-up to protect the asset." },
      { icon: "reporting", title: "Transparent Owner Reporting", body: "Clear reporting on revenue, expenses, occupancy, ADR, and operational notes." },
    ],

    whyEyebrow: "Quick Comparison",
    whyHeadline: "The difference between managing bookings and managing hospitality.",
    whyColFeature: "Standard",
    whyColOthers: "Casual Management",
    whyRows: [
      { old: "Fixed or emotional pricing", others: "Fixed or emotional pricing", kaza: "Dynamic pricing and revenue optimization" },
      { old: "Weak photography & marketing", others: "Weak photography & marketing", kaza: "Professional presentation and verified experience" },
      { old: "Broker-led demand", others: "Broker-led demand", kaza: "Multi-channel distribution + Direct booking strategy" },
      { old: "Owner handles daily issues", others: "Owner handles daily issues", kaza: "Professional guest and operations management" },
      { old: "No performance visibility", others: "No performance visibility", kaza: "Transparent owner reporting" },
      { old: "Property wears down unmanaged", others: "Property wears down unmanaged", kaza: "Quality control and asset protection" },
    ],
    whyColOld: "Casual Management",
    whyColKaza: "KAZA",

    leaderEyebrow: "The Leadership Behind KAZA",
    leaderHeadline: "A team that ran world-class hotels now manages your property.",
    leaderBody: "KAZA is led by a hospitality executive with 30+ years of direct hands-on experience across luxury hotels, international resorts, multi-property portfolios, full hotel openings, operational restructuring, revenue optimization, and institutional asset management — spanning Egypt, the Middle East, and Africa. This is not a brokerage. This is hotel-grade operational leadership applied to your private property.",
    leaderBullets: [
      "Direct operational experience with Mövenpick, InterContinental, Crowne Plaza, Holiday Inn, Rotana & Millennium Hotels",
      "Led openings & full operations: Coral Sea, Tolip El Galala Majestic & Palm Hills Hospitality",
      "Multi-property P&L management, revenue optimization & financial performance across international markets",
      "International SOP development, brand standards & hospitality quality control implementation",
      "Owner and investor relations at institutional hospitality standards",
      "Hotel turnarounds: repositioning underperforming assets into profitable hospitality operations",
    ],
    leadershipHeadline: "A team that ran world-class hotels now manages your property.",
    leadershipBody: "KAZA is led by a hospitality executive with 30+ years of direct hands-on experience across luxury hotels, international resorts, multi-property portfolios, full hotel openings, operational restructuring, revenue optimization, and institutional asset management — spanning Egypt, the Middle East, and Africa. This is not a brokerage. This is hotel-grade operational leadership applied to your private property.",
    leadershipBullets: [
      "Direct operational experience with Mövenpick, InterContinental, Holiday Inn, Rotana & Millennium Hotels",
      "Led openings & full operations: Coral Sea, Tolip El Galala Majestic & Palm Hills Hospitality",
      "Multi-property P&L management, revenue optimization & financial performance across international markets",
      "International SOP development, brand standards & hospitality quality control implementation",
      "Owner and investor relations at institutional hospitality standards",
      "Hotel turnarounds: repositioning underperforming assets into profitable hospitality operations",
    ],

    processEyebrow: "The Onboarding Journey",
    processHeadline: "How your property joins KAZA",
    steps: [
      { num: "01", title: "Expression of Interest", body: "Submit your property details or request an initial discussion." },
      { num: "02", title: "Property Evaluation", body: "We review the location, type, condition, furnishing, view, and operational suitability." },
      { num: "03", title: "Revenue & Readiness Review", body: "We identify revenue opportunities, readiness gaps, pricing potential, and launch requirements." },
      { num: "04", title: "Partnership Structure", body: "We agree on the management model, responsibilities, fees, reporting, and payout timelines." },
      { num: "05", title: "Launch Setup", body: "We prepare the property for market: content, channels, pricing, rules, and checklists." },
      { num: "06", title: "Ongoing Management", body: "We manage bookings, guests, operations, reporting, and continuous optimization." },
    ],
    processSteps: [
      { num: "01", title: "Expression of Interest", body: "Submit your property details or request an initial discussion." },
      { num: "02", title: "Property Evaluation", body: "We review the location, type, condition, furnishing, view, and operational suitability." },
      { num: "03", title: "Revenue & Readiness Review", body: "We identify revenue opportunities, readiness gaps, pricing potential, and launch requirements." },
      { num: "04", title: "Partnership Structure", body: "We agree on the management model, responsibilities, fees, reporting, and payout timelines." },
      { num: "05", title: "Launch Setup", body: "We prepare the property for market: content, channels, pricing, rules, and checklists." },
      { num: "06", title: "Ongoing Management", body: "We manage bookings, guests, operations, reporting, and continuous optimization." },
    ],

    ctaEyebrow: "Start Now",
    ctaHeadline: "Is your property ready to become a high-performing hospitality asset?",
    ctaBody: "If you own a premium unit in New Alamein, the North Coast, Ain Sokhna, Cairo, or another premium Egyptian destination, KAZA can evaluate its revenue potential and fit for professional management.",
    ctaCta1: "Request a Property Evaluation",
    ctaCta2: "Book a Call with KAZA",
    ctaMicrocopy: "Initial evaluation does not guarantee acceptance. KAZA only accepts properties that meet its hospitality and quality standards.",
    finalHeadline: "Is your property ready to become a high-performing hospitality asset?",
    finalBody: "If you own a premium unit in New Alamein, the North Coast, Ain Sokhna, Cairo, or another premium Egyptian destination, KAZA can evaluate its revenue potential and fit for professional management.",
    finalCta1: "Request a Property Evaluation",
    finalCta2: "Book a Call with KAZA",
    finalMicro: "Initial evaluation does not guarantee acceptance. KAZA only accepts properties that meet its hospitality and quality standards.",

    navLinks: ["Owner Benefits", "Our Services", "Why KAZA", "About", "Contact"],
    navPortal: "Owner Portal",
    navCta: "Get Started",
    navSectors: "Sectors",
    sectorsMenu: {
      booking: "KAZA Booking",
      beach: "KAZA Beach",
      breakfast: "KAZA Breakfast",
      restaurant: "KAZA Restaurant",
      furniture: "KAZA Furniture",
      limousine: "KAZA Limousine",
      golfCar: "KAZA Golf Car",
      lagoon: "KAZA Lagoon Activities",
      entertainment: "KAZA Entertainment",
      ticket: "KAZA Ticket"
    },
    sectorsDropdownLabels: {
      booking: "KAZA Booking",
      beach: "KAZA Beach",
      breakfast: "KAZA Breakfast",
      restaurant: "KAZA Restaurant",
      furniture: "KAZA Furniture",
      limousine: "KAZA Limousine",
      golfCar: "KAZA Golf Car",
      lagoon: "KAZA Lagoon Activities",
      entertainment: "KAZA Entertainment",
      ticket: "KAZA Ticket"
    },

    // Sectors
    sectors: {
      booking: {
        title: "KAZA Booking Operations",
        heroSubtitle: "Maximize yield with automated, multi-channel booking systems and five-star hospitality standards.",
        aboutSection: "KAZA integrates property listings across Airbnb, Booking.com, Expedia, and direct B2C channels. We eliminate double-bookings and optimize occupancy dynamically.",
        features: [
          "Multi-Channel Sync: Real-time availability updates across all global travel sites.",
          "Direct Booking Engine: Commission-free reservations via KAZA's proprietary network.",
          "Smart Calendar Management: Flexible guest screening and automated calendar blockages."
        ],
        ctaText: "Request a Booking Integration Evaluation"
      },
      beach: {
        title: "KAZA Beach & Coastal Operations",
        heroSubtitle: "Turn your coastal villas and beachfront chalets into premium, high-yield hospitality assets.",
        aboutSection: "Coastal rentals require specialized care. KAZA offers end-to-end management tailored for high-end coastal properties in Alamein, North Coast, and Sokhna, ensuring pristine maintenance and premium guest satisfaction.",
        features: [
          "Saltwater Protection & Maintenance: Preemptive care against coastal humidity and salt air corrosion.",
          "Beach Amenities Management: Full setup of premium beach gear, towels, and outdoor hospitality.",
          "Seasonal Yield Maximization: Dynamic pricing to capitalize on peak summer seasons and weekend escapes."
        ],
        ctaText: "Request Coastal Property Management Evaluation"
      },
      breakfast: {
        title: "KAZA In-Villa Breakfast & Dining",
        heroSubtitle: "Deliver standard-setting, five-star hotel breakfasts directly to your guests' dining tables.",
        aboutSection: "A signature hospitality experience starts in the morning. KAZA provides curated breakfast catering and chef-prepared in-villa dining options that set your property apart from casual rental listings.",
        features: [
          "Curated Breakfast Baskets: Gourmet, locally sourced ingredients delivered fresh daily.",
          "Private Chef Experience: Customized in-villa culinary preparation by professional hotel-grade chefs.",
          "Flexible Meal Plans: Standard and premium options tailored to guest dietary requirements and preferences."
        ],
        ctaText: "Explore Dining Service Integrations"
      },
      restaurant: {
        title: "KAZA Restaurant Partnerships",
        heroSubtitle: "Exclusive culinary access and dining privileges for premium vacation rentals.",
        aboutSection: "We partner with leading local restaurants and culinary hot spots to offer KAZA guests priority reservations, in-unit delivery from elite menus, and bespoke dining events, elevating the value of your property's concierge service.",
        features: [
          "VIP Reservations: Guaranteed seating and priority booking at the destination's top-tier restaurants.",
          "Exclusive In-Unit Menus: Access to specially curated chef menus delivered directly to the property.",
          "Bespoke Dining Events: Tailored catering and micro-events coordination for special occasions."
        ],
        ctaText: "Request Partnership Program Details"
      },
      furniture: {
        title: "KAZA Furniture & Interior Setup",
        heroSubtitle: "Transform empty units into stunning, high-performance hospitality spaces with turn-key design and custom furniture services.",
        aboutSection: "Design dictates demand. KAZA's furniture and interior design department works with professional interior designers to curate, procure, and install high-durability, luxury furniture and equipment optimized for commercial rental operations.",
        features: [
          "Turn-key KAZA Furniture Packages: Complete layout curation, purchase, delivery, and setup.",
          "Commercial-Grade Durability: High-end fabrics and materials designed to withstand vacation wear.",
          "Photogenic Interior Styling: Strategic aesthetic placement to maximize listing click-through rates."
        ],
        ctaText: "Request a KAZA Furniture Quote"
      },
      limousine: {
        title: "KAZA Limousine & Premium Transfers",
        heroSubtitle: "Travel in comfort and luxury with our private, premium airport and regional transfer services.",
        aboutSection: "KAZA Limousine provides elite transportation solutions for guests. From airport pick-ups to regional transfers, our professional chauffeurs ensure a smooth, secure, and luxury journey.",
        features: [
          "Luxury Fleet: Modern, premium sedans and SUVs styled for ultimate comfort.",
          "Professional Chauffeurs: Experienced, multilingual, and background-checked drivers.",
          "24/7 Availability: On-demand scheduling and flight tracking for punctual pickups."
        ],
        ctaText: "Book a Luxury Transfer"
      },
      golfCar: {
        title: "KAZA Golf Car Services",
        heroSubtitle: "Seamless local mobility within luxury resorts and beachfront communities.",
        aboutSection: "Navigate premium coastal compounds and resorts effortlessly. KAZA Golf Car services offer rental and standby mobility options for easy transport between beach, dining, and residences.",
        features: [
          "Electric Fleet: Eco-friendly, silent, and modern electric golf carts.",
          "Flexible Rentals: Daily, weekly, or seasonal packages tailored to your stay.",
          "Maintenance Support: On-call technical support and immediate vehicle replacement."
        ],
        ctaText: "Reserve a Golf Car"
      },
      lagoon: {
        title: "KAZA Lagoon & Water Activities",
        heroSubtitle: "Unforgettable water sports and leisure experiences on pristine coastal lagoons.",
        aboutSection: "Dive into adventure with KAZA Lagoon Activities. We offer curated water sports, equipment rentals, and guided leisure experiences designed to make lagoon life vibrant and engaging.",
        features: [
          "Premium Equipment: High-quality kayaks, paddleboards, and water sports gear.",
          "Certified Instructors: Professional guidance and safety monitoring for all ages.",
          "Exclusive Access: Reserved booking spots on premium lagoons and beaches."
        ],
        ctaText: "Explore Lagoon Activities"
      },
      entertainment: {
        title: "KAZA Entertainment & Event Styling",
        heroSubtitle: "Curating elite events, live entertainment, and personalized leisure experiences.",
        aboutSection: "KAZA Entertainment brings life to your stay. From private villa parties and live music performances to curated family events, we orchestrate bespoke entertainment at the highest standard.",
        features: [
          "Bespoke Event Planning: Tailored setups, lighting, sound, and theme design.",
          "Live Talent Booking: Access to top DJs, musicians, and specialty performers.",
          "Family-Friendly Zones: Dedicated kids' activities, movie nights, and interactive games."
        ],
        ctaText: "Book an Event or Show"
      },
      ticket: {
        title: "KAZA Ticket Booking & Concierge",
        heroSubtitle: "Priority access and tickets to the most exclusive concerts, parties, and venues.",
        aboutSection: "Never miss out on the action. KAZA Ticket provides priority concierge booking for high-demand concerts, parties, beach clubs, and elite dining venues in top coastal and city destinations.",
        features: [
          "VIP Ticket Allocation: Access to sold-out events and premium seating arrangements.",
          "Seamless Booking: Direct ticketing without hassle or inflated reseller rates.",
          "Concierge Services: Fast-track entry and table reservations at partner venues."
        ],
        ctaText: "Request Priority Tickets"
      }
    },
    formTitle: "Request a Property Evaluation",
    formName: "Full Name",
    formPhone: "Phone / WhatsApp",
    formEmail: "Email Address",
    formLocation: "Property Location",
    formProject: "Project / Compound Name",
    formType: "Property Type",
    formUnitType: "Unit Type (Studio, Villa, Chalet...)",
    formMessage: "Additional notes or details",
    formTypes: ["Studio", "1 BR", "2 BR", "3 BR", "Villa", "Chalet"],
    formSubmit: "Send Request",
    formNote: "KAZA team will contact you within 24 hours.",
    formPrivacy: "KAZA team will contact you within 24 hours. Your data will never be shared with third parties.",
    unifiedContactForm: {
      eyebrow: "Executive Consultation",
      title: "Coordinate with the KAZA team",
      body: "Share your initial details and we will prepare a refined WhatsApp message addressed to KAZA's executive team.",
      nameLabel: "Client Name",
      namePlaceholder: "Enter your full name",
      phoneLabel: "Primary Contact",
      phonePlaceholder: "+20 10 00082960",
      locationLabel: "Property Location / Project",
      locationPlaceholder: "Example: New Alamein, Marassi, New Cairo",
      sectorLabel: "Interested Sector",
      submit: "Open WhatsApp Consultation",
      privacy: "The message opens in WhatsApp for your review before sending. No data is submitted to an internal database.",
      errors: {
        name: "Please enter a name with at least 2 characters.",
        phone: "Please enter a valid contact number.",
        location: "Please enter the property location or project name."
      },
      sectorFallback: "KAZA Integrated Services"
    },
    placeholderMetaData: {
      golfCarAlt: "KAZA Smart Golf Car Premium Services Coming Soon",
      limousineAlt: "KAZA Executive Private Limousine Fleet Coming Soon",
      entertainmentAlt: "KAZA Luxury Entertainment and Curated Events Coming Soon",
      ticketAlt: "KAZA Executive Ticket Management VIP Access Coming Soon"
    },
    beachPage: {
      hero: {
        title: "Elite Beachfront Operations",
        subtitle: "Exclusive access and five-star coastal management at premium seaside destinations."
      },
      ctaButton: "Explore More on Instagram",
      karlCta: "Explore Karl Beach Club on Instagram",
      massimoCta: "Explore Massimo Beach Club on Instagram",
      videoSection: {
        title: "Instagram Video Highlights",
        subtitle: "Watch behind-the-scenes moments of our beachfront operations."
      },
      partners: {
        karl: {
          name: "Karl Beach Club",
          desc: "A Family Oriented Paradise Escape Where Lavish Private Setting Cottages, Let You Snuggle Up By The Serenity of waves."
        },
        massimo: {
          name: "Massimo Beach Club",
          desc: "Massimo brings life to the place where it is placed 🌴\n🌴 New Alamein North Coast"
        }
      },
      badges: {
        google: "Google Profile",
        instagram: "Instagram",
        facebook: "Facebook"
      }
    },
    furniturePage: {
      hero: {
        title: "Bespoke Furnishing & Interior Solutions",
        subtitle: "Tailored interior management built exclusively for premium property owners."
      },
      sectorEyebrow: "KAZA Specialized Sectors",
      sectionOne: {
        eyebrow: "KAZA Craftsmanship Line",
        title: "KAZA Premium Craftsmanship Line",
        description: "We take full ownership of your property furnishing lifecycle. From design layouts to elite manufacturing.",
        overviewTitle: "Bespoke furnishing with hotel-grade execution",
        features: [
          "Custom interior planning tailored to the unit, owner goals, and target guest experience.",
          "Premium manufacturing and finishing management using durable, operation-ready materials.",
          "Final styling, handover, and readiness checks for photography, launch, and guest hosting."
        ]
      },
      gallery: {
        eyebrow: "Design Showcase",
        title: "KAZA Bespoke Furnishing Gallery",
        description: "Explore premium KAZA-managed interiors built for luxury presentation and operational readiness.",
        designCaption: "KAZA Bespoke Furnishing Design",
        loadMore: "Show More Designs"
      },
      sectionTwo: {
        eyebrow: "Architectural Fitted Systems",
        title: "KAZA Architectural Kitchens & Dressings",
        description: "Luxury integrated fitted cabinetry and space optimization layouts deployed flawlessly.",
        visualCaption: "Architectural details designed for daily comfort and a luxury hospitality impression.",
        commitments: [
          "Smart architectural planning for kitchens, dressing rooms, and integrated storage zones.",
          "Premium finishes, lighting concepts, and durable details suited for repeated hospitality use.",
          "End-to-end execution and installation management for a cohesive, ready-to-use delivery."
        ],
        metrics: [
          { label: "Furnishing Lifecycle", value: "Design to Handover", note: "One accountable KAZA workflow" },
          { label: "Operational Readiness", value: "Hospitality Grade", note: "Built for owners and guests" },
          { label: "Execution Quality", value: "Corporate Standard", note: "Details that can be inspected" }
        ],
        lookbookEyebrow: "Design Lookbook",
        lookbookTitle: "Integrated details for premium spaces",
        lookbookDescription: "Practical and refined kitchen, dressing, and cabinetry solutions for luxury hospitality units.",
        characteristics: [
          "Integrated accent lighting that highlights materials and adds spatial depth.",
          "Premium finishes selected for durability while preserving a polished luxury presence.",
          "Concealed service and storage zones that keep the space clean and easy to operate.",
          "Functional kitchen islands and work surfaces designed for comfortable daily use."
        ]
      },
      extendedGallery: {
        eyebrow: "Kitchen & Cabinetry Gallery",
        title: "Integrated Project Gallery",
        description: "Browse KAZA-managed kitchen, dressing, and fitted cabinetry solutions within the interior setup system.",
        designCaption: "KAZA Kitchen & Cabinetry Design",
        loadMore: "Show More Designs"
      },
      contactInquiries: {
        label: "Corporate Consultation Hotline",
        phoneValue: "+20 10 00082960",
        phoneHref: "tel:+201000082960"
      },
      cta: {
        eyebrow: "Elevate Your Asset Today",
        title: "Partner with KAZA for bespoke furnishing solutions.",
        body: "Request an initial furnishing and interior setup consultation. Our team will guide you through the right preparation path for your property.",
        primary: "Request a KAZA Furnishing Quote",
        secondary: "Back to Home"
      },
      aria: {
        closeLightbox: "Close lightbox",
        previousImage: "Previous image",
        nextImage: "Next image"
      }
    },
    restaurantPage: {
      hero: {
        title: "Exclusive Culinary Partnerships",
        subtitle: "Curated premium dining experiences reserved exclusively for KAZA guests."
      },
      featuredPartner: {
        badge: "Featured Partner",
        title: "Princess Restaurant",
        description: "KAZA acts as an exclusive intermediary to provide our guests with unparalleled access to Princess. Enjoy tailored menus and elite concierge reservations during your stay."
      },
      gallery: {
        title: "Princess Restaurant Gallery",
        description: "Explore the exquisite dishes, premium design, and curated dining experiences at Princess.",
        designCaption: "Princess Culinary Experience"
      }
    },
    lagoonActivitiesPage: {
      hero: {
        title: "KAZA Lagoon Activities",
        subtitle: "Redefining turquoise luxury through elite watersports and curated lagoon experiences."
      },
      videoSection: {
        title: "Lagoon Activities Highlights",
        subtitle: "Watch our exclusive watersports operations and premium lagoon experiences in action."
      },
      cards: {
        card1: { title: "Jet Ski Concierge" },
        card2: { title: "Private Kayak Escapes" },
        card3: { title: "Luxury Wakeboarding" }
      },
      externalCta: "Follow Our Journey on TikTok"
    },
  },
} as const;
