import { ERROR_LOGOUT, START_LOGOUT, SUCCESS_LOGOUT } from "./logoutActions";

const initalstate = {
    loading: false,
    error: null,
};

export const logoutReducer = (state = initalstate, action) => {
  switch (action.type) {
    case START_LOGOUT:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case ERROR_LOGOUT:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case SUCCESS_LOGOUT:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
};
