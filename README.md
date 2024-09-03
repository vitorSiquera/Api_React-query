# Projeto CRUD com React Query

## Visão Geral

Este projeto é uma aplicação CRUD (Criar, Ler, Atualizar, Excluir) simples desenvolvida com React, React Query e React Router. Ele demonstra o uso de recursos modernos do React, como hooks, contexto e roteamento no lado do cliente. O projeto é projetado para interagir com um servidor JSON, que serve como uma API de backend simulada.

## Recursos

- **Criar**: Adicione novos posts com um nome e e-mail.
- **Ler**: Exiba uma lista de posts com paginação.
- **Atualizar**: Edite posts existentes.
- **Excluir**: Remova posts da lista.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces de usuário.
- [React Query](https://tanstack.com/query/v4) - Biblioteca para gerenciamento de estado e sincronização de dados.
- [React Router](https://reactrouter.com/) - Biblioteca para roteamento no React.
- [JSON Server](https://github.com/typicode/json-server) - Ferramenta para criar uma API REST simulada.
- [Vite](https://vitejs.dev/) - Ferramenta de construção rápida para desenvolvimento front-end.

## Instalação e Execução

Para rodar este projeto localmente, siga as instruções abaixo:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/vitorSiquera/Api_React-query.git

2. **Navegue para o Diretório do Projeto**

- cd crud-react-query

3. **Instale as Dependências**

- npm install

4. **Inicie o Servidor de Desenvolvimento**

- npm run dev

5. **Inicie o Servidor JSON**

Em um novo terminal, inicie o servidor JSON para simular o backend:

- npx json-server --watch db.json --port 3000

O servidor JSON estará disponível em http://localhost:3000