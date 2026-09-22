import { notFound } from "next/navigation";
import { LandingPage } from "@/components/LandingPage";
import { isValidLocale } from "@/lib/i18n";

export default async function Page({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <LandingPage locale={locale} />;
}
