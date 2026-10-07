import { imageSources } from "@/assets/imagePaths";

export { imageSources } from "@/assets/imagePaths";

export const media = {
  makkah: imageSources.makkah,
  van: imageSources.van,
  desert: imageSources.pilgrimage,
  tower: imageSources.madinah,
  chauffeur: imageSources.vipService,
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "airport-transfers",
    title: "Airport Pick & Drop",
    eyebrow: "Arrive with ease",
    description: "A calm, punctual welcome from the terminal to your hotel, residence, or next connection.",
    image: imageSources.airportPickDropService,
    icon: "plane",
    details: ["Meet-and-greet flow", "Flexible arrival coordination", "Luggage-conscious vehicles"],
  },
  {
    slug: "makkah-transfers",
    title: "Makkah Transfers",
    eyebrow: "Sacred city access",
    description: "Thoughtful transportation for guests travelling to and around Makkah with comfort in mind.",
    image: imageSources.makkahTransfersService,
    icon: "mosque",
    details: ["Hotel and station connections", "Family-friendly coordination", "Professional driver support"],
  },
  {
    slug: "madinah-transfers",
    title: "Madinah Transfers",
    eyebrow: "A considered journey",
    description: "Reliable connections for Madinah stays, airport movements, and intercity travel planning.",
    image: imageSources.madinahTransfersService,
    icon: "landmark",
    details: ["Intercity coordination", "Comfort-first routing", "Clear WhatsApp follow-up"],
  },
  {
    slug: "ziyarat-transportation",
    title: "Ziyarat Transportation",
    eyebrow: "Move with intention",
    description: "Private transportation for planned Ziyarat visits, paced around your group and itinerary.",
    image: imageSources.ziyaratTransportationService,
    icon: "route",
    details: ["Private group journeys", "Flexible day planning", "Local route placeholder"],
  },
  {
    slug: "intercity-transportation",
    title: "Intercity Transfers",
    eyebrow: "Beyond one destination",
    description: "Connect cities and stays with a calm, private travel experience for individuals and groups.",
    image: imageSources.intercityTransfersService,
    icon: "road",
    details: ["Point-to-point planning", "Comfortable long-distance travel", "Vehicle options by group size"],
  },
  {
    slug: "vip-transportation",
    title: "VIP Transportation",
    eyebrow: "A quieter standard",
    description: "A discreet, polished travel layer for guests who value privacy, presentation, and ease.",
    image: imageSources.vipTransportationService,
    icon: "star",
    details: ["Premium vehicle options", "Chauffeur-style service", "Priority coordination"],
  },
];

export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  intro: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  seats: string;
  luggage: string;
};

const economyTravelDescription = "We offer premium transport service for Hajj, Umrah, and sightseeing in Makkah & Madinah. Our fleet includes new model vehicles, professional multilingual drivers, and 24/7 customer support for a smooth and hassle-free experience.";
const economyTravelFeatures = [
  "Multilingual Drivers",
  "24/7 Customer Assistance",
  "Fleet of Latest Model Luxury Cars",
  "Airport & Hotel Pick & Drop",
  "Professional Umrah Guidance",
  "Makkah & Madinah City Tours",
];

export const vehicles: Vehicle[] = [
  {
    slug: "hyundai-staria-2025-26",
    name: "Hyundai Staria 2025-26",
    category: "Economy Van",
    intro: "Top choice for economy travel, seating up to 7 passengers with room for 10 bags.",
    description: "Premium transport for Hajj, Umrah, and sightseeing in Makkah and Madinah. Travel with professional multilingual drivers, 24/7 customer assistance, and carefully coordinated airport and hotel transfers for a smooth journey.",
    image: imageSources.stariaExterior,
    gallery: [imageSources.stariaExterior, imageSources.stariaExteriorSide, imageSources.stariaExteriorFront, imageSources.stariaInterior],
    features: ["Multilingual drivers", "24/7 customer assistance", "Latest-model luxury vehicles", "Airport and hotel pick-up and drop-off", "Professional Umrah guidance", "Makkah and Madinah city tours"],
    seats: "7 passengers",
    luggage: "10 bags",
  },
  {
    slug: "gmc-xl-yukon-2025-26",
    name: "GMC XL Yukon 2025-26",
    category: "Economy Travel",
    intro: "Top Choice for Economy Travel",
    description: economyTravelDescription,
    image: imageSources.gmcYukon,
    gallery: [imageSources.gmcYukon],
    features: economyTravelFeatures,
    seats: "7 passengers",
    luggage: "7 bags",
  },
  {
    slug: "bus-2025-26",
    name: "Bus 2025-26",
    category: "Economy Travel",
    intro: "Top Choice for Economy Travel",
    description: economyTravelDescription,
    image: imageSources.bus1,
    gallery: [imageSources.bus1, imageSources.bus2],
    features: economyTravelFeatures,
    seats: "49 passengers",
    luggage: "49 bags",
  },
  {
    slug: "toyota-coaster-2025-26",
    name: "Toyota Coaster 2025-26",
    category: "Economy Travel",
    intro: "Top Choice for Economy Travel",
    description: economyTravelDescription,
    image: imageSources.toyotaCoaster,
    gallery: [imageSources.toyotaCoaster, imageSources.toyotaCoaster1],
    features: economyTravelFeatures,
    seats: "19 passengers",
    luggage: "20 bags",
  },
  {
    slug: "toyota-hiace-grand-cabin-2025-26",
    name: "Toyota Hiace Grand Cabin 2025-26",
    category: "Economy Travel",
    intro: "Top Choice for Economy Travel",
    description: economyTravelDescription,
    image: imageSources.toyotaHiace1,
    gallery: [imageSources.toyotaHiace1, imageSources.toyotaHiace2, imageSources.toyotaHiace3],
    features: economyTravelFeatures,
    seats: "11 passengers",
    luggage: "15 bags",
  },
  {
    slug: "toyota-camry-2025-26",
    name: "Toyota Camry 2025-26",
    category: "Economy Travel",
    intro: "Top Choice for Economy Travel",
    description: economyTravelDescription,
    image: imageSources.toyotaCamry1,
    gallery: [imageSources.toyotaCamry1, imageSources.toyotaCamry2, imageSources.toyotaCamry3, imageSources.toyotaCamry4, imageSources.toyotaCamry5],
    features: economyTravelFeatures,
    seats: "3 passengers",
    luggage: "4 bags",
  },
];

export const infoPages = [
  { slug: "useful-information", label: "Useful Information", title: "The practical things, in one place.", eyebrow: "Useful information", body: "A clear starting point for airport arrivals, booking preparation, and the small details that make a travel day easier.", image: imageSources.useful, details: ["Share your arrival or departure point", "Keep baggage and group size in the request", "Use WhatsApp for the fastest follow-up"] },
  { slug: "hajj-umrah-information", label: "Hajj & Umrah Information", title: "Plan the movement around a meaningful journey.", eyebrow: "Hajj & Umrah information", body: "Transportation planning for Hajj and Umrah-related journeys, with current religious and regulatory guidance always confirmed through official authorities.", image: imageSources.umrah, details: ["Confirm current requirements with official Saudi sources", "Share hotel, city, group, and timing details", "Ask the Manar team about available transport options"] },
  { slug: "travel-information", label: "Travel Information", title: "A little more clarity before you go.", eyebrow: "Travel information", body: "Helpful travel-planning notes for routes between airports, hotels, Makkah, Madinah, and the destinations in between.", image: imageSources.travel, details: ["Allow time for airport formalities and baggage", "Plan intercity routes around your real schedule", "Keep a direct contact channel open for changes"] },
];

export const navGroups = [
  { label: "Services", href: "/services", items: services.map(({ title, slug }) => ({ label: title, href: `/services/${slug}` })) },
  { label: "Fleet", href: "/fleet", items: vehicles.map(({ name, slug }) => ({ label: name, href: `/fleet/${slug}` })) },
  { label: "About", href: "/about", items: [{ label: "Our Story & Mission", href: "/about/our-story" }, { label: "CEO Message", href: "/about/ceo-message" }] },
  { label: "Info", href: "/info", items: infoPages.map(({ label, slug }) => ({ label, href: `/info/${slug}` })) },
  { label: "Policies", href: "/policies", items: [{ label: "Terms & Conditions", href: "/policies/terms" }, { label: "Privacy Policy", href: "/policies/privacy" }, { label: "Refund / Cancellation", href: "/policies/refund" }] },
];

export const reels = [
  { title: "VIP Transportation", label: "VIP journey", description: "A discreet, polished travel layer for guests who value privacy, presentation, and ease.", image: media.chauffeur, video: "/video/instareel-1.mp4" },
  { title: "Intercity Transfers", label: "Between cities", description: "Connect cities and stays with a calm, private travel experience for individuals and groups.", image: media.desert, video: "/video/instareel-2.mp4" },
  { title: "Hajj & Umrah Transportation", label: "Hajj & Umrah", description: "Transportation planning for Hajj and Umrah-related journeys, with current guidance confirmed through official authorities.", image: media.makkah, video: "/video/instareel-3.mp4" },
  { title: "Madinah Transfers", label: "Madinah", description: "Reliable connections for Madinah stays, airport movements, and intercity travel planning.", image: media.tower, video: "/video/instareel-4.mp4" },
  { title: "Makkah", label: "Makkah", description: "Thoughtful transportation for guests travelling to and around Makkah with comfort in mind.", image: media.makkah, video: "/video/instareel-5.mp4" },
  { title: "Makkah with Birds", label: "Makkah views", description: "A peaceful view of Makkah, one of the destinations Manar Transport serves.", image: media.makkah, video: "/video/instareel-6.mp4" },
  { title: "Jeddah Desert", label: "Jeddah", description: "Private transportation for journeys across Saudi Arabia, including routes between cities.", image: media.desert, video: "/video/instareel-7.mp4" },
  { title: "Makkah View", label: "Makkah", description: "Reliable private transport for stays, airport movements, and travel around Makkah.", image: media.makkah, video: "/video/instareel-8.mp4" },
];

export const reelGallery = reels;

export const faqs = [
  { question: "How does booking through WhatsApp work?", answer: "Complete the short form and choose Send via WhatsApp. Your message opens in WhatsApp so you can review and send it directly to Manar Transport. Staff can then follow up with availability and final details." },
  { question: "Can I request a vehicle for a group?", answer: "Yes. Share your group size and trip details in the booking form. The team can then recommend an available vehicle category." },
  { question: "Do you provide Hajj and Umrah transportation?", answer: "The site is structured for Hajj and Umrah-related transportation inquiries. Final availability, routes, and current requirements should be confirmed with Manar Transport and official Saudi authorities." },
  { question: "Where can I see the final fleet specifications?", answer: "The fleet pages include editable placeholders for approved vehicle specifications. Replace the marked fields in client/src/data/siteData.ts once the company confirms the final list." },
];

export const contactFaqs = {
  english: [
    { question: "What should I check before travelling to Saudi Arabia?", answer: "Check your passport validity, visa category, entry conditions, insurance, and current travel notices through official Saudi sources before departure." },
    { question: "Can tourist visa holders visit Makkah and Madinah?", answer: "Eligibility and seasonal restrictions depend on the current rules and visa type. Review the official Visit Saudi FAQ and current Saudi authority guidance before travelling." },
    { question: "Can I perform Umrah with a tourist visa?", answer: "The permitted visa route can depend on nationality, visa type, and the Hajj season. Confirm current eligibility through official Saudi channels before booking." },
    { question: "How do I arrange Hajj permits and packages?", answer: "Use the official Nusuk Hajj platform for current Hajj package, visa, payment, and permit information. Avoid unofficial offers or payments outside official channels." },
    { question: "How can I travel between Makkah and Madinah?", answer: "Haramain High-Speed Railway, taxis, ride-hailing, and private transportation are among the available options. Share your dates and group details for a private transfer quote." },
    { question: "What information should I send for a transfer booking?", answer: "Send your name, travel date, pickup and drop-off points, passenger count, luggage needs, and any flight or hotel details that affect timing." },
    { question: "How does a WhatsApp booking work?", answer: "Complete the short form, review the pre-filled message, and send it in WhatsApp. The Manar team then follows up with availability and final details." },
  ],
  urdu: [
    { question: "سعودی عرب سفر سے پہلے مجھے کیا چیک کرنا چاہیے؟", answer: "روانگی سے پہلے پاسپورٹ کی مدت، ویزا کی قسم، داخلے کی شرائط، انشورنس اور تازہ سفری ہدایات سرکاری سعودی ذرائع سے چیک کریں۔" },
    { question: "کیا ٹورسٹ ویزا رکھنے والے مکہ اور مدینہ جا سکتے ہیں؟", answer: "اہلیت اور موسمی پابندیاں ویزا کی قسم اور موجودہ قوانین پر منحصر ہو سکتی ہیں۔ سفر سے پہلے Visit Saudi کے سرکاری FAQ اور متعلقہ حکام کی ہدایات دیکھیں۔" },
    { question: "کیا ٹورسٹ ویزا پر عمرہ کیا جا سکتا ہے؟", answer: "اجازت قومیت، ویزا کی قسم اور حج کے موسم کے مطابق بدل سکتی ہے۔ بکنگ سے پہلے سرکاری سعودی ذرائع سے موجودہ اہلیت کی تصدیق کریں۔" },
    { question: "حج پرمٹ اور پیکیج کیسے حاصل کیے جا سکتے ہیں؟", answer: "حج پیکیج، ویزا، ادائیگی اور پرمٹ کی تازہ معلومات کے لیے سرکاری Nusuk Hajj پلیٹ فارم استعمال کریں۔ غیر سرکاری پیشکشوں سے احتیاط کریں۔" },
    { question: "مکہ اور مدینہ کے درمیان سفر کیسے کیا جا سکتا ہے؟", answer: "حرمین ہائی اسپیڈ ریلوے، ٹیکسی، رائیڈ ہیلنگ اور نجی ٹرانسپورٹ دستیاب آپشنز میں شامل ہیں۔ نجی ٹرانسفر کے لیے تاریخ اور گروپ کی تفصیل بھیجیں۔" },
    { question: "ٹرانسفر بک کرنے کے لیے کون سی معلومات دینی ہوں گی؟", answer: "اپنا نام، سفر کی تاریخ، پک اپ اور ڈراپ آف مقامات، مسافروں کی تعداد، سامان اور فلائٹ یا ہوٹل کی تفصیل بھیجیں۔" },
    { question: "WhatsApp کے ذریعے بکنگ کیسے ہوتی ہے؟", answer: "مختصر فارم مکمل کریں، پہلے سے تیار پیغام دیکھیں اور WhatsApp میں بھیج دیں۔ ٹیم دستیابی اور حتمی تفصیل کے ساتھ جواب دے گی۔" },
  ],
  roman: [
    { question: "Saudi Arabia safar se pehle mujhe kya check karna chahiye?", answer: "Rawangi se pehle passport validity, visa category, entry conditions, insurance aur latest travel notices official Saudi sources se check karein." },
    { question: "Kya tourist visa holders Makkah aur Madinah ja sakte hain?", answer: "Eligibility aur seasonal restrictions visa type aur current rules par depend kar sakti hain. Safar se pehle official Visit Saudi FAQ aur authorities ki guidance dekhein." },
    { question: "Kya tourist visa par Umrah ki ja sakti hai?", answer: "Allowed visa route nationality, visa type aur Hajj season par depend kar sakta hai. Booking se pehle official Saudi channels se current eligibility confirm karein." },
    { question: "Hajj permits aur packages kaise arrange kiye jate hain?", answer: "Hajj package, visa, payment aur permit ki current maloomat ke liye official Nusuk Hajj platform use karein. Ghair rasmi offers se ehtiyat karein." },
    { question: "Makkah aur Madinah ke darmiyan travel kaise kar sakte hain?", answer: "Haramain High-Speed Railway, taxi, ride-hailing aur private transport available options hain. Private transfer ke liye dates aur group details share karein." },
    { question: "Transfer booking ke liye kya information deni hogi?", answer: "Apna naam, travel date, pickup aur drop-off location, passengers, luggage aur flight ya hotel details bhejein." },
    { question: "WhatsApp booking kaise hoti hai?", answer: "Short form complete karein, pre-filled message review karein aur WhatsApp par send kar dein. Team availability aur final details confirm karegi." },
  ],
  arabic: [
    { question: "ما الذي يجب أن أتحقق منه قبل السفر إلى السعودية؟", answer: "تحقق من صلاحية جواز السفر ونوع التأشيرة وشروط الدخول والتأمين وأحدث إرشادات السفر من المصادر السعودية الرسمية قبل المغادرة." },
    { question: "هل يمكن لحاملي التأشيرة السياحية زيارة مكة والمدينة؟", answer: "قد تختلف الأهلية والقيود الموسمية حسب نوع التأشيرة والأنظمة الحالية. راجع الأسئلة الشائعة الرسمية في Visit Saudi وتعليمات الجهات المختصة قبل السفر." },
    { question: "هل يمكن أداء العمرة بتأشيرة سياحية؟", answer: "قد يعتمد المسار المسموح على الجنسية ونوع التأشيرة وموسم الحج. تأكد من الأهلية الحالية عبر القنوات السعودية الرسمية قبل الحجز." },
    { question: "كيف أرتب تصاريح وباقات الحج؟", answer: "استخدم منصة نسك حج الرسمية للحصول على معلومات الباقات والتأشيرة والدفع والتصاريح. تجنب العروض أو المدفوعات خارج القنوات الرسمية." },
    { question: "كيف يمكنني السفر بين مكة والمدينة؟", answer: "تشمل الخيارات قطار الحرمين السريع وسيارات الأجرة وتطبيقات النقل والمواصلات الخاصة. شارك تواريخك وتفاصيل المجموعة لطلب نقل خاص." },
    { question: "ما المعلومات المطلوبة لحجز النقل؟", answer: "أرسل الاسم وتاريخ السفر ومكان الالتقاط والوصول وعدد الركاب واحتياجات الأمتعة وتفاصيل الرحلة أو الفندق المؤثرة على التوقيت." },
    { question: "كيف يتم الحجز عبر واتساب؟", answer: "أكمل النموذج المختصر وراجع الرسالة الجاهزة ثم أرسلها عبر واتساب. سيتابع فريق منار معك لتأكيد التوفر والتفاصيل النهائية." },
  ],
};

export const contact = {
  whatsapp: "+966590832169",
  email: "manartransportservice@gmail.com",
  address: "Aziziyah, Makkah, Saudi Arabia",
  offices: [
    { name: "Makkah office", address: "Aziziyah, Makkah, Saudi Arabia" },
    { name: "Islamabad office", address: "South Service Road 377, I-14/4, Islamabad, Pakistan" },
  ],
};

export const tickerItems = ["Airport Transfers", "Makkah Transportation", "Madinah Transportation", "Hajj & Umrah", "Ziyarat Trips", "VIP Transportation", "24/7 Support"];
