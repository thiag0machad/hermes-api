<div align="center">
  <img src='./src/assets/images/hermes.png'/>
</div>
<h1 align="center">Hermes</h1>
<p align="center"><img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000"></p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma 2](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)
- [Axios](https://axios-http.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Jest](https://jestjs.io/pt-BR/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Selenium](https://www.selenium.dev/)
- [Babel](https://babeljs.io/)
- [JsonWebToken](https://jwt.io/)

## 💻 Projeto

Hermes é uma API REST para demonstrar todos os meus conhecimentos relacionados.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn prisma db push` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## Rotas
- `/users`
  - POST - Criação de um usuário.
  - GET - Lista todos os usuários.
  - `/users/:id`
    - PUT - Atualiza um usuario através do ID recebido na rota.
    - DELETE - Deleta um usuario através do ID recebido na rota.
- `/contact`
  - POST - Envia email para si mesmo, com o intuído de ser integrado em um formulário de contato.
- `/currencies/usd-brl/:value`
  - GET - Converte o valor em dólar recebido na rota e converte para reais.
- `/auth`
  - POST - Autentica o usuário.
Você pode baixar o arquivo `Hermes.postman_collection.json` para visualizar as requests no Postman.

## 📄 Licença

Esse projeto está sob a licença MIT.