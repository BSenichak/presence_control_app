import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { updateDataReducer } from "./updateData/updateDataReducer";
import { logoutReducer } from "./logout/logoutReducer";
import { registerReducer } from "./register/registerReducer";

export const authGeneralReduces = combineReducers({
  login: loginReducer,
  updateData: updateDataReducer,
  logout: logoutReducer,
  register: registerReducer,  
});
