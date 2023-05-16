const User = require("./User");
const Product = require("./Product");
const Carrito = require("./Carrito");
const ProductCarrito = require("./ProductoCarrito");

User.hasMany(Carrito, { as: "carritos" });
Carrito.belongsTo(User, { as: "user" });
Carrito.hasMany(ProductCarrito, { as: "producto" });
ProductCarrito.belongsTo(Carrito, { as: "carrito" });
ProductCarrito.belongsTo(Product, { as: "producto" });

module.exports = { User, Product, Carrito, ProductCarrito };
