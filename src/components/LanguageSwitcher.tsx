"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n";

const labels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    document.cookie = `${LOCALE_COOKIE}=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    const nextPath = pathname.replace(/^\/(en|es|pt)/, `/${nextLocale}`);
    router.replace(nextPath);
  }

  return (
    <div
      className="flex items-center gap-0.5 rounded-sm border border-white/10 bg-brand-black/60 p-0.5 backdrop-blur-md"
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => {
        const isActive = item === locale;
        return (
          <button
            key={item}
            type="button"
            onClick={() => switchLocale(item)}
            aria-current={isActive ? "true" : undefined}
            className={`min-h-11 min-w-11 px-2.5 text-xs font-semibold tracking-[0.18em] transition-colors ${
              isActive
                ? "bg-brand-gold text-brand-black"
                : "text-brand-cream/70 hover:text-brand-cream"
            }`}
          >
            {labels[item]}
          </button>
        );
      })}
    </div>
  );
}
