import { notFound } from "next/navigation";
import { isValidLocale, locales } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  return buildMetadata(locale);
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return children;
}
