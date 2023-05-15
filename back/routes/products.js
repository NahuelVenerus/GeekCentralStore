const express = require("express");
const {
  mostrar_todos_los_productos,
  detalles_de_producto,
  agregar_nuevo_producto,
} = require("../controllers/productsController");
const router = express.Router();

router.get("/", mostrar_todos_los_productos);

router.get("/:id", detalles_de_producto);

router.post("/add", agregar_nuevo_producto);

module.exports = router;
