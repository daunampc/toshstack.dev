FROM --platform=linux/arm64 node:20-bookworm

WORKDIR /app

COPY . .

RUN yarn install

WORKDIR /app/apps/server

CMD ["yarn", "start:dev"]
