FROM node:14

WORKDIR /api2

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.build.json ./

COPY . .

RUN npm install

RUN npm build

EXPOSE 3333

CMD ["npm","start"]