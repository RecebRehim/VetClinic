"use client";

import { useTranslations } from "next-intl";

type Props = {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "center",
  className = "",
}: Props) {
  return (
    <div
      className={`mb-12 max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}{" "}
        {titleAccent ? (
          <em className="not-italic text-gradient">{titleAccent}</em>
        ) : null}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/** Hook-friendly helper when using message namespaces */
export function useSectionCopy(ns: string) {
  return useTranslations(ns);
}
