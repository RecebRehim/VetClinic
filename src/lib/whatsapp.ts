import { clinic } from "@/config/clinic";
import type { Locale } from "@/config/site";

export type BookingFormData = {
  name: string;
  phone: string;
  email: string;
  petType: string;
  date: string;
  service: string;
  notes: string;
};

const titles: Record<Locale, string> = {
  az: `Yeni randevu sorğusu — ${clinic.name}`,
  en: `New appointment request — ${clinic.name}`,
  ru: `Новая заявка на запись — ${clinic.name}`,
};

const labels: Record<
  Locale,
  Record<keyof BookingFormData, string>
> = {
  az: {
    name: "Ad",
    phone: "Telefon",
    email: "Email",
    petType: "Heyvan",
    date: "Tarix",
    service: "Xidmət",
    notes: "Qeyd",
  },
  en: {
    name: "Name",
    phone: "Phone",
    email: "Email",
    petType: "Pet",
    date: "Date",
    service: "Service",
    notes: "Notes",
  },
  ru: {
    name: "Имя",
    phone: "Телефон",
    email: "Email",
    petType: "Питомец",
    date: "Дата",
    service: "Услуга",
    notes: "Примечание",
  },
};

export function buildWhatsAppMessage(
  data: BookingFormData,
  locale: Locale = "az"
): string {
  const t = labels[locale];
  const lines = [
    titles[locale],
    "",
    `${t.name}: ${data.name}`,
    `${t.phone}: ${data.phone}`,
    data.email ? `${t.email}: ${data.email}` : null,
    `${t.petType}: ${data.petType}`,
    data.date ? `${t.date}: ${data.date}` : null,
    `${t.service}: ${data.service}`,
    data.notes ? `${t.notes}: ${data.notes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildWaUrl(
  data: BookingFormData,
  locale: Locale = "az",
  phone = clinic.whatsapp
): string {
  const text = encodeURIComponent(buildWhatsAppMessage(data, locale));
  return `https://wa.me/${phone}?text=${text}`;
}

export function getSimpleWaUrl(message?: string): string {
  const base = `https://wa.me/${clinic.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
