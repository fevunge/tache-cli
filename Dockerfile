FROM node:24.13.1-alpine

WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm build && pnpm prune --production && pnpm cache clean --force && rm -rf node_modules