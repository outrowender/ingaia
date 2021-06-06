FROM node:14

WORKDIR /app

COPY . .

WORKDIR /app/api2

RUN npm install

RUN npm run build

CMD ["npm","start"]

EXPOSE 3333