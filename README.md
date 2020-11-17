# Lista Partidos Politicos(LPP)

LPP é uma SPA feita em React consumindo desta [API](https://dadosabertos.camara.leg.br/swagger/api.html) exibindo os partidos politicos e seus parlamentares.


# Versão

0.1.0 (beta) - Apenas estrutura basica montada sem consumo de dados da API
1.0.0 - Projeto se encontra em seu estado inicial obtendo a lista dos partidos politicos e seus respectivos parlamentares.

## Changelog
v1.0.0
Novas funcionalidades
 - Adicionado filtro com a lista dos partidos politicos. 
 - Tabela exibe   lista de parlamentares do partido politicos selecionado no filtro

Outros
 - Trocado o React-Bootstrap pelo Material UI, devido a melhor tabelas paginadas.

## Pré-Requisitos

[Node.js](https://nodejs.org/en/)

## Dependencias

 - [Axios](https://github.com/axios/axios)
 - [React-Bootstrap](https://react-bootstrap.github.io/)
 - [React Router Dom](https://reactrouter.com/web/guides/quick-start)
 - [Material-UI](https://material-ui.com/)

## Instalação
 - Clone o projeto
 - `git clone https://github.com/Andrebredadev/Consumo-dados-API.git`
 - Instalar as dependencias que se encontram no packge.json, para isso execute o comando:
 - `npm install`
 - Iniciar a aplicação com o comando:
 - `npm start`
## Try me
Acesse clicando [aqui](https://consumo-dados-api.vercel.app/) uma versão do projeto rodando.
## TODO
 - [x] Fazer com que a SPA consuma a API e exiba os dados conforme os
       requisitos.       
## Disclaimer
Ao selecionar os partidos pode ser obserdado que havera 2 partidos com nome PATRIOTA, porém a API esta retornando este valores como pode ser observado nesta imagem:
![Dados recebido ao dar GET na rota partidos](https://imgur.com/tidUbJc)

## Explicação de Dependencias
O axios ficara responsavel por fazer as requisições HTTP na API, a partir dos dados que ele trouxer será utilizado para popular a tabela.

React-Bootstrap é usado somente para dar uma aparencia bonita a tabela.

React Router Dom será utilizado para fazer as rotas do projeto.

MaterialUI foi utilizado para gerar as tabelas paginadas.