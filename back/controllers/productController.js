const asyncHandler = require("express-async-handler");
const {
  getProduct,
  getAllProducts,
  addNewProduct,
} = require("../services/productServices");

exports.get_all_products = asyncHandler(async (req, res) => {
  try {
    let productsOnStock = await getAllProducts();
    res.status(200).send(productsOnStock);
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
