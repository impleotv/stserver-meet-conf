# Build 1
FROM node:16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./

# install dependencies
RUN yarn install --frozen-lockfile
COPY . ./
# build
RUN yarn build

# remove dev dependencies
RUN npm prune --production

ENV CONFERENCE_SERVER_PORT=3004

WORKDIR /app
FROM node:16-alpine

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


EXPOSE 3004

CMD [ "yarn", "start" ]