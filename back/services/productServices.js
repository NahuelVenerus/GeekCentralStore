const { Product } = require("../models");

exports.addNewProduct = async (productData) => {
  try {
    const createdProduct = await Product.create(productData);
    return createdProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.getProduct = async (idProduct) => {
  try {
    const foundProduct = Product.findOne({ where: { id: idProduct } });
    return foundProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllProducts = async () => {
  try {
    let productsOnStock = await Product.findAll();
    return productsOnStock;
  } catch (error) {
    throw Error(error);
  }
};
