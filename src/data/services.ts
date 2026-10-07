import brandingImage from "@/assets/services/branding.jpg";
import ecommerceImage from "@/assets/services/ecommerce.jpg";
import mobileAppsImage from "@/assets/services/mobile-apps.jpg";
import seoImage from "@/assets/services/seo-marketing.jpg";
import webDevelopmentImage from "@/assets/services/web-development.jpg";

export type Service = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  whatItIs: string;
  whoItIsFor: string;
  /** Lucide icon name, rendered by src/components/Icon.tsx */
  icon: "Globe" | "ShoppingCart" | "Search" | "PenTool" | "Smartphone";
  image: string;
  // EDITABLE PRICE — change `startingAt` (rupees, plain number), `unit`
  // ("project" / "month") and `note` (one short line shown under the price).
  // Package prices for the /pricing page live in src/data/pricing.ts
  pricing: {
    startingAt: number;
    unit: string;
    note: string;
  };
  benefits: string[];
  technologies: string[];
  featured: boolean;
  isActive: boolean;
  /** Ids from data/team.ts */
  teamMemberIds: string[];
  // ✏️ SEO CONTENT — EDIT HERE
  // seoTitle: keep it natural and under ~60 characters before the brand name.
  // seoDescription: unique per service, ~150–160 characters.
  // seoKeywords: a short, relevant set only — never a keyword dump.
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  /** Ids from this file — rendered as contextual "related services" links */
  relatedServiceIds: string[];
  /** Service-specific FAQs. Rendered on the page and as FAQPage structured data. */
  faqs: { question: string; answer: string }[];
};

// EDITABLE SERVICES
// Add, edit, reorder or remove services here. Set isActive: false to hide one
// without deleting it. featured: true gives the service a larger card.
// EDITABLE IMAGE — REPLACE THIS IMAGE: swap the files in src/assets/services/
export const services: Service[] = [
  {
    id: "web-development",
    title: "Website Design & Development",
    slug: "web-development",
    shortDescription:
      "Fast, responsive business websites built to be found, trusted and easy to update.",
    description:
      "We design and build websites that load quickly, read clearly on every screen size and are structured so search engines and customers can both make sense of them. Every build includes responsive layouts, accessible markup, SEO fundamentals, contact and enquiry forms, and a clear handover so your content can be updated without calling a developer for every change.",
    whatItIs:
      "A complete website project — planning, design, development, content structure, testing and launch — delivered as a maintainable codebase or managed platform, depending on what suits your team.",
    whoItIsFor:
      "Businesses with no website, an outdated one, or a site that looks fine but does not bring enquiries. Useful for service businesses, institutions, professionals and local brands.",
    icon: "Globe",
    image: webDevelopmentImage,
    pricing: {
      startingAt: 7999,
      unit: "project",
      note: "Portfolio sites from ₹7,999 · custom dynamic websites from ₹24,999",
    },
    benefits: [
      "Responsive on mobile, tablet and desktop",
      "Built for speed and Core Web Vitals",
      "Search-engine friendly structure and metadata",
      "Enquiry forms that reach you reliably",
      "Accessible, keyboard-friendly interfaces",
      "Documented handover and optional maintenance",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "PostgreSQL"],
    featured: true,
    isActive: true,
    teamMemberIds: ["founder", "developer"],
    seoTitle: "Web Development Services in Bihar",
    seoDescription:
      "Website design and development for businesses in Bihar — fast, responsive, search-friendly sites with enquiry forms, built and supported by SD Digital Hub.",
    seoKeywords: [
      "web development Bihar",
      "website development Bihar",
      "web developer Bihar",
      "website design company Bihar",
      "business website development",
    ],
    relatedServiceIds: ["ecommerce", "seo-marketing", "branding"],
    faqs: [
      {
        question: "What does a website project include?",
        answer:
          "Planning, design, development, content structure, testing and launch — plus a handover walkthrough so your team can make routine edits without calling a developer.",
      },
      {
        question: "How long does website development take?",
        answer:
          "A focused business website is usually two to four weeks once content is available. Larger, dynamic sites take longer; we give a realistic timeline after the first discovery call.",
      },
      {
        question: "Do you provide SEO after the website is built?",
        answer:
          "SEO fundamentals — structure, metadata, speed, sitemap and indexing — are part of every build. Ongoing keyword, content and local search work is a separate monthly service.",
      },
      {
        question: "Can I update the website myself?",
        answer:
          "Yes. We choose an editing approach that matches your team's comfort level and document it at handover, so day-to-day content changes do not depend on us.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Stores",
    slug: "ecommerce",
    shortDescription:
      "Online stores with clean product pages, secure checkout and simple order handling.",
    description:
      "We set up online stores that are straightforward for customers to buy from and straightforward for you to run. That includes product and category structure, cart and checkout, payment and delivery setup, order notifications, and the admin training needed so your team can manage stock and orders confidently from day one.",
    whatItIs:
      "A working online store — catalogue, cart, checkout, payments, shipping options and order management — configured and tested end to end.",
    whoItIsFor:
      "Retailers moving online, existing sellers outgrowing social-media ordering, and brands who want to sell directly instead of only through marketplaces.",
    icon: "ShoppingCart",
    image: ecommerceImage,
    pricing: {
      startingAt: 34999,
      unit: "project",
      note: "Depends on catalogue size, payment and delivery setup",
    },
    benefits: [
      "Clear product and category structure",
      "Secure, tested checkout flow",
      "Payment gateway and delivery setup",
      "Order and stock management you can operate",
      "Mobile-first buying experience",
      "Ready for search and product listings",
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Razorpay", "Stripe"],
    featured: true,
    isActive: true,
    teamMemberIds: ["developer", "founder"],
    seoTitle: "E-Commerce Website Development in Bihar",
    seoDescription:
      "Online store development for Bihar businesses — product catalogue, secure checkout, payments, delivery setup and order management you can actually run.",
    seoKeywords: [
      "ecommerce website development Bihar",
      "online store development Bihar",
      "Shopify developer Bihar",
      "WooCommerce development",
    ],
    relatedServiceIds: ["web-development", "seo-marketing", "mobile-apps"],
    faqs: [
      {
        question: "Which payment options can you set up?",
        answer:
          "UPI, cards, netbanking and wallets through Indian gateways such as Razorpay, plus cash on delivery where it suits your business. We test every route before launch.",
      },
      {
        question: "Can I manage stock and orders myself?",
        answer:
          "Yes — that is the point. We configure the admin screens around how you work and train your team on adding products, updating stock and processing orders.",
      },
      {
        question: "Do you build custom stores or use a platform?",
        answer:
          "Both. A managed platform is cheaper to run for straightforward catalogues; a custom build makes sense when your pricing, variants or workflow are unusual. We recommend based on your case.",
      },
    ],
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    slug: "seo-marketing",
    shortDescription:
      "Technical SEO, local search and campaigns that bring the right people to you.",
    description:
      "Visibility work in two parts. First the technical foundation: site structure, page speed, metadata, structured data, indexing and local business listings. Then ongoing promotion: keyword and content planning, local search presence, and paid campaigns on search and social where they make commercial sense. We report on what changed and what it produced.",
    whatItIs:
      "An audit, a fix list and an ongoing plan for being found — organically in search and, when useful, through paid campaigns.",
    whoItIsFor:
      "Businesses that have a website but little traffic, businesses invisible in local searches, and anyone spending on ads without knowing what is working.",
    icon: "Search",
    image: seoImage,
    pricing: {
      startingAt: 6999,
      unit: "month",
      note: "Monthly retainer · advertising budget billed separately",
    },
    benefits: [
      "Technical SEO audit and fixes",
      "Local search and business profile setup",
      "Keyword and content planning",
      "Structured data for rich results",
      "Campaign setup and tracking",
      "Plain-language reporting",
    ],
    technologies: [
      "Google Search Console",
      "Google Analytics",
      "Google Business Profile",
      "Meta Ads",
      "Google Ads",
    ],
    featured: false,
    isActive: true,
    teamMemberIds: ["marketer"],
    seoTitle: "SEO Services & Digital Marketing in Bihar",
    seoDescription:
      "Technical SEO, local search setup and Google Ads management for Bihar businesses. Audit, fix list and monthly reporting in plain language from SD Digital Hub.",
    seoKeywords: [
      "SEO services Bihar",
      "local SEO Bihar",
      "SEO agency Bihar",
      "Google Ads management Bihar",
      "digital marketing agency Bihar",
      "social media marketing Bihar",
    ],
    relatedServiceIds: ["web-development", "ecommerce", "branding"],
    faqs: [
      {
        question: "How long before SEO shows results?",
        answer:
          "Technical fixes and local listing work can change visibility within weeks. Competitive search terms usually take several months of consistent work — nobody can honestly promise a position or a date.",
      },
      {
        question: "Do you handle local SEO and Google Business Profile?",
        answer:
          "Yes. Setting up or correcting your listing, categories, service area, hours and photos, and keeping your name, address and phone consistent everywhere, is core local SEO work.",
      },
      {
        question: "Is advertising budget included in the monthly fee?",
        answer:
          "No. Our management fee and the amount you spend with Google or Meta are billed separately, so you always see exactly where the money went.",
      },
      {
        question: "Can you help us rank for 'near me' searches?",
        answer:
          "We optimise the signals that influence local results — accurate business data, structured data, service-area content and consistent listings. The final ranking depends on the searcher's location and Google's local systems.",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding & Graphic Design",
    slug: "branding",
    shortDescription: "Logos, identity systems and everyday design assets that stay consistent.",
    description:
      "A brand is more than a logo — it is the set of decisions that make your business recognisable everywhere it appears. We develop logo and identity systems, define typography and colour, and produce the practical assets you need day to day: social templates, posters, packaging, signage and print-ready files, delivered with usage guidance.",
    whatItIs:
      "A visual identity and the working files that come with it, from the core mark to the templates your team reuses every week.",
    whoItIsFor:
      "New businesses defining their look for the first time, and established businesses whose materials have drifted into inconsistency.",
    icon: "PenTool",
    image: brandingImage,
    pricing: {
      startingAt: 9999,
      unit: "project",
      note: "Logo and identity system, plus the templates you reuse",
    },
    benefits: [
      "Logo and identity system",
      "Typography and colour guidelines",
      "Social media and campaign templates",
      "Print-ready files for signage and packaging",
      "Consistent look across every channel",
      "Editable source files handed over",
    ],
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva"],
    featured: false,
    isActive: true,
    teamMemberIds: ["designer"],
    seoTitle: "Graphic Design & Branding Services in Bihar",
    seoDescription:
      "Logo design, brand identity systems and everyday design assets — social templates, posters, packaging and print-ready files — for businesses across Bihar.",
    seoKeywords: [
      "graphic design services Bihar",
      "logo design Bihar",
      "branding agency Bihar",
      "social media design Bihar",
    ],
    relatedServiceIds: ["web-development", "seo-marketing"],
    faqs: [
      {
        question: "Do I get the editable source files?",
        answer:
          "Yes. You receive the working files along with the exported formats, so you are never locked out of your own identity.",
      },
      {
        question: "How many logo options do you present?",
        answer:
          "We usually present two or three considered directions rather than a large pile, then refine the one you choose through a set number of revision rounds agreed upfront.",
      },
      {
        question: "Can you design print material as well as digital?",
        answer:
          "Yes — signage, packaging, posters, visiting cards and brochures, supplied print-ready with correct bleed and colour setup.",
      },
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development",
    slug: "mobile-apps",
    shortDescription: "Android and iOS apps from a single, maintainable codebase.",
    description:
      "For businesses that need more than a website, we build cross-platform mobile apps — one codebase producing both Android and iOS builds. Work covers interface design, offline-tolerant data handling, authentication, notifications, store submission and post-launch updates, with the same emphasis on performance and maintainability as our web work.",
    whatItIs:
      "A published mobile application with the backend, accounts and notification pieces it needs to work in the real world.",
    whoItIsFor:
      "Businesses with repeat customers, internal teams needing a field or operations tool, and products where a website alone is not enough.",
    icon: "Smartphone",
    image: mobileAppsImage,
    pricing: {
      startingAt: 74999,
      unit: "project",
      note: "Android + iOS from one codebase, store submission included",
    },
    benefits: [
      "One codebase for Android and iOS",
      "Interface designed for real usage, not demos",
      "Secure accounts and data handling",
      "Push notifications where they help",
      "Store submission handled for you",
      "Post-launch updates and monitoring",
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Supabase", "Firebase"],
    featured: false,
    isActive: true,
    teamMemberIds: ["developer"],
    seoTitle: "Mobile App Development in Bihar (Android & iOS)",
    seoDescription:
      "Cross-platform Android and iOS app development from one codebase — interface design, accounts, notifications, store submission and post-launch support.",
    seoKeywords: [
      "mobile app development Bihar",
      "Android app development Bihar",
      "iOS app developer Bihar",
      "React Native development India",
    ],
    relatedServiceIds: ["web-development", "ecommerce", "branding"],
    faqs: [
      {
        question: "Do you build separate Android and iOS apps?",
        answer:
          "We build one cross-platform codebase that produces both Android and iOS builds, which keeps cost and long-term maintenance down without compromising the experience.",
      },
      {
        question: "Do you handle Play Store and App Store submission?",
        answer:
          "Yes, including store listings, assets and the review process. You own the developer accounts so the app always remains yours.",
      },
      {
        question: "Do I need an app or just a website?",
        answer:
          "Most businesses need a good website first. An app earns its cost when you have repeat users, offline needs or an internal operations workflow — we will say so honestly.",
      },
    ],
  },
];

/** Related services for contextual internal linking. */
export function getRelatedServices(service: Service): Service[] {
  return service.relatedServiceIds
    .map((id) => activeServices.find((item) => item.id === id))
    .filter((item): item is Service => Boolean(item));
}

export const activeServices = services.filter((service) => service.isActive);

export function getServiceBySlug(slug: string): Service | undefined {
  return activeServices.find((service) => service.slug === slug);
}
