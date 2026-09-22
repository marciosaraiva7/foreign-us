export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase() ?? "");

  for (const language of languages) {
    if (language.startsWith("pt")) return "pt";
    if (language.startsWith("es")) return "es";
  }

  return defaultLocale;
}

export function localeToHtmlLang(locale: Locale): string {
  if (locale === "pt") return "pt-BR";
  if (locale === "es") return "es-US";
  return "en-US";
}
