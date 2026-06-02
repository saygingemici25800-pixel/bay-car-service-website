export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Bay Car Service",
  "description": "Mercedes-Benz, BMW, Audi, Volkswagen, Porsche özel servisi. Bosch sertifikalı uzman kadro. Fethiye/Muğla.",
  "telephone": "+905346682445",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Taşyaka Mah. Sanayi Sitesi, Şht. Fethi Bey Cad. No: 47/B",
    "addressLocality": "Fethiye",
    "addressRegion": "Muğla",
    "postalCode": "48300",
    "addressCountry": "TR"
  },
  // NOT: yaklaşık Taşyaka koordinatı — Bayram Usta'dan kesin koordinat gelince güncellenecek.
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.6239,
    "longitude": 29.1377
  },
  "priceRange": "₺₺",
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
}
