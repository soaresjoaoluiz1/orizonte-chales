# Orizonte Chalés Modulares — Site

Site institucional com captura de leads, Meta Pixel e integração Google Sheets.

## Stack

- React 18 + TanStack Router
- Vite 6
- Tailwind CSS 3
- lucide-react (ícones)

## Rodar local

```bash
cd site
npm install
npm run dev
```

Abre em http://localhost:5181/orizonte-chales-modulares/

## Build pra produção

```bash
npm run build
```

O build gera `dist/` servido em `/orizonte-chales-modulares/`.

## Placeholders a preencher antes de publicar

Edite `src/config/placeholders.ts`:

- `WHATSAPP_NUMBER` — número comercial com DDI
- `EMAIL_CONTATO` — e-mail comercial
- `META_PIXEL_ID` — ID do Pixel
- `SHEETS_WEBHOOK_URL` — URL do Apps Script webhook

## Deploy

Destino planejado: `sheraos.com.br/orizonte-chales-modulares` (basePath já configurado no vite.config.ts).

Ver doc Sheraos em `../DOC-ORIZONTE-SHERAOS.md` pra plano completo.
