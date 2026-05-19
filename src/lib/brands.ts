export interface CommonIssue {
  problem: string;
  solution: string;
}

export interface BrandData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  heroAccent: string;
  services: string[];
  commonIssues: CommonIssue[];
}

export const brands: Record<string, BrandData> = {
  mercedes: {
    slug: "mercedes",
    name: "Mercedes-Benz",
    fullName: "Mercedes-Benz Özel Servisi",
    tagline: "Stuttgart hassasiyeti, Fethiye'de.",
    heroAccent: "#1A1D21",
    services: [
      "Periyodik bakım (A/B servis)",
      "Motor onarım ve revizyon",
      "Şanzıman onarım (otomatik & manuel)",
      "Fren sistemi & ABS",
      "Klima ve elektrik sistemleri",
      "Elektronik diagnoz (XENTRY)",
      "Hava yastığı sistemleri",
      "Orijinal ve eşdeğer yedek parça"
    ],
    commonIssues: [
      { problem: "Adblue/SCR sistemi arızası", solution: "Modern Mercedes dizel modellerinde sık görülür. Diagnoz + sensör değişimi ile çözülür." },
      { problem: "Süspansiyon arızası (Airmatic)", solution: "Hava süspansiyonu kompresör veya akümülatör değişimi yapılır." },
      { problem: "EGR/DPF tıkanıklığı", solution: "Profesyonel temizlik veya değişim, performans iadesiyle çözülür." }
    ]
  },
  bmw: {
    slug: "bmw",
    name: "BMW",
    fullName: "BMW Özel Servisi",
    tagline: "Bavyera mühendisliği, ustaca.",
    heroAccent: "#1A1D21",
    services: [
      "Periyodik bakım",
      "VANOS ve Valvetronic onarımı",
      "Motor mekanik ve rektifiye",
      "Elektronik arıza tespiti",
      "Soğutma sistemi kontrol ve onarımı",
      "Fren sistemi bakımı",
      "Şanzıman yağı değişimi ve onarımı",
      "Ön takım ve yürüyen aksam"
    ],
    commonIssues: [
      { problem: "Valvetronic motor arızası", solution: "BMW benzinli motorlarda performans kaybına yol açar, aktüatör değişimi ve senkronizasyonla onarılır." },
      { problem: "Soğutma sistemi sızıntıları", solution: "Zamanla aşınan hortumlar ve su pompası değiştirilerek sızıntı kalıcı olarak giderilir." },
      { problem: "Eksantrik zinciri (Timing Chain) problemi", solution: "Gürültülü çalışan zincir seti orijinal parçalarla uzman ekibimizce değiştirilir." }
    ]
  },
  audi: {
    slug: "audi",
    name: "Audi",
    fullName: "Audi Özel Servisi",
    tagline: "Quattro hassasiyeti.",
    heroAccent: "#1A1D21",
    services: [
      "Periyodik ve kışlık bakım",
      "S-tronic ve DSG şanzıman onarımı",
      "Eksantrik kayış ve zincir değişimi",
      "Quattro Dört Çeker Sistemleri bakımı",
      "Motor arıza tespiti",
      "Klima servisi",
      "Ön-arka süspansiyon onarımı",
      "Orijinal yedek parça değişimi"
    ],
    commonIssues: [
      { problem: "DSG/S-tronic mekatronik arızası", solution: "Vites geçişlerinde vuruntu ve gecikme yaşanır, mekatronik beyni onarılır veya değiştirilir." },
      { problem: "Aşırı yağ tüketimi (TFSI/TSI)", solution: "Piston sekmanları yenilenerek fabrikanın belirlediği standart yağ tüketim değerlerine dönülür." },
      { problem: "MMI eğlence sistemi arızası", solution: "Elektronik teşhis yöntemleriyle modül arızası tespit edilip yazılımsal/donanımsal çözüm sağlanır." }
    ]
  },
  volkswagen: {
    slug: "volkswagen",
    name: "Volkswagen",
    fullName: "Volkswagen Özel Servisi",
    tagline: "Halkın aracı, hak ettiği bakım.",
    heroAccent: "#1A1D21",
    services: [
      "Periyodik sıvı bakımları",
      "TSI motor bakım ve onarımı",
      "Common Rail TDI dizel bakımı",
      "DSG şanzıman revizyonu",
      "Elektronik teşhis (VCDS)",
      "Fren disk ve balata değişimi",
      "Kavrama değişimi",
      "Emisyon ve egzoz sistemleri"
    ],
    commonIssues: [
      { problem: "DSG kavrama aşınması", solution: "Vites geçişlerindeki titreme ve yavaşlama orijinal kavrama setinin değişimi ve kalibrasyonuyla giderilir." },
      { problem: "Dizel partikül filtresi (DPF) dolgunluğu", solution: "Özel DPF temizleme sıvıları ile ya da DPF rejenerasyonu yapılarak çekiş kaybı önlenir." },
      { problem: "EGR valfi arızası", solution: "EGR valfinin tıkanması motor uyarı ışığı yakar, temizlik veya değişim işlemiyle sorun giderilir." }
    ]
  },
  porsche: {
    slug: "porsche",
    name: "Porsche",
    fullName: "Porsche Özel Servisi",
    tagline: "Performans için.",
    heroAccent: "#1A1D21",
    services: [
      "Genel periyodik bakım (Minor/Major)",
      "PDK şanzıman servis ve kalibrasyonu",
      "Motor kompresyon testi ve revizyonu",
      "PASM süspansiyon onarımı",
      "Fren sistemi (Karbon seramik dahil)",
      "Kavrama ve debriyaj değişimi",
      "Elektronik sistem onarımı (PIWIS)",
      "Orijinal parça ve aksesuarlar"
    ],
    commonIssues: [
      { problem: "PDK şanzıman vuruntu sorunu", solution: "Genellikle PDK yağı değişimi ve kalibrasyon güncellemesi ile yüksek onarım maliyetinden kaçınılır." },
      { problem: "Motor soğutma sıvısı kaçağı (IMS/RMS)", solution: "Arka ana conta veya ilgili bağlantı elemanları kontrol edilerek tam sızdırmazlık sağlanır." },
      { problem: "Airmatic/PASM hata uyarıları", solution: "Pnömatik sistem detaylı kontrol edilir ve kompresör / süspansiyon elemanı değiştirilir." }
    ]
  }
};
