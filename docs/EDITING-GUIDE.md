# Editing Guide — SD Digital Hub

Everything below is edited in code. Look for `EDITABLE` / `✏️ EDIT HERE` comments.

## Services — `src/data/services.ts`
- **Add:** copy one whole `{ ... }` service block, give it a new unique `id` and `slug`, change the text and `image`.
- **Edit:** change `title`, `shortDescription`, `description`, `benefits`, `technologies`, `faqs`, `seoTitle`, `seoDescription`.
- **Remove / hide:** set `isActive: false` (or delete the block).
- **Show first:** set `featured: true`.
- New image: put a file in `src/assets/services/` and import it at the top of the file.

## Team — `src/data/team.ts`
- **Add:** copy one member block, new unique `id` and `slug`.
- **Edit:** `name`, `role`, `shortBio`, `fullBio`, `experience`, `skills`, `socialLinks`.
- **Photo:** add a file to `src/assets/team/`, import it at the top, set `image`.
- **Remove / hide:** set `isActive: false`.

## Email, phone, address, hours — `src/data/site.ts`
- `email`, `supportEmail`, `phone`, `whatsappNumber` (digits only with 91), `address`, `businessHours`.
- These update the header, footer, contact page, WhatsApp/Call buttons and search data together.

## Footer — `src/components/layout/Footer.tsx`
- Headline: the "Let's build something meaningful." line.
- Page links: the `pages` and `legal` lists at the top.
- Contact details come from `src/data/site.ts`.
- Social icons: `src/data/social-links.ts` (replace `#` with real links).
- Google profile button: `googleBusinessProfile` in `src/config/business.ts`.

## AI assistants & search — `public/llms.txt`, `src/config/seo.ts`
- `public/llms.txt` is a plain summary that AI tools can read. Keep it in sync with `site.ts`.
- No one can guarantee top placement in Google or AI answers; accurate, consistent details help.

## Backlinks (links from other sites to yours) — `src/config/seo-links.ts`
Keep a private record of every profile here (status `planned` → `live`). It is never shown on the website.
Where to add your website link (https://sddigitalhub.in), with the SAME name, address and phone everywhere:
1. Google Business Profile — add website, services, photos, ask happy clients for reviews.
2. Bing Places for Business, Apple Business Connect.
3. Social profiles: Instagram, Facebook, LinkedIn company page, YouTube, X — put the site in each bio.
4. Indian directories: Justdial, IndiaMART, Sulekha, TradeIndia.
5. Agency directories: Clutch, GoodFirms, DesignRush.
6. Your own blog (blog.sddigitalhub.in) and demo site — link back to the main site.
7. Client websites — a "Website by SD Digital Hub" footer credit (with permission).
8. Local: Narkatiaganj / Bettiah business associations, college/alumni pages, local news features.
Avoid paid link packages and spam directories — they can hurt rankings. Nobody can guarantee a #1 position.

## SEO settings
- Site-wide: `src/config/seo.ts`. Business info: `src/config/business.ts`. Keyword ideas: `src/config/keywords.ts`.
- Per service: `seoTitle`, `seoDescription`, `seoKeywords`, `faqs` in `src/data/services.ts`.
- Add Google Search Console / Bing codes in `business.verification`.

## Floating buttons — `src/components/FloatingContact.tsx`
Call, email, WhatsApp and back-to-top bubbles. Numbers come from `src/data/site.ts`.
