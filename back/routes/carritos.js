const express = require("express");
const router = express.Router();
const {
  asignar_carrito_a_usuario,
} = require("../controllers/carritoController");

router.post("/", asignar_carrito_a_usuario);

module.exports = router;
