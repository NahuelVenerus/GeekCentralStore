const asyncHandler = require("express-async-handler");
const { Product } = require("../models");
const { createProduct, getProduct } = require("../services/productServices");

exports.mostrar_todos_los_productos = asyncHandler(async (req, res) => {
  Product.findAll().then((prods) => res.status(200).send(prods));
});

exports.detalles_de_producto = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const searchedProduct = getProduct(id);
    res.status(200).send(searchedProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.agregar_nuevo_producto = asyncHandler(async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    res.status(201).send(newProduct);
  } catch (error) {
    throw Error(error);
  }
});
