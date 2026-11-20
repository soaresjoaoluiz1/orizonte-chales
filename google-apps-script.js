// Google Apps Script pra receber leads no Google Sheets.
// Como colar:
// 1. Abra a planilha LEADS ORIZONTE CHALES.
// 2. Extensões -> Apps Script.
// 3. Apague o codigo que vier e cole esse arquivo inteiro.
// 4. Salvar (disquete), rodar `doPost` uma vez pra conceder permissoes
//    (vai pedir autorizacao da conta Google, aceite e permita).
// 5. Implantar -> Nova implantacao -> Tipo: Aplicativo da Web.
//    Executar como: Eu. Quem pode acessar: Qualquer pessoa.
//    Implantar. Copie a URL `.../exec` que ele gera.
// 6. Cole essa URL no placeholders.ts em SHEETS_WEBHOOK_URL.
// 7. Toda nova submissao vira linha na aba ENTRADA DE LEADS.

var ABA = 'ENTRADA DE LEADS'
var COLUNAS = [
  'timestamp',
  'nome',
  'whatsapp',
  'modelo',
  'faixa',
  'faixa_label',
  'qualificado',
  'origem',
  'page',
  'ref',
  'ua',
]

function getAba_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheetByName(ABA) || ss.insertSheet(ABA)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUNAS)
    sheet.setFrozenRows(1)
  }
  return sheet
}

function doPost(e) {
  try {
    var dados = JSON.parse(e.postData.contents)
    var sheet = getAba_()
    var linha = COLUNAS.map(function (col) {
      if (col === 'timestamp') return new Date(dados.ts || Date.now())
      var v = dados[col]
      if (v === undefined || v === null) return ''
      if (typeof v === 'object') return JSON.stringify(v)
      return v
    })
    sheet.appendRow(linha)
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON,
    )
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService.createTextOutput('Orizonte Chales webhook ativo')
}
