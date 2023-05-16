import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  id: null,
  nickname: null,
  apellido: null,
  direccion: null,
  codigoPostal: null,
  ciudad: null,
  email: null,
  contrasenia: null,
};

export const userReducer = createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});
