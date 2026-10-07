// ============================================================================
// EDITABLE PRICING
// ----------------------------------------------------------------------------
// This file controls the dedicated /pricing page.
//
// HOW TO EDIT:
// 1. Change a price          -> edit `startingAt` (plain number, in rupees).
// 2. Rename a package        -> edit `name`.
// 3. Change what's included  -> edit the `includes` array (add/remove lines).
// 4. Reorder packages        -> move the whole { ... } block up or down.
// 5. Hide a package          -> set isActive: false (keeps it in the file).
// 6. Highlight one package   -> set highlight: true (only keep it on one).
// 7. Add a new package       -> copy any block, give it a NEW unique id.
//
// NOTE: per-service prices shown on /services and /services/[slug] live in
// src/data/services.ts under the `pricing` field of each service.
// ============================================================================

export type PricingPackage = {
  id: string;
  name: string;
  /** One line explaining who this package suits. */
  summary: string;
  /** Starting price in INR. Prices are treated as "starting from". */
  startingAt: number;
  /** e.g. "one-time project", "per month" */
  unit: string;
  /** Typical delivery time, shown as-is. */
  timeline: string;
  includes: string[];
  highlight: boolean;
  isActive: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    summary: "For professionals, freelancers and small studios who need a credible online profile.",
    startingAt: 7999,
    unit: "one-time project",
    timeline: "5–7 days",
    includes: [
      "Up to 5 pages (Home, About, Work, Services, Contact)",
      "Mobile, tablet and desktop responsive design",
      "Enquiry form with email notification",
      "Basic on-page SEO and metadata",
      "Free domain guidance + 1 year hosting setup help",
      "15 days post-launch support",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "landing-page",
    name: "Landing Page",
    summary: "A single high-converting page for one campaign, product or offer.",
    startingAt: 4999,
    unit: "one-time project",
    timeline: "3–5 days",
    includes: [
      "One long-form conversion page",
      "Lead capture form with validation",
      "WhatsApp / call click-to-action",
      "Speed and Core Web Vitals optimised",
      "Ads-ready tracking setup (Google / Meta)",
      "10 days post-launch support",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "custom-dynamic-website",
    name: "Custom Dynamic Website",
    summary: "A fully custom, database-backed website built around how your business actually works.",
    startingAt: 24999,
    unit: "one-time project",
    timeline: "3–5 weeks",
    includes: [
      "Custom design — no templates",
      "Dynamic pages powered by a database",
      "Admin-friendly content updates",
      "Multiple forms, enquiries and notifications",
      "Full technical SEO, sitemap and structured data",
      "Analytics setup and performance tuning",
      "60 days post-launch support",
    ],
    highlight: true,
    isActive: true,
  },
  {
    id: "ecommerce-website",
    name: "E-Commerce Website",
    summary: "An online store with products, cart, payments, delivery and order management.",
    startingAt: 34999,
    unit: "one-time project",
    timeline: "4–6 weeks",
    includes: [
      "Product and category catalogue setup",
      "Secure, tested cart and checkout",
      "Payment gateway integration (Razorpay / Stripe)",
      "Shipping, delivery and tax configuration",
      "Order, stock and customer management",
      "Admin training for your team",
      "60 days post-launch support",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "mobile-app",
    name: "Mobile App (Android + iOS)",
    summary: "One codebase, two stores — for businesses that need more than a website.",
    startingAt: 74999,
    unit: "one-time project",
    timeline: "6–10 weeks",
    includes: [
      "Android and iOS builds from one codebase",
      "Accounts, secure data handling and notifications",
      "Backend and API setup",
      "Play Store and App Store submission",
      "Crash monitoring and analytics",
      "90 days post-launch support",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "seo-marketing",
    name: "SEO & Digital Marketing",
    summary: "Ongoing visibility work — technical SEO, local search and campaign management.",
    startingAt: 6999,
    unit: "per month",
    timeline: "Monthly retainer",
    includes: [
      "Technical SEO audit and monthly fixes",
      "Google Business Profile and local search",
      "Keyword and content plan",
      "Ad campaign setup and optimisation (ad spend separate)",
      "Monthly plain-language report",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "branding",
    name: "Branding & Graphic Design",
    summary: "Logo, identity system and the everyday design assets your team reuses.",
    startingAt: 9999,
    unit: "one-time project",
    timeline: "1–2 weeks",
    includes: [
      "Logo concepts and final identity mark",
      "Typography and colour guidelines",
      "Social media and campaign templates",
      "Print-ready files for signage and packaging",
      "Editable source files handed over",
    ],
    highlight: false,
    isActive: true,
  },
  {
    id: "care-plan",
    name: "Website Care Plan",
    summary: "Hosting, updates, backups and small changes handled every month.",
    startingAt: 1499,
    unit: "per month",
    timeline: "Monthly, cancel anytime",
    includes: [
      "Hosting and domain management",
      "Security updates and backups",
      "Uptime monitoring",
      "Up to 2 hours of content/design changes per month",
      "Priority support on WhatsApp and email",
    ],
    highlight: false,
    isActive: true,
  },
];

// EDITABLE PRICING NOTES — shown below the packages on /pricing.
export const pricingNotes = [
  "All prices are starting prices and depend on scope, number of pages and features.",
  "Domain, hosting, paid plugins, premium images and advertising budgets are billed separately at actual cost.",
  "Projects start with 50% advance; the balance is due before launch.",
  "GST is charged extra where applicable.",
  "Need something not listed here? Request a callback and we will quote it properly.",
] as const;

export const activePricingPackages = pricingPackages.filter((pkg) => pkg.isActive);

/** Formats a rupee amount as ₹7,999 (no decimals). */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}
