const { Product } = require("../models");

exports.addNewProduct = async (productInfo) => {
  try {
    let newProduct = await Product.create(productInfo);
    return newProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.searchProduct = async (productId) => {
  try {
    let searchedProduct = await Product.findOne({ where: { id: productId } });
    return searchedProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.showAllProducts = async () => {
  try {
    let productsOnStock = await Product.findAll();
    return productsOnStock;
  } catch (error) {
    throw Error(error);
  }
};
