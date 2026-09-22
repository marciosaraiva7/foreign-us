import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  defaultLocale,
  isValidLocale,
  localeToHtmlLang,
  type Locale,
} from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://foreign-us.com"
  ),
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headersList = await headers();
  const headerLocale = headersList.get("x-locale");
  const locale: Locale =
    headerLocale && isValidLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={localeToHtmlLang(locale)} className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-reveal');",
          }}
        />
      </head>
      <body className="min-h-full bg-brand-black text-brand-cream">
        {children}
      </body>
    </html>
  );
}
