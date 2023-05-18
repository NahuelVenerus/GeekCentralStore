const express = require("express");
const router = express.Router();
const users = require("./users");
const products = require("./products");
const shoppingCart = require("./shoppingCarts");
const cartProduct = require("./cartProducts");
const orders = require("./orders");

router.use("/users", users);
router.use("/productos", products);
router.use("/carrito", shoppingCart);
router.use("/productoCarrito", cartProduct);
router.use("/pedidos", orders);

module.exports = router;
