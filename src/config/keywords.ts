// =====================================================
// ✏️ EDIT KEYWORDS HERE
// =====================================================
// These lists are for SEO PLANNING: they guide page titles, descriptions and
// the wording of real content. Only a small, relevant subset is ever emitted
// as a meta keywords tag — search engines do not rank on that tag, so never
// dump every keyword into metadata or into visible page text.

export const keywords = {
  // ✏️ PRIMARY — what the business is
  primary: [
    "digital agency Bihar",
    "digital marketing agency Bihar",
    "web development company Bihar",
    "SD Digital Hub",
  ],

  // ✏️ SECONDARY — supporting commercial terms
  secondary: [
    "website design company",
    "ecommerce website development",
    "mobile app development company",
    "branding and graphic design agency",
    "business automation services",
  ],

  // ✏️ SERVICE — one cluster per service offered
  service: [
    "web development Bihar",
    "website development Bihar",
    "web design Bihar",
    "ecommerce website development Bihar",
    "mobile app development Bihar",
    "SEO services Bihar",
    "local SEO Bihar",
    "technical SEO audit",
    "Google Ads management Bihar",
    "PPC agency Bihar",
    "social media marketing Bihar",
    "graphic design services Bihar",
    "logo design Bihar",
    "AI automation services Bihar",
    "business automation Bihar",
  ],

  // ✏️ LOCAL — city and district level terms you genuinely serve
  local: [
    "web developer Narkatiaganj",
    "website designer West Champaran",
    "web developer Bettiah",
    "digital marketing Motihari",
    "SEO services Patna",
    "digital agency Muzaffarpur",
    "website development Gopalganj",
  ],

  // ✏️ LONG TAIL — question and intent phrases for content planning
  longTail: [
    "how much does a business website cost in Bihar",
    "best way to get a website for a small shop",
    "hire a web developer in Bihar",
    "affordable ecommerce website for local business",
    "who can manage Google Ads for my business in Bihar",
    "local SEO for Bihar businesses",
  ],

  // ✏️ BRAND — brand and navigational terms
  brand: ["SD Digital Hub", "SD Digital Hub Narkatiaganj", "sddigitalhub.in"],
} as const;

/** A short, relevant keyword string for a page's meta keywords tag. */
export function keywordsMeta(list: readonly string[], limit = 10): string {
  return list.slice(0, limit).join(", ");
}
