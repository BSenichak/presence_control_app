import { ERROR_LOGIN, START_LOGIN, SUCCESS_LOGIN } from "./loginActions";

const initalState = {
  loading: false,
  credential: null,
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
        credential: null,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        loading: false,
        error: action.payload,
        credential: null,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        loading: false,
        credential: action.payload,
        error: {
          code: null,
        },
      };
    default:
      return state;
  }
};
