"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { gallery } from "@/content/gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

export function GallerySection() {
  const t = useTranslations("gallery");

  return (
    <section id="gallery" className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04} className="mb-4 break-inside-avoid">
              <div className="group relative overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={item.span === "tall" ? 1000 : 600}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-primary/0 transition group-hover:bg-primary/10" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
