import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Lucas Giorgi | Diseño y desarrollo web para negocios",
    template: "%s | Lucas Giorgi",
  },
  description:
    "Desarrollador web Full Stack desde Argentina. Creo páginas web profesionales, rápidas y adaptadas a móviles para pequeños negocios. Webs desde €149.",
  keywords: [
    "desarrollador web freelance",
    "páginas web para negocios",
    "diseño web profesional",
    "web para pequeñas empresas",
    "Lucas Giorgi",
    "freelance web developer Argentina",
    "Next.js React",
    "desarrollo web internacional",
    "web developer Spain",
  ],
  authors: [{ name: "Lucas Giorgi", url: SITE.url }],
  creator: "Lucas Giorgi",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US", "pt_BR"],
    url: SITE.url,
    siteName: SITE.name,
    title: "Lucas Giorgi | Webs profesionales para pequeños negocios",
    description:
      "Desarrollador web Full Stack desde Argentina. Páginas web modernas, rápidas y adaptadas a móviles. Desde €149.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Giorgi | Webs profesionales para pequeños negocios",
    description:
      "Desarrollador web desde Argentina. Páginas web modernas y rápidas. Desde €149.",
    creator: "@lucasgiorgi",
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "es": `${SITE.url}/es`,
      "en": `${SITE.url}/en`,
      "pt": `${SITE.url}/pt`,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucas Giorgi",
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Full Stack Web Developer",
  nationality: { "@type": "Country", name: "Argentina" },
  description:
    "Desarrollador web Full Stack desde Argentina especializado en crear páginas web profesionales para pequeños negocios y profesionales. Trabaja con clientes de España y otros países.",
  knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  offers: {
    "@type": "Offer",
    name: "Desarrollo web profesional",
    description: "Páginas web modernas, rápidas y adaptadas a móviles. Para pequeños negocios.",
    priceCurrency: "EUR",
    price: "149",
  },
  sameAs: [SITE.github, SITE.linkedin],
  areaServed: [
    { "@type": "Country", name: "España" },
    { "@type": "Country", name: "Portugal" },
    { "@type": "Continent", name: "Europa" },
    { "@type": "Continent", name: "América Latina" },
  ],
};

/** Inline script to apply theme before first paint — prevents flash */
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch(e) {}
})();
`.trim();

/**
 * Safely serialize an object for embedding inside a <script> tag.
 * JSON.stringify alone is NOT safe — the string "</script>" inside any value
 * would break out of the script block and allow XSS.
 * We escape the forward-slash after "<" so the browser never sees "</script>".
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/<\//g, "<\\/");
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Anti-flash theme script — must run before any CSS paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>
            <a href="#main-content" className="skip-link">
              Saltar al contenido principal
            </a>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
