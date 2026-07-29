"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinic } from "@/config/clinic";
import { FadeIn } from "@/components/shared/fade-in";

export function HeroSection() {
  const t = useTranslations("hero");

  const badges = [
    t("badgeYears"),
    t("badgePets"),
    t("badgeEmergency"),
    t("badgeLicensed"),
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-10 pt-6 sm:pb-16 sm:pt-10 lg:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-wide grid items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <FadeIn direction="left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {t("eyebrow")}
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("title")}{" "}
            <em className="not-italic text-gradient">{t("titleAccent")}</em>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7 shadow-lg shadow-primary/25">
              <a href="#booking">
                <CalendarCheck className="mr-2 h-4 w-4" />
                {t("ctaBook")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 bg-white/60 px-7 backdrop-blur dark:bg-slate-900/50"
            >
              <a href={clinic.phoneHref}>
                <Phone className="mr-2 h-4 w-4" />
                {t("ctaCall")}
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur dark:bg-slate-900/60"
              >
                <Shield className="h-3.5 w-3.5 text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1} className="relative">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 lg:max-w-none lg:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=900&h=1100&fit=crop"
              alt="Veterinarian with dog"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="glass absolute -left-2 bottom-16 rounded-2xl px-4 py-3 sm:-left-6"
          >
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span className="text-sm font-semibold">{t("floatRating")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="glass absolute -right-2 top-10 rounded-2xl px-4 py-3 sm:-right-4"
          >
            <p className="text-xs font-medium text-muted-foreground">
              {t("floatEmergency")}
            </p>
            <a
              href={clinic.emergencyHref}
              className="mt-0.5 block text-sm font-bold text-primary"
            >
              {clinic.emergencyPhone}
            </a>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
