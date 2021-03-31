const express = require("express");
const server = express();
const porta = 3004;
server
  .route("/clientes")
  .get((req, res) => res.send("Lista de Clientes"))
  .post((req, res) => res.send("Novo Cliente"))
  .put((req, res) => res.send("Alterar Cliente"))
  .delete((req, res) => res.send("Remove Cliente"));

server.listen(porta, console.log(`executando na porta: ${porta}`));
