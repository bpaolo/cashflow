## Criar db imagem: 
docker pull postgres

## Listar imagens: 
docker images

## Rodar container e exportar a porta:
docker run --name fluxodb -e POSTGRES_PASSWORD=fluxodb -d -p 5432:5432 postgres

## Verificar id container:
docker ps -a


## Entrar no bash:
docker exec -it ''id do container'' bash

## Entrar no postgres: 
psql -U postgres

## Criar base de dados: 
CREATE DATABASE fluxodb;
- The table will automatically generated because this project was use sequalize

## Documentation
This is an example of crud project using Node.js and postgres

- Node.js
- Express.js
- Postgres sql
- Sequelize
- Jwt Auth


### API Documentation using postman
import the file into postman ./doc/Cash Flow.postman_collection.json


### How to run this project
- npm install
- npm start
- the application will running on port 8080
- Try to do a user registration, then sign in
- Try to register



