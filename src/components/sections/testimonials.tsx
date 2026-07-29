"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "@/content/testimonials";
import { clinic } from "@/config/clinic";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/config/site";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale() as Locale;

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-36">
                  <Image
                    src={item.petImage}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    “{item.quote[locale]}”
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.role[locale]}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <a
              href={clinic.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("googleCta")}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
