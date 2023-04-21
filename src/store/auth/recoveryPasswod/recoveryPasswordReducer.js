import { ERROR_RECOVERY_PASSWORD, START_RECOVERY_PASSWORD, SUCCESS_RECOVERY_PASSWORD } from "./recoveryPasswordActions"

const initalState = {
    loading: false,
    error: null,
    done: false,
}


export const recoveryPasswordReducer = (state = initalState, action) => {
    switch (action.type) {
        case START_RECOVERY_PASSWORD:
            return {
                ...state,
                loading: true,
                error: null,
                done: false,
            }
        case ERROR_RECOVERY_PASSWORD:
            return {
                ...state,
                loading: false,
                error: action.payload,
                done: false,
            }
        case SUCCESS_RECOVERY_PASSWORD:
            return {
                ...state,
                loading: false,
                error: null,
                done: true,
            }
        default:
            return state
    }
}