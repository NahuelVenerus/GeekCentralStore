const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/validateUser");

const {
  registrar_usuario,
  logear_usuario,
  deslogear_usuario,
  mostrar_carrito_usuario,
  actualizar_datos_usuario,
} = require("../controllers/userController");

router.post("/login", (req, res) => {
  const { nickname, contrasenia } = req.body;

  Users.findOne({ where: { nickname } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(contrasenia).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

router.post("/signup", registrar_usuario);


router.post("/login", logear_usuario);

router.get("/users/:id", mostrar_carrito_usuario);

router.put("/:nickname", actualizar_datos_usuario);

router.post("/logout", deslogear_usuario);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
