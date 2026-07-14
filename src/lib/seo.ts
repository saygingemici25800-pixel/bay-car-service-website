import { BUSINESS_NAME, ADDRESS, GEO, MAPS, PHONE_TEL } from './site'

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  // Google'daki tam kayıtlı ad — NAP tutarlılığı için.
  "name": BUSINESS_NAME,
  "description": "Mercedes-Benz, BMW, Audi, Volkswagen, Porsche özel servisi. Bosch sertifikalı uzman kadro. Fethiye/Muğla.",
  "telephone": PHONE_TEL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ADDRESS.street,
    "addressLocality": ADDRESS.locality,
    "addressRegion": ADDRESS.region,
    "postalCode": ADDRESS.postalCode,
    "addressCountry": "TR"
  },
  // Google Business'tan doğrulanmış kesin koordinat.
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": GEO.lat,
    "longitude": GEO.lng
  },
  "hasMap": MAPS.business,
  "priceRange": "₺₺",
  // Pazartesi–Cumartesi 08:00–20:00. Pazar listede yok = kapalı.
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "08:00",
    "closes": "20:00"
  }],
  "founder": {"@type": "Person", "name": "Bayram Öğütveren"},
  "areaServed": ["Fethiye","Ölüdeniz","Çalış","Kayaköy","Göcek","Hisarönü"],
  "knowsAbout": ["Mercedes-Benz","BMW","Audi","Volkswagen","Porsche","Bosch Car Service"],
  // NOT: geçici SVG placeholder — gerçek atölye fotoğraflı JPG ile değiştirilmeli
  "image": "https://baycarservice.com/og-image.svg",
  "url": "https://baycarservice.com"
  // NOT: aggregateRating eklenmedi — henüz gerçek yorum verisi elimizde yok.
}
