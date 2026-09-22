import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { localeToHtmlLang } from "@/lib/i18n";
import { SITE_URL } from "@/lib/constants";
import { getMessages } from "@/messages";

export function buildMetadata(locale: Locale): Metadata {
  const messages = getMessages(locale);
  const url = `${SITE_URL}/${locale}`;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        pt: `${SITE_URL}/pt`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url,
      siteName: "Foreign",
      locale: localeToHtmlLang(locale).replace("-", "_"),
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/og-image.webp`,
          width: 1200,
          height: 630,
          alt: "Foreign — Premium Automotive Care",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.title,
      description: messages.meta.description,
      images: [`${SITE_URL}/images/og-image.webp`],
    },
  };
}
