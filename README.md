# 🚀 API Node.js - Tecnologias para Desenvolvimento Web

Este repositório contém a implementação de uma **API RESTful em Node.js** desenvolvida para estudo de arquitetura em camadas (MVC), autenticação via JWT (JSON Web Token) e manipulação segura de dados no backend.

---

## 📌 Arquitetura do Projeto

O projeto adota uma arquitetura organizada em camadas baseada no padrão **MVC (Model-View-Controller)**:

```text
📁 aula02 / AULA_API
 ├── 📁 controllers/      # Lógica de negócio e respostas HTTP[cite: 1]
 ├── 📁 models/           # Schemas e manipulação dos dados no BD[cite: 1]
 ├── 📁 routes/           # Definição e rotas dos endpoints HTTP[cite: 1]
 ├── 📁 helpers/          # Funções auxiliares (JWT, Validações e Middlewares)[cite: 1]
 ├── 📁 db/               # Configuração e conexão com o banco de dados[cite: 1]
 ├── .env                 # Variáveis de ambiente (Porta, Segredo JWT)[cite: 1]
 ├── server.js            # Ponto de entrada (Entry Point)[cite: 1]
 └── package.json         # Dependências do projeto e scripts[cite: 1]

```

---

## ⚡ Fluxo de Execução das Requisições

```text
[ Cliente / Postman ] 
        │
        ▼ (Requisição HTTP)
    server.js ──► app.js ──► routes/ ──► helpers/ (verify-token) ──► controllers/ ──► models/ ──► Banco de Dados
                                                                                                 │
[ Resposta JSON ] ◄──────────────────────────────────────────────────────────────────────────────┘

```

---

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript no servidor.
* **[Express](https://expressjs.com/)** — Framework para gerenciamento de rotas e middlewares.


* **[JSON Web Token (JWT)](https://jwt.io/)** — Emissão e validação de tokens para autenticação.


* **[Bcrypt](https://www.npmjs.com/package/bcrypt)** — Criptografia e hashing seguro de senhas.


* **[Dotenv](https://www.npmjs.com/package/dotenv)** — Gerenciamento de variáveis de ambiente.



---

## 🚦 Endpoints da API

### 🔓 Rotas Públicas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/users/register` | Criação de conta de usuário com senha criptografada

 |
| `POST` | `/users/login` | Autenticação e geração do Token JWT

 |

### 🔒 Rotas Protegidas (Requer Cabeçalho `Authorization: Bearer <TOKEN>`)

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/users/checkuser` | Verifica os dados do usuário autenticado atual

 |
| `GET` | `/users/:id` | Retorna o perfil de um usuário específico por ID

 |
| `PATCH` | `/users/edit/:id` | Atualiza os dados cadastrais do usuário

 |
| `DELETE` | `/users/:id` | Remove o usuário cadastrado

 |

---

## 🔑 Códigos de Status HTTP

* **`200 OK`**: Requisição processada e retornada com sucesso.


* **`201 Created`**: Novo recurso criado no banco de dados.


* **`400 Bad Request`**: Dados de entrada ausentes ou inválidos.


* **`401 Unauthorized`**: Token ausente, expirado ou inválido.


* **`404 Not Found`**: Recurso ou rota não encontrada.


* **`500 Internal Server Error`**: Erro interno no servidor ou banco de dados.



---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

* Node.js (v16+)
* Gerenciador de pacotes (`npm` ou `yarn`)

### Passo a Passo

1. **Clonar o repositório:**
```bash
git clone https://github.com/fnandonog/nivaldo.git
cd nivaldo/aula02

```


2. **Instalar as dependências:**
```bash
npm install

```


3. **Configurar as Variáveis de Ambiente:**
Crie um arquivo `.env` na raiz da pasta `aula02` contendo:


```env
PORT=3000
JWT_SECRET=seu_segredo_jwt_aqui
DATABASE_URL=mongodb://localhost:27017/minhadb

```


4. **Executar o servidor:**
```bash
# Modo de desenvolvimento
npm run dev

# Modo de produção
npm start

```


5. O servidor estará ativo em: `http://localhost:3000`
