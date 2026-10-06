import { contactFaqs } from "@/data/siteData";

export type ChatLanguage =
  "english" | "urdu" | "hindi" | "arabic" | "roman_urdu";

export const chatLanguages: Array<{ id: ChatLanguage; label: string }> = [
  { id: "english", label: "English" },
  { id: "urdu", label: "Urdu" },
  { id: "hindi", label: "Hindi" },
  { id: "arabic", label: "Arabic" },
  { id: "roman_urdu", label: "Roman Urdu" },
];

type ChatFaq = {
  questions: Record<ChatLanguage, string[]>;
  answers: Record<ChatLanguage, string>;
  keywords?: string[];
};

const coreFaqs: ChatFaq[] = [
  {
    questions: {
      english: ["What is Umrah?"],
      urdu: ["عمرہ کیا ہے؟"],
      hindi: ["उमरा क्या है?"],
      arabic: ["ما هي العمرة؟"],
      roman_urdu: ["Umrah kya hai?"],
    },
    answers: {
      english:
        "Umrah is a pilgrimage to the Sacred Mosque in Makkah that can generally be performed outside the specific days of Hajj. Its main rituals include Ihram, Tawaf, Sa'i and Halq or Taqsir.",
      urdu: "عمرہ مسجد الحرام مکہ مکرمہ کی زیارت اور عبادت ہے جو عام طور پر حج کے مخصوص ایام کے علاوہ ادا کیا جا سکتا ہے۔ اس کے اہم اعمال احرام، طواف، سعی اور حلق یا تقصیر ہیں۔",
      hindi:
        "उमरा मक्का की मस्जिद अल-हराम की इबादत और यात्रा है, जिसे आम तौर पर हज के निर्धारित दिनों के अलावा किया जा सकता है। इसके मुख्य कार्य इहराम, तवाफ, सई और हल्क या तकसीर हैं।",
      arabic:
        "العمرة عبادة وزيارة إلى المسجد الحرام في مكة المكرمة ويمكن أداؤها عادة خارج أيام الحج المحددة. ومن أعمالها الإحرام والطواف والسعي والحلق أو التقصير.",
      roman_urdu:
        "Umrah Masjid al-Haram Makkah ki ibadat aur ziyarat hai jo aam tor par Hajj ke khaas dinon ke ilawa ada ki ja sakti hai. Is ke aham amal Ihram, Tawaf, Sa'i aur Halq ya Taqsir hain.",
    },
    keywords: ["umrah", "umra", "عمرہ", "العمرة"],
  },
  {
    questions: {
      english: ["What is Hajj?"],
      urdu: ["حج کیا ہے؟"],
      hindi: ["हज क्या है?"],
      arabic: ["ما هو الحج؟"],
      roman_urdu: ["Hajj kya hai?"],
    },
    answers: {
      english:
        "Hajj is the major Islamic pilgrimage to Makkah performed during the prescribed days of Dhul-Hijjah by Muslims who meet the religious and applicable legal requirements.",
      urdu: "حج اسلام کی عظیم عبادت ہے جو مقررہ ایام ذوالحجہ میں مکہ مکرمہ میں ادا کی جاتی ہے، ان لوگوں پر جو شرعی اور قانونی شرائط پوری کرتے ہوں۔",
      hindi:
        "हज इस्लाम की महान इबादत है जो ज़ुल-हिज्जा के निर्धारित दिनों में मक्का में अदा की जाती है، उन लोगों के लिए जो धार्मिक और लागू कानूनी शर्तें पूरी करते हों।",
      arabic:
        "الحج هو pilgrimage إسلامية كبرى تؤدى في مكة في أيام محددة من ذي الحجة لمن استوفى الشروط الشرعية والقانونية.",
      roman_urdu:
        "Hajj Islam ki azeem pilgrimage hai jo Zul-Hijjah ke muqarrar dinon mein Makkah mein ada ki jati hai, un Musalmanon ke liye jo sharai aur legal requirements puri karte hon.",
    },
    keywords: ["hajj", "haj", "حج", "الحج"],
  },
  {
    questions: {
      english: ["How do I perform Umrah?", "What are the steps of Umrah?"],
      urdu: ["عمرہ کیسے ادا کیا جاتا ہے؟"],
      hindi: ["उमरा कैसे किया जाता है?"],
      arabic: ["كيف أؤدي العمرة؟"],
      roman_urdu: ["Umrah kaise ada karte hain?", "Umrah ke steps kya hain?"],
    },
    answers: {
      english:
        "In general, Umrah involves entering Ihram, making the intention, performing Tawaf around the Kaaba, performing Sa'i between Safa and Marwah, and completing Halq or Taqsir according to applicable guidance.",
      urdu: "عام طور پر عمرہ کے مراحل میں احرام، نیت، خانہ کعبہ کا طواف، صفا و مروہ کے درمیان سعی اور آخر میں حلق یا تقصیر شامل ہیں۔",
      hindi:
        "आम तौर पर उमरा में इहराम, नीयत, काबा का तवाफ, सफा और मरवा के बीच सई और अंत में हल्क या तकसीर शामिल है।",
      arabic:
        "تشمل أعمال العمرة عمومًا الإحرام والنية والطواف حول الكعبة والسعي بين الصفا والمروة ثم الحلق أو التقصير وفق الإرشاد المعتمد.",
      roman_urdu:
        "Aam tor par Umrah mein Ihram, niyyat, Kaaba ka Tawaf, Safa aur Marwah ke darmiyan Sa'i aur aakhir mein Halq ya Taqsir shamil hai.",
    },
    keywords: ["steps", "process", "procedure", "مراحل", "طریقہ"],
  },
  {
    questions: {
      english: ["What is Masjid al-Haram?", "Where is the Kaaba?"],
      urdu: ["مسجد الحرام کہاں ہے؟", "کعبہ کہاں ہے؟"],
      hindi: ["मस्जिद अल-हराम कहाँ है?", "काबा कहाँ है?"],
      arabic: ["أين يقع المسجد الحرام؟", "أين تقع الكعبة؟"],
      roman_urdu: ["Masjid al-Haram kahan hai?", "Kaaba kahan hai?"],
    },
    answers: {
      english:
        "Masjid al-Haram is the Sacred Mosque in Makkah and contains the Kaaba, the central direction of prayer for Muslims.",
      urdu: "مسجد الحرام مکہ مکرمہ میں واقع مقدس مسجد ہے جس میں خانہ کعبہ موجود ہے۔",
      hindi:
        "मस्जिद अल-हराम मक्का में स्थित पवित्र मस्जिद है, जिसमें काबा स्थित है।",
      arabic:
        "المسجد الحرام هو المسجد المقدس في مكة المكرمة وتقع فيه الكعبة المشرفة.",
      roman_urdu:
        "Masjid al-Haram Makkah mein waqay muqaddas masjid hai jahan Kaaba maujood hai.",
    },
    keywords: ["kaaba", "kaba", "masjid haram", "مکہ", "کعبہ"],
  },
  {
    questions: {
      english: ["What is Masjid an-Nabawi?", "Where is the Prophet's Mosque?"],
      urdu: ["مسجد نبوی کہاں ہے؟"],
      hindi: ["मस्जिद नबवी कहाँ है?"],
      arabic: ["أين يقع المسجد النبوي؟"],
      roman_urdu: ["Masjid Nabawi kahan hai?"],
    },
    answers: {
      english:
        "Masjid an-Nabawi is the Prophet's Mosque in Madinah. Visitors should observe mosque etiquette and current access arrangements.",
      urdu: "مسجد نبوی مدینہ منورہ میں واقع مسجد ہے۔ زائرین کو مسجد کے آداب اور موجودہ رسائی کے انتظامات کی پابندی کرنی چاہیے۔",
      hindi:
        "मस्जिद नबवी मदीना में स्थित पैगंबर की मस्जिद है। आगंतुकों को मस्जिद के आदाब और वर्तमान प्रवेश व्यवस्था का पालन करना चाहिए।",
      arabic:
        "المسجد النبوي هو مسجد النبي ﷺ في المدينة المنورة، وينبغي للزائر الالتزام بآداب المسجد وترتيبات الدخول الحالية.",
      roman_urdu:
        "Masjid Nabawi Madinah Munawwarah mein waqay Rasool Allah ﷺ ki masjid hai. Zaireen ko masjid ke adab aur current access arrangements follow karne chahiye.",
    },
    keywords: ["nabawi", "prophet mosque", "madinah mosque", "مسجد نبوی"],
  },
  {
    questions: {
      english: ["What are the Ziyarat places in Madinah?"],
      urdu: ["مدینہ کی زیارات کون سی ہیں؟"],
      hindi: ["मदीना में कौन-कौन सी ज़ियारत की जा सकती है?"],
      arabic: ["ما أماكن الزيارة في المدينة المنورة؟"],
      roman_urdu: ["Madinah ki ziyarat places kaun si hain?"],
    },
    answers: {
      english:
        "Commonly visited sites around Madinah include Masjid an-Nabawi, Quba Mosque, Qiblatain Mosque and the Uhud area. Exact access and tour arrangements can vary.",
      urdu: "مدینہ منورہ میں عام طور پر مسجد نبوی، مسجد قباء، مسجد قبلتین اور احد کے علاقے جیسے مقامات کی زیارت کی جاتی ہے۔ رسائی اور ٹور کے انتظامات مختلف ہو سکتے ہیں۔",
      hindi:
        "मदीना में आम तौर पर मस्जिद नबवी, मस्जिद क़ुबा, मस्जिद क़िबलतैन और उहुद क्षेत्र की ज़ियारत की जाती है।",
      arabic:
        "تشمل المواقع التي يزورها الناس في المدينة المسجد النبوي ومسجد قباء ومسجد القبلتين ومنطقة أحد، وقد تختلف ترتيبات الوصول.",
      roman_urdu:
        "Madinah mein aam tor par Masjid Nabawi, Masjid Quba, Masjid Qiblatain aur Uhud area ki ziyarat ki jati hai. Access aur tour arrangements change ho sakte hain.",
    },
    keywords: ["ziyarat", "madinah places", "quba", "uhud", "مدینہ زیارت"],
  },
];

export const chatbotKnowledge: ChatFaq[] = [
  ...coreFaqs,
  ...contactFaqs.english.map((faq, index) => ({
    questions: {
      english: [faq.question],
      urdu: [contactFaqs.urdu[index]?.question || faq.question],
      hindi: [contactFaqs.roman[index]?.question || faq.question],
      arabic: [contactFaqs.arabic[index]?.question || faq.question],
      roman_urdu: [contactFaqs.roman[index]?.question || faq.question],
    },
    answers: {
      english: faq.answer,
      urdu: contactFaqs.urdu[index]?.answer || faq.answer,
      hindi: contactFaqs.roman[index]?.answer || faq.answer,
      arabic: contactFaqs.arabic[index]?.answer || faq.answer,
      roman_urdu: contactFaqs.roman[index]?.answer || faq.answer,
    },
  })),
];

export const chatbotFallback: Record<ChatLanguage, string> = {
  english:
    "Thank you for your question. I do not have a verified answer for this specific query in my knowledge base. Please contact our team on +92 315 8242 773 or careers.aximuscode@gmail.com.",
  urdu: "آپ کے سوال کا شکریہ۔ اس سوال کا تصدیق شدہ جواب میری معلومات میں موجود نہیں ہے۔ براہ کرم +92 315 8242 773 یا careers.aximuscode@gmail.com پر رابطہ کریں۔",
  hindi:
    "आपके प्रश्न के लिए धन्यवाद। इस प्रश्न का सत्यापित उत्तर मेरे ज्ञान आधार में उपलब्ध नहीं है। कृपया +92 315 8242 773 या careers.aximuscode@gmail.com पर संपर्क करें।",
  arabic:
    "شكرًا لسؤالك. لا تتوفر لدي إجابة موثقة لهذا السؤال في قاعدة معلوماتي. تواصلوا معنا على +92 315 8242 773 أو careers.aximuscode@gmail.com.",
  roman_urdu:
    "Aap ke sawal ka shukriya. Is sawal ka verified jawab meri knowledge base mein available nahi hai. +92 315 8242 773 ya careers.aximuscode@gmail.com par contact karein.",
};

export function normalizeQuestion(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[^\w\s\u0600-\u06ff\u0900-\u097f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function findChatbotAnswer(message: string, language: ChatLanguage) {
  const normalizedMessage = normalizeQuestion(message);
  const messageWords = new Set(
    normalizedMessage.split(" ").filter(word => word.length > 2)
  );
  let bestMatch: { faq: ChatFaq; score: number } | undefined;

  chatbotKnowledge.forEach(faq => {
    const questions = Object.values(faq.questions).flat();
    const score = Math.max(
      ...questions.map(question => {
        const normalizedQuestion = normalizeQuestion(question);
        if (normalizedQuestion === normalizedMessage) return 1;
        if (
          normalizedQuestion.includes(normalizedMessage) ||
          normalizedMessage.includes(normalizedQuestion)
        )
          return 0.9;
        const overlap = normalizedQuestion
          .split(" ")
          .filter(word => messageWords.has(word)).length;
        return (
          overlap /
          Math.max(normalizedQuestion.split(" ").length, messageWords.size, 1)
        );
      })
    );
    if (!bestMatch || score > bestMatch.score) bestMatch = { faq, score };
  });

  return bestMatch && bestMatch.score >= 0.28
    ? bestMatch.faq.answers[language]
    : chatbotFallback[language];
}
