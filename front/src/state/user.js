import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");
export const setLogOut = createAction("LOG_OUT");

const initialState = {
  id: null,
  nickname: null,
  lastName: null,
  direction: null,
  postalCode: null,
  city: null,
  email: null,
  password: null,
  isAdmin: false,
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});
