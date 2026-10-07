# SD Digital Hub — SEO Implementation Report

Stack note: this project runs on **TanStack Start (Vite, React 19)**, not
Next.js. The Next.js Metadata API, `next/image` and `app/` conventions do not
exist here; the equivalent mechanisms are the route `head()` option, plain
`<img>` with explicit dimensions, and file-based routes under `src/routes/`.
Everything requested was implemented using those equivalents.

## 1. Files created

- `src/config/business.ts` — NAP, geo, price range, service areas, social
  profiles, Google/Bing verification, Google Business Profile category.
- `src/config/keywords.ts` — primary / secondary / service / local / longTail /
  brand keyword sets plus `keywordsMeta()`.
- `src/config/seo-links.ts` — private external-profile & backlink tracking.
- `src/data/locations.ts` — six service-area entries with unique content.
- `src/components/Breadcrumbs.tsx` — visible trail, reused for schema.
- `src/routes/locations.index.tsx` — `/locations`.
- `src/routes/locations.$slug.tsx` — `/locations/[slug]`.
- `docs/SEO-GUIDE.md`, `docs/SEO-IMPLEMENTATION-REPORT.md`.

## 2. Files modified

- `src/config/seo.ts` — rewritten as the central config + helpers
  (`pageMeta`, `canonicalLink`, `absoluteUrl`, `jsonLd`, `organizationSchema`,
  `websiteSchema`, `localBusinessSchema`, `serviceSchema`, `breadcrumbSchema`,
  `faqSchema`).
- `src/data/services.ts` — added `seoTitle`, `seoDescription`, `seoKeywords`,
  `relatedServiceIds`, `faqs` to all five services, plus
  `getRelatedServices()`.
- `src/routes/__root.tsx` — og:locale, geo meta tags, conditional
  verification tags, Organization + WebSite JSON-LD.
- `src/routes/index.tsx` — keyword-aware metadata, LocalBusiness + FAQPage
  JSON-LD, internal links to locations and pricing.
- `src/routes/services.index.tsx` — breadcrumbs, BreadcrumbList + ItemList
  JSON-LD, service keywords.
- `src/routes/services.$slug.tsx` — per-service SEO metadata, breadcrumbs,
  Service + BreadcrumbList + FAQPage JSON-LD, FAQ section, related-services
  block, location links.
- `src/routes/team.$slug.tsx` — breadcrumbs, Person + BreadcrumbList JSON-LD.
- `src/routes/sitemap[.]xml.tsx` — `/locations` and every location page.
- `public/robots.txt` — disallow `/admin`, `/dashboard`, `/private`.
- `src/components/layout/Header.tsx`, `Footer.tsx` — Locations navigation.

## 3. SEO architecture

```text
src/config/business.ts   → single source of NAP, geo, areas, social, verification
src/config/keywords.ts   → keyword plan (planning + short meta subset)
src/config/seo.ts        → defaults + pageMeta() + JSON-LD builders
src/config/seo-links.ts  → private backlink/profile register
        ↓
route head() per page → title, description, keywords, canonical, OG, Twitter, JSON-LD
        ↓
src/data/{services,locations,team,pricing}.ts → page content & per-entity SEO
        ↓
sitemap.xml (generated) + public/robots.txt
```

## 4–9. Editable locations

| Purpose | File |
| --- | --- |
| Site-wide SEO defaults, OG image, robots default | `src/config/seo.ts` |
| Business / NAP / geo / service areas / social / verification | `src/config/business.ts` |
| Keyword configuration | `src/config/keywords.ts` |
| Service SEO (title, description, keywords, FAQs, related) | `src/data/services.ts` |
| Location SEO | `src/data/locations.ts` |
| Backlink / external profile register | `src/config/seo-links.ts` |

## 10. Sitemap

Generated per request at `/sitemap.xml`: home, `/services`, `/pricing`,
`/team`, `/about`, `/locations`, `/contact`, four legal pages, every active
service, team member and location. Admin, API and utility routes excluded.
`lastmod` omitted deliberately — no authoritative per-page content timestamp
exists, and a build date would be misleading.

## 11. Robots

`public/robots.txt`: `Allow: /` with `Disallow` for `/api/`, `/admin`,
`/dashboard`, `/private`, plus the sitemap directive. Blog and demo are
separate domains and govern their own robots rules.

## 12. Canonicals

`canonicalLink(path)` emits one absolute self-referencing canonical per leaf
route; `og:url` matches it. `__root.tsx` carries no canonical, so no conflicts.

## 13. JSON-LD

Organization + WebSite (site-wide), ProfessionalService/LocalBusiness (home,
locations), Service (service pages), BreadcrumbList (services, service detail,
team detail, locations), FAQPage (home, service pages, location pages),
ItemList (services list, pricing), Person (team detail). No ratings, reviews,
awards or client claims.

## 14. Local SEO

One real office (Narkatiaganj, West Champaran). Six location pages with unique
written content, `hasOffice` flagged honestly, nearby-area lists, per-location
FAQs, LocalBusiness schema with `areaServed`, geo meta tags, and consistent NAP
sourced from a single config file. No auto-generated city pages, no fake
offices, no "best near me" claims.

## 15–16. Search Console / Bing

Add the verification values to `business.verification` in
`src/config/business.ts`; the tags render automatically. Then submit
`https://sddigitalhub.in/sitemap.xml` in Google Search Console and Bing
Webmaster Tools.

## 17. Performance

No new dependencies. Location pages are server-rendered static content; all
metadata and JSON-LD are produced at render time with no client JavaScript.
Images keep explicit `width`/`height` (no layout shift) and lazy loading below
the fold.

## 18. Validation

Typecheck and production build pass; all routes return 200 with unique titles,
descriptions, canonicals and structured data. Mobile layout checked with no
horizontal overflow.

## 19. Manual work still required

1. Add real social profile URLs in `src/config/business.ts` (and mirror them in
   `src/config/seo-links.ts`) — `sameAs` schema stays empty until then.
2. Create and verify the Google Business Profile for Narkatiaganj.
3. Paste Google Search Console and Bing verification codes.
4. Optionally add a 1200 × 630 social preview image and set `seo.ogImage`.
5. Replace team placeholder names, photos and bios in `src/data/team.ts`.
6. Confirm the exact office coordinates in `business.geo`.

No guarantee of any search ranking is made or implied anywhere in this
implementation. Rankings depend on search engines, competition and ongoing
work.

## SEO page inventory

| URL | Primary intent | Title | Canonical | H1 | Schema | Indexable |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Brand + commercial | SD Digital Hub \| Your Digital Partner — Digital Agency in Bihar | `/` | We build the digital side of your business | LocalBusiness, FAQPage, Organization, WebSite | Yes |
| `/services` | Commercial | Services — Web, E-Commerce, Apps, SEO & Branding | `/services` | Digital work, delivered end to end | BreadcrumbList, ItemList | Yes |
| `/services/[slug]` | Commercial / transactional | Per-service `seoTitle` | `/services/[slug]` | Service title | Service, BreadcrumbList, FAQPage | Yes |
| `/pricing` | Commercial | Pricing | `/pricing` | Pricing | ItemList | Yes |
| `/team` | Informational | Team | `/team` | Team | — | Yes |
| `/team/[slug]` | Informational | Member name — role | `/team/[slug]` | Member name | Person, BreadcrumbList | Yes |
| `/about` | Informational | About | `/about` | About | — | Yes |
| `/locations` | Local | Service Areas in Bihar | `/locations` | Where we work in Bihar | BreadcrumbList | Yes |
| `/locations/[slug]` | Local | Per-location `seoTitle` | `/locations/[slug]` | Location heading | LocalBusiness, BreadcrumbList, FAQPage | Yes |
| `/contact` | Transactional / local | Contact | `/contact` | Contact | — | Yes |
| `/privacy-policy` | Informational | Privacy Policy | `/privacy-policy` | Privacy Policy | — | Yes |
| `/refund-policy` | Informational | Refund Policy | `/refund-policy` | Refund Policy | — | Yes |
| `/replacement-policy` | Informational | Replacement Policy | `/replacement-policy` | Replacement Policy | — | Yes |
| `/terms-and-conditions` | Informational | Terms & Conditions | `/terms-and-conditions` | Terms & Conditions | — | Yes |
| `/sitemap.xml`, `/robots.txt` | Crawler utility | — | — | — | — | N/A |
