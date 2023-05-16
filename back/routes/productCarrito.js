const express = require("express");
const {
  agregar_elemento,
  editar_elemento,
  quitar_elemento,
} = require("../controllers/productCarritoControllers");
const router = express.Router();

router.post("/add", agregar_elemento);

router.delete("/remove", quitar_elemento);

router.put("/edit", editar_elemento);

module.exports = router;
