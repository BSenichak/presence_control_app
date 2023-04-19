import { createStore, combineReducers, applyMiddleware } from "redux";
import { authGeneralReduces } from "./auth/authGeneralReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { themeReducer } from "./theme/themeReducer";

const generalReducer = combineReducers({
    auth: authGeneralReduces,
    theme: themeReducer,
});

const store = createStore(generalReducer, applyMiddleware(thunk, logger));

export default store;
