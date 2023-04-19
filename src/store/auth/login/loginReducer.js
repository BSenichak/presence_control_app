import { ERROR_LOGIN, START_LOGIN, SUCCESS_LOGIN } from "./loginActions";

const initalState = {
  loading: false,
  isAutorized: false,
  error: {
    code: null,
  },
};

export const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        loading: true,
        error: {
          code: null,
        },
        isAutorized: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAutorized: false,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        isAutorized: !!action.payload,
        error: {
          code: null,
        },
      };
    default:
      return state;
  }
};
