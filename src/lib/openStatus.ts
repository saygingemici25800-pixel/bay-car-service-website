import { HOURS } from './site'

export type OpenStatus = { isOpen: boolean; label: string }

/**
 * İşletme şu an açık mı? Türkiye saatine (Europe/Istanbul) göre hesaplanır —
 * ziyaretçinin cihaz saat diliminden bağımsız doğru sonuç verir.
 * Pazartesi–Cumartesi 08:00–20:00 arası açık; Pazar ve saat dışı kapalı.
 */
export function getOpenStatus(now: Date = new Date()): OpenStatus {
  // now'u İstanbul duvar-saatine çevir, ardından gün/saat oku.
  const istanbul = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }))
  const day = istanbul.getDay() // 0 = Pazar, 1 = Pazartesi ... 6 = Cumartesi
  const hour = istanbul.getHours()

  const isWorkday = day >= 1 && day <= 6 // Pazartesi–Cumartesi
  const isOpen = isWorkday && hour >= HOURS.openHour && hour < HOURS.closeHour

  return { isOpen, label: isOpen ? 'Şu an açık' : 'Şu an kapalı' }
}
