const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const carrito = require("./carritos");
const productCarrito = require("./productCarrito");
const pedidos = require("./pedidos");

router.use("/users", users);
router.use("/productos", products);
router.use("/carrito", carrito);
router.use("/productoCarrito", productCarrito);
router.use("/pedidos", pedidos);

module.exports = router;
