const {
  Order,
  User,
  ShoppingCart,
  CartProduct,
  Product,
} = require("../models");
const { getAllCarts } = require("../services/shoppingCartServices");
const nodemailer = require("nodemailer");

exports.getAllOrders = async () => {
  try {
    // const orders = await Order.findAll({
    //   include: [
    //     { model: User, as: "user" },
    //     { model: ShoppingCart, as: "shopping_cart" },
    //   ],
    // });

    let shoppingCarts = await ShoppingCart.findAll({
      where: { purchased: true },
      include: [
        { model: User, as: "user" },
        {
          model: CartProduct,
          as: "cart_product",
          include: [{ model: Product, as: "product" }],
        },
      ],
    });
    console.log(
      "shopping carts que queremos ver",
      shoppingCarts[0].dataValues.cart_product
    );
    console.log("Holaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log("shopping carts", shoppingCarts);
    return shoppingCarts;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUserOrders = async (id) => {
  try {
    const orders = await Order.findAll({
      where: { userId: id },
      include: { model: User, as: "user" },
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
};

exports.addNewOrder = async (createdOrder) => {
  try {
    const newOrder = await Order.create(createdOrder);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};
