export const serviceIds = [
  "checkup",
  "vaccination",
  "sterilization",
  "castration",
  "emergency",
  "passport",
  "microchip",
  "blood",
  "ultrasound",
  "xray",
  "surgery",
  "dentistry",
  "dermatology",
  "grooming",
  "homeVisit",
  "petTaxi",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceIcons: Record<ServiceId, string> = {
  checkup: "Stethoscope",
  vaccination: "Syringe",
  sterilization: "HeartPulse",
  castration: "Scissors",
  emergency: "Ambulance",
  passport: "BookOpen",
  microchip: "Cpu",
  blood: "TestTube",
  ultrasound: "Activity",
  xray: "Bone",
  surgery: "Hospital",
  dentistry: "Smile",
  dermatology: "Hand",
  grooming: "Sparkles",
  homeVisit: "Home",
  petTaxi: "Car",
};

export const featureIds = [
  "emergency",
  "xray",
  "ultrasound",
  "lab",
  "vaccination",
  "surgery",
  "grooming",
  "homeVisit",
] as const;

export type FeatureId = (typeof featureIds)[number];
