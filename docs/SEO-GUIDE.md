# SD Digital Hub — SEO Editing Guide

Everything SEO-related is a plain TypeScript config file. There is no SEO
database, no CMS and no admin panel. Search for `✏️` to find every editable
block.

## Where to edit what

| I want to change… | File |
| --- | --- |
| Site title, default description, canonical origin, OG/Twitter image, locale, robots default | `src/config/seo.ts` |
| Business name, address, phone, email, geo coordinates, price range, service areas, social profiles, Google/Bing verification | `src/config/business.ts` |
| Keyword plan (primary / secondary / service / local / longTail / brand) | `src/config/keywords.ts` |
| External profiles & backlink tracking (reference only, not published) | `src/config/seo-links.ts` |
| Per-service SEO title, description, keywords, FAQs, related services | `src/data/services.ts` |
| Location pages (service areas) | `src/data/locations.ts` |
| Team profiles | `src/data/team.ts` |
| Company story, hours, blog/demo URLs, WhatsApp number | `src/data/site.ts` |
| Pricing packages | `src/data/pricing.ts` |
| Crawler rules | `public/robots.txt` |
| Sitemap contents | `src/routes/sitemap[.]xml.tsx` |
| Per-page title/description/schema | that route file in `src/routes/` |

## Titles and descriptions

Each route builds its head tags with `pageMeta({ title, description, path,
keywords, type, indexable })` from `src/config/seo.ts`. It emits title,
description, author, publisher, robots, canonical-ready og:url, Open Graph,
Twitter card and (a short) keywords tag.

- Keep titles natural: `Web Development Services in Bihar | SD Digital Hub`.
- Every page needs a **unique** description of roughly 150–160 characters.
- `indexable: false` renders `noindex, follow` — use it for utility or
  duplicate pages only. Never on public pages.

## Search engine verification

Open `src/config/business.ts`:

```ts
verification: {
  google: "",  // Search Console → HTML tag → paste the content value
  bing: "",    // Bing Webmaster Tools → meta tag → paste the content value
}
```

The meta tags appear automatically once the values are non-empty. Then submit
`https://sddigitalhub.in/sitemap.xml` in both tools.

## Adding a service

1. Add an entry to `services` in `src/data/services.ts` with a unique `id` and
   `slug`, plus `seoTitle`, `seoDescription`, `seoKeywords`, `faqs`,
   `relatedServiceIds`, `pricing` and `teamMemberIds`.
2. Add an image to `src/assets/services/` and import it.
3. Nothing else — the detail page, sitemap entry, breadcrumbs, Service and
   FAQPage structured data are generated from that entry.

## Adding a location page

1. Add an entry to `locations` in `src/data/locations.ts`.
2. It must contain genuinely unique local content. Do not clone an existing
   entry with the city name swapped — duplicated location pages are treated as
   doorway spam.
3. Set `hasOffice: true` only where an office actually exists (currently
   Narkatiaganj and, district-wide, West Champaran).

## Structured data (JSON-LD)

Helpers in `src/config/seo.ts`:

- `organizationSchema()` and `websiteSchema()` — emitted once in
  `src/routes/__root.tsx`.
- `localBusinessSchema()` — home page and location pages.
- `serviceSchema()` — service detail pages.
- `breadcrumbSchema()` — pass the same trail given to `<Breadcrumbs />`.
- `faqSchema()` — home, service and location FAQs.

No ratings, reviews, awards or client counts are used anywhere. Do not add
them unless they are real and verifiable.

## Open Graph / social preview image

`seo.ogImage` and `seo.twitterImage` in `src/config/seo.ts` are empty by
default, so hosting supplies a preview automatically. To use your own, upload a
**1200 × 630** image and set the full `https://` URL there.

## Robots and sitemap

- `public/robots.txt` allows everything public and disallows `/api/`,
  `/admin`, `/dashboard`, `/private`.
- The sitemap is generated at request time from `staticPaths` plus active
  services, team members and locations. Add new static routes to that array.
- `lastmod` is deliberately omitted: a build-time date is not a real content
  change date and misleads crawlers.

## Backlinks

`src/config/seo-links.ts` is a private reference list of real profiles and
their status. It is never rendered as a public page. Backlinks come from other
websites linking to you — listing URLs on your own site does nothing.

## Keywords

`src/config/keywords.ts` drives planning. Only a short, relevant subset reaches
the meta keywords tag (which search engines ignore for ranking). Use the lists
to decide wording of real page content, never to stuff text or alt attributes.

## Image SEO

Service and team images live in `src/assets/` with descriptive filenames and
explicit `width`/`height` plus `loading="lazy"` below the fold. Alt text
describes the picture — never a keyword list.
