import { clinic } from "@/config/clinic";

/** Format display phone as +994 XX XXX XX XX */
export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("994")) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }
  return phone;
}

/** Format Date to DD.MM.YYYY */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return "";
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}

/** Format amount with ₼ */
export function formatPrice(amount: number, from = true): string {
  const formatted = `${amount} ${clinic.currencySymbol}`;
  return from ? `from ${formatted}` : formatted;
}

export function formatPriceAz(amount: number, from = true): string {
  const formatted = `${amount} ${clinic.currencySymbol}`;
  return from ? `${formatted}-dən` : formatted;
}
