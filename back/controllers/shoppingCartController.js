const asyncHandler = require("express-async-handler");
const { getAllCarts } = require("../services/shoppingCartServices");

exports.get_all_carts = asyncHandler(async (req, res) => {
  try {
    const carts = await getAllCarts();
    res.status(200).send(carts);
  } catch (error) {
    throw Error(error);
  }
});
