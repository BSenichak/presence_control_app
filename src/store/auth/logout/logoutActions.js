import { signOut } from "firebase/auth";
import { auth } from "../../../plagins/firebase";
import { clearCredencial } from "../updateData/updateDateAction";

export const START_LOGOUT = "START_LOGOUT";
export const ERROR_LOGOUT = "ERROR_LOGOUT";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";

export const logout = () => {
  return (dispatch) => {
    dispatch(startLogout());
    signOut(auth)
      .then(() => {
        dispatch(clearCredencial())
        dispatch(successLogout());
      })
      .catch((error) => errorLogout(error));
  };
};

export const startLogout = () => {
  return {
    type: START_LOGOUT,
  };
};
export const errorLogout = (error) => {
  return {
    type: ERROR_LOGOUT,
    payload: error,
  };
};
export const successLogout = () => {
  return {
    type: SUCCESS_LOGOUT,
  };
};
