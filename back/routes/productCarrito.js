const express = require("express");
const {
  agregar_elemento,
} = require("../controllers/productCarritoControllers");
const router = express.Router();

router.post("/add", agregar_elemento);

module.exports = router;
