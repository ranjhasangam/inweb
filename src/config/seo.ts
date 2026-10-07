// =====================================================
// ✏️ EDIT SEO SETTINGS HERE
// =====================================================
// Central SEO configuration + small reusable helpers. Every route imports from
// this file, so changing a value here changes it site-wide.
// Business NAP / locations / social profiles: src/config/business.ts
// Keyword planning: src/config/keywords.ts
// Per-service SEO: src/data/services.ts
// Per-location SEO: src/data/locations.ts

import { business, socialProfileUrls } from "@/config/business";
import { keywords, keywordsMeta } from "@/config/keywords";
import { site } from "@/data/site";

export const seo = {
  // ✏️ EDITABLE SITE TITLE
  siteName: site.name,
  defaultTitle: `${site.name} | ${site.tagline}`,
  titleTemplate: (title: string) => `${title} | ${site.name}`,

  // ✏️ EDITABLE SITE DESCRIPTION
  description: site.description,

  // ✏️ EDITABLE KEYWORDS (site-wide default; page-level keywords win)
  defaultKeywords: [...keywords.primary, ...keywords.service.slice(0, 6)],

  // ✏️ EDITABLE CANONICAL URL — production origin, no trailing slash
  canonical: site.url,

  author: site.name,
  publisher: site.name,
  organization: site.name,

  // ✏️ EDITABLE OG IMAGE / TWITTER IMAGE
  // Must be an ABSOLUTE https URL to a 1200x630 image (a few hundred KB).
  // Leave "" and the hosting platform supplies a preview automatically —
  // that previews better than a wrong-sized or missing file.
  ogImage: "",
  twitterImage: "",

  // ✏️ EDITABLE SOCIAL — X/Twitter handle including "@", or "" to omit
  twitterHandle: "",

  // ✏️ EDITABLE SEO DEFAULTS
  locale: business.locale,
  language: business.language,
  defaultRobots: "index, follow",

  // ✏️ ADD SEARCH ENGINE VERIFICATION CODES HERE → src/config/business.ts
  verification: business.verification,
} as const;

type MetaTag = Record<string, string>;

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${seo.canonical}${path === "/" ? "/" : path}`;
}

/**
 * Builds the standard meta set for a page.
 * `indexable: false` marks a page noindex (drafts, utility, duplicate pages).
 */
export function pageMeta(options: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article" | "profile";
  keywords?: readonly string[];
  image?: string;
  indexable?: boolean;
}): MetaTag[] {
  const { title, description } = options;
  const image = options.image ?? seo.ogImage;
  const meta: MetaTag[] = [
    { title },
    { name: "description", content: description },
    { name: "author", content: seo.author },
    { name: "publisher", content: seo.publisher },
    { name: "robots", content: options.indexable === false ? "noindex, follow" : seo.defaultRobots },
    { property: "og:site_name", content: seo.siteName },
    { property: "og:locale", content: seo.locale },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: options.type ?? "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  const kw = options.keywords ?? seo.defaultKeywords;
  if (kw.length > 0) meta.push({ name: "keywords", content: keywordsMeta(kw) });

  if (options.path) meta.push({ property: "og:url", content: absoluteUrl(options.path) });

  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: seo.twitterImage || image });
  }
  if (seo.twitterHandle) {
    meta.push({ name: "twitter:site", content: seo.twitterHandle });
    meta.push({ name: "twitter:creator", content: seo.twitterHandle });
  }
  return meta;
}

export function canonicalLink(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}

export function jsonLd(...data: unknown[]) {
  return data.map((entry) => ({
    type: "application/ld+json",
    children: JSON.stringify(entry),
  }));
}

// ---------------------------------------------------------------------------
// ✏️ EDITABLE STRUCTURED DATA (JSON-LD) — only verified facts, no fake
// ratings, reviews, awards or client counts.
// ---------------------------------------------------------------------------

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.address.street,
  addressLocality: business.address.locality,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.countryCode,
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seo.canonical}/#organization`,
    name: business.name,
    legalName: business.legalName,
    slogan: business.tagline,
    url: seo.canonical,
    ...(seo.ogImage ? { logo: seo.ogImage } : {}),
    foundingDate: business.foundingDate,
    email: business.email,
    telephone: business.phone,
    address: postalAddress,
    ...(socialProfileUrls.length > 0 ? { sameAs: socialProfileUrls } : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: business.phone,
        email: business.email,
        areaServed: business.address.countryCode,
        availableLanguage: ["en", "hi"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seo.canonical}/#website`,
    name: business.name,
    url: seo.canonical,
    inLanguage: seo.language,
    publisher: { "@id": `${seo.canonical}/#organization` },
  };
}

export function localBusinessSchema(options?: { areaServed?: readonly string[]; url?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": business.businessType,
    "@id": `${seo.canonical}/#localbusiness`,
    name: business.name,
    description: site.description,
    url: options?.url ? absoluteUrl(options.url) : seo.canonical,
    telephone: business.phone,
    email: business.email,
    priceRange: business.priceRange,
    currenciesAccepted: business.currency,
    foundingDate: business.foundingDate,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    areaServed: (options?.areaServed ?? business.serviceAreas).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
    ],
    ...(socialProfileUrls.length > 0 ? { sameAs: socialProfileUrls } : {}),
  };
}

export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  image?: string;
  areaServed?: readonly string[];
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    ...(options.serviceType ? { serviceType: options.serviceType } : {}),
    ...(options.image?.startsWith("http") ? { image: options.image } : {}),
    provider: { "@id": `${seo.canonical}/#organization` },
    areaServed: (options.areaServed ?? business.serviceAreas).map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
  };
}

/** Breadcrumbs: pass the same trail that is shown visually on the page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
