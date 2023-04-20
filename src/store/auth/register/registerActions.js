import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../plagins/firebase";
import { doc, setDoc } from "firebase/firestore";
import { updateAuthData } from "../updateData/updateDateAction";

export const START_REGISTER = "START_REGISTER";
export const ERROR_REGISTER = "ERROR_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";

export const register = (email, password, firstName, secondName, root) => {
  return (dispatch) => {
    dispatch(startRegister());
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (data) => {
        await setDoc(doc(db, "users", data.user.uid), {
          firstName,
          secondName,
          root,
          img: null,
        })
          .then(() => {
            dispatch(successRegister());
            dispatch(updateAuthData());
          })
          .catch((error) => errorRegister(error));
      })
      .catch((error) => errorRegister(error));
  };
};

export const startRegister = () => {
  return {
    type: START_REGISTER,
  };
};
export const successRegister = () => {
  return {
    type: SUCCESS_REGISTER,
  };
};
export const errorRegister = (error) => {
  return {
    type: ERROR_REGISTER,
    payload: error,
  };
};
