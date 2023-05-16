const asyncHandler = require("express-async-handler");
const { Product } = require("../models");

exports.mostrar_todos_los_productos = asyncHandler(async (req, res, next) => {
  Product.findAll().then((prods) => res.status(200).send(prods));
});

exports.detalles_de_producto = asyncHandler(async (req, res, next) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((prod) => res.status(200).send(prod))
    .catch((err) => console.log(err));
});

exports.agregar_nuevo_producto = asyncHandler(async (req, res, next) => {
  Product.create(req.body).then((prod) => res.status(201).send(prod));
});
