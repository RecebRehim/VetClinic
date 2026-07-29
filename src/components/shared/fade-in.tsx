"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: Props) {
  const reduce = useReducedMotion();
  const offset = reduce ? 0 : 24;
  const initial =
    direction === "none"
      ? { opacity: 0 }
      : direction === "up"
        ? { opacity: 0, y: offset }
        : direction === "down"
          ? { opacity: 0, y: -offset }
          : direction === "left"
            ? { opacity: 0, x: offset }
            : { opacity: 0, x: -offset };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
