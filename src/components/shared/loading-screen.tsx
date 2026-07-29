"use client";

import { useEffect, useState } from "react";
import { clinic } from "@/config/clinic";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
          V
          <span className="absolute inset-0 animate-ping rounded-2xl bg-secondary/30" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {clinic.name}
        </p>
      </div>
    </div>
  );
}
