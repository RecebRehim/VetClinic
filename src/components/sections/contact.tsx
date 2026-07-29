"use client";

import { useTranslations } from "next-intl";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  Siren,
} from "lucide-react";
import { clinic } from "@/config/clinic";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const t = useTranslations("contact");

  const rows = [
    {
      icon: Phone,
      label: t("phone"),
      value: clinic.phone,
      href: clinic.phoneHref,
    },
    {
      icon: Siren,
      label: t("emergency"),
      value: clinic.emergencyPhone,
      href: clinic.emergencyHref,
      highlight: true,
    },
    {
      icon: MapPin,
      label: t("address"),
      value: clinic.address,
      href: clinic.mapsLink,
    },
    {
      icon: Clock,
      label: t("hours"),
      value: t("hoursValue"),
    },
    {
      icon: Mail,
      label: t("email"),
      value: clinic.email,
      href: `mailto:${clinic.email}`,
    },
  ] as const;

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="space-y-3">
              {rows.map((row) => {
                const Icon = row.icon;
                const content = (
                  <div
                    className={`flex items-start gap-4 rounded-2xl border p-4 transition ${
                      "highlight" in row && row.highlight
                        ? "border-accent/40 bg-accent/10"
                        : "border-border bg-card hover:border-primary/30"
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="mt-0.5 font-semibold text-foreground">
                        {row.value}
                      </p>
                    </div>
                  </div>
                );

                return "href" in row && row.href ? (
                  <a key={row.label} href={row.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild className="rounded-full">
                  <a
                    href={clinic.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {t("whatsapp")}
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={clinic.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {t("maps")}
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={clinic.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("instagram")}
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <iframe
                title="VetCare map"
                src={clinic.mapsEmbedUrl}
                className="h-[380px] w-full border-0 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
