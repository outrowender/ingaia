FROM node:14

WORKDIR /app

COPY . .

WORKDIR /app/api2

RUN npm install
RUN npm run build

CMD API1_HOST=http://outrowender-ingaia-api1.herokuapp.com npm start