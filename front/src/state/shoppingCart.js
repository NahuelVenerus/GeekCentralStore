import { createAction, createReducer } from "@reduxjs/toolkit";

export const setAdd = createAction("AGREGAR_PRODUCTO");
// export const setRemove = createAction("QUITAR_PRODUCTO");

const initialState = [];

export const shoppingCartReducer = createReducer(initialState, {
  [setAdd]: (state, action) => action.payload,
});
