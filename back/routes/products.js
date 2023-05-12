const express = require("express");
const { Product } = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  Product.findAll().then((prods) => res.status(200).send(prods));
});

router.get("/:id", (req, res) => {
  Product.findOne({ where: { id: req.params.id } })
    .then((prod) => res.status(200).send(prod))
    .catch((err) => console.log(err));
});

module.exports = router;
