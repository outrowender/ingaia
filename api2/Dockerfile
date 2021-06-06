FROM node:14

WORKDIR /app

COPY . .

WORKDIR /app/api2

RUN npm install

RUN npm run build

EXPOSE 3333

CMD ["npm","start"]