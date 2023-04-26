import { getDoc, doc } from "firebase/firestore";
import { db } from "../../plagins/firebase";

export const loadClass = (id) => {
  return async (dispatch) => {
    dispatch(startLoadClass());
    try {
      const data = await getDoc(doc(db, "classes", id));
      dispatch(successLoadClass(data.data()));
    } catch (error) {
      dispatch(errorLoadClass(error));
    }
  };
};

export const START_LOAD_CLASS = "START_LOAD_CLASS";
export const ERROR_LOAD_CLASS = "ERROR_LOAD_CLASS";
export const SUCCESS_LOAD_CLASS = "SUCCESS_LOAD_CLASS";

export const startLoadClass = () => {
  return {
    type: START_LOAD_CLASS,
  };
};

export const errorLoadClass = (error) => {
  return {
    type: ERROR_LOAD_CLASS,
    payload: error,
  };
};

export const successLoadClass = (data) => {
  return {
    type: SUCCESS_LOAD_CLASS,
    payload: data,
  };
};
