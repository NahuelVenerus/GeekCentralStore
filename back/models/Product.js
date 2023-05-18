const Sequelize = require("sequelize");
const db = require("../config/db/index");

class Product extends Sequelize.Model {}

Product.init(
  {
    nombre: { type: Sequelize.STRING, allowNull: false },
    precio: { type: Sequelize.FLOAT, allowNull: false },
    descripcion: { type: Sequelize.STRING, defaultValue: "" },
    valoracion: { type: Sequelize.FLOAT, defaultValue: 0 },
    imagen: {
      type: Sequelize.STRING,
      defaultValue:
        "https://www.webstoresl.com/sellercenter/assets/images/no-product-image.png",
    },
    cantVentas: { type: Sequelize.INTEGER, defaultValue: 0 },
    categoria: { type: Sequelize.ARRAY(Sequelize.STRING), defaultValue: [] },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
