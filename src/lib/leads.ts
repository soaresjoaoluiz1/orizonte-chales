import { PLACEHOLDERS } from '../config/placeholders'
import { trackCustom, trackLead } from './pixel'

export type FaixaInvestimento = 'ate-50k' | '50-100k' | '100-200k' | 'acima-200k'

export interface LeadPayload {
  nome: string
  whatsapp: string
  modelo?: string
  faixa: FaixaInvestimento
  origem?: string
}

export interface LeadResult {
  ok: boolean
  qualificado: boolean
  whatsappUrl: string
  error?: string
}

const FAIXAS_VALORES: Record<FaixaInvestimento, { label: string; piso: number }> = {
  'ate-50k': { label: 'Até R$ 50 mil', piso: 0 },
  '50-100k': { label: 'R$ 50 mil a R$ 100 mil', piso: 50000 },
  '100-200k': { label: 'R$ 100 mil a R$ 200 mil', piso: 100000 },
  'acima-200k': { label: 'Acima de R$ 200 mil', piso: 200000 },
}

export function faixaLabel(faixa: FaixaInvestimento) {
  return FAIXAS_VALORES[faixa].label
}

export function qualifica(faixa: FaixaInvestimento) {
  return FAIXAS_VALORES[faixa].piso >= PLACEHOLDERS.INVESTIMENTO_MIN_QUALIFICADO
}

function montaWhatsappUrl(payload: LeadPayload, qualificado: boolean) {
  const modelo = payload.modelo && payload.modelo !== 'Ainda não sei' ? payload.modelo : 'chalés modulares'
  const faixa = faixaLabel(payload.faixa)
  const texto = qualificado
    ? `Olá! Sou ${payload.nome}. Tenho interesse no ${modelo} e orçamento ${faixa} pra investir. Quero receber uma proposta.`
    : `Olá! Sou ${payload.nome}. Quero saber mais sobre os ${modelo}. Orçamento atual: ${faixa}.`
  const text = encodeURIComponent(texto)
  return `https://wa.me/${PLACEHOLDERS.WHATSAPP_NUMBER}?text=${text}`
}

export async function enviarLead(payload: LeadPayload): Promise<LeadResult> {
  const qualificado = qualifica(payload.faixa)
  const whatsappUrl = montaWhatsappUrl(payload, qualificado)

  try {
    const body = {
      ...payload,
      faixa_label: faixaLabel(payload.faixa),
      qualificado,
      ts: new Date().toISOString(),
      ua: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      ref: typeof document !== 'undefined' ? document.referrer : '',
      page: typeof location !== 'undefined' ? location.href : '',
    }

    const url = PLACEHOLDERS.SHEETS_WEBHOOK_URL
    if (url) {
      // no-cors pra Google Apps Script. Nao da pra ler a resposta, mas a planilha grava.
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        keepalive: true,
      }).catch(() => {
        // nao bloqueia a UX se a planilha falhar
      })
    }

    if (qualificado) {
      trackLead({
        content_name: payload.modelo || 'chale-modular',
        content_category: payload.faixa,
        value: body.qualificado ? 1 : 0,
        currency: 'BRL',
      })
    } else {
      trackCustom('LeadDesqualificado', {
        content_name: payload.modelo || 'chale-modular',
        content_category: payload.faixa,
      })
    }

    return { ok: true, qualificado, whatsappUrl }
  } catch (err: any) {
    // Mesmo com erro de script, mandamos a pessoa pro WhatsApp pra nao perder o contato.
    return { ok: false, qualificado, whatsappUrl, error: err?.message || 'Erro desconhecido' }
  }
}
