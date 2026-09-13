# syntax=docker/dockerfile:1

##############################
# 1) deps: نصب dependencyها
##############################
FROM node:20-alpine AS deps
WORKDIR /app

# فقط فایل‌های lock/manifest برای بهره‌گیری از کش لایه‌ها
COPY package.json package-lock.json ./
RUN npm ci

##############################
# 2) builder: build پروژه
##############################
FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# اگر هنگام build به متغیرهایی نیاز است که در bundle کلاینت inline می‌شوند
# (پیشوند NEXT_PUBLIC_)، آن‌ها را این‌جا به‌صورت build-arg تعریف کنید.
# در این پروژه از رویکرد رانتایم استفاده شده (به next.config.ts و README مراجعه شود)
# بنابراین معمولاً نیازی به build-arg نیست.

RUN npm run build

##############################
# 3) runner: image نهایی production
##############################
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# اجرای container با کاربر غیر-root
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# فقط artifactهای لازم برای اجرا کپی می‌شوند (standalone output)
# node_modules و سورس کامل پروژه در image نهایی وارد نمی‌شوند
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
EXPOSE 3000

# healthcheck ساده روی همان پورت داخلی
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
