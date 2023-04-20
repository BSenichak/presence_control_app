import { ERROR_REGISTER, START_REGISTER, SUCCESS_REGISTER } from "./registerActions"

const initalState = {
    loading: false,
    error: null
}

export const registerReducer = (state = initalState, action) => {
    switch (action.type) {
        case START_REGISTER:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case SUCCESS_REGISTER:
            return {
                ...state,
                loading: false,
                error: null,
            }
        case ERROR_REGISTER:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}