import es from "./es";
import en from "./en";
import pt from "./pt";

export type Locale = "es" | "en" | "pt";
export type TranslationKey = keyof typeof es;

// Use a looser type so en/pt values don't need to match es literal types
export const locales: Record<Locale, Record<TranslationKey, string>> = { es, en, pt };

export const LOCALE_LABELS: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
};

export const LOCALE_NAMES: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
};

export const DEFAULT_LOCALE: Locale = "es";
