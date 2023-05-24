import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFinalPrice = createAction("SET_TOTAL");

const initialState = 0;

export const finalPriceReducer = createReducer(initialState, {
  [setFinalPrice]: (state, action) => action.payload,
});
