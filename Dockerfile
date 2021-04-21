FROM node:alpine
WORKDIR /opt/app
ENV PATH /opt/app/node_modules/.bin:$PATH
COPY /app/package.json ./
COPY /app/package-lock.json ./
RUN npm i
RUN npm i -D
