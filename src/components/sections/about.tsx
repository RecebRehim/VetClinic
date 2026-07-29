"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Award, Microscope, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { clinic } from "@/config/clinic";
import { AnimatedCounter } from "@/components/shared/animated-counter";

export function AboutSection() {
  const t = useTranslations("about");

  const values = [
    { key: "licensed", icon: Award },
    { key: "equipped", icon: Microscope },
    { key: "friendly", icon: HeartHandshake },
  ] as const;

  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&h=1000&fit=crop"
                alt="Modern veterinary clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 grid grid-cols-2 gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:right-6">
              <div>
                <p className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={clinic.stats.years} suffix="+" />
                </p>
                <p className="text-xs text-muted-foreground">Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">
                  <AnimatedCounter
                    value={clinic.stats.pets / 1000}
                    suffix="K+"
                    decimals={0}
                  />
                </p>
                <p className="text-xs text-muted-foreground">Pets</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              titleAccent={t("titleAccent")}
              align="left"
              className="mb-6"
            />
            <p className="text-base leading-relaxed text-muted-foreground">
              {t("story")}
            </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-foreground">
              {t("mission")}
            </p>

            <div className="mt-8 space-y-4">
              {values.map(({ key, icon: Icon }, i) => (
                <div
                  key={key}
                  className="flex gap-4 rounded-2xl border border-border/80 bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      0{i + 1} / 03
                    </p>
                    <h3 className="mt-1 font-semibold text-foreground">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`values.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
