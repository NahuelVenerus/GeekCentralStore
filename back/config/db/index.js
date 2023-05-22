require("dotenv").config();

const Sequelize = require("sequelize");
const db_name = process.env.DB_NAME;
const db_host = process.env.HOST;

const db = new Sequelize(db_name, null, null, {
  host: db_host,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
