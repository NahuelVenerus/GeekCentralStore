const { Product } = require("../models");

exports.createProduct = async (productData) => {
  try {
    const createdProduct = await Product.create(productData);
    return createdProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.getProduct = async (idProduct) => {
  try {
    const searchedProduct = Product.findOne({ where: { id: idProduct } });
    return searchedProduct;
  } catch (error) {
    throw Error(error);
  }
};
