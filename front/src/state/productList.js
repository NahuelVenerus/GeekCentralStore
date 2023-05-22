import { createAction, createReducer } from "@reduxjs/toolkit";
import { fakeData } from "../utils/fakeData";

export const setProductList = createAction("SET_PRODUCT_LIST");
export const setInitialState = createAction("SET_INITIAL_STATE");

const initialState = fakeData;

export const productListReducer = createReducer(initialState, {
  [setProductList]: (state, action) => {
    console.log("acaaa=>", action.payload);
    const productList = action.payload;
    return productList;
  },
  [setInitialState]: (state, action) => {
    return initialState;
  },

  //   const region = action.payload;
  //   if (region === "All") return initialState;
  //   return initialState.filter((opt) => opt.region === region);
  // },
});
