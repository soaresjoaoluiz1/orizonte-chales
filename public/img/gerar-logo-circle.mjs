import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const CHROME_WIN = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const LOGO = fs.readFileSync(path.join(__dirname, 'logo.jpeg')).toString('base64')
const LOGO_B64 = `data:image/jpeg;base64,${LOGO}`

// Gera uma versao circular 1080x1080 com a logo INTEIRA aparecendo dentro, fundo preto
const html = `<!doctype html><html><head><meta charset="UTF-8"/>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body { margin:0; padding:0; background:transparent; }
.circle {
  width:1080px; height:1080px;
  border-radius:50%;
  background:#0A0A0A;
  display:flex; align-items:center; justify-content:center;
  overflow:hidden;
  position:relative;
  border:16px solid #D4A857;
}
.circle img {
  width:72%;
  height:72%;
  object-fit:contain;
}
.glow {
  position:absolute; inset:0;
  background:radial-gradient(circle at center, rgba(212,168,87,0.15) 0%, transparent 60%);
}
</style>
</head><body>
<div class="circle">
  <div class="glow"></div>
  <img src="${LOGO_B64}"/>
</div>
</body></html>`

fs.writeFileSync(path.join(__dirname, '_logo-circle-gen.html'), html, 'utf8')
const cmd = `"${CHROME_WIN}" --headless --disable-gpu --no-sandbox --hide-scrollbars --window-size=1080,1080 --default-background-color=00000000 --screenshot="${path.join(__dirname, 'logo-circle.png')}" "file:///${path.join(__dirname, '_logo-circle-gen.html').replace(/\\/g, '/')}"`
execSync(cmd, { stdio: 'ignore' })
console.log('Generated logo-circle.png')
fs.unlinkSync(path.join(__dirname, '_logo-circle-gen.html'))
