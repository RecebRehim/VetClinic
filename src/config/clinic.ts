/**
 * Single source of truth for clinic branding & contact.
 * Customize a new client in under 15 minutes by editing this file.
 */
export const clinic = {
  name: "VetCare",
  fullName: "VetCare · Bakı",
  taglineKey: "clinic.tagline",
  logo: "/images/logo.svg",
  city: "Bakı",
  country: "Azərbaycan",

  phone: "+994 50 355 17 17",
  phoneHref: "tel:+994503551717",
  emergencyPhone: "+994 50 355 17 17",
  emergencyHref: "tel:+994503551717",
  /** Digits only for wa.me */
  whatsapp: "994503551717",

  email: "info@vetcare.az",
  address: "35 Badamdar yolu, Bakı",
  addressEn: "35 Badamdar road, Baku",

  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.5!2d49.82!3d40.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzEyLjAiTiA0OcKwNDknMTIuMCJF!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz",
  mapsLink: "https://maps.google.com/?q=35+Badamdar+road+Baku",

  googleReviewsUrl: "https://g.page/r/PLACEHOLDER",

  hours: {
    weekdays: "10:00–18:00",
    saturday: "10:00–18:00",
    sunday: "closed",
  },

  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    whatsapp: "https://wa.me/994503551717",
  },

  stats: {
    years: 15,
    pets: 25000,
    rating: 4.9,
    satisfaction: 98,
    reviews: 392,
  },

  currency: "AZN" as const,
  currencySymbol: "₼",

  foundedYear: 2009,
} as const;

export type ClinicConfig = typeof clinic;
