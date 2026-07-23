/** Canal oficial EAAM — https://www.youtube.com/channel/UCVPZVJlOkM0uhvv3L4PAKpQ */
export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UCVPZVJlOkM0uhvv3L4PAKpQ";

/** Video destacado en Nosotros — https://www.youtube.com/watch?v=iAM-dLJZR4s */
export const YOUTUBE_FEATURED_VIDEO_ID = "iAM-dLJZR4s";

export const YOUTUBE_FEATURED_EMBED_URL = `https://www.youtube.com/embed/${YOUTUBE_FEATURED_VIDEO_ID}`;

/** WhatsApp EAAM — +54 9 11 6866-5174 */
export const WHATSAPP_DISPLAY = "+54 9 11 6866-5174";

/** Formato internacional sin símbolos (wa.me) */
export const WHATSAPP_NUMBER = "5491168665174";

const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, quiero hacer una consulta sobre la EAAM.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

/** Arma un enlace a wa.me con un mensaje prearmado para el WhatsApp de EAAM. */
export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Inscripción online — Instituto EAAM / Quinttos */
export const INSCRIPTION_URL =
  "https://institutoeaam.quinttos.com/index.php/inscripcion/";

/** Campus virtual — alumnos */
export const CAMPUS_ALUMNOS_URL =
  "https://campuseaam.educativa.org/acceso.cgi";

/** Redes sociales — footer */
export const FOOTER_SOCIAL_LINKS = [
  {
    id: "spotify",
    href: "https://open.spotify.com/show/0BSFmp7GsljTqPeknQcCE4",
    label: "Podcast EAAM en Spotify",
    icon: "podcasts",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/company/eaamoficial/",
    label: "EAAM en LinkedIn",
    icon: "work",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/eaam_oficial/",
    label: "Instagram EAAM",
    icon: "photo_camera",
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/playlist?list=PLGnkHIVUy7afg9GpzkM6Ji0IgnQUENAmB",
    label: "Podcast de Montaña en YouTube",
    icon: "play_circle",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/eaam.edu/",
    label: "Facebook EAAM",
    icon: "groups",
  },
] as const;
