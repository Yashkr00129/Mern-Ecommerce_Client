import axios from "axios";

const LocalStorageMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (
      action.type === "auth/REGISTER_WITH_GOOGLE" ||
      action.type === "auth/REGISTER_WITH_EMAIL" ||
      action.type === "auth/LOAD_USER" ||
      action.type === "auth/LOGIN_WITH_PASSWORD"
    ) {
      localStorage.setItem("idToken", action.payload.idToken);
      axios.defaults.headers.common["auth"] = action.payload.idToken;
      return next(action);
    }
    console.log(action.type, action.payload);
    return next(action);
  };

export default LocalStorageMiddleware;
