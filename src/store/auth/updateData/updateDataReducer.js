import { ERROR_UPDATE_AUTH_DATA, START_UPDATE_AUTH_DATA, SUCCESS_UPDATE_AUTH_DATA } from "./updateDateAction"

const initalState = {
    credencial: {},
    userData: {},
    loading: false,
    error: null,
}

export const updateDataReducer = (state = initalState, action) => {
    switch (action.type) {
        case START_UPDATE_AUTH_DATA:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ERROR_UPDATE_AUTH_DATA:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case SUCCESS_UPDATE_AUTH_DATA:
            return {
                ...state,
                loading: false,
                error: null,
                credencial: action.payload[0],
                userData: action.payload[1],
            }
        default:
            return state
    }
}
