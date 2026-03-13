"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { isEnglishPath } from "@/lib/locale";

export function HtmlLangManager() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname && isEnglishPath(pathname) ? "en" : "ja";
  }, [pathname]);

  return null;
}