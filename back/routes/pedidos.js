const express = require("express");
const router = express.Router();
const {
  ver_pedidos,
  crear_pedido,
} = require("../controllers/pedidoController");

router.post("/create", crear_pedido);

router.get("/", ver_pedidos);

module.exports = router;
