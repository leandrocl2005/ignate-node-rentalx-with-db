# Initial Setup

## Setup and run typescript + express

- > yarn init -y
- > yarn add express
- > yarn add typescript -D
- > yarn tsc --init
- > yarn add @types/express -D
- > yarn add ts-node-dev -D

## Setup editor config

- Install Editor Config plugin for vs code
- Click with right button and after generating editor config

## Setup eslint

- Install ESLint plugin for vs code
- ctrl+shift+p and go settings.json

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

- > yarn add eslint@6.8.0 -D
- > yarn eslint --init
- Options: To check syntax, find problems and enforce code style, Javascript modules (import/export), None of these, Yes, (\*) Node, Use a popular style guide, Airbnb, JSON, Y

## Setup Prettier

- > yarn add prettier eslint-config-prettier eslint-plugin-prettier -D

# Docker

## Docker commands

- > docker -v
- > docker ps
- > docker ps -a
- > docker build -t rentx
- > docker run -p 3333:3333 rentx
- > docker exec -it <CONTAINER_NAME_OR_ID> /bin/bash
- > docker start <CONTAINER_NAME_OR_ID>
- > docker stop <CONTAINER_NAME_OR_ID>
- > docker rm <CONTAINER_NAME_OR_ID>
- > docker logs <CONTAINER_NAME_OR_ID>
- > docker logs <CONTAINER_NAME_OR_ID> -f
- > docker exec <CONTAINER_NAME_OR_ID> cat /etc/hosts

## Docker compose commands

- > docker-compose up
- > docker-compose up --force-recreate
- > docker-compose up -d
- > docker-compose stop
- > docker-compose down
- > docker-compose start

## Docker commands

- > docker run --name ignite -e POSTGRES_PASSWORD=ignite -d -p 5433:5432 postgres
- > docker run --name mongodb -p 27017:27017 -d -t mongo
- > docker run --name redis -p 6379:6379 -d -t redis:alpine

# Typeorm

## Type ORM Setup

- > yarn add typeorm reflect-metadata pg

## Type ORM CLI commands

- Start CLI (config package json)
- > yarn typeorm
- > yarn typeorm migration:create -n <MIGRATION_NAME>
- > yarn typeorm migration:run
- > yarn typeorm migration:revert
- > yarn typeorm migration:show
