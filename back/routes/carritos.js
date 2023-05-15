const express = require("express");
const router = express.Router();
const { Carrito, User } = require("../models");
const {
  asignar_carrito_a_usuario,
} = require("../controllers/carritoController");

router.post("/", asignar_carrito_a_usuario);

module.exports = router;
