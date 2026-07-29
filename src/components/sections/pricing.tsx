"use client";

import { useLocale, useTranslations } from "next-intl";
import { pricingItems } from "@/content/pricing";
import { clinic } from "@/config/clinic";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import type { Locale } from "@/config/site";

export function PricingSection() {
  const t = useTranslations("pricing");
  const locale = useLocale() as Locale;

  return (
    <section id="pricing" className="section-padding bg-muted/40">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
          {pricingItems.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.04}>
              <div className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition hover:border-primary/30">
                <span className="font-medium text-foreground">
                  {t(`items.${item.id}`)}
                </span>
                <span className="text-lg font-bold text-primary">
                  {locale === "en" ? t("from") + " " : ""}
                  {item.amount} {clinic.currencySymbol}
                  {locale !== "en" ? t("from") : ""}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
          {t("note")}
        </p>
      </div>
    </section>
  );
}
