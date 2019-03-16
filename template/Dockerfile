FROM node:alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates

COPY package.json yarn.* ./

RUN yarn

COPY . .

EXPOSE 1234

RUN yarn build \
  && cp -a ./src/generated ./dist/

CMD ["node", "./dist/server.js"]
