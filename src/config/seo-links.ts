// =====================================================
// ✏️ UPDATE BACKLINK / EXTERNAL PROFILE LINKS HERE
// =====================================================
// A reference list of places where SD Digital Hub has a REAL profile or
// mention. This file is for internal management only — it is not rendered as
// a public "backlink list" page. Backlinks come from those external sites
// linking to you, not from listing URLs here.
//
// status: "live"     — profile exists and links back
//         "claimed"  — profile exists, link not added yet
//         "planned"  — not created yet
// Never add fake, bought or automated links.

export type ExternalProfile = {
  name: string;
  url: string;
  type:
    | "google-business-profile"
    | "social"
    | "directory"
    | "portfolio"
    | "developer"
    | "partner";
  status: "live" | "claimed" | "planned";
  notes: string;
};

export const externalProfiles: ExternalProfile[] = [
  {
    name: "Google Business Profile",
    url: "",
    type: "google-business-profile",
    status: "planned",
    notes: "Create and verify the listing for Narkatiaganj; add website URL once live.",
  },
  {
    name: "Instagram",
    url: "",
    type: "social",
    status: "planned",
    notes: "Add the real profile URL here and in src/config/business.ts socialProfiles.",
  },
  {
    name: "Facebook Page",
    url: "",
    type: "social",
    status: "planned",
    notes: "Business page with matching name, address and phone.",
  },
  {
    name: "LinkedIn Company Page",
    url: "",
    type: "social",
    status: "planned",
    notes: "Company page; keep founding year and location consistent.",
  },
  {
    name: "YouTube Channel",
    url: "",
    type: "social",
    status: "planned",
    notes: "Link the website in the channel About section.",
  },
  {
    name: "SD Digital Hub Blog",
    url: "https://blog.sddigitalhub.in",
    type: "partner",
    status: "live",
    notes: "Separate system. Link relevant articles from service pages when published.",
  },
];
