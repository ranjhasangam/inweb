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
    "ads agency Bihar",
    "Marketing agency Bihar",
    "digital marketing agency Bihar",
    "web development company Bihar",
    "SD Digital Hub",
        "Digital Hub",
        "SDigital Hub",
        "digital solution agency",
        "digital agency west-champaran",



  ],

  // ✏️ SECONDARY — supporting commercial terms
  secondary: [
    "website design company",
    "ecommerce website development",
    "branding and graphic design agency",
    "business automation services",
        "Marketing agency",
        "crm",
        "HRM",
        "Digital hub",
        "ads hub",
        "web devlopment agency",
        "digital solution agency",







  ],

  // ✏️ SERVICE — one cluster per service offered
  service: [
    "web development Bihar,east-chanparan,west champaran",
    "website development Bihar,east-chanparan,west champaran",
    "web design Bihar,east-chanparan,west champaran",
    "ecommerce website development Bihar,east-chanparan,west champaran",
    "mobile app development Bihar,east-chanparan,west champaran",
    "SEO services Bihar,east-chanparan,west champaran",
    "local SEO Bihar,east-chanparan,west champaran",
    "technical SEO audit,east-chanparan,west champaran",
    "Google Ads management Bihar,east-chanparan,west champaran",
    "PPC agency Bihar,east-chanparan,west champaran",
    "social media marketing Bihar,east-chanparan,west champaran",
    "graphic design services Bihar,east-chanparan,west champaran",
    "logo design Bihar,east-chanparan,west champaran",
    "AI automation services Bihar,east-chanparan,west champaran",
    "business automation Bihar,east-chanparan,west champaran",
    "hrm,Bihar,east-chanparan,west champaran",
    "crm,Bihar,east-chanparan,west champaran",

  ],

  // ✏️ LOCAL — city and district level terms you genuinely serve
  local: [    "web devloper ,bettiha ,Motihari,narkatiganj",
    "website designer West Champaran",
        "website designer east Champaran",
    "web developer Bettiah",
    "web developer motihari",
    "digital marketing Motihari",
        "digital marketing bettiah",
    "SEO services Patna",
    "digital agency Muzaffarpur",
    "website development Gopalganj",
         " web devloper narkatinganj",
          " web devloper nke",
          " ads agency narkatinganj", 
          " ads agency bettiah", 
          " web devloper near me", 
          " ads agency near me ",
          " marketing agency near me",
          "  devlopernear me ", 
          " seo service  narkatinganj", 
           " seo service  bettiha", 
           " seo service  motihari",
           " seo service  near me", 
          "local SEO for Bihar businesses"
"SEO services for Bihar businesses"
"digital marketing for Bihar businesses"
"website development for Bihar businesses"
"web design for Bihar businesses"
"affordable SEO for Bihar businesses"
"local digital marketing for Bihar businesses"
"online marketing for Bihar businesses"
"Google ranking services for Bihar businesses"
"SEO agency for Bihar businesses"
"digital marketing agency for Bihar businesses"
"website design services for Bihar businesses"
"ecommerce website development for Bihar businesses"
"business website development for Bihar businesses"
"local SEO services for Bihar businesses"
"Google Business Profile optimization for Bihar businesses"
"social media marketing for Bihar businesses"
"content marketing for Bihar businesses"
"AI automation for Bihar businesses"
"business automation services for Bihar businesses"
"SEO for small businesses in Bihar"
"digital marketing for small businesses in Bihar"
"website development for small businesses in Bihar"
"local SEO for small businesses in Bihar"
"online marketing for small businesses in Bihar"
"affordable website development in Bihar"
"affordable digital marketing in Bihar"
"affordable SEO services in Bihar"
"professional SEO services in Bihar"
"professional web development in Bihar"
"professional digital marketing in Bihar"
  ],

  // ✏️ LONG TAIL — question and intent phrases for content planning
  longTail: [
    "how much does a business website cost in Bihar",
    "best way to get a website for a small shop",
    "hire a web developer in Bihar",
    "affordable ecommerce website for local business",
    "who can manage Google Ads for my business in Bihar",
    "local SEO for Bihar businesses",
    "local SEO for Bihar businesses"
"SEO services for Bihar businesses"
"digital marketing for Bihar businesses"
"website development for Bihar businesses"
"web design for Bihar businesses"
"affordable SEO for Bihar businesses"
"local digital marketing for Bihar businesses"
"online marketing for Bihar businesses"
"Google ranking services for Bihar businesses"
"SEO agency for Bihar businesses"
"digital marketing agency for Bihar businesses"
"website design services for Bihar businesses"
"ecommerce website development for Bihar businesses"
"business website development for Bihar businesses"
"local SEO services for Bihar businesses"
"Google Business Profile optimization for Bihar businesses"
"social media marketing for Bihar businesses"
"content marketing for Bihar businesses"
"AI automation for Bihar businesses"
"business automation services for Bihar businesses"
"SEO for small businesses in Bihar"
"digital marketing for small businesses in Bihar"
"website development for small businesses in Bihar"
"local SEO for small businesses in Bihar"
"online marketing for small businesses in Bihar"
"affordable website development in Bihar"
"affordable digital marketing in Bihar"
"affordable SEO services in Bihar"
"professional SEO services in Bihar"
"professional web development in Bihar"
"professional digital marketing in Bihar"
    
  ],

  // ✏️ BRAND — brand and navigational terms
  brand: ["SD Digital Hub", "SD Digital Hub Narkatiaganj", "sddigitalhub.co.in"],
} as const;

/** A short, relevant keyword string for a page's meta keywords tag. */
export function keywordsMeta(list: readonly string[], limit = 10): string {
  return list.slice(0, limit).join(", ");
}
