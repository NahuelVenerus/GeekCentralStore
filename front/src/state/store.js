import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { shoppingCartReducer } from "./shoppingCart";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export default store;
