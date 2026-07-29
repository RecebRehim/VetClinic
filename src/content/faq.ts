export const faqIds = [
  "hours",
  "walkin",
  "home",
  "passport",
  "animals",
  "payment",
  "emergency",
  "price",
  "english",
  "parking",
] as const;

export type FaqId = (typeof faqIds)[number];
