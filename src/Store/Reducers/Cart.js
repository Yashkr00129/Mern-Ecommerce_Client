import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    LOAD_CART(cart, action) {
      // Payload is the products array
      cart.products = action.payload;
      let total = 0;
      cart.products.forEach((product) => {
        total += product.price * product.quantity;
      });
      cart.total = total;
      cart.quantity = action.payload.length;
    },
    ADD_PRODUCT(cart, action) {
      cart.quantity += 1;
      cart.products.push(action.payload);
      cart.total += action.payload.price * action.payload.quantity;
    },
    INCREMENT_QTY(cart, action) {
      // Takes in id
      let product = cart.products.find(
        (product) => product._id === action.payload
      );
      product.quantity += 1;
      cart.quantity += 1;
      cart.total += product.price;
    },
    DECREMENT_QTY(cart, action) {
      let product = cart.products.find(
        (product) => product._id === action.payload
      );
      product.quantity -= 1;
      cart.quantity -= 1;
      cart.total -= product.price;
    },
    CLEAR_CART(cart, action) {
      cart.products = [];
      cart.total = 0;
      cart.quantity = 0;
    },
  },
});

export const { ADD_PRODUCT, INCREMENT_QTY, DECREMENT_QTY } = cartSlice.reducer;
