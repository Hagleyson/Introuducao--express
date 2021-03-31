//importando express
const express = require("express");
//instanciando o express
const server = express();

//quando ace o diretorio / executa a função
//usando metodo get
server.get("/", function (req, res) {
  res.send("<h1>Hagleyson</h1>");
});
//usando todos os metodos (Get,Post,put, delete)
server.all("/teste", function (req, res) {
  res.send("Teste");
});

//sempre que tiver /api/ na url ele chama a função
//usando expressão regular
server.get(/api/, function (req, res) {
  res.send("<h1>API</h1>");
});
//fica escutando a porta 3001
server.listen(3001, () => console.log("rodando"));
