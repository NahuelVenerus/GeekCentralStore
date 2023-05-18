const asyncHandler = require("express-async-handler");
const { User, ShoppingCart, CartProduct, Product } = require("../models");

exports.add_new_cart_product = asyncHandler(async (req, res) => {
  const { email, quantity, name } = req.body;
  const user = User.findOne({ where: { email: email } });
  const cartProduct = CartProduct.create({
    quantity: quantity,
  });
  const cart = ShoppingCart.create();
  const producto = Product.findOne({ where: { name: name } });

  user
    .then((user) => {
      cartProduct
        .then((product) => {
          cart
            .then((newCart) => {
              producto.then((foundProduct) => {
                newCart.setUser(user);
                product.setProduct(foundProduct);
                product.setShopping_cart(newCart);
                res.status(201).send(product);
              });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

exports.delete_cart_product = asyncHandler(async (req, res) => {
  CartProduct.destroy({ where: { id: req.body.id }, returning: true }).then(
    () => res.sendStatus(202)
  );
});

exports.edit_cart_product = asyncHandler(async (req, res) => {
  CartProduct.update(req.body, {
    where: { id: req.body.id },
    returning: true,
  }).then(([affectedRows, cart]) => {
    res.status(200).send(cart[0]);
  });
});
