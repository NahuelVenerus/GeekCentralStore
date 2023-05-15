const express = require("express");
const router = express.Router();
const { Carrito, User } = require("../models");

router.get("/users/:id", (req, res) => {
  Carrito.findAll({ where: { userId: req.params.id } })
    .then((carrito) => res.status(200).send(carrito))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      Carrito.create()
        .then((carrito) => carrito.setUser(user))
        .then((carrito) => res.status(201).send(carrito));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
