FROM node:alpine
RUN apk update && apk add --no-cache make git

# Create directory
WORKDIR /frontend

COPY package.json package-lock.json /frontend/

RUN npm i npm@latest -g && \
    npm install -g @angular/cli@11.2.11

RUN chown -R node /frontend

WORKDIR /frontend

USER node

RUN npm install --legacy-peer-dep