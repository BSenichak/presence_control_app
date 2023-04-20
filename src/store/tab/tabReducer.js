import { CLOSE_TAB, OPEN_TAB, TOGGLE_TAB } from "./tabActions"

const initalState = {
    tabState: false
}

export const tabReducer = (state = initalState, action) => {
    switch (action.type) {
        case OPEN_TAB:
            return {
                ...state,
                tabState: true,
            }
        case CLOSE_TAB:
            return {
                ...state,
                tabState: false,
            }
        case TOGGLE_TAB:
            return {
                ...state,
                tabState: !state.tabState,
            }
        default:
            return state
    }
}