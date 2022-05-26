FROM node:12-alpine as builder

COPY /src/ember-app /src/ember-app

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn global add ember-cli@3.1.4; \
  yarn global add bower;

RUN \
  set -x; \
  cd /src/ember-app/; \
  yarn install ; \
  bower install --allow-root;

RUN \
  set -x; \
  cd /src/ember-app/; \
  ember build --environment=docker

FROM nginx:1.21-alpine as ember_app

COPY src/Docker/ember-app/nginx.conf /etc/nginx/

COPY --from=builder --chown=nginx:nginx /src/ember-app/dist /app

WORKDIR /app
