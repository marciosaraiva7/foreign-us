"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Messages } from "@/messages";
import { useActiveSection } from "@/hooks/useActiveSection";
import { BrandMark } from "./BrandMark";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_ITEMS = [
  { id: "services", key: "services" as const },
  { id: "process", key: "process" as const },
  { id: "why", key: "why" as const },
  { id: "faq", key: "faq" as const },
  { id: "contact", key: "contact" as const },
];

export function SiteHeader({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Messages;
}) {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-brand-black/85 py-2 backdrop-blur-lg"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 pt-[max(0.25rem,env(safe-area-inset-top))] sm:px-8">
        <a href="#" aria-label="Foreign home" className="shrink-0">
          <BrandMark size="sm" />
        </a>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-display relative px-3 py-2 text-step--1 font-bold tracking-[0.14em] transition-colors ${
                  isActive ? "text-brand-gold" : "text-brand-cream/70 hover:text-brand-cream"
                }`}
              >
                {messages.nav[item.key]}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-brand-gold" />
                )}
              </a>
            );
          })}
        </nav>

        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}
