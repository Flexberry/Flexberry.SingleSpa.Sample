FROM node:12-alpine as builder

COPY /src/react-app /src/react-app

RUN \
    set -x; \
    cd /src/react-app/; \
    yarn install

RUN \
    set -x; \
    cd /src/react-app/; \
    yarn build:webpack

FROM nginx:1.21-alpine as react_app

COPY src/Docker/react-app/nginx.conf /etc/nginx/

COPY --from=builder --chown=nginx:nginx /src/react-app/dist /app

WORKDIR /app