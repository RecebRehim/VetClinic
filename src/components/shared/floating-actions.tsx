"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { clinic } from "@/config/clinic";
import { getSimpleWaUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function FloatingActions() {
  const t = useTranslations("cta");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-6">
      <a
        href={getSimpleWaUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
        aria-label={t("whatsapp")}
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href={clinic.phoneHref}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition hover:scale-105"
        aria-label={t("call")}
      >
        <Phone className="h-5 w-5" />
      </a>
      {showTop ? (
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="pointer-events-auto h-12 w-12 rounded-full shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t("backToTop")}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      ) : null}
    </div>
  );
}

export function StickyMobileCTA() {
  const t = useTranslations("cta");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-background/95 p-3 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={clinic.phoneHref}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-muted px-2 py-3 text-sm font-semibold text-foreground"
        >
          <Phone className="h-4 w-4" />
          {t("call")}
        </a>
        <a
          href={getSimpleWaUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-2 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" />
          {t("whatsapp")}
        </a>
        <a
          href="#booking"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-primary px-2 py-3 text-sm font-semibold text-primary-foreground"
        >
          {t("book")}
        </a>
      </div>
    </div>
  );
}
