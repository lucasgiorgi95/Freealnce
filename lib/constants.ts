// ─── Site-wide constants ────────────────────────────────────────────────────
// Update these values to change contact info across the entire site.

export const SITE = {
  name: "Lucas Giorgi",
  tagline: "Desarrollador web para pequeños negocios",
  email: "lucas@giorgi.dev",
  github: "https://github.com/lucasgiorgi",
  githubHandle: "github.com/lucasgiorgi",
  linkedin: "https://linkedin.com/in/lucasgiorgi",
  linkedinHandle: "linkedin.com/in/lucasgiorgi",
  /**
   * TODO: Replace with your real WhatsApp number (country code + number, no spaces or +).
   * Example Argentina: "5491112345678"  (54 = country code, 9 = mobile prefix, 11 = area, rest = number)
   * Example Spain:     "34612345678"
   */
  whatsapp: "WHATSAPP_NUMBER_HERE", // ← REPLACE THIS with your actual number
  url: "https://lucasgiorgi.dev", // TODO: update with your production domain
} as const;

/** Helper – builds a wa.me URL with optional pre-filled message */
export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { key: "nav.home", href: "#inicio" },
  { key: "nav.services", href: "#servicios" },
  { key: "nav.projects", href: "#proyectos" },
  { key: "nav.pricing", href: "#precios" },
  { key: "nav.about", href: "#sobre-mi" },
  { key: "nav.faq", href: "#faq" },
] as const;
