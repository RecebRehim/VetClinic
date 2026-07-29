"use client";

import { useTranslations } from "next-intl";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Scissors,
  Ambulance,
  BookOpen,
  Cpu,
  TestTube,
  Activity,
  Bone,
  Hospital,
  Smile,
  Hand,
  Sparkles,
  Home,
  Car,
  type LucideIcon,
} from "lucide-react";
import { serviceIds, type ServiceId } from "@/content/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";

const icons: Record<ServiceId, LucideIcon> = {
  checkup: Stethoscope,
  vaccination: Syringe,
  sterilization: HeartPulse,
  castration: Scissors,
  emergency: Ambulance,
  passport: BookOpen,
  microchip: Cpu,
  blood: TestTube,
  ultrasound: Activity,
  xray: Bone,
  surgery: Hospital,
  dentistry: Smile,
  dermatology: Hand,
  grooming: Sparkles,
  homeVisit: Home,
  petTaxi: Car,
};

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding bg-muted/40">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceIds.map((id, index) => {
            const Icon = icons[id];
            return (
              <FadeIn key={id} delay={Math.min(index * 0.04, 0.3)}>
                <article className="group h-full rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {t(`items.${id}.title`)}
                  </h3>
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
