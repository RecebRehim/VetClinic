"use client";

import { useTranslations } from "next-intl";
import { CalendarCheck, Building2, Microscope, HeartPulse } from "lucide-react";
import { processIds } from "@/content/pricing";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const icons = {
  book: CalendarCheck,
  visit: Building2,
  diagnosis: Microscope,
  treatment: HeartPulse,
} as const;

export function ProcessSection() {
  const t = useTranslations("process");

  return (
    <section className="section-padding bg-muted/40">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
          />
        </FadeIn>

        <ol className="relative grid gap-6 md:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {processIds.map((id, i) => {
            const Icon = icons[id];
            return (
              <FadeIn key={id} delay={i * 0.08}>
                <li className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                    <Icon className="h-6 w-6" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="text-lg font-semibold">
                    {t(`steps.${id}.title`)}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t(`steps.${id}.desc`)}
                  </p>
                </li>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
