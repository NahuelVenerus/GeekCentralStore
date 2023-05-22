import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { shoppingCartReducer } from "./shoppingCart";
import { productListReducer } from "./productList";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    productList: productListReducer,
  },
});

export default store;
