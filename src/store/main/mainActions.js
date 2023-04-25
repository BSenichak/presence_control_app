import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../plagins/firebase";

export const loadClasses = () => {
  return (dispatch) => {
    dispatch(startLoadClasses());
    const classes = [];
    let date = new Date();
    let mounth = date.getMonth();
    getDocs(
      query(
        collection(db, "classes"),
        where(
          "yearStart",
          "==",
          mounth < 7 ? date.getFullYear() - 1 : date.getFullYear()
        ),
        where(
          "yearEnd",
          "==",
          mounth < 7 ? date.getFullYear() : date.getFullYear() + 1
        )
      )
    )
      .then((data) => {
        data.forEach((element) => {
          let newElement = { ...element.data() };
          newElement.uid = element.id;
          classes.push(newElement);
        });
        dispatch(successLoadClasses(classes));
      })
      .catch((error) => dispatch(errorLoadClasses(error)));
  };
};

export const START_LOAD_CLASSES = "START_LOAD_CLASSES";
export const ERROR_LOAD_CLASSES = "ERROR_LOAD_CLASSES";
export const SUCCESS_LOAD_CLASSES = "SUCCESS_LOAD_CLASSES";

export const startLoadClasses = () => {
  return {
    type: START_LOAD_CLASSES,
  };
};

export const errorLoadClasses = (error) => {
  return {
    type: ERROR_LOAD_CLASSES,
    payload: error,
  };
};

export const successLoadClasses = (data) => {
  return {
    type: SUCCESS_LOAD_CLASSES,
    payload: data,
  };
};
