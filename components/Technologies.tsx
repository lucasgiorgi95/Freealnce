"use client";

import { technologies } from "@/lib/data/technologies";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Technologies() {
  const { t } = useLanguage();

  return (
    <section
      id="tecnologias"
      aria-labelledby="tech-heading"
      className="bg-gray-50 dark:bg-gray-900 py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("tech.eyebrow")}
          title={t("tech.title")}
          description={t("tech.description")}
          className="mb-12"
        />

        <ul
          className="flex flex-wrap justify-center gap-3"
          aria-label={t("tech.title")}
          role="list"
        >
          {technologies.map((tech) => (
            <li
              key={tech.name}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 rounded-xl px-5 py-3 transition-all duration-200 cursor-default"
            >
              <p className="font-semibold text-gray-900 dark:text-white text-sm group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                {tech.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 mt-0.5 transition-colors">
                {tech.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
