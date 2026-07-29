"use client";

import { useTranslations } from "next-intl";
import { faqIds } from "@/content/faq";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/shared/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="section-padding bg-muted/40">
      <div className="container-wide max-w-3xl">
        <FadeIn>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            titleAccent={t("titleAccent")}
            subtitle={t("subtitle")}
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqIds.map((id) => (
              <AccordionItem
                key={id}
                value={id}
                className="rounded-2xl border border-border bg-card px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {t(`items.${id}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(`items.${id}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
