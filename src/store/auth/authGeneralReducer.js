import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { updateDataReducer } from "./updateData/updateDataReducer";

export const authGeneralReduces = combineReducers({
  login: loginReducer,
  updateData: updateDataReducer,
});
