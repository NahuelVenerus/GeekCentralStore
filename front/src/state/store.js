import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { shoppingCartReducer } from "./shoppingCart";
import { productListReducer } from "./productList";
import { finalPriceReducer } from "./finalPrice";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    productList: productListReducer,
    finalPrice: finalPriceReducer,
  },
});

export default store;
