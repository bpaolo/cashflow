## create image db: 
docker pull postgres

## List image: 
docker images

## run container, export, port:
docker run --name fluxodb -e POSTGRES_PASSWORD=fluxodb -d -p 5432:5432 postgres

## view id container:
docker ps -a

## enter bash:
docker exec -it ''id do container'' bash

## enter into postgres: 
psql -U postgres

## create base: 
CREATE DATABASE fluxodb;

## Documentation
project using:

- Node.js
- Express.js
- Postgres sql
- Sequelize
- Jwt Auth


### API Documentation using postman
import the file into postman ./doc/Cash Flow.postman_collection.json


### How to run this project
- git clone https://github.com/bpaolo/cashflow.git
- npm install
- npm start
- the application will running on port 8080




