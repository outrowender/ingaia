const express = require("express");
const app = express();
const port = 3000;
const dbHandler = require("./kernel/db-handler");

const squareMeterService = require("./src/services/square-meter");

const appBootstrap = async () => {
  await dbHandler.connect();
  await squareMeterService.create({ _id: 1, value: 10 });
};

appBootstrap();

app.get("/", async (req, res) => {
  const document = await squareMeterService.read(1);
  res.send({ quaremeter: { document } });
});

app.listen(port, () => {
  console.log(`Server is running in 3000 port`);
});
