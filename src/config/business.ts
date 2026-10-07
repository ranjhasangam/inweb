// =====================================================
// ✏️ EDIT BUSINESS INFORMATION HERE (NAP + LOCAL SEO)
// =====================================================
// This is the SINGLE source of truth for Name, Address, Phone, Email and
// service areas. Keep it identical to your Google Business Profile and any
// directory listing — inconsistent NAP data weakens local search results.
// Company copy (story, mission, hours) stays in src/data/site.ts.

import { site } from "@/data/site";

export const business = {
  // ✏️ EDIT HERE — legal / display name, exactly as used everywhere else
  name: site.name,
  legalName: site.name,
  tagline: site.tagline,
  // ✏️ EDIT HERE — schema.org type. "ProfessionalService" fits a digital agency.
  businessType: "ProfessionalService",
  // ✏️ EDIT HERE — Google Business Profile primary category
  primaryCategory: "Website designer",
  foundingDate: site.founded,
  url: site.url,
  email: site.email,
  supportEmail: site.supportEmail,
  phone: site.phone,
  // ✏️ EDIT HERE — indicative price band shown to search engines ($ to $$$$)
  priceRange: "₹₹",
  currency: "INR",
  language: "en",
  locale: "en_IN",

  // ✏️ EDIT HERE — physical address (the only real office)
  address: {
    street: site.address.line1,
    locality: "Narkatiaganj",
    district: "West Champaran",
    region: "Bihar",
    postalCode: "845455",
    country: "India",
    countryCode: "IN",
    full: site.address.full,
  },

  // ✏️ EDIT HERE — approximate coordinates of the office. Used for geo meta
  // tags and LocalBusiness schema. Replace with exact values if you have them.
  geo: {
    latitude: 27.1046,
    longitude: 84.4661,
  },

  // ✏️ EDIT HERE — areas you genuinely serve. Do NOT list places you cannot
  // actually serve; this feeds areaServed in structured data.
  serviceAreas: [
    "Narkatiaganj",
    "Bettiah",
    "Motihari",
    "West Champaran",
    "East Champaran",
    "Gopalganj",
    "Muzaffarpur",
    "Patna",
    "Bihar",
    "India",
  ],

  // ✏️ EDIT SOCIAL PROFILES HERE — real profile URLs only.
  // Leave a value as "" and it is skipped in sameAs structured data.
  socialProfiles: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    twitter: "",
    // ✏️ EDIT HERE — Google Business Profile link (also shown in the footer)
    googleBusinessProfile: "https://share.google/qLhcYrwZXrpvuLfTd",
  },

  // ✏️ ADD SEARCH ENGINE VERIFICATION CODES HERE
  // Google Search Console → HTML tag method → paste the content value only.
  // Bing Webmaster Tools → meta tag → paste the content value only.
  verification: {
    google: "",
    bing: "",
  },
} as const;

/** Real, non-empty social profile URLs — used for schema.org sameAs. */
export const socialProfileUrls: string[] = (
  Object.values(business.socialProfiles) as string[]
).filter((url) => url.startsWith("http"));
