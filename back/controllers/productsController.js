const asyncHandler = require("express-async-handler");
const {
  addNewProduct,
  searchProduct,
  showAllProducts,
} = require("../services/productService");

exports.mostrar_todos_los_productos = asyncHandler(async (req, res, next) => {
  try {
    let productsOnStock = await showAllProducts();
    res.status(200).send(productsOnStock);
  } catch (error) {
    throw Error(error);
  }
});

exports.detalles_de_producto = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    let searchedProduct = await searchProduct(id);
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
