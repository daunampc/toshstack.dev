FROM node:20-bookworm

WORKDIR /app

# Copy root package files
COPY package.json yarn.lock ./

# Copy all workspace package.json files
COPY apps/server/package.json ./apps/server/
COPY apps/web/package.json ./apps/web/
COPY packages/email/package.json ./packages/email/

# Install all dependencies
RUN yarn install --frozen-lockfile

# Copy all source code
COPY . .

WORKDIR /app/apps/web

CMD ["yarn", "dev", "-H", "0.0.0.0"]
