// Tek kaynak: işletme sabitleri.
// Bayram Usta'dan kesin kuruluş yılı gelince yalnızca burayı güncellemek yeterli.

export const FOUNDED_YEAR = 2010;

// Deneyim yılı — "EST. 2010" referansıyla tutarlı, abartısız tutuldu.
// Kesin yıl netleşene kadar "15+" güvenli ifade (2010'dan bu yana ≥15 yıl).
export const YEARS_EXPERIENCE = 15;

// ── Google Business (doğrulanmış NAP verisi) ─────────────────────────────
// İşletmenin Google'daki tam kayıtlı adı — NAP tutarlılığı için schema'da bu kullanılır.
export const BUSINESS_NAME = "Bay Car Service Oto Tamir Bakım";
// Sitede görünen kısa marka adı.
export const BUSINESS_SHORT = "Bay Car Service";

// Telefon — görünen biçim + tel:/wa.me için uluslararası biçim.
export const PHONE_DISPLAY = "0534 668 24 45";
export const PHONE_TEL = "+905346682445";
export const WHATSAPP_URL = "https://wa.me/905346682445";

// Adres (Google Business):
export const ADDRESS = {
  street: "Taşyaka, Şht. Fethi Bey Cd. No:47/B",
  postalCode: "48300",
  locality: "Fethiye",
  region: "Muğla",
  cityLine: "48300 Fethiye / Muğla",
  full: "Taşyaka, Şht. Fethi Bey Cd. No:47/B, 48300 Fethiye/Muğla",
  landmark: "Ölüdeniz yolu üzeri, kanal köprüsü yanı",
} as const;

// Kesin koordinat (Google Business).
export const GEO = { lat: 36.6239119, lng: 29.1377318 } as const;
export const GOOGLE_CID = "18092230582318210369";

// Google Maps linkleri — CID'li işletme sayfası + koordinatlı yol tarifi + embed.
export const MAPS = {
  business: `https://maps.google.com/?cid=${GOOGLE_CID}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${GEO.lat},${GEO.lng}`,
  embed: `https://maps.google.com/maps?ll=${GEO.lat},${GEO.lng}&q=Bay%20Car%20Service&z=17&output=embed`,
} as const;

// Çalışma saatleri — Pazartesi–Cumartesi 08:00–20:00, Pazar KAPALI.
export const HOURS = {
  openHour: 8,
  closeHour: 20,
  weekLabel: "Pazartesi – Cumartesi",
  weekTime: "08:00 – 20:00",
  sundayLabel: "Pazar",
  sundayText: "Kapalı",
  // Kompakt tek satır (footer / teaser).
  compact: "Pzt – Cmt 08:00 – 20:00 · Pazar kapalı",
} as const;
