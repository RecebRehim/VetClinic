"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Camera, Share2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { clinic } from "@/config/clinic";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tServices = useTranslations("services.items");
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success(t("newsletterSuccess"));
    setEmail("");
  };

  return (
    <footer className="border-t border-border bg-slate-950 text-slate-200">
      <div className="container-wide section-padding !pb-28 md:!pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
                V
              </span>
              <div>
                <p className="font-bold text-white">{clinic.name}</p>
                <p className="text-xs text-slate-400">
                  {clinic.city} · {clinic.foundedYear}
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {t("desc")}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={clinic.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-2 transition hover:border-primary hover:text-primary"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={clinic.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-2 transition hover:border-primary hover:text-primary"
                aria-label="Facebook"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href={clinic.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 p-2 transition hover:border-primary hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("clinic")}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                ["#about", tNav("about")],
                ["#doctors", tNav("doctors")],
                ["#faq", tNav("faq")],
                ["#contact", tNav("contact")],
                ["#booking", t("blog")],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("services")}
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {(
                [
                  "emergency",
                  "surgery",
                  "vaccination",
                  "homeVisit",
                ] as const
              ).map((id) => (
                <li key={id}>
                  <a href="#services" className="transition hover:text-primary">
                    {tServices(`${id}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              {t("newsletter")}
            </h3>
            <form onSubmit={onSubscribe} className="flex flex-col gap-2">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("newsletterPlaceholder")}
                className="border-slate-700 bg-slate-900 text-white placeholder:text-slate-500"
              />
              <Button type="submit" className="rounded-full">
                {t("newsletterCta")}
              </Button>
            </form>
            <div className="mt-6 space-y-1 text-sm text-slate-400">
              <p>
                <a href={clinic.phoneHref} className="hover:text-primary">
                  {clinic.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${clinic.email}`}
                  className="hover:text-primary"
                >
                  {clinic.email}
                </a>
              </p>
              <p>{clinic.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {clinic.fullName}. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
