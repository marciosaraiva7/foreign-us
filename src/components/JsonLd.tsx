import type { Locale } from "@/lib/i18n";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  SITE_URL,
} from "@/lib/constants";
import { getMessages } from "@/messages";

export function JsonLd({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const pageUrl = `${SITE_URL}/${locale}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Foreign",
    alternateName: "FRGN",
    description: messages.jsonLd.description,
    url: pageUrl,
    telephone: PHONE_HREF.replace("tel:", ""),
    image: `${SITE_URL}/images/og-image.webp`,
    areaServed: {
      "@type": "Place",
      name: messages.jsonLd.areaServed,
      address: {
        "@type": "PostalAddress",
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    sameAs: [INSTAGRAM_URL],
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: messages.services.title,
      itemListElement: messages.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      description: messages.contact.appointment,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_DISPLAY,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "Portuguese"],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: messages.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
