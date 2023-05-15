import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  id: null,
  name: null,
  user: null,
  email: null,
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});
