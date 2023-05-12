const express = require("express");
const router = express.Router();
const Users = require("../models/User");
const { validateUser } = require("../middlewares/validateUser");
const { generateToken } = require("../config/token");

router.post("/signup", (req, res) => {
  Users.findOne({ where: { nickname: req.body.nickname } }).then((user) => {
    if (user) {
      alert("el usuario ya existe");
      res.sendStatus(400);
    } else {
      Users.create(req.body).then((user) => res.status(201).send(user));
    }
  });
});

router.post("/login", (req, res) => {
  const { nickname, contrasenia } = req.body;
  Users.findOne({ where: { nickname } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contrasenia).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        nombre: user.nombre,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  console.log(req.cookies);

  res.clearCookie("token");

  res.sendStatus(204);
});

module.exports = router;
