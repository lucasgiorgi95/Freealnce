"use client";

import { Smartphone, Zap, Euro, HeadphonesIcon, Search, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import type { TranslationKey } from "@/locales";
import SectionHeader from "@/components/ui/SectionHeader";

type BenefitDef = {
  icon: LucideIcon;
  titleKey: TranslationKey;
  descKey: TranslationKey;
};

const BENEFITS: BenefitDef[] = [
  { icon: Smartphone, titleKey: "benefits.mobile.title", descKey: "benefits.mobile.desc" },
  { icon: Zap, titleKey: "benefits.fast.title", descKey: "benefits.fast.desc" },
  { icon: Euro, titleKey: "benefits.price.title", descKey: "benefits.price.desc" },
  { icon: Search, titleKey: "benefits.seo.title", descKey: "benefits.seo.desc" },
  { icon: Shield, titleKey: "benefits.transparent.title", descKey: "benefits.transparent.desc" },
  { icon: HeadphonesIcon, titleKey: "benefits.direct.title", descKey: "benefits.direct.desc" },
];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section
      id="beneficios"
      aria-labelledby="benefits-heading"
      className="bg-gray-50 dark:bg-gray-900 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("benefits.eyebrow")}
          title={t("benefits.title")}
          description={t("benefits.description")}
          className="mb-16"
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label={t("benefits.eyebrow")}
          role="list"
        >
          {BENEFITS.map((b) => (
            <li
              key={b.titleKey}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div
                className="w-11 h-11 bg-indigo-50 dark:bg-indigo-950 rounded-xl flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <b.icon size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                {t(b.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {t(b.descKey)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
