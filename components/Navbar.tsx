"use client";

import { useState, useEffect, useId } from "react";
import { Menu, X, Sun, Moon, MessageCircle } from "lucide-react";
import { NAV_LINKS, buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { LOCALE_LABELS, LOCALE_NAMES, type Locale } from "@/locales";
import type { TranslationKey } from "@/locales";

const LOCALES: Locale[] = ["es", "en", "pt"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close mobile menu when locale changes
  const handleLocaleChange = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  const whatsappUrl = buildWhatsAppUrl(t("hero.whatsapp.message"));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors shrink-0"
        >
          Lucas Giorgi<span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                {t(link.key as TranslationKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right controls */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {/* Language selector */}
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden" role="group" aria-label={t("lang.select")}>
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                aria-label={LOCALE_NAMES[loc]}
                aria-pressed={locale === loc}
                className={`px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                  locale === loc
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {LOCALE_LABELS[loc]}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun size={17} aria-hidden="true" />
            ) : (
              <Moon size={17} aria-hidden="true" />
            )}
          </button>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            <MessageCircle size={15} aria-hidden="true" />
            {t("nav.cta")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white rounded-lg transition-colors"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          aria-expanded={open}
          aria-controls={menuId}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id={menuId}
        hidden={!open}
        className="lg:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-4 pb-5 pt-3 shadow-lg"
      >
        {/* Nav links */}
        <ul className="flex flex-col gap-1 mb-4" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-base text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium py-2.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                {t(link.key as TranslationKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile controls row */}
        <div className="flex items-center justify-between gap-3 py-3 border-t border-gray-100 dark:border-gray-800 mb-3">
          {/* Language */}
          <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden" role="group" aria-label={t("lang.select")}>
            {LOCALES.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                aria-label={LOCALE_NAMES[loc]}
                aria-pressed={locale === loc}
                className={`px-3 py-2 text-sm font-semibold transition-colors ${
                  locale === loc
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {LOCALE_LABELS[loc]}
              </button>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t("theme.light") : t("theme.dark")}
            className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-colors"
          >
            {theme === "dark" ? (
              <><Sun size={16} aria-hidden="true" /><span>{t("theme.light.label")}</span></>
            ) : (
              <><Moon size={16} aria-hidden="true" /><span>{t("theme.dark.label")}</span></>
            )}
          </button>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-3 rounded-xl transition-colors"
        >
          <MessageCircle size={18} aria-hidden="true" />
          {t("nav.cta")}
        </a>
      </div>
    </header>
  );
}
