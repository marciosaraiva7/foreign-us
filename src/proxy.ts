import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  detectLocale,
  isValidLocale,
  LOCALE_COOKIE,
  locales,
} from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    if (locale) {
      response.headers.set("x-locale", locale);
    }
    return response;
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    cookieLocale && isValidLocale(cookieLocale)
      ? cookieLocale
      : detectLocale(request.headers.get("accept-language"));

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico|.*\\..*).*)"],
};
