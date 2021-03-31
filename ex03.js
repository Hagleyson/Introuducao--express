const express = require("express");
const server = express();

server.use("/api", function (req, res, next) {
  console.log("INICIO..");
  next();
  console.log("FIM..");
});

server.use("/api", function (req, res) {
  console.log("Resposta");
  res.send("<h1>Olá mundo</h1>");
});
//use => quando a url tiver o prefixo especificado será chamada
const porta = 3002;
server.listen(porta, () => console.log(`Executando na porta: ${porta}`));
