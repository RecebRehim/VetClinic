"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Camera, MessageCircle } from "lucide-react";
import { doctors, doctorSpecialty } from "@/content/doctors";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { getSimpleWaUrl } from "@/lib/whatsapp";
import { clinic } from "@/config/clinic";
import type { Locale } from "@/config/site";

export function DoctorsSection() {
  const t = useTranslations("doctors");
  const locale = useLocale() as Locale;

  return (
    <section id="doctors" className="section-padding bg-muted/40">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, i) => (
            <FadeIn key={doc.id} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 pt-16">
                    <div className="flex gap-2">
                      <a
                        href={clinic.socials.instagram}
                        className="rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
                        aria-label="Instagram"
                      >
                        <Camera className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href={getSimpleWaUrl(
                          `Salam! ${doc.name} ilə randevu istəyirəm.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/20 p-2 text-white backdrop-blur transition hover:bg-white/40"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p className="mt-1 text-sm text-primary">
                    {doctorSpecialty[doc.specialtyKey]?.[locale]}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("experience", { years: doc.years })}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="mt-4 w-full rounded-full" size="sm">
                    <a
                      href={getSimpleWaUrl(
                        `Salam! ${doc.name} ilə randevu istəyirəm / Appointment with ${doc.name}`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("book")}
                    </a>
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
