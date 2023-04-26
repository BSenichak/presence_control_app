import {
  ERROR_LOAD_CLASS,
  START_LOAD_CLASS,
  SUCCESS_LOAD_CLASS,
} from "./classAction";

const initalState = {
  loading: false,
  error: null,
  data: {},
};

export const classReducer = (state = initalState, action) => {
  switch (action.type) {
    case START_LOAD_CLASS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR_LOAD_CLASS:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SUCCESS_LOAD_CLASS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};
