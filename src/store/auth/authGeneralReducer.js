import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";

export const authGeneralReduces =  combineReducers({
    login: loginReducer,
})