import { createAction, createReducer } from "@reduxjs/toolkit";

export const setSearch = createAction("SET_SEARCH");
const initialState = {
  name: null,
  //   price: null,
  //   description: null,
  //   rating: null,
  //   image: null,
  //   total_sales: null,
  //   category: null,
};

const searchReducer = createReducer(initialState, {
  [setSearch]: (state, action) => action.payload,
});

export default searchReducer;
