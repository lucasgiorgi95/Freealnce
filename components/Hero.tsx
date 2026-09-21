"use client";

import { ArrowRight, Globe, CheckCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const whatsappUrl = buildWhatsAppUrl(t("hero.whatsapp.message"));

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft accent blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-indigo-100 dark:bg-indigo-950 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-8"
          aria-label="Disponibilidad geográfica"
        >
          <Globe size={14} aria-hidden="true" />
          {t("hero.badge")}
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-6"
        >
          {t("hero.title1")}{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{t("hero.title2")}</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
          {t("hero.subtitle")}
        </p>

        {/* Price anchor */}
        <p className="text-2xl font-bold text-gray-900 dark:text-white mb-10">
          {t("hero.price")}{" "}
          <span className="text-indigo-600 dark:text-indigo-400">€149</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/40 hover:shadow-indigo-300 hover:-translate-y-0.5"
          >
            {t("hero.cta.primary")}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-200 dark:shadow-green-900/40"
          >
            {t("hero.cta.secondary")}
          </a>
        </div>

        {/* Trust signals */}
        <ul
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500 dark:text-gray-400"
          aria-label="Puntos clave"
        >
          {(
            [
              "hero.trust.mobile",
              "hero.trust.delivery",
              "hero.trust.direct",
            ] as const
          ).map((key) => (
            <li key={key} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-indigo-500 shrink-0" aria-hidden="true" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
