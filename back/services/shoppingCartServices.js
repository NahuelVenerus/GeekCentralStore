const { ShoppingCart, User, CartProduct, Product } = require("../models");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await ShoppingCart.findOne({
      where: { userId: id, purchased: false },
      include: [
        { model: User, as: "user" },
        {
          model: CartProduct,
          as: "cart_product",
          include: [{ model: Product, as: "product" }],
        },
      ],
    });
    return shoppingCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.createShoppingCart = async () => {
  try {
    const newCart = await ShoppingCart.create();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllCarts = async () => {
  try {
    const carts = await ShoppingCart.findAll({
      include: { model: User, as: "user" },
    });
    return carts;
  } catch (error) {
    throw Error(error);
  }
};

exports.delete_cart = async (id) => {
  try {
    await ShoppingCart.destroy({ where: { id: id } });
  } catch (error) {
    throw Error(error);
  }
};
