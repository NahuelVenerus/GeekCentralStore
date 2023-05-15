const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const carrito = require("./carritos");
const productCarrito = require("./productCarrito");

router.use("/users", users);
router.use("/products", products);
router.use("/carrito", carrito);
router.use("/productoCarrito", productCarrito);

module.exports = router;
