"use client";

import { useTranslations } from "next-intl";
import { clinic } from "@/config/clinic";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeIn } from "@/components/shared/fade-in";

export function StatsSection() {
  const t = useTranslations("stats");

  const items = [
    {
      value: clinic.stats.years,
      suffix: "+",
      label: t("years"),
      decimals: 0,
    },
    {
      value: 25,
      suffix: "K+",
      label: t("pets"),
      decimals: 0,
    },
    {
      value: clinic.stats.rating,
      suffix: "★",
      label: t("rating"),
      decimals: 1,
    },
    {
      value: clinic.stats.satisfaction,
      suffix: "%",
      label: t("satisfaction"),
      decimals: 0,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-teal-700 to-secondary" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_50%)]" />

      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.08}>
              <div className="text-center text-white">
                <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    decimals={item.decimals}
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  {item.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
