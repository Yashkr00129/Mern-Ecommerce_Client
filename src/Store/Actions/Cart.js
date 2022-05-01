import store from "../store";
import { cartSlice } from "../Reducers/Cart";
import axios from "axios";

const { dispatch } = store;
const { actions } = cartSlice;

export const addProduct = async (payload) => {
  await dispatch(actions.ADD_PRODUCT(payload));
};

export const changeQuantity = async (id, wantIncrement) => {
  if (wantIncrement) dispatch(actions.INCREMENT_QTY(id));
  if (!wantIncrement) dispatch(actions.DECREMENT_QTY(id));
};

export const postCartToServer = async () => {
  const products = store.getState().cart.products;
  await axios.post("api/cart", { products });
};

export const loadInitialCartData = async () => {
  const res = await axios.get("/api/cart/find");
  if (res.status === 404) return;
  await dispatch(actions.LOAD_CART(res.data.products));
};

export const clearCart = async () => {
  try {
    await axios.delete("api/cart");
    await dispatch(actions.CLEAR_CART);
  } catch (err) {
    console.log(err.message);
  }
};
