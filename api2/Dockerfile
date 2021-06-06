FROM node:14

WORKDIR /app

COPY . .

RUN npm install

RUN npm build

EXPOSE 3333

CMD ["npm","start"]