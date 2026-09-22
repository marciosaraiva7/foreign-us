"use client";

import { locales, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <div
      className="flex items-center gap-0.5 rounded-sm border border-white/10 bg-brand-black/60 p-0.5 backdrop-blur-md"
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <a
            key={item}
            href={`/${item}`}
            aria-current={isActive ? "true" : undefined}
            onClick={(event) => {
              if (isActive) return;
              event.preventDefault();
              window.location.assign(`/${item}`);
            }}
            className={`locale-link flex min-h-11 min-w-11 items-center justify-center px-2.5 text-xs font-semibold tracking-[0.18em] ${
              isActive
                ? "bg-brand-gold text-brand-black"
                : "text-brand-cream/70 hover:text-brand-cream"
            }`}
          >
            {labels[item]}
          </a>
        );
      })}
    </div>
  );
}
