FROM node:16-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY /asemat.csv ./app
COPY /2021-05.csv ./app
COPY /2021-06.csv ./app
COPY /2021-07.csv ./app

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]