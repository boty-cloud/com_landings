# Get NPM packages
FROM node:20-alpine AS dependencies
RUN apk add --no-cache libc6-compat bash curl
# Upgrade npm to a specific version
###RUN npm install -g npm@11.4.2
WORKDIR /app
COPY package.json package-lock.json ./

RUN npm ci --omit=dev --legacy-peer-deps

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
###RUN apk add --no-cache libc6-compat
###RUN npm install -g npm@11.4.2 
WORKDIR /app
###
COPY . .
###
COPY --from=dependencies /app/node_modules ./node_modules

# Install dependencies (add these lines)
COPY package.json package-lock.json ./
# RUN npm install
RUN npm ci --legacy-peer-deps

# Accept build-time public envs
ARG NEXT_PUBLIC_FIRESTORE_API_KEY
ARG NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN
ARG NEXT_PUBLIC_FIRESTORE_PROJECT_ID
ARG NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET
ARG NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID
ARG NEXT_PUBLIC_FIRESTORE_APP_ID
ARG NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID

ENV NEXT_DISABLE_TYPECHECK=1
ENV NODE_OPTIONS=--max-old-space-size=3072

ENV NEXT_PUBLIC_FIRESTORE_API_KEY=$NEXT_PUBLIC_FIRESTORE_API_KEY
ENV NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN=$NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN
ENV NEXT_PUBLIC_FIRESTORE_PROJECT_ID=$NEXT_PUBLIC_FIRESTORE_PROJECT_ID
ENV NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET=$NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET
ENV NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID=$NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID
ENV NEXT_PUBLIC_FIRESTORE_APP_ID=$NEXT_PUBLIC_FIRESTORE_APP_ID
ENV NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID=$NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID

# Build the application
RUN npx next build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

###
RUN addgroup -g 1001 nodejs
###
RUN adduser -S -u 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# # Copy the generated __ENV.js file to the public directory
COPY --from=builder /app/public ./public

# Optional: copy .env or runtime config if needed
###COPY --from=builder /app/.env ./.env

USER nextjs
EXPOSE 3000

CMD ["npm", "start"]