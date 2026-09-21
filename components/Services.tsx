"use client";

import { FileText, Building2, Cpu, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/locales";
import SectionHeader from "@/components/ui/SectionHeader";

type ServiceDef = {
  icon: LucideIcon;
  nameKey: TranslationKey;
  price: string;
  taglineKey: TranslationKey;
  descKey: TranslationKey;
  features: TranslationKey[];
  highlight: boolean;
  whatsappMsgKey: TranslationKey;
};

const SERVICES: ServiceDef[] = [
  {
    icon: FileText,
    nameKey: "services.landing.name",
    price: "Desde €149",
    taglineKey: "services.landing.tagline",
    descKey: "services.landing.description",
    features: [
      "services.landing.f1",
      "services.landing.f2",
      "services.landing.f3",
      "services.landing.f4",
      "services.landing.f5",
      "services.landing.f6",
    ],
    highlight: false,
    whatsappMsgKey: "whatsapp.plan.start",
  },
  {
    icon: Building2,
    nameKey: "services.business.name",
    price: "Desde €249",
    taglineKey: "services.business.tagline",
    descKey: "services.business.description",
    features: [
      "services.business.f1",
      "services.business.f2",
      "services.business.f3",
      "services.business.f4",
      "services.business.f5",
      "services.business.f6",
    ],
    highlight: true,
    whatsappMsgKey: "whatsapp.plan.business",
  },
  {
    icon: Cpu,
    nameKey: "services.custom.name",
    price: "Desde €399",
    taglineKey: "services.custom.tagline",
    descKey: "services.custom.description",
    features: [
      "services.custom.f1",
      "services.custom.f2",
      "services.custom.f3",
      "services.custom.f4",
      "services.custom.f5",
      "services.custom.f6",
    ],
    highlight: false,
    whatsappMsgKey: "whatsapp.plan.pro",
  },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      aria-labelledby="services-heading"
      className="bg-white dark:bg-gray-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          description={t("services.description")}
          className="mb-16"
        />

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label={t("services.eyebrow")}
        >
          {SERVICES.map((s) => {
            const url = buildWhatsAppUrl(t(s.whatsappMsgKey));
            return (
              <li
                key={s.nameKey}
                className={`relative rounded-2xl p-8 border transition-all duration-200 flex flex-col ${
                  s.highlight
                    ? "border-indigo-200 bg-indigo-600 text-white shadow-xl shadow-indigo-200 dark:shadow-indigo-900/40"
                    : "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                }`}
              >
                {s.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                      {t("services.most_popular")}
                    </span>
                  </div>
                )}

                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    s.highlight ? "bg-white/20" : "bg-indigo-50 dark:bg-indigo-950"
                  }`}
                  aria-hidden="true"
                >
                  <s.icon
                    size={20}
                    className={s.highlight ? "text-white" : "text-indigo-600 dark:text-indigo-400"}
                  />
                </div>

                <h3
                  className={`text-xl font-bold mb-1 ${
                    s.highlight ? "text-white" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {t(s.nameKey)}
                </h3>
                <p
                  className={`text-sm mb-3 ${
                    s.highlight
                      ? "text-indigo-100"
                      : "text-indigo-600 dark:text-indigo-400 font-semibold"
                  }`}
                >
                  {t(s.taglineKey)}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    s.highlight ? "text-indigo-100" : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {t(s.descKey)}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1" aria-label={`Incluye: ${t(s.nameKey)}`}>
                  {s.features.map((fKey) => (
                    <li key={fKey} className="flex items-start gap-2 text-sm">
                      <span
                        className={`mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          s.highlight ? "bg-white/20" : "bg-indigo-100 dark:bg-indigo-900"
                        }`}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 12 12" fill="none" className={`w-3 h-3 ${s.highlight ? "text-white" : "text-indigo-600 dark:text-indigo-400"}`}>
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className={s.highlight ? "text-indigo-50" : "text-gray-700 dark:text-gray-300"}>
                        {t(fKey)}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p
                    className={`text-2xl font-bold mb-4 ${
                      s.highlight ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {s.price}
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-xl transition-colors ${
                      s.highlight
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {t("services.cta")}
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
