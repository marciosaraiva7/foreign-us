import type { Locale } from "@/lib/i18n";
import type { Messages } from "./types";
import en from "./en";
import es from "./es";
import pt from "./pt";

const dictionaries: Record<Locale, Messages> = { en, es, pt };

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

export type { Messages, ServiceId } from "./types";
