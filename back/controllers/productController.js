const asyncHandler = require("express-async-handler");
const {
  getProduct,
  getAllProducts,
  addNewProduct,
  deleteProduct,
  editProduct,
  getProductsByName,
} = require("../services/productServices");

exports.get_all_products = asyncHandler(async (req, res) => {
  try {
    let productsOnStock = await getAllProducts();
    res.status(200).send(productsOnStock);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_product_by_name = asyncHandler(async (req, res) => {
  try {
    const { name } = req.params;
    const results = await getProductsByName(name);
    res.status(200).send(results);
  } catch (error) {
    throw Error(error);
  }
});

exports.product_details = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    let searchedProduct = await getProduct(id);
    res.status(200).send(searchedProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.add_new_product = asyncHandler(async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await addNewProduct(productData);
    res.status(201).send(newProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.delete_product = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProduct = await deleteProduct(id);
    res.status(200).send(deletedProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.edit_product = asyncHandler(async (req, res) => {
  try {
    const editedProduct = req.body;
    const updatedProduct = await editProduct(editedProduct);
    res.status(200).send(updatedProduct);
  } catch (error) {
    throw Error(error);
  }
});
