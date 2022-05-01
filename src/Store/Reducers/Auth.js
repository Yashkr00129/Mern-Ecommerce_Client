import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    tokens: {
      googleToken: null,
      phoneAuthToken: null,
      token: null,
      idToken: null,
    },
    loading: true,
    isAuthenticated: null,
    user: {},
  },
  reducers: {
    LOAD_USER(auth, action) {
      auth.user = action.payload.user;
      auth.tokens.idToken = action.payload.idToken;
      auth.isAuthenticated = true;
      auth.loading = false;
    },

    REGISTER_WITH_EMAIL(auth, action) {
      auth.user = action.payload;
      auth.tokens.idToken = action.payload.idToken;

      auth.isAuthenticated = true;
      auth.loading = false;
    },
    REGISTER_WITH_GOOGLE(auth, action) {
      auth.user = action.payload.user;
      auth.tokens.googleToken = action.payload.token;
      auth.tokens.idToken = action.payload.idToken;
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    LOGIN_WITH_PASSWORD(auth, action) {
      auth.user = action.payload.user;
      auth.tokens.idToken = action.payload.idToken;
      auth.isAuthenticated = true;
      auth.loading = false;
    },
    CLEAR_AUTH(auth, action) {
      auth.loading = true;
      auth.isAuthenticated = null;
      auth.user = {};
      auth.tokens = {
        googleToken: null,
        phoneAuthToken: null,
        token: null,
      };
    },
  },
});
