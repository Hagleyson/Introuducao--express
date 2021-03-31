const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  const init = Date.now();
  next();
  console.log(`Tempo = ${Data.now() - init} ms`);
});

//:id vai receber parametros
router.get("/produtos/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Caneta" });
});

router.get("/clientes/:id", (req, res) => {
  res.json({ id: req.params.id, name: "teste" });
});

module.exports = router;
