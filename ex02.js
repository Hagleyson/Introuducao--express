const express = require("express");
const server = express();

server.get("/", function (req, res, next) {
  console.log("INICIO..");
  next();
  console.log("FIM..");
});

server.get("/", function (req, res) {
  console.log("Resposta");
  res.send("<h1>Olá mundo</h1>");
});

server.listen(3001, () => console.log("executando"));
