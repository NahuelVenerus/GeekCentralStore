const { Op } = require("sequelize");
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

exports.getProductsByName = async (name) => {
  try {
    const searchedProducts = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    return searchedProducts;
  } catch (error) {
    throw Error(error);
  }
};

exports.deleteProduct = async (id) => {
  try {
    await Product.destroy({
      where: { id: id },
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.editProduct = async (product) => {
  try {
    const updatedProduct = await Product.update(product, {
      where: { id: product.id },
      returning: true,
    });
    return updatedProduct[1][0];
  } catch (error) {
    throw Error(error);
  }
};
