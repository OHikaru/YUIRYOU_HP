import Link from "next/link";

import { chromeCopy } from "@/content/page-copy";
import { type SiteLocale, withLocale } from "@/lib/locale";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items, locale = "ja" }: { items: BreadcrumbItem[]; locale?: SiteLocale }) {
  const copy = chromeCopy[locale];

  return (
    <nav aria-label={copy.breadcrumbAriaLabel} className="breadcrumb">
      <ol>
        <li>
          <Link href={withLocale("/", locale)}>{copy.homeLabel}</Link>
        </li>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
