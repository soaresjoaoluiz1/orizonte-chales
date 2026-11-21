// Dados reais da Orizonte Chalés Modulares
export const PLACEHOLDERS = {
  BRAND_NAME: 'Orizonte',
  BRAND_FULL: 'Orizonte Chalés Modulares',
  CITY: 'Araranguá - SC',
  SITE_URL: 'orizontechales.com.br',

  WHATSAPP_NUMBER: '5548998409283',
  WHATSAPP_MESSAGE_ESSENCIA: 'Olá! Tenho interesse no chalé modular 21 m². Quero receber uma proposta.',
  WHATSAPP_MESSAGE_AFRAME: 'Olá! Tenho interesse em saber mais sobre os chalés modulares da Orizonte.',
  WHATSAPP_MESSAGE_GERAL: 'Olá! Quero saber mais sobre os chalés modulares. Como funciona?',
  WHATSAPP_MESSAGE_INVESTIR: 'Olá! Quero conhecer o chalé modular como investimento (Airbnb/pousada).',

  EMAIL_CONTATO: 'contato@orizontechales.com.br',

  META_PIXEL_ID: '2541960216308736',
  // Google Apps Script webhook. Deixar vazio desativa o envio pra planilha
  // sem quebrar o form. Trocar pela URL /exec do Web App do Apps Script.
  SHEETS_WEBHOOK_URL:
    'https://script.google.com/macros/s/AKfycbx10L7HXdx16D-Vb22h7MHfhbV-ocpaUy8BpvTO7-wo8bRkfHy39EKM9bgJn5gFyQg/exec',

  // Qualificacao do lead pelo orcamento declarado
  INVESTIMENTO_MIN_QUALIFICADO: 50000,

  INSTAGRAM_HANDLE: '@orizonte.chale',
  INSTAGRAM_URL: 'https://instagram.com/orizonte.chale',

  MODELOS: {
    glow: {
      nome: 'Glow',
      metragem: '21 m²',
      dimensoes: '3 x 7,30 m',
      preco: 'R$ 84.900',
      prazo: '30 dias',
      resumo: '1 quarto com cama casal, 1 banheiro completo, 1 lavabo, sala e cozinha integradas, varanda.',
      specs: [
        'Área total: 21,9 m² (3m × 7,30m)',
        'Quarto 2,00 × 2,98 m com cama casal',
        'Banheiro completo 1,20 × 1,48 m',
        'Lavabo 1,18 × 0,50 m',
        'Sala e cozinha integradas 2,98 × 2,52 m',
        'Varanda 2,90 × 0,80 m',
        'Estrutura metálica + revestimento em itaúba',
        'Entrega pronto no seu terreno em 30 dias',
      ],
    },
    aFrame: {
      nome: 'A-Frame',
      metragem: '18 m²',
      dimensoes: '3 x 6 m',
      preco: 'R$ 59.900',
      prazo: '30 dias',
      resumo: 'Formato icônico em A, mezanino e pé-direito alto.',
      specs: [
        '3 m de largura por 6 m de comprimento',
        'Mezanino para cama',
        'Pé-direito alto, visual icônico',
        'Estrutura metálica + madeira itaúba',
        'Ideal para refúgio ou Airbnb',
        'Pronto no seu terreno em 30 dias',
      ],
    },
  },

  PAGAMENTO: {
    entrada: '30%',
    entrega: '70%',
    descricao: '30% na entrada, 70% na entrega no seu terreno. Sem letra miúda.',
  },
} as const

export function waLink(message: string = PLACEHOLDERS.WHATSAPP_MESSAGE_GERAL) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${PLACEHOLDERS.WHATSAPP_NUMBER}?text=${text}`
}
