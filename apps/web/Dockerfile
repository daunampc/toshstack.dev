FROM --platform=linux/arm64 node:20-bookworm

WORKDIR /app

COPY . .

RUN yarn install

WORKDIR /app/apps/web

CMD ["yarn", "dev", "-H", "0.0.0.0"]
