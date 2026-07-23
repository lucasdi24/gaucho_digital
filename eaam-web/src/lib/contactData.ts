import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/siteLinks";

export const CONTACT_EMAIL = "info@eaam.com.ar";

export const CONTACT_INFO = [
  {
    id: "ubicacion",
    icon: "location_on",
    label: "Ubicación",
    value: "Avda Olazábal 5151 - Villa Urquiza - CABA",
    href: "https://www.google.com/maps/search/?api=1&query=Avda+Olazábal+5151,+CABA",
  },
  {
    id: "email",
    icon: "mail",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: "telefono",
    icon: "call",
    label: "Teléfono",
    value: "011 5120-6883",
    href: "tel:+541151206883",
  },
  {
    id: "whatsapp",
    icon: "chat",
    label: "Whatsapp",
    value: WHATSAPP_DISPLAY,
    href: WHATSAPP_URL,
  },
] as const;
