# Guia de Deploy em Produção — Complexti Landing Page

Documentação completa para publicar o projeto em uma VPS Ubuntu com PM2, Nginx e domínio personalizado com SSL.

---

## Sumário

1. [Pré-requisitos](#1-pré-requisitos)
2. [Configuração do DNS](#2-configuração-do-dns)
3. [Preparar a VPS](#3-preparar-a-vps)
4. [Clonar e configurar o projeto](#4-clonar-e-configurar-o-projeto)
5. [Build e iniciar com PM2](#5-build-e-iniciar-com-pm2)
6. [Configurar o Nginx](#6-configurar-o-nginx)
7. [SSL gratuito com Let's Encrypt](#7-ssl-gratuito-com-lets-encrypt)
8. [Atualizar o projeto](#8-atualizar-o-projeto)
9. [Comandos úteis](#9-comandos-úteis)
10. [Solução de problemas](#10-solução-de-problemas)

---

## 1. Pré-requisitos

| Item | Valor |
|---|---|
| IP da VPS | `31.97.22.148` |
| Provedor VPS | Hostinger |
| Sistema Operacional | Ubuntu 22.04 LTS |
| Domínio | `complexti.com.br` |
| Registrador | registro.br |
| Porta da aplicação | `5001` |
| Gerenciador de processos | PM2 |
| Proxy reverso | Nginx |

---

## 2. Configuração do DNS

### No painel do registro.br

Acesse [registro.br](https://registro.br) → entre no painel do domínio `complexti.com.br` → **Configurar Zona DNS** → **Nova Entrada**.

Adicione os seguintes registros do tipo **A**:

| TIPO | NOME | DADOS |
|---|---|---|
| `A` | `complexti.com.br` | `31.97.22.148` |
| `A` | `www.complexti.com.br` | `31.97.22.148` |

Clique em **Salvar Alterações**.

> **Tempo de propagação:** de alguns minutos até 24 horas. Você pode verificar em [dnschecker.org](https://dnschecker.org) digitando `complexti.com.br`.

---

## 3. Preparar a VPS

### Acesse a VPS via SSH

```bash
ssh root@31.97.22.148
```

### Atualizar o sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### Instalar o Node.js 20 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Verifique a instalação:

```bash
node -v   # deve exibir v20.x.x
npm -v    # deve exibir 10.x.x
```

### Instalar o PM2 globalmente

```bash
sudo npm install -g pm2
```

### Instalar o Nginx

```bash
sudo apt install nginx -y
```

### Configurar o firewall (UFW)

```bash
sudo ufw allow OpenSSH
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 5001/tcp
sudo ufw enable
sudo ufw status
```

---

## 4. Clonar e configurar o projeto

### Criar a pasta do projeto

```bash
mkdir -p /var/www
cd /var/www
```

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git complexti-landing
cd complexti-landing
```

> Substitua `seu-usuario/seu-repositorio` pela URL real do seu repositório no GitHub.

### Criar o arquivo de variáveis de ambiente

```bash
cp .env.example .env
nano .env
```

Preencha os valores:

```env
GEMINI_API_KEY="sua_chave_aqui"
APP_URL="https://complexti.com.br"
```

Salve com `Ctrl+O`, `Enter`, `Ctrl+X`.

### Instalar as dependências

```bash
npm install
```

---

## 5. Build e iniciar com PM2

### Gerar o build de produção

```bash
npm run build
```

O resultado ficará na pasta `dist/`.

### Iniciar com PM2

```bash
pm2 start ecosystem.config.cjs
```

### Verificar se está rodando

```bash
pm2 status
```

Você deve ver `complexti-landing` com status `online`.

### Configurar o PM2 para iniciar automaticamente após reboot

```bash
pm2 save
pm2 startup
```

Execute o comando que o PM2 mostrar na tela (algo como `sudo env PATH=...`).

---

## 6. Configurar o Nginx

### Criar o arquivo de configuração do site

```bash
sudo nano /etc/nginx/sites-available/complexti
```

Cole o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name complexti.com.br www.complexti.com.br;

    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Salve com `Ctrl+O`, `Enter`, `Ctrl+X`.

### Ativar o site

```bash
sudo ln -s /etc/nginx/sites-available/complexti /etc/nginx/sites-enabled/
```

### Remover o site padrão (opcional)

```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Testar e reiniciar o Nginx

```bash
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

Acesse **http://complexti.com.br** — o site já deve estar funcionando.

---

## 7. SSL gratuito com Let's Encrypt

> Só execute este passo **após o DNS ter propagado** e o site estar acessível via `http://complexti.com.br`.

### Instalar o Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### Gerar o certificado SSL

```bash
sudo certbot --nginx -d complexti.com.br -d www.complexti.com.br
```

Siga as instruções:
- Informe um e-mail válido
- Aceite os termos de serviço
- Escolha se deseja receber e-mails da EFF (opcional)
- Selecione **2** para redirecionar HTTP → HTTPS automaticamente

### Verificar renovação automática

O Certbot já configura a renovação automática. Para testar:

```bash
sudo certbot renew --dry-run
```

Acesse **https://complexti.com.br** — o site estará com cadeado verde.

---

## 8. Atualizar o projeto

Sempre que fizer alterações no código:

### Na sua máquina local

```bash
git add .
git commit -m "descrição das alterações"
git push origin main
```

### Na VPS

```bash
cd /var/www/complexti-landing

# Buscar as alterações do GitHub
git pull origin main

# Instalar novas dependências (se houver)
npm install

# Regerar o build
npm run build

# Reiniciar a aplicação
pm2 restart complexti-landing
```

### Script de deploy automático (opcional)

Crie um arquivo `deploy.sh` na VPS para simplificar:

```bash
nano /var/www/complexti-landing/deploy.sh
```

Cole o conteúdo:

```bash
#!/bin/bash
echo "🚀 Iniciando deploy..."
cd /var/www/complexti-landing
git pull origin main
npm install
npm run build
pm2 restart complexti-landing
echo "✅ Deploy concluído!"
```

Torne-o executável:

```bash
chmod +x /var/www/complexti-landing/deploy.sh
```

Para atualizar, basta rodar na VPS:

```bash
/var/www/complexti-landing/deploy.sh
```

---

## 9. Comandos úteis

### PM2

| Comando | Descrição |
|---|---|
| `pm2 status` | Ver status de todos os processos |
| `pm2 logs complexti-landing` | Ver logs em tempo real |
| `pm2 restart complexti-landing` | Reiniciar a aplicação |
| `pm2 stop complexti-landing` | Parar a aplicação |
| `pm2 delete complexti-landing` | Remover do PM2 |
| `pm2 monit` | Monitor em tempo real (CPU/RAM) |

### Nginx

| Comando | Descrição |
|---|---|
| `sudo nginx -t` | Testar configuração |
| `sudo systemctl restart nginx` | Reiniciar o Nginx |
| `sudo systemctl status nginx` | Ver status do Nginx |
| `sudo tail -f /var/log/nginx/error.log` | Ver logs de erro |
| `sudo tail -f /var/log/nginx/access.log` | Ver logs de acesso |

### SSL / Certbot

| Comando | Descrição |
|---|---|
| `sudo certbot renew --dry-run` | Testar renovação do certificado |
| `sudo certbot certificates` | Listar certificados ativos |

---

## 10. Solução de problemas

### Site não abre pelo domínio

- Verifique se o DNS propagou: `nslookup complexti.com.br`
- Confirme se o Nginx está rodando: `sudo systemctl status nginx`
- Verifique os logs: `sudo tail -f /var/log/nginx/error.log`

### Aplicação caiu / página em branco

```bash
pm2 logs complexti-landing   # ver o erro
pm2 restart complexti-landing
```

### Porta 5001 não responde

```bash
sudo ufw status               # verificar firewall
pm2 status                    # verificar se o processo está online
curl http://localhost:5001    # testar localmente na VPS
```

### Erro no build

```bash
cd /var/www/complexti-landing
cat .env                      # verificar se o .env está correto
npm run build                 # ver o erro detalhado
```

### Certificado SSL expirado

```bash
sudo certbot renew
sudo systemctl restart nginx
```

---

## Estrutura de arquivos relevantes

```
complexti-landing/
├── dist/                  # Build de produção (gerado pelo npm run build)
├── src/                   # Código fonte React
├── server.cjs             # Servidor Express que serve o dist/ na porta 5001
├── ecosystem.config.cjs   # Configuração do PM2
├── .env                   # Variáveis de ambiente (não vai ao GitHub)
├── .env.example           # Exemplo de variáveis de ambiente
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração do Vite
└── DEPLOY.md              # Este arquivo
```

---

## URLs finais

| Ambiente | URL |
|---|---|
| Produção (domínio) | https://complexti.com.br |
| Produção (IP direto) | http://31.97.22.148:5001 |
