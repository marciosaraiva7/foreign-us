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
    if (locale && isValidLocale(locale)) {
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("x-locale", locale);
      const localizedResponse = NextResponse.next({ request: { headers: requestHeaders } });
      localizedResponse.cookies.set(LOCALE_COOKIE, locale, {
        path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax",
      });
      return localizedResponse;
    }
    return NextResponse.next();
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
