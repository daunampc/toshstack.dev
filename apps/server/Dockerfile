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

# Build email package first (dependency for server)
WORKDIR /app/packages/email
RUN yarn build

# Go back to server directory
WORKDIR /app/apps/server

CMD ["yarn", "start:dev"]
