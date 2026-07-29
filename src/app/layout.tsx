import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

/** Root layout required by Next.js — html/body live in [locale]/layout */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
