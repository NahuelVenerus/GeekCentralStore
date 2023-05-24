import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUserList = createAction("SET_USER_LIST");

const initialState = [];

export const userListReducer = createReducer(initialState, {
  [setUserList]: (state, action) => action.payload,
});
