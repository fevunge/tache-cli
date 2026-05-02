FROM node:24.13.1-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm@10.33.0 && pnpm install
COPY . .
RUN chmod +x ./tache
RUN pnpm compile && pnpm prune --production && rm -rf node_modules && mv ./tache /usr/local/bin/tache