# Lista Partidos Politicos(LPP)

LPP é uma SPA feita em React consumindo desta [API](https://dadosabertos.camara.leg.br/swagger/api.html) exibindo os partidos politicos e seus parlamentares.


# Versão

0.1.0 (beta) - Apenas estrutura basica montada sem consumo de dados da API

## Pré-Requisitos

Node.js

## Dependencias

 - [Axios](https://github.com/axios/axios)
 - [React-Bootstrap](https://react-bootstrap.github.io/)
 - [React Router Dom](https://reactrouter.com/web/guides/quick-start)

## Installation

 - Clone o projeto
 - npm install
 - npm start

## TODO

 - Fazer com que a SPA consuma a API e exiba os dados conforme os requisitos.

## Explicação de Dependencias
O axios ficara responsavel por fazer as requisições HTTP na API, a partir dos dados que ele trouxer será utilizado para popular a tabela.

React-Bootstrap é usado somente para dar uma aparencia bonita a tabela.

React Router Dom será utilizado para fazer as rotas do projeto.