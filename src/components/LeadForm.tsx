import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { enviarLead, type FaixaInvestimento } from '../lib/leads'

interface Props {
  modeloPadrao?: string
  origem?: string
  compact?: boolean
  onDone?: () => void
}

const FAIXAS: { value: FaixaInvestimento; label: string }[] = [
  { value: 'ate-50k', label: 'Até R$ 50 mil' },
  { value: '50-100k', label: 'R$ 50 mil a R$ 100 mil' },
  { value: '100-200k', label: 'R$ 100 mil a R$ 200 mil' },
  { value: 'acima-200k', label: 'Acima de R$ 200 mil' },
]

function formatWhatsApp(valor: string) {
  const d = valor.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

export default function LeadForm({ modeloPadrao, origem = 'site', compact = false, onDone }: Props) {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [modelo, setModelo] = useState(modeloPadrao || 'Essência 21 m²')
  const [faixa, setFaixa] = useState<FaixaInvestimento | ''>('')
  const [enviando, setEnviando] = useState(false)
  const [ok, setOk] = useState<null | { qualificado: boolean; whatsappUrl: string }>(null)
  const [err, setErr] = useState('')

  const handle = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr('')
    if (!nome.trim()) {
      setErr('Preencha seu nome.')
      return
    }
    if (whatsapp.replace(/\D/g, '').length < 10) {
      setErr('Informe um WhatsApp válido com DDD.')
      return
    }
    if (!faixa) {
      setErr('Selecione a sua faixa de orçamento.')
      return
    }
    setEnviando(true)
    const res = await enviarLead({ nome: nome.trim(), whatsapp, modelo, faixa, origem })
    setEnviando(false)
    setOk({ qualificado: res.qualificado, whatsappUrl: res.whatsappUrl })
    // Pra lead qualificado, abre o WhatsApp direto em nova aba. O usuario ja ve o
    // "recebemos seu contato" no site e o WhatsApp pronto na outra aba.
    if (res.qualificado) {
      try {
        window.open(res.whatsappUrl, '_blank', 'noopener')
      } catch {}
    }
  }

  return (
    <div
      className={
        compact
          ? ''
          : 'relative overflow-hidden rounded-[28px] border border-cream/10 bg-night/80 p-6 md:p-10'
      }
    >
      <AnimatePresence mode="wait">
        {ok ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center gap-5 py-8 text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <CheckCircle2 className="text-gold" size={56} strokeWidth={1.3} />
            </motion.div>
            <div>
              <p className="font-display text-2xl text-cream md:text-3xl">Recebemos seu contato.</p>
              <p className="mt-3 text-sm text-mist">
                {ok.qualificado
                  ? 'Abrimos o WhatsApp pra você continuar a conversa agora. Se não abriu, toque no botão abaixo.'
                  : 'Em até 1 dia útil você recebe nossa mensagem com os próximos passos.'}
              </p>
            </div>
            <a
              href={ok.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-night"
            >
              <MessageCircle size={16} /> Abrir WhatsApp
            </a>
            {onDone && (
              <button
                type="button"
                onClick={onDone}
                className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/60 hover:text-cream"
              >
                Fechar
              </button>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-5"
            autoComplete="on"
          >
            {!compact && (
              <div>
                <p className="label">Fale com a Orizonte</p>
                <p className="mt-2 font-display text-2xl text-cream md:text-3xl">
                  Deixe seus dados.
                </p>
              </div>
            )}

            <Field
              label="Seu nome"
              name="name"
              value={nome}
              onChange={setNome}
              placeholder="Como gostaria de ser chamado"
              autoComplete="name"
            />
            <Field
              label="WhatsApp com DDD"
              name="tel"
              value={whatsapp}
              onChange={(v) => setWhatsapp(formatWhatsApp(v))}
              placeholder="(48) 99999-0000"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
            />

            <div className="relative">
              <label className="absolute left-0 top-0 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/50">
                Modelo de interesse
              </label>
              <select
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                className="mt-6 w-full appearance-none border-b border-cream/15 bg-transparent py-3 text-base text-cream focus:border-gold focus:outline-none"
              >
                <option className="bg-night" value="Essência 21 m²">
                  Essência 21 m²
                </option>
                <option className="bg-night" value="A-Frame 18 m²">
                  A-Frame 18 m²
                </option>
                <option className="bg-night" value="Ainda não sei">
                  Ainda não sei
                </option>
              </select>
            </div>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-cream/50">
                Orçamento disponível pra investir
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {FAIXAS.map((f) => {
                  const ativa = faixa === f.value
                  return (
                    <button
                      key={f.value}
                      type="button"
                      onClick={() => setFaixa(f.value)}
                      aria-pressed={ativa}
                      className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                        ativa
                          ? 'border-gold bg-gold/10 text-cream'
                          : 'border-cream/15 bg-transparent text-cream/70 hover:border-cream/40'
                      }`}
                    >
                      {f.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {err && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-ember"
                role="alert"
              >
                {err}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={enviando}
              className="group relative mt-1 inline-flex w-full items-center justify-between gap-6 overflow-hidden rounded-full border border-gold bg-gold px-6 py-4 text-left text-[12px] font-medium uppercase tracking-[0.2em] text-night transition-all duration-500 hover:bg-transparent hover:text-gold disabled:opacity-60"
            >
              <span>{enviando ? 'Enviando...' : 'Falar no WhatsApp agora'}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-night text-gold transition group-hover:bg-gold group-hover:text-night">
                <ArrowRight size={16} />
              </span>
            </button>

            <p className="text-center text-[10px] uppercase tracking-[0.25em] text-mist">
              Sem spam. Dados só com a Orizonte.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

interface FieldProps {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  name?: string
  inputMode?: 'text' | 'tel' | 'email' | 'numeric'
  autoComplete?: string
}

function Field({ label, value, onChange, placeholder, type = 'text', name, inputMode, autoComplete }: FieldProps) {
  const [focused, setFocused] = useState(false)
  const active = focused || !!value
  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-0 top-0 text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
          active ? 'text-gold' : 'text-cream/50'
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        inputMode={inputMode}
        autoComplete={autoComplete}
        className="peer mt-6 w-full border-b border-cream/15 bg-transparent py-3 text-base text-cream placeholder:text-cream/30 focus:outline-none"
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] origin-left bg-gold"
        initial={false}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: '100%' }}
      />
    </div>
  )
}
