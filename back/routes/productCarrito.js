const express = require("express");
const router = express.Router();
const { User, Carrito, ProductCarrito, Product } = require("../models");

router.post("/add", (req, res) => {
  const { email, cantidad, nombre } = req.body;
  const user = User.findOne({ where: { email: email } });
  const prodCarrito = ProductCarrito.create({
    cantidad: cantidad,
  });
  const carrito = Carrito.create();
  const producto = Product.findOne({ where: { nombre: nombre } });

  user
    .then((user) => {
      prodCarrito
        .then((prod) => {
          carrito
            .then((carritoCreado) => {
              producto.then((buscado) => {
                carritoCreado.setUser(user);
                prod.setProducto(buscado);
                prod.setCarrito(carritoCreado);
                res.status(201).send(prod);
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
