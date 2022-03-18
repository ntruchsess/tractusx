# Step 1
FROM node:16-alpine as build-step
ARG http_proxy=$http_proxy
ARG https_proxy=$https_proxy
ARG no_proxy=$no_proxy
RUN mkdir -p /app/cx-portal /app/cx-portal-shared-components
COPY package.json /app/
COPY cx-portal/package.json cx-portal/.env cx-portal/tsconfig* /app/cx-portal/
COPY cx-portal/src /app/cx-portal/src
COPY cx-portal/public /app/cx-portal/public
COPY cx-portal-shared-components/package.json cx-portal-shared-components/rollup.config.js cx-portal-shared-components/tsconfig* /app/cx-portal-shared-components/
COPY cx-portal-shared-components/src /app/cx-portal-shared-components/src
WORKDIR /app
RUN yarn
WORKDIR /app/cx-portal-shared-components
RUN yarn build:lib
WORKDIR /app/cx-portal
RUN yarn build

# Stage 2
FROM nginx:alpine
COPY --from=build-step /app/cx-portal/build /usr/share/nginx/html
