FROM node:lts-alpine

COPY StreamServer/streamserver /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i && apt install ffmpeg

COPY . .

EXPOSE 1935 8000 8443

CMD ["node","bin/app.js"]
