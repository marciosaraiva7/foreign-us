import type { Locale } from "@/lib/i18n";
import { getMessages } from "@/messages";
import { ContactSection } from "./ContactSection";
import { FAQSection } from "./FAQSection";
import { HeroSection } from "./HeroSection";
import { JsonLd } from "./JsonLd";
import { MobileCTA } from "./MobileCTA";
import { ProcessSection } from "./ProcessSection";
import { RevealProvider } from "./RevealProvider";
import { ServicesSection } from "./ServicesSection";
import { SiteHeader } from "./SiteHeader";
import { WhyForeignSection } from "./WhyForeignSection";

export function LandingPage({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <RevealProvider>
      <JsonLd locale={locale} />
      <SiteHeader locale={locale} messages={messages} />
      <main className="pb-24 md:pb-0">
        <HeroSection messages={messages} />
        <ServicesSection messages={messages} />
        <ProcessSection messages={messages} />
        <WhyForeignSection messages={messages} />
        <FAQSection messages={messages} />
        <ContactSection messages={messages} />
      </main>
      <MobileCTA messages={messages} />
    </RevealProvider>
  );
}
