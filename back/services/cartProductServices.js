const { CartProduct } = require("../models");

exports.add_new_cart_product = async (quantity) => {
  try {
    const newCart = await CartProduct.create(quantity);
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.delete_cart_product = async (id) => {
  try {
    await CartProduct.destroy({
      where: { id: id },
      returning: true,
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.edit_cart_product = async (id, quantity) => {
  try {
    const updatedCartProduct = await CartProduct.update(
      { quantity: quantity },
      {
        where: { id: id },
        returning: true,
      }
    );
    console.log(updatedCartProduct[1][0]);
    return updatedCartProduct[1][0];
  } catch (error) {
    throw Error(error);
  }
};
