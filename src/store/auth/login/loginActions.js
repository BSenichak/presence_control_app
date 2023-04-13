import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../plagins/firebase";

export const START_LOGIN = "START_LOGIN";
export const ERROR_LOGIN = "ERROR_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";

export const login = (login, password) => {
  return (dispatch) => {
    dispatch(startLogin());
    signInWithEmailAndPassword(auth, login, password)
      .then((credential) => dispatch(successLogin(credential)))
      .catch((error) => dispatch(errorLogin(error)));
  };
};

export const startLogin = () => {
  return {
    type: START_LOGIN,
  };
};

export const errorLogin = (error) => {
  return {
    type: ERROR_LOGIN,
    payload: error,
  };
};

export const successLogin = (data) => {
  return {
    type: SUCCESS_LOGIN,
    payload: data,
  };
};
