const User = require("./User");
const Product = require("./Product");
const ShoppingCart = require("./shoppingCart");
const CartProduct = require("./CartProduct");
const Order = require("./Order");

User.hasMany(ShoppingCart, { as: "shopping_cart" });
ShoppingCart.belongsTo(User, { as: "user" });
ShoppingCart.hasMany(CartProduct, { as: "cart_product" });
CartProduct.belongsTo(ShoppingCart, { as: "shopping_cart" });
CartProduct.belongsTo(Product, { as: "product" });

Order.belongsTo(User, { as: "user" });
Order.belongsTo(ShoppingCart, { as: "shopping_cart" });

module.exports = { User, Product, ShoppingCart, CartProduct, Order };
