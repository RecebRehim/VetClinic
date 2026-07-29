"use client";

import { useTranslations } from "next-intl";
import {
  Ambulance,
  Bone,
  Activity,
  FlaskConical,
  Syringe,
  Hospital,
  Sparkles,
  Home,
} from "lucide-react";
import { featureIds } from "@/content/services";
import { FadeIn } from "@/components/shared/fade-in";

const icons = {
  emergency: Ambulance,
  xray: Bone,
  ultrasound: Activity,
  lab: FlaskConical,
  vaccination: Syringe,
  surgery: Hospital,
  grooming: Sparkles,
  homeVisit: Home,
} as const;

export function FeatureBar() {
  const t = useTranslations("features");

  return (
    <section className="border-y border-border/70 bg-white/60 py-6 backdrop-blur dark:bg-slate-900/40">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <ul className="flex gap-3 overflow-x-auto pb-1 scrollbar-none sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-8">
            {featureIds.map((id) => {
              const Icon = icons[id];
              return (
                <li
                  key={id}
                  className="flex min-w-[120px] flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center transition hover:bg-muted/80 sm:min-w-0"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    {t(id)}
                  </span>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
