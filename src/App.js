import React, { useEffect } from "react";
import axios from "axios";

// Components
import Login from "./Components/Views/Auth/Login";
import Register from "./Components/Views/Auth/Register";
import Cart from "./Components/Views/Cart/Cart";
import Homepage from "./Components/Views/Homepage/Homepage";
import Product from "./Components/Views/Product/Product";
import ProductList from "./Components/Views/ProductList/ProductList";
import Orders from "./Components/Views/Orders/Orders";
import Terms from "./Components/Views/Policy/Terms";
import Privacy from "./Components/Views/Policy/Privacy";

// Router And Store
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

// Firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { loadUser } from "./Store/Actions/Auth";
import Shipping from "./Components/Views/Policy/Shipping";

function App() {
  const __DEV__ = document.domain === "localhost";

  const app = initializeApp(firebaseConfig);
  axios.defaults.baseURL = __DEV__
    ? "http://localhost:5000/"
    : "https://theblackfeatherapi.herokuapp.com/";
  const auth = getAuth();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const getUser = async () => {
      if (loading === false && user) {
        const idToken = await auth.currentUser.getIdToken();
        loadUser({ user, idToken });
      }
    };
    getUser();
  }, [user, loading]);

  if (user)
    auth.currentUser.getIdToken().then(function (idToken) {
      console.log(idToken);
    });

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          {/* <Route path={"/phone"} element={<Phone />} /> */}
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/product/:id"} element={<Product />} />
          <Route path={"/products"} element={<ProductList />} />
          <Route path={"/products/:category"} element={<ProductList />} />
          <Route path={"/products/search/:query"} element={<ProductList />} />
          <Route path={"/orders"} element={<Orders />} />
          <Route path={"/terms"} element={<Terms />} />
          <Route path={"/privacy"} element={<Privacy />} />
          <Route path={"/shipping-policy"} element={<Shipping />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
