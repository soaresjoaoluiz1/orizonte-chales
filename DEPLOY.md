# Deploy Orizonte Chalés Modulares, VPS Locaweb Sheraos

## Pré-requisito DNS

Conferir primeiro que os dois nomes apontam pra 191.252.219.218:

```bash
nslookup orizontechales.com.br 8.8.8.8
nslookup www.orizontechales.com.br 8.8.8.8
```

Se `www` ainda não propagou, voltar no painel DNS da Locaweb e adicionar a entrada que falta antes de prosseguir, se não o Let's Encrypt falha em gerar o certificado pro www.

## Primeiro deploy

Conectar na VPS:

```bash
ssh sheraos-locaweb
```

Clonar o repo em `/root/orizonte-chales`:

```bash
cd /root
git clone https://github.com/soaresjoaoluiz1/orizonte-chales.git
cd orizonte-chales
```

Confirmar que a rede `web` do Traefik existe (ela deve existir, é a mesma usada pelo CRM Sheraos):

```bash
docker network ls | grep web
```

Subir:

```bash
docker compose up -d --build
```

Acompanhar o Traefik pegar o certificado:

```bash
docker logs -f traefik 2>&1 | grep -i orizonte
```

## Atualizações seguintes

Dentro da VPS:

```bash
cd /root/orizonte-chales
git pull
docker compose up -d --build
```

Pra limpar imagens antigas depois de alguns deploys:

```bash
docker image prune -f
```

## Teste final

```bash
curl -I https://orizontechales.com.br
curl -I https://www.orizontechales.com.br
```

Ambas devem responder `HTTP/2 200` (www faz `301` pra apex antes).
