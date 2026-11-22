<div align="center">

# 📘 Do Lead ao Cliente — Landing Page

**Landing page oficial do e-book _Do Lead ao Cliente: Como Converter_, de Luisa Reis**

_Estratégia em vendas • Método prático para transformar contatos em clientes_

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## ✨ Sobre o projeto

Landing page de vendas do e-book **Do Lead ao Cliente**, um guia direto para melhorar o primeiro contato, organizar o follow-up e conduzir negociações com método, aproveitando melhor os leads que a empresa já conquistou.

O projeto segue a identidade visual da marca **Luisa Reis — Estratégia em vendas**, com foco em clareza, autoridade e conversão.

## 🎨 Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| 🟦 Azul Noite | `#14284B` | Cor principal, títulos e fundos |
| 🟨 Marfim | `#F7F3EA` | Fundo base |
| 🟫 Dourado Fosco | `#B08D57` | Detalhes e ornamentos |
| 🟥 Bordô | `#7A2E3A` | CTAs, números e destaques |

**Tipografia**
- **Cormorant Garamond**: títulos (`font-cg`)
- **Inter**: textos (`font-inter`)

## 🧱 Estrutura

```
app/
├── layout.tsx        # Layout raiz, fontes e metadados
├── page.tsx          # Composição das seções
├── globals.css       # Tailwind v4, @theme e estilos globais
├── icon.png          # Favicon
├── footer.tsx        # Rodapé com contatos
└── section1..9.tsx   # Seções da landing (hero, método, oferta, sobre, dúvidas...)
```

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/luisa-reis-lp.git
cd luisa-reis-lp

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local

# 4. Rode em desenvolvimento
npm run dev
```

Acesse **http://localhost:3000**

## 🔐 Variáveis de ambiente

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_CHECKOUT_URL` | Link do checkout de pagamento do e-book |

> ⚠️ Nunca suba o `.env.local` para o repositório.

## 📦 Build de produção

```bash
npm run build
npm start
```

## ☁️ Deploy

O deploy é feito na **Vercel**, com domínio próprio.

1. Importe o repositório em [vercel.com/new](https://vercel.com/new)
2. Adicione `NEXT_PUBLIC_CHECKOUT_URL` em **Environment Variables**
3. Configure o domínio em **Settings → Domains**

## 📬 Contato

<div align="center">

**Luisa Reis** • Estratégia em vendas

[LinkedIn](https://www.linkedin.com/in/luisadosreisdasilva) •
[Instagram](https://instagram.com/lrluisareis) •
[WhatsApp](https://wa.me/5548920038357) •
[E-mail](mailto:contato@luisareis.com.br)

</div>

---

<div align="center">

Desenvolvido com 💙 por **[CodariaDev](https://codariadev.vercel.app)**

© 2026 Luisa Reis • Todos os direitos reservados.

</div>
