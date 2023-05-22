import { createAction, createReducer } from "@reduxjs/toolkit";
import { fakeData } from "../utils/fakeData";

export const setAdd = createAction("AGREGAR_PRODUCTO");
// export const setRemove = createAction("QUITAR_PRODUCTO");

const initialState = fakeData;

/* {
  name: null,
  image: null,
  price: null,
  description: null,
  value: null,
  quantity: null,
  shoppingCart: [], //*Agrego carrito provicional
}; */

export const shoppingCartReducer = createReducer(initialState, {
  [setAdd]: (state, action) => {
    const products = fakeData;
    const productCart = products.find(
      (product) => product.id == action.payload
    );
    console.log(productCart);

    /*  shoppingArray.includes(productCart)
    ? productCart++
    : carritoCompras.push(productCart); */

    // return productCart;
  },
  // [setRemove]: (state, action) => {},
});
