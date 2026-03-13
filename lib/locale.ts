export type SiteLocale = "ja" | "en";

export function normalizeLocale(locale?: string): SiteLocale {
  return locale === "en" ? "en" : "ja";
}

export function isEnglishPath(pathname: string) {
  return pathname === "/en" || pathname.startsWith("/en/");
}

export function stripLocaleFromPath(pathname: string) {
  if (!pathname) return "/";
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

export function withLocale(pathname: string, locale: SiteLocale) {
  const normalized = stripLocaleFromPath(pathname);
  if (locale === "en") {
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }
  return normalized || "/";
}