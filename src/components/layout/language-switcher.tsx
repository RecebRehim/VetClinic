"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/config/site";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = {
  az: "AZ",
  en: "EN",
  ru: "RU",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border/80 bg-muted/60 p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold transition",
            locale === l
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-current={locale === l ? "true" : undefined}
        >
          {labels[l as Locale]}
        </button>
      ))}
    </div>
  );
}
