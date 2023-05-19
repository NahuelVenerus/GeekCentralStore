const express = require("express");
const router = express.Router();
const { validateUser } = require("../middlewares/validateUser");

const {
  get_user_shopping_cart,
  login_user,
  logout_user,
  signup_user,
  update_user_data,
  see_all_users,
  delete_user_account,
} = require("../controllers/userController");

router.post("/signup", signup_user);

router.post("/login", login_user);

router.get("/users/:id", get_user_shopping_cart);

router.put("/:nickname", update_user_data);

router.get("/logout", logout_user);

router.get("/admin/get-users", see_all_users);

router.put("/admin/:nickname", update_user_data);

router.delete("/admin/remove/:nickname", delete_user_account);

router.get("/me", validateUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
