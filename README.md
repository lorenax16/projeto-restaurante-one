# Projeto Restaurante

# Contexto
Este projeto trata-se de um CRUD, para um restaurante, onde pode armazenar e buscar dados de pedidos do cliente, e trazer todos os cardapios disponiveis para pedidos.

## Técnologias usadas

Front-end:
> Desenvolvido usando: Angular

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, Sequelize, para testes: { chai e mocha } 


## Instalando Dependências

> Backend
```bash
cd projeto-restaurante-one/apiRestaurant 
npm install
``` 
## Executando aplicação

* Para rodar o back-end:

  ```
  cd /apiRestaurant
  npm start
  ```
* Para rodar o front-end:

  ```
    https://github.com/lorenax16/projeto_frontend_Restaurante   
  ```

## Executando Testes

   cd /apiRestaurant


* Para rodar todos os testes:

  ```
    npm test login
  ```
  
  ## Rotas
  
  * /login 
  post: http://localhost:3001/login
  get:  http://localhost:3001/login
  
  * /clientes
  post: http://localhost:3001/clientes
  get: http://localhost:3001/clientes/2
  
  */pedidos
  post: http://localhost:3001/pedidos
  get: http://localhost:3001/pedidos/1
  get: http://localhost:3001/pedidos
  patch: http://localhost:3001/pedidos/1
  
  */pratos
  post: http://localhost:3001/pratos
  get: http://localhost:3001/pratos
  get: http://localhost:3001/pratos/5
  put: http://localhost:3001/pratos/2
  delete: http://localhost:3001/pratos/5
  
  
  
