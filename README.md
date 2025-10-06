# ResgataPet 🐾
📌 Visão Geral

O ResgataPet é uma aplicação web fullstack com frontend em Vue.js e backend em Nest.js, funcionando como um feed colaborativo de relatos sobre animais perdidos, encontrados ou feridos.
O objetivo é conectar pessoas, ONGs e resgatadores para acelerar o resgate e aumentar as chances de adoção.

Inspiração: redes sociais (feed estilo Instagram), mas com foco em resgate animal.

# 🎯 Objetivos do MVP

Permitir que qualquer pessoa registre um report de forma simples e rápida.

Exibir os relatos em um feed público.

Garantir privacidade (localização aproximada, contato opcional).

Criar uma experiência fluida e amigável (navbar + feed + botão flutuante).

# 🖼️ Estrutura da Aplicação
🌐 Navbar

Não fixa.

Nome/logo: ResgataPet (lado esquerdo).

Opções de navegação:

Home (Tela Principal)

Report (novo relato)

Adotar

Contatos

Doação

Login/Usuário

# 📋 Feed de Reports

Estilo Instagram invertido, listando os relatos mais recentes primeiro.

Estrutura do card:

Cabeçalho: legenda, localização aproximada, data

Conteúdo: fotos do report

Rodapé: botões de interação:

👍 Ajudar

📍 Ver no mapa

🚩 Reportar falso

➕ Botão Flutuante

Local: canto inferior direito

Estilo: circular vermelho (#D32F2F), ícone branco “+”

Ação: abre formulário de novo report

# 📝 Formulário de Report

Campos obrigatórios e opcionais:

🐾 Qual animal (obrigatório)

📌 Localização (obrigatório — manual ou via GPS)

🔎 Situação (perdido, ferido, encontrado, outro)

✍️ Descrição (texto livre)

📸 Fotos (1–5 imagens)

📞 Contato (opcional: nome, telefone, e-mail)

# 🎨 Identidade Visual
Paleta de cores

Primária: Vermelho #D32F2F

Secundária: Laranja #F57C00

Neutros: Branco #FFFFFF, Cinza claro #F9F9F9, Cinza médio #616161, Cinza escuro #212121

Feedback positivo: Verde #4CAF50

Estilo de UI

Navbar: simples, clara, logo/nome em destaque

Feed: cards brancos, sombra leve, imagens centralizadas

Botão flutuante: circular vermelho, ícone branco “+”

Tipografia: moderna e legível (Roboto ou similar)

# ⚙️ Tecnologias

Frontend: Vue.js

Backend: Nest.js

Banco de Dados: PostgreSQL ou MongoDB

Mapas: OpenStreetMap via Leaflet.js

Uploads: armazenamento local (MVP), escalável para S3 ou GCP Storage

# 🚀 Próximos Passos

Criar mockups do feed + formulário para validar UX

Modelar o banco de dados para armazenar relatos

Implementar CRUD de reports no backend

Conectar Vue.js ↔ Nest.js com API REST

Adicionar mapa interativo com Leaflet

Testar fluxo de upload de imagens

# 📑 Divisão de Responsabilidades
Integrante	Responsabilidade:

- Alice	Navbar + Telas de navegação
- Ana Clara	Feed (cards + integração API)
- Samuel Backend (Nest.js + Banco + Uploads)
- Raimundo	Formulário de Report + Mapas

# 🔹 Estrutura do Projeto
frontend/
├─ src/
│  ├─ assets/       # Imagens e ícones
│  ├─ components/   # Componentes reutilizáveis
│  ├─ views/        # Telas principais (Home, Report, Adotar, Contatos, Doação, Login)
│  ├─ router/       # Configuração Vue Router
│  └─ main.js       # Entrada da aplicação

backend/
├─ src/
│  ├─ modules/      # Módulos Nest.js (Reports, Users)
│  ├─ controllers/  # Endpoints REST
│  ├─ services/     # Lógica de negócio
│  └─ main.ts       # Inicialização do servidor

# 🏗️ Funcionalidades do Backend

Endpoints REST:

- POST /reports → criar relato

- GET /reports → listar relatos

- GET /reports/:id → detalhes do relato

- PATCH /reports/:id → editar relato

- DELETE /reports/:id → apagar/reportar falso

- Upload de imagens local

- Modelagem de dados: Report { id, animal, situação, localização, descrição, fotos, contato, data }

# 📌 Testes e Entrega

Criar relato (Raimundo + Samuel)

Relato aparecer no feed (Ana Clara)

Navegar entre telas (Alice)

Revisão final de design + UX

Deploy inicial: Heroku/Render (backend) + Vercel/Netlify (frontend)