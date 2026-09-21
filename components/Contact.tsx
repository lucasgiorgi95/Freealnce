"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { SITE, buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  const { t } = useLanguage();

  const whatsappPrimaryUrl = buildWhatsAppUrl(t("contact.whatsapp.message"));
  const whatsappBudgetUrl = buildWhatsAppUrl(t("contact.whatsapp.budget_message"));

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="bg-gray-50 dark:bg-gray-900 py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.subtitle")}
          className="mb-14"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* ── WhatsApp main card ── */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-50 dark:bg-green-950 rounded-2xl flex items-center justify-center mb-6">
              <WhatsAppIcon size={36} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {t("contact.response")}
            </p>

            <div className="flex flex-col gap-3 w-full">
              <a
                href={whatsappPrimaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-5 rounded-xl transition-colors w-full focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                aria-label={`${t("contact.whatsapp.primary")} (abre en nueva pestaña)`}
              >
                <WhatsAppIcon size={18} />
                {t("contact.whatsapp.primary")}
              </a>
              <a
                href={whatsappBudgetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-green-600 dark:text-green-400 font-semibold py-3.5 px-5 rounded-xl border-2 border-green-200 dark:border-green-700 transition-colors w-full focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                aria-label={`${t("contact.whatsapp.budget")} (abre en nueva pestaña)`}
              >
                <WhatsAppIcon size={18} />
                {t("contact.whatsapp.budget")}
              </a>
            </div>
          </div>

          {/* ── Side info ── */}
          <div className="flex flex-col gap-5">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
                {t("contact.also")}
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <Mail size={17} className="text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
                    <p className="text-sm font-medium">{SITE.email}</p>
                  </div>
                </a>

                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Lucas Giorgi (abre en nueva pestaña)"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <GithubIcon size={17} className="text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">GitHub</p>
                    <p className="text-sm font-medium">{SITE.githubHandle}</p>
                  </div>
                </a>

                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Lucas Giorgi (abre en nueva pestaña)"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-gray-50 dark:bg-gray-700 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950 rounded-xl flex items-center justify-center transition-colors shrink-0">
                    <LinkedinIcon size={17} className="text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-500">LinkedIn</p>
                    <p className="text-sm font-medium">{SITE.linkedinHandle}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-950 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 text-sm">
                {t("contact.note.title")}
              </h3>
              <p className="text-indigo-700 dark:text-indigo-300 text-sm leading-relaxed">
                {t("contact.note.desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
