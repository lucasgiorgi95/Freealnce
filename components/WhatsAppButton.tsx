"use client";

import { buildWhatsAppUrl, SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

/**
 * Floating WhatsApp button.
 * Set SITE.whatsapp in lib/constants.ts to your real number to enable.
 * Shows a label on desktop, icon-only on mobile.
 */
export default function WhatsAppButton() {
  const { t } = useLanguage();

  // Show placeholder button in dev mode even without number configured
  const hasNumber = SITE.whatsapp !== "WHATSAPP_NUMBER_HERE" && SITE.whatsapp !== "";
  if (!hasNumber) return null;

  const url = buildWhatsAppUrl(t("whatsapp.float.message"));

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp.float.label")}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 pr-4 pl-3.5 py-3 sm:py-3"
    >
      <WhatsAppIcon size={22} className="shrink-0" />

      {/* Label: visible on md+, hidden on small screens */}
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        {t("whatsapp.float.text")}
      </span>
    </a>
  );
}
