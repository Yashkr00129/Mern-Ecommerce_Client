import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { authSlice } from "../Reducers/Auth";
import store from "../store";
import axios from "axios";

const { actions } = authSlice;
const { dispatch } = store;

// ----COMPLETED----
export const register = async (email, password) => {
  const auth = getAuth();
  await setPersistence(auth, browserLocalPersistence);
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  const idToken = await auth.currentUser.getIdToken();

  await axios.post(
    "api/auth/register/email",
    { email: user.email },
    {
      headers: {
        auth: idToken,
      },
    }
  );

  dispatch(
    actions.REGISTER_WITH_EMAIL({
      user,
      idToken,
    })
  );
};

// ----COMPLETED----
export const continueWithGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await setPersistence(auth, browserLocalPersistence);

    const result = await signInWithPopup(auth, provider);
    let user = result.user;
    const idToken = await auth.currentUser.getIdToken();

    await axios.post(
      "api/auth/register/email",
      { email: user.email },
      {
        headers: {
          auth: idToken,
        },
      }
    );

    dispatch(
      actions.REGISTER_WITH_GOOGLE({
        user,
        idToken,
      })
    );
  } catch (error) {
    console.log(error.message);
  }
};

// ----COMPLETED----
export const loginWithPassword = async (email, password) => {
  const auth = getAuth();
  await setPersistence(auth, browserLocalPersistence);
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  let user = userCredential.user;
  const idToken = await auth.currentUser.getIdToken();
  dispatch(
    actions.REGISTER_WITH_GOOGLE({
      user,
      idToken,
    })
  );
};

export const loadUser = ({ user, idToken }) => {
  dispatch(actions.LOAD_USER({ user, idToken }));
};

// ----COMPLETED----
export const logOut = () => {
  const auth = getAuth();

  signOut(auth).then(() => {
    dispatch(actions.CLEAR_AUTH());
  });
};
