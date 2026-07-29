"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/shared/fade-in";
import { buildWaUrl, type BookingFormData } from "@/lib/whatsapp";
import { formatDate } from "@/lib/format";
import type { Locale } from "@/config/site";

const serviceKeys = [
  "consultation",
  "vaccination",
  "surgery",
  "diagnostics",
  "emergency",
  "other",
] as const;

export function BookingSection() {
  const t = useTranslations("booking");
  const locale = useLocale() as Locale;
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    petType: "",
    date: "",
    service: "",
    notes: "",
  });

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = t("required");
    if (!form.phone.trim()) nextErrors.phone = t("required");
    if (!form.petType) nextErrors.petType = t("required");
    if (!form.service) nextErrors.service = t("required");

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const petLabel =
      form.petType === "dog"
        ? t("petDog")
        : form.petType === "cat"
          ? t("petCat")
          : t("petOther");

    const serviceLabel = t(
      `serviceOptions.${form.service as (typeof serviceKeys)[number]}`
    );

    const dateFormatted = form.date
      ? formatDate(form.date)
      : "";

    const url = buildWaUrl(
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        petType: petLabel,
        date: dateFormatted,
        service: serviceLabel,
        notes: form.notes.trim(),
      },
      locale
    );

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-teal-800 to-slate-900" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,rgba(20,184,166,0.35),transparent_45%)]" />

      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-200">
              {t("eyebrow")}
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("title")}{" "}
              <em className="not-italic text-teal-200">{t("titleAccent")}</em>
            </h2>
            <p className="mt-4 max-w-md text-base text-teal-50/80">
              {t("subtitle")}
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl backdrop-blur dark:bg-slate-900/95 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">{t("name")}</Label>
                  <Input
                    id="name"
                    className="mt-1.5"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input
                    id="phone"
                    className="mt-1.5"
                    placeholder="+994 XX XXX XX XX"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                  {errors.phone ? (
                    <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1.5"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label>{t("petType")}</Label>
                  <Select
                    value={form.petType}
                    onValueChange={(v) => update("petType", v ?? "")}
                  >
                    <SelectTrigger className="mt-1.5 w-full">
                      <SelectValue placeholder={t("petType")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">{t("petDog")}</SelectItem>
                      <SelectItem value="cat">{t("petCat")}</SelectItem>
                      <SelectItem value="other">{t("petOther")}</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.petType ? (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.petType}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="date">{t("date")}</Label>
                  <Input
                    id="date"
                    type="date"
                    className="mt-1.5"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label>{t("service")}</Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => update("service", v ?? "")}
                  >
                    <SelectTrigger className="mt-1.5 w-full">
                      <SelectValue placeholder={t("service")} />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceKeys.map((key) => (
                        <SelectItem key={key} value={key}>
                          {t(`serviceOptions.${key}`)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service ? (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.service}
                    </p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes">{t("notes")}</Label>
                  <Textarea
                    id="notes"
                    className="mt-1.5 min-h-[90px]"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full rounded-full text-base shadow-lg shadow-primary/25"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {t("submit")}
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {t("privacy")}
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
