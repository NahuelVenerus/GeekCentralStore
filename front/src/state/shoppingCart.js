import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAdd = createAction("AGREGAR_PRODUCTO");
export const setRemove = createAction("QUITAR_PRODUCTO");

const initialState = {
  name: null,
  image: null,
  price: null,
  description: null,
  value: null,
  quantity: null,
};

export const shoppingCartReducer = createReducer(initialState, {
  [setAdd]: (state, action) => {},
  [setRemove]: (state, action) => {},
});
