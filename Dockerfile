FROM node:20-alpine AS base

RUN npm install -g pnpm && apk add --no-cache g++ libc6-compat make py3-pip
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./

EXPOSE 3000

FROM base AS dev

RUN pnpm install
ENTRYPOINT [ "pnpm", "dev" ]

FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm build


FROM base AS production
WORKDIR /app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
USER nextjs


COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

ENTRYPOINT [ "pnpm", "start" ]

