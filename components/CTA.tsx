"use client";

import { ArrowRight } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export default function CTA() {
  const { t } = useLanguage();

  const whatsappUrl = buildWhatsAppUrl(t("cta.whatsapp.message"));

  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-indigo-600 dark:bg-indigo-700 py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4"
        >
          {t("cta.title")}
        </h2>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-10">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 font-bold px-7 py-4 rounded-xl transition-colors text-base shadow-lg"
          >
            <WhatsAppIcon size={18} />
            {t("cta.primary")}
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-colors text-base"
          >
            {t("cta.secondary")}
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
        <p className="mt-6 text-indigo-200 text-sm">
          {t("cta.note")}
        </p>
      </div>
    </section>
  );
}
