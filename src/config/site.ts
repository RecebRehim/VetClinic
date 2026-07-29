import { clinic } from "./clinic";

export const siteConfig = {
  get url() {
    return (
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "http://localhost:3000"
    );
  },
  name: clinic.fullName,
  locales: ["az", "en", "ru"] as const,
  defaultLocale: "az" as const,
};

export type Locale = (typeof siteConfig.locales)[number];
