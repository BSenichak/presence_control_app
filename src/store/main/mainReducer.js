import { ERROR_LOAD_CLASSES, START_LOAD_CLASSES, SUCCESS_LOAD_CLASSES } from "./mainActions";

const initalState = {
  loading: false,
  error: null,
  classes: [],
};

export const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case START_LOAD_CLASSES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ERROR_LOAD_CLASSES:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SUCCESS_LOAD_CLASSES:
      return {
        ...state,
        loading: false,
        classes: action.payload,
      };
    default:
      return state;
  }
};
