"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/locales";

const legalLinks = [
  { labelKey: "footer.legal.aviso" as TranslationKey, href: "/aviso-legal" },
  { labelKey: "footer.legal.privacidad" as TranslationKey, href: "/privacidad" },
  { labelKey: "footer.legal.cookies" as TranslationKey, href: "/cookies" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-14" aria-label="Pie de página">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#inicio"
              className="text-xl font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
            >
              {SITE.name}<span className="text-indigo-400">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <p className="mt-3 text-xs">
              <span className="text-indigo-400 font-semibold">{t("footer.price_from")}</span>
              {" · "}
              {t("footer.available")}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegación del pie de página">
            <h2 className="text-white font-semibold text-sm mb-4">{t("footer.nav")}</h2>
            <ul className="space-y-2.5" role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {t(l.key as TranslationKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold text-sm mb-4">{t("footer.contact")}</h2>
            <address className="not-italic space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <Mail size={15} aria-hidden="true" />
                {SITE.email}
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Lucas Giorgi (abre en nueva pestaña)"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <GithubIcon size={15} />
                {SITE.githubHandle}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Lucas Giorgi (abre en nueva pestaña)"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
              >
                <LinkedinIcon size={15} />
                {SITE.linkedinHandle}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {SITE.name} · {t("footer.rights")}
          </p>
          <nav aria-label="Páginas legales">
            <ul className="flex items-center gap-4 flex-wrap justify-center" role="list">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
                  >
                    {t(l.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
