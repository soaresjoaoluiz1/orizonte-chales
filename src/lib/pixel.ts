// Pixel Meta. Ja e inicializado inline no index.html (PageView disparado ali).
// Aqui so expomos helpers pros eventos.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}

export function trackLead(data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.fbq?.('track', 'Lead', data ?? {})
}

export function trackContact() {
  if (typeof window === 'undefined') return
  window.fbq?.('track', 'Contact')
}

export function trackCustom(nome: string, data?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.fbq?.('trackCustom', nome, data ?? {})
}
