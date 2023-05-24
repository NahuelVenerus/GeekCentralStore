const { ShoppingCart, User, CartProduct, Product } = require("../models");

exports.getUserShoppingCart = async (id) => {
  try {
    let shoppingCart = await ShoppingCart.findOne({
      where: { userId: id },
      include: [
        { model: User, as: "user" },
        {
          model: CartProduct,
          as: "cart_product",
          include: [{ model: Product, as: "product" }],
        },
      ],
    });
    console.log("shopping cart ", shoppingCart);
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
    console.log("destroyed id", id);
    const deletedCart = await ShoppingCart.destroy({ where: { id: id } });
    console.log(deletedCart);
  } catch (error) {
    throw Error(error);
  }
};
