const asyncHandler = require("express-async-handler");
const { User, Carrito, ProductCarrito, Product } = require("../models");

exports.agregar_elemento = asyncHandler(async (req, res, next) => {
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

exports.quitar_elemento = asyncHandler(async (req, res, next) => {});

exports.registrar_usuario = asyncHandler(async (req, res, next) => {});
