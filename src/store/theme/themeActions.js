export const LOAD_THEME = "LOAD_THEME";
export const TOGGLE_THEME = "TOGGLE_THEME";


export const loadTheme = () => {
  return {
    type: LOAD_THEME,
    payload: window.localStorage.getItem("theme"),
  };
};

export const toggleTheme = () => {
  return {
    type: TOGGLE_THEME,
  };
};


