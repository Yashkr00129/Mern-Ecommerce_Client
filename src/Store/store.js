import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authSlice } from "./Reducers/Auth";
import { cartSlice } from "./Reducers/Cart";
import LocalStorageMiddleware from "./Middleware/localStorage";
// import PostProductsMiddleware from "./Middleware/postProducts";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
  middleware: [
    ...getDefaultMiddleware(),
    LocalStorageMiddleware,
    // PostProductsMiddleware,
  ],
});

export default store;
