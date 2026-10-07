import { ArrowUp, Mail, MessageCircle, Phone } from "lucide-react";

import { site } from "@/data/site";

// Floating contact bubbles shown bottom-right on every page.
// ✏️ Phone, email and WhatsApp number come from src/data/site.ts
export function FloatingContact() {
  const bubble =
    "grid size-12 place-items-center rounded-full border border-border-strong bg-elevated text-primary shadow-lg transition-transform hover:scale-110";
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3">
      <a href={`tel:${site.phone.replace(/\s/g, "")}`} aria-label="Call us" className={bubble}>
        <Phone className="size-5" aria-hidden="true" />
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email us" className={bubble}>
        <Mail className="size-5" aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${site.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={bubble}
      >
        <MessageCircle className="size-5" aria-hidden="true" />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      >
        <ArrowUp className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
}
