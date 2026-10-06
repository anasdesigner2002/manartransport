import { contact } from "@/data/siteData";

export type BookingData = {
  fullName: string;
  email: string;
  whatsapp: string;
  travelDate: string;
  tripDetails: string;
  vehicleName?: string;
  notes?: string;
};

const normalizeWhatsAppNumber = (phoneNumber: string) => {
  const digits = phoneNumber.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("92")) return digits;
  return digits.startsWith("0") ? `92${digits.slice(1)}` : digits;
};

const waNumber = normalizeWhatsAppNumber(contact.whatsapp);

export function buildWhatsAppMessage(data: BookingData) {
  return [
    "New Booking Request - Manar Transport",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Travel Date: ${data.travelDate}`,
    `Vehicle: ${data.vehicleName?.trim() || "No specific vehicle selected"}`,
    `Trip Details: ${data.tripDetails}`,
    `Additional Notes: ${data.notes?.trim() || "None"}`,
  ].join("\n");
}

export function buildWhatsAppUrl(data: BookingData, phoneNumber = contact.whatsapp) {
  const number = normalizeWhatsAppNumber(phoneNumber);
  return `https://wa.me/${number}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
}

export function buildWhatsAppContactUrl(
  message = "Hello Manar Transport, I would like to ask about a booking.",
  phoneNumber = contact.whatsapp
) {
  const number = normalizeWhatsAppNumber(phoneNumber);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppContact(message?: string) {
  window.open(buildWhatsAppContactUrl(message), "_blank", "noopener,noreferrer");
}
