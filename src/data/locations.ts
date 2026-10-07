// =====================================================
// ✏️ EDITABLE BUSINESS LOCATIONS / LOCATION SEO
// =====================================================
// Each entry becomes an indexable page at /locations/[slug].
//
// RULES — read before adding a location:
// 1. Only add a place you genuinely serve. Never claim an office you do not
//    have: set `hasOffice: true` for the Narkatiaganj base only.
// 2. Every location needs UNIQUE, useful content. Copy-pasted city pages are
//    doorway spam and can harm the whole site. If you cannot write real,
//    specific content for a place, leave it out — the service pages already
//    rank for regional searches.
// 3. To hide a page without deleting it, set isActive: false.
// 4. `serviceIds` are ids from src/data/services.ts.

export type Location = {
  slug: string;
  name: string;
  region: string;
  /** true only where a physical office actually exists */
  hasOffice: boolean;
  // ✏️ SEO CONTENT — EDIT HERE
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  /** H1 shown on the page */
  heading: string;
  intro: string;
  /** 2–3 paragraphs of genuinely local context */
  body: string[];
  /** Nearby areas covered from this location */
  nearby: string[];
  /** Ids from src/data/services.ts */
  serviceIds: string[];
  faqs: { question: string; answer: string }[];
  isActive: boolean;
};

export const locations: Location[] = [
  {
    slug: "bihar",
    name: "Bihar",
    region: "Bihar, India",
    hasOffice: false,
    seoTitle: "Digital Agency in Bihar — Web Development & Marketing",
    seoDescription:
      "SD Digital Hub works with businesses across Bihar on websites, online stores, mobile apps, SEO and digital marketing. Based in Narkatiaganj, West Champaran.",
    seoKeywords: [
      "digital agency Bihar",
      "web development Bihar",
      "website development Bihar",
      "SEO services Bihar",
      "digital marketing agency Bihar",
    ],
    heading: "Digital services for businesses across Bihar",
    intro:
      "We work with shops, service businesses, institutions and startups across Bihar — remotely by phone, email and video, and in person around West Champaran.",
    body: [
      "Most businesses we speak to in Bihar are not starting from zero: they already sell, already have customers, and already receive enquiries on WhatsApp. What they usually lack is a professional website that explains what they do, a way to be found in search, and someone who will answer the phone after launch. That is the work we do.",
      "Because we are based in the state, we plan for how people here actually browse — largely on mid-range Android phones, often on patchy mobile data. Pages are built light, images are compressed, and forms are short enough to complete on a phone. Content is written in plain English that can sit alongside Hindi communication with your customers.",
      "Projects run remotely without any loss of quality. Scope and pricing are agreed in writing before work starts, review happens in short cycles, and we stay reachable for changes once the site is live.",
    ],
    nearby: ["West Champaran", "East Champaran", "Gopalganj", "Muzaffarpur", "Patna"],
    serviceIds: ["web-development", "ecommerce", "seo-marketing", "branding", "mobile-apps"],
    faqs: [
      {
        question: "Do you work with businesses outside West Champaran?",
        answer:
          "Yes. Most of our work across Bihar runs remotely — calls, email and WhatsApp for reviews, with in-person meetings when a project genuinely needs them.",
      },
      {
        question: "Can you handle content in Hindi?",
        answer:
          "We can publish Hindi content that you supply or approve. We write English copy ourselves and review Hindi wording with you rather than relying on machine translation.",
      },
    ],
    isActive: true,
  },
  {
    slug: "west-champaran",
    name: "West Champaran",
    region: "West Champaran, Bihar",
    hasOffice: true,
    seoTitle: "Website Development in West Champaran, Bihar",
    seoDescription:
      "Local web design, e-commerce, branding and SEO for businesses in West Champaran. SD Digital Hub is based in Narkatiaganj and works district-wide.",
    seoKeywords: [
      "website designer West Champaran",
      "web development West Champaran",
      "digital marketing West Champaran",
      "web developer Bettiah",
    ],
    heading: "Web and digital work in West Champaran",
    intro:
      "Our office is in Narkatiaganj, so West Champaran is the district we cover in person — from first meeting through to handover training.",
    body: [
      "Being in the district means we can sit across a table, look at your existing material, photograph your premises or products if needed, and train your staff on the admin screens face to face. For shops, clinics, coaching centres, dealerships and contractors, that shortens a project considerably.",
      "The work itself is the same standard we apply anywhere: a fast, responsive site, accurate business details for local search, enquiry forms that reach you reliably, and a Google Business Profile that matches what the website says.",
    ],
    nearby: ["Narkatiaganj", "Bettiah", "Bagaha", "Lauriya", "Chanpatia"],
    serviceIds: ["web-development", "ecommerce", "seo-marketing", "branding"],
    faqs: [
      {
        question: "Can we meet in person?",
        answer:
          "Yes. We are based in Narkatiaganj and can meet anywhere in West Champaran by appointment — call or request a callback to arrange a time.",
      },
    ],
    isActive: true,
  },
  {
    slug: "narkatiaganj",
    name: "Narkatiaganj",
    region: "Narkatiaganj, West Champaran, Bihar",
    hasOffice: true,
    seoTitle: "Web Developer & Digital Agency in Narkatiaganj",
    seoDescription:
      "SD Digital Hub is a digital agency based in Narkatiaganj, West Champaran. Websites, online stores, apps, branding and local SEO for nearby businesses.",
    seoKeywords: [
      "web developer Narkatiaganj",
      "website design Narkatiaganj",
      "digital agency Narkatiaganj",
      "local SEO Narkatiaganj",
    ],
    heading: "Your local digital team in Narkatiaganj",
    intro:
      "This is where we are based. If you are in or around Narkatiaganj, you can speak to the people who will actually build your project.",
    body: [
      "Local businesses here are mostly found by word of mouth and on WhatsApp. A website does not replace that — it supports it: somewhere to send a customer who wants prices, timings, location or proof that you are a real, established business before they call.",
      "For nearby businesses we usually start with the essentials: a clear website, correct listing details so you appear in local map searches, and one enquiry route that lands with you instead of getting lost. Bigger work — a store, an app, a campaign — follows only if it earns its cost.",
    ],
    nearby: ["Shikarpur", "Chanpatia", "Lauriya", "Bagaha", "Bettiah"],
    serviceIds: ["web-development", "seo-marketing", "branding"],
    faqs: [
      {
        question: "Where exactly is your office?",
        answer:
          "Narkatiaganj, West Champaran, Bihar 845455. Call ahead and we will confirm a time and directions.",
      },
      {
        question: "Do you help set up a Google Business Profile?",
        answer:
          "Yes — setting up or correcting your listing, categories, hours and service area is part of our local SEO work.",
      },
    ],
    isActive: true,
  },
  {
    slug: "bettiah",
    name: "Bettiah",
    region: "Bettiah, West Champaran, Bihar",
    hasOffice: false,
    seoTitle: "Web Development & Digital Marketing in Bettiah",
    seoDescription:
      "Websites, e-commerce, branding and SEO for Bettiah businesses. SD Digital Hub serves Bettiah from nearby Narkatiaganj, West Champaran.",
    seoKeywords: [
      "web developer Bettiah",
      "website design Bettiah",
      "digital marketing Bettiah",
      "SEO Bettiah",
    ],
    heading: "Digital work for Bettiah businesses",
    intro:
      "Bettiah is the district headquarters and our closest larger market — a short trip from our Narkatiaganj office.",
    body: [
      "Retailers, schools, coaching institutes, healthcare practices and dealerships in Bettiah compete for the same local searches. The businesses that win them usually have three things right: a fast website with honest information, a verified map listing, and consistent contact details everywhere online.",
      "We handle all three as one piece of work, then leave you with a site you can update and a plain-language report of what changed.",
    ],
    nearby: ["Narkatiaganj", "Chanpatia", "Majhaulia", "Bagaha"],
    serviceIds: ["web-development", "ecommerce", "seo-marketing"],
    faqs: [
      {
        question: "Do you have an office in Bettiah?",
        answer:
          "No. Our office is in Narkatiaganj and we travel to Bettiah for meetings — we would rather be honest about that than list an address we do not have.",
      },
    ],
    isActive: true,
  },
  {
    slug: "motihari",
    name: "Motihari",
    region: "Motihari, East Champaran, Bihar",
    hasOffice: false,
    seoTitle: "Digital Marketing & Web Development in Motihari",
    seoDescription:
      "SD Digital Hub builds websites and runs search and social campaigns for businesses in Motihari, East Champaran — managed remotely from West Champaran.",
    seoKeywords: [
      "digital marketing Motihari",
      "web development Motihari",
      "website designer Motihari",
      "SEO services Motihari",
    ],
    heading: "Web and marketing support in Motihari",
    intro:
      "We serve Motihari and the wider East Champaran district, mostly remotely, with occasional visits for larger projects.",
    body: [
      "Work for Motihari clients tends to lean towards visibility: a solid website, then local SEO and paid campaigns aimed at a defined radius rather than broad, wasteful targeting.",
      "Campaign reporting is in plain language — what was spent, what enquiries arrived, and what we would change next month. No jargon dashboards you have to interpret yourself.",
    ],
    nearby: ["Chakia", "Pipra", "Sugauli", "Raxaul"],
    serviceIds: ["web-development", "seo-marketing", "branding"],
    faqs: [
      {
        question: "Can projects run entirely remotely?",
        answer:
          "Yes. Calls, screen sharing and WhatsApp reviews cover everything; nothing about the quality of the build depends on being in the same room.",
      },
    ],
    isActive: true,
  },
  {
    slug: "patna",
    name: "Patna",
    region: "Patna, Bihar",
    hasOffice: false,
    seoTitle: "SEO & Web Development Services in Patna",
    seoDescription:
      "Websites, e-commerce, mobile apps and SEO for Patna businesses, delivered remotely by SD Digital Hub — a Bihar-based digital agency.",
    seoKeywords: [
      "SEO services Patna",
      "web development Patna",
      "website development company Patna",
      "digital agency Patna",
    ],
    heading: "Digital projects for Patna businesses",
    intro:
      "Patna is a more competitive market, so work here is usually about doing the technical fundamentals better than the alternatives.",
    body: [
      "For Patna clients we focus on measurable things: page speed and Core Web Vitals, clean site structure, correct structured data, and content organised around what people actually search for rather than what a business wants to say.",
      "We are transparent about capacity. We take on a limited number of projects at a time so each gets proper attention, and we will tell you if a request needs a larger team than ours.",
    ],
    nearby: ["Danapur", "Patna City", "Hajipur", "Fatuha"],
    serviceIds: ["web-development", "ecommerce", "mobile-apps", "seo-marketing"],
    faqs: [
      {
        question: "Do you have a Patna office?",
        answer:
          "No. We are based in Narkatiaganj, West Champaran, and serve Patna clients remotely with occasional travel for major projects.",
      },
    ],
    isActive: true,
  },
];

export const activeLocations = locations.filter((location) => location.isActive);

export function getLocationBySlug(slug: string): Location | undefined {
  return activeLocations.find((location) => location.slug === slug);
}
