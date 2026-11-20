import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'

export interface LeadModalOpenArgs {
  modelo?: string
  origem?: string
}

interface LeadModalCtx {
  open: boolean
  modelo: string | undefined
  origem: string
  abrir: (args?: LeadModalOpenArgs) => void
  fechar: () => void
}

const LeadModalContext = createContext<LeadModalCtx | null>(null)

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ open: boolean; modelo?: string; origem: string }>({
    open: false,
    origem: 'site',
  })

  const abrir = useCallback((args?: LeadModalOpenArgs) => {
    setState({
      open: true,
      modelo: args?.modelo,
      origem: args?.origem ?? 'site',
    })
  }, [])

  const fechar = useCallback(() => {
    setState((s) => ({ ...s, open: false }))
  }, [])

  const value = useMemo<LeadModalCtx>(
    () => ({ open: state.open, modelo: state.modelo, origem: state.origem, abrir, fechar }),
    [state.open, state.modelo, state.origem, abrir, fechar],
  )

  return <LeadModalContext.Provider value={value}>{children}</LeadModalContext.Provider>
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext)
  if (!ctx) throw new Error('useLeadModal precisa estar dentro de LeadModalProvider')
  return ctx
}
