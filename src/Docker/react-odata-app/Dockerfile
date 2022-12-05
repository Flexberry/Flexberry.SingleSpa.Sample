FROM node:14-alpine as builder

COPY /src/react-odata-app /src/react-odata-app

RUN \
    set -x; \
    cd /src/react-odata-app/; \
    yarn install

RUN \
    set -x; \
    cd /src/react-odata-app/; \
    yarn build:webpack

FROM nginx:1.21-alpine as react_odata_app

COPY src/Docker/react-odata-app/nginx.conf /etc/nginx/

COPY --from=builder --chown=nginx:nginx /src/react-odata-app/dist /app

WORKDIR /app
