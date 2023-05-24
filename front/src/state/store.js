import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { shoppingCartReducer } from "./shoppingCart";
import { productListReducer } from "./productList";
import { finalPriceReducer } from "./finalPrice";
import { userListReducer } from "./usersList";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    productList: productListReducer,
    finalPrice: finalPriceReducer,
    userList: userListReducer,
  },
});

export default store;
