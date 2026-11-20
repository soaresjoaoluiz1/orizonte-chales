#!/bin/bash
# Deploy Orizonte Chales Modulares -> sheraos.com.br/orizonte-chales
set -e

cd "$(dirname "$0")"

echo "==> Build do site"
npm run build

echo "==> Compactando dist"
cd dist
tar czf /tmp/orizonte-dist.tar.gz .
cd ..

echo "==> Preparando pasta remota"
ssh sheraos-locaweb 'mkdir -p /opt/sites/sheraos-marketing/orizonte-chales'

echo "==> Upload tar.gz via scp"
scp /tmp/orizonte-dist.tar.gz sheraos-locaweb:/tmp/

echo "==> Extraindo no servidor"
ssh sheraos-locaweb "cd /opt/sites/sheraos-marketing/orizonte-chales && tar xzf /tmp/orizonte-dist.tar.gz && rm /tmp/orizonte-dist.tar.gz"

echo "==> Verificando regra SPA no nginx"
ssh sheraos-locaweb << 'EOF'
cd /opt/sites/sheraos-marketing
if ! grep -q "orizonte-chales" nginx.conf; then
  sed -i '/# Bloquear arquivos sensiveis/i\    # SPA fallback Orizonte Chales\n    location /orizonte-chales/ {\n        try_files $uri $uri/ /orizonte-chales/index.html;\n    }\n' nginx.conf
  echo "Regra SPA adicionada, reiniciando container"
  docker compose restart sheraos-web
else
  echo "Regra SPA ja existia"
fi
EOF

rm -f /tmp/orizonte-dist.tar.gz

echo ""
echo "==> Pronto!"
echo "    Site no ar: https://sheraos.com.br/orizonte-chales/"
