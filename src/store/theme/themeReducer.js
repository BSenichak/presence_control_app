import { LOAD_THEME, TOGGLE_THEME } from "./themeActions";

const initalState = {
  theme: "light",
};

export const themeReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_THEME:
      if (!action.payload) window.localStorage.setItem("theme", "light");
      return {
        ...state,
        theme: action.payload,
      };
    case TOGGLE_THEME:
      window.localStorage.setItem("theme", state.theme === "light" ? "dark" : "light")
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};
