const asyncHandler = require("express-async-handler");
const {
  searchUser,
  validateUserPassword,
  generateCookie,
  createUser,
  updateUserData,
  getAllUsers,
  deleteUserAccount,
} = require("../services/userServices");
const { getUserShoppingCart } = require("../services/shoppingCartServices");

exports.signup_user = asyncHandler(async (req, res, next) => {
  try {
    const { nickname } = req.body;

    let searchedUser = await searchUser(nickname);

    if (searchedUser) {
      res.status(400).send("user already exist");
    } else {
      let user_data = req.body;
      let newUser = await createUser(user_data);
      res.status(200).send(newUser);
    }
  } catch (error) {
    next(error);
  }
});

exports.login_user = asyncHandler(async (req, res, next) => {
  try {
    let { nickname } = req.body;
    let searchedUser = await searchUser(nickname);

    let validatedUser = await validateUserPassword(searchedUser);
    const payload = {
      email: validatedUser.email,
      nickname: validatedUser.nickname,
      is_admin: validatedUser.is_admin,
    };

    let userCookie = await generateCookie(payload);

    res.cookie("token", userCookie);

    res.status(200).send(payload);
  } catch (error) {
    next(error);
  }
});

exports.logout_user = asyncHandler(async (req, res) => {
  try {
    res.clearCookie("token");
    res.sendStatus(204);
  } catch (error) {
    throw Error(error);
  }
});

exports.update_user_data = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    let userChanges = req.body;
    let updatedUser = await updateUserData(userChanges, nickname);

    res.status(200).send(updatedUser);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_user_shopping_cart = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    const user = await searchUser(nickname);
    let userShoppingCart = await getUserShoppingCart(user.id);
    res.status(200).send(userShoppingCart);
  } catch (error) {
    throw Error(error);
  }
});

exports.see_all_users = asyncHandler(async (req, res) => {
  try {
    let signedUpUsers = await getAllUsers();
    res.status(200).send(signedUpUsers);
  } catch (error) {
    throw Error(error);
  }
});

exports.delete_user_account = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    await deleteUserAccount(nickname);
    res.sendStatus(200);
  } catch (error) {
    throw Error(error);
  }
});
