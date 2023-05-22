import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { shoppingCartReducer } from "./shoppingCart";
import searchReducer from "./searchProduct";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    search: searchReducer,
  },
});

export default store;
