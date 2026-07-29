export const pricingItems = [
  { id: "consultation", amount: 20 },
  { id: "vaccination", amount: 45 },
  { id: "blood", amount: 50 },
  { id: "ultrasound", amount: 50 },
  { id: "xray", amount: 40 },
  { id: "neuter", amount: 85 },
  { id: "dental", amount: 100 },
] as const;

export const whyIds = [
  "doctors",
  "equipment",
  "stress",
  "pricing",
  "diagnosis",
  "support",
] as const;

export const processIds = ["book", "visit", "diagnosis", "treatment"] as const;
