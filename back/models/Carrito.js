const Sequelize = require("sequelize");
const db = require("../config/db/index");

class Carrito extends Sequelize.Model {}

Carrito.init({}, { sequelize: db, modelName: "carrito" });

module.exports = Carrito;
