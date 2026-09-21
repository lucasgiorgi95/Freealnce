"use client";

import { Check, ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/locales";
import SectionHeader from "@/components/ui/SectionHeader";

type PlanDef = {
  nameKey: TranslationKey;
  price: string;
  taglineKey: TranslationKey;
  descKey: TranslationKey;
  features: TranslationKey[];
  ctaKey: TranslationKey;
  whatsappMsgKey: TranslationKey;
  highlight: boolean;
};

const PLANS: PlanDef[] = [
  {
    nameKey: "pricing.start.name",
    price: "€149",
    taglineKey: "pricing.start.tagline",
    descKey: "pricing.start.description",
    features: [
      "pricing.start.f1",
      "pricing.start.f2",
      "pricing.start.f3",
      "pricing.start.f4",
      "pricing.start.f5",
      "pricing.start.f6",
      "pricing.start.f7",
      "pricing.start.f8",
    ],
    ctaKey: "pricing.start.cta",
    whatsappMsgKey: "whatsapp.plan.start",
    highlight: false,
  },
  {
    nameKey: "pricing.business.name",
    price: "€249",
    taglineKey: "pricing.business.tagline",
    descKey: "pricing.business.description",
    features: [
      "pricing.business.f1",
      "pricing.business.f2",
      "pricing.business.f3",
      "pricing.business.f4",
      "pricing.business.f5",
      "pricing.business.f6",
      "pricing.business.f7",
      "pricing.business.f8",
      "pricing.business.f9",
    ],
    ctaKey: "pricing.business.cta",
    whatsappMsgKey: "whatsapp.plan.business",
    highlight: true,
  },
  {
    nameKey: "pricing.pro.name",
    price: "€399",
    taglineKey: "pricing.pro.tagline",
    descKey: "pricing.pro.description",
    features: [
      "pricing.pro.f1",
      "pricing.pro.f2",
      "pricing.pro.f3",
      "pricing.pro.f4",
      "pricing.pro.f5",
      "pricing.pro.f6",
      "pricing.pro.f7",
      "pricing.pro.f8",
    ],
    ctaKey: "pricing.pro.cta",
    whatsappMsgKey: "whatsapp.plan.pro",
    highlight: false,
  },
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      id="precios"
      aria-labelledby="pricing-heading"
      className="bg-white dark:bg-gray-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          description={t("pricing.description")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 items-stretch">
          {PLANS.map((plan) => {
            const url = buildWhatsAppUrl(t(plan.whatsappMsgKey));
            return (
              <div
                key={plan.nameKey}
                className={`relative rounded-2xl p-8 border flex flex-col transition-all duration-200 ${
                  plan.highlight
                    ? "border-indigo-600 bg-indigo-600 shadow-2xl shadow-indigo-200 dark:shadow-indigo-900/40 md:-translate-y-1"
                    : "border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
                      {t("pricing.most_popular")}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      plan.highlight ? "text-indigo-200" : "text-indigo-600 dark:text-indigo-400"
                    }`}
                  >
                    {t(plan.nameKey)}
                  </span>
                  <p
                    className={`text-4xl font-bold mt-1 mb-1 ${
                      plan.highlight ? "text-white" : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`font-semibold text-base mb-2 ${
                      plan.highlight ? "text-indigo-100" : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {t(plan.taglineKey)}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      plan.highlight ? "text-indigo-200" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {t(plan.descKey)}
                  </p>
                </div>

                <ul
                  className="space-y-3 flex-1 mb-8"
                  aria-label={`Características del plan ${t(plan.nameKey)}`}
                >
                  {plan.features.map((fKey) => (
                    <li key={fKey} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.highlight ? "text-indigo-200" : "text-indigo-500 dark:text-indigo-400"
                        }`}
                        aria-hidden="true"
                      />
                      <span
                        className={
                          plan.highlight ? "text-indigo-100" : "text-gray-700 dark:text-gray-300"
                        }
                      >
                        {t(fKey)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors ${
                    plan.highlight
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {t(plan.ctaKey)}
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <p className="bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            <span className="text-gray-900 dark:text-white font-semibold">{t("pricing.note1_label")}</span>{" "}
            {t("pricing.note1")}
          </p>
          <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-xl p-4 text-sm text-center">
            <p className="text-indigo-900 dark:text-indigo-100 font-semibold">
              {t("pricing.maintenance_title")}{" "}
              <span className="text-indigo-600 dark:text-indigo-400 text-base">€25/mes</span>
            </p>
            <p className="text-indigo-700 dark:text-indigo-300 mt-1 text-xs">
              {t("pricing.maintenance_desc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
