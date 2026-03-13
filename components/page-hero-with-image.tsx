import type { ReactNode } from "react";
import Image from "next/image";

import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";

type PageHeroWithImageProps = {
  items: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  children?: ReactNode;
  narrowBody?: boolean;
  bodyClassName?: string;
  heroClassName?: string;
  imagePriority?: boolean;
};

export function PageHeroWithImage({
  items,
  eyebrow,
  title,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  children,
  narrowBody = false,
  bodyClassName,
  heroClassName,
  imagePriority = false,
}: PageHeroWithImageProps) {
  return (
    <div className={`page-hero page-hero--compact ${heroClassName ?? ""}`.trim()}>
      <div className="shell">
        <div className="page-hero__layout">
          <div className={`page-hero__body ${narrowBody ? "page-hero__body--narrow" : ""} ${bodyClassName ?? ""}`.trim()}>
            <Breadcrumbs items={items} />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {children}
          </div>
          <div className="page-hero__media">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="page-hero__image"
              priority={imagePriority}
            />
          </div>
        </div>
      </div>
    </div>
  );
}