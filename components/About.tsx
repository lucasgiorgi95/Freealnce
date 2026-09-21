"use client";

import { MapPin, Code2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { technologies } from "@/lib/data/technologies";

const featuredTechs = ["React", "Next.js", "TypeScript", "Node.js"];

export default function About() {
  const { t } = useLanguage();

  // Use distinct names to avoid shadowing the `t` translation function
  const highlightedTechs = technologies.filter((tech) => featuredTechs.includes(tech.name));
  const restTechs = technologies.filter((tech) => !featuredTechs.includes(tech.name));

  const whatsappUrl = buildWhatsAppUrl(t("contact.whatsapp.message"));

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="bg-white dark:bg-gray-950 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar / Visual */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900 dark:to-indigo-950 border border-indigo-100 dark:border-indigo-800 flex items-center justify-center shadow-lg"
                aria-label="Foto de Lucas Giorgi (placeholder)"
              >
                <span className="text-6xl sm:text-7xl font-bold text-indigo-300 dark:text-indigo-600 select-none" aria-hidden="true">
                  LG
                </span>
              </div>

              {/* Location badge */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-md rounded-xl px-3 py-1.5 flex items-center gap-2">
                <MapPin size={13} className="text-indigo-500" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {t("about.location")}
                </span>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-3 -left-3 bg-indigo-600 rounded-xl px-3 py-1.5 shadow-md">
                <span className="text-white text-sm font-bold">{t("about.experience_badge")}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
              {t("about.eyebrow")}
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              {t("about.title")}
            </h2>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>
                {t("about.p3").split("React").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part}
                      <strong className="text-gray-900 dark:text-white font-medium">React</strong>
                    </span>
                  ) : part
                )}
              </p>
              <p>{t("about.p4")}</p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={15} className="text-indigo-500" aria-hidden="true" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {t("about.tech_label")}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {[...highlightedTechs, ...restTechs].map((tech) => (
                  <span
                    key={tech.name}
                    className="text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg font-medium"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <WhatsAppIcon size={16} />
              {t("about.cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
