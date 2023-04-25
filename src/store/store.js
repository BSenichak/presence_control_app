import { createStore, combineReducers, applyMiddleware } from "redux";
import { authGeneralReduces } from "./auth/authGeneralReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { themeReducer } from "./theme/themeReducer";
import { tabReducer } from "./tab/tabReducer";
import { mainReducer } from "./main/mainReducer";

const generalReducer = combineReducers({
    auth: authGeneralReduces,
    theme: themeReducer,
    tab: tabReducer,
    main: mainReducer,
});

const store = createStore(generalReducer, applyMiddleware(thunk, logger));

export default store;
