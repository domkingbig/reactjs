import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    showMiniCart: false,
    cartItems: [
      {
        id: 1, //productId
        product: {},
        quantity: 1,
      },
    ],
  },
  reducers: {
    showMiniCart(state, action) {
      state.showMiniCart = true;
    },
    hideMiniCart(state, action) {
      state.showMiniCart = false;
    },
  },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions; //named export
export default reducer; //default export
