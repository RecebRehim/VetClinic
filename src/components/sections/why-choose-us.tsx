"use client";

import { useTranslations } from "next-intl";
import {
  UserRound,
  MonitorSmartphone,
  Leaf,
  BadgeDollarSign,
  Zap,
  Siren,
} from "lucide-react";
import { whyIds } from "@/content/pricing";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const icons = {
  doctors: UserRound,
  equipment: MonitorSmartphone,
  stress: Leaf,
  pricing: BadgeDollarSign,
  diagnosis: Zap,
  support: Siren,
} as const;

export function WhyChooseUs() {
  const t = useTranslations("why");

  return (
    <section className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
          />
        </FadeIn>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyIds.map((id, i) => {
            const Icon = icons[id];
            return (
              <FadeIn key={id} delay={i * 0.05}>
                <article className="relative h-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-muted/40 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5" />
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{t(`items.${id}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(`items.${id}.desc`)}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
