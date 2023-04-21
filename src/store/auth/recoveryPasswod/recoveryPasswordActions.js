import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../plagins/firebase";

export const START_RECOVERY_PASSWORD = "START_RECOVERY_PASSWORD";
export const ERROR_RECOVERY_PASSWORD = "ERROR_RECOVERY_PASSWORD";
export const SUCCESS_RECOVERY_PASSWORD = "SUCCESS_RECOVERY_PASSWORD";

export const recoveryPassword = (email) => {
  return (dispatch) => {
    dispatch(startRecoveryPassword());
    sendPasswordResetEmail(auth, email)
      .then(() => dispatch(successRecoveryPassword()))
      .catch((error) => dispatch(errorRecoveryPassword(error)));
  };
};

export const startRecoveryPassword = () => {
  return {
    type: START_RECOVERY_PASSWORD,
  };
};

export const errorRecoveryPassword = (error) => {
  return {
    type: ERROR_RECOVERY_PASSWORD,
    payload: error,
  };
};

export const successRecoveryPassword = () => {
  return {
    type: SUCCESS_RECOVERY_PASSWORD,
  };
};
