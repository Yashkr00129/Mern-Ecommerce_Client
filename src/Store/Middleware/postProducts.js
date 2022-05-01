import axios from "axios";

const PostProductsMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (
      action.type === "cart/ADD_PRODUCT" ||
      action.type === "cart/INCREMENT_QTY" ||
      action.type === "cart/DECREMENT_QTY"
    ) {
      if (authState.isAuthenticated) {
        // Take products from cart,isAuthenticated
        await axios.post("api/cart", { products });
        return next(action);
      }
    }
  };

export default PostProductsMiddleware;
