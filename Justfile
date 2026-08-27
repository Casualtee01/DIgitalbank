

set dotenv-required := false
set dotenv-load
set dotenv-path := ".env"
set export

DOCKER_CMD := "docker compose -f docker-compose.yaml"

up:
    {{ DOCKER_CMD }} up -d

down:
    {{ DOCKER_CMD }} down

run:
    node --watch-path=src src/server.js

migrate name:
    npx typeorm migration:create migration/{{ name }} --outputJs
