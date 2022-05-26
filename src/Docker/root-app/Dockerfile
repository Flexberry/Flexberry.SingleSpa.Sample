FROM node:12-alpine as builder

COPY /src/single-spa /src/single-spa

RUN \
    set -x; \
    cd /src/single-spa/; \
    yarn install

RUN \
    set -x; \
    cd /src/single-spa/; \
    yarn build:webpack

FROM nginx:1.21 as single_spa

COPY src/Docker/root-app/nginx.conf /etc/nginx/

COPY --from=builder --chown=nginx:nginx /src/single-spa/dist /app

WORKDIR /app