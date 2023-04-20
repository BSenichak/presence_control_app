export const OPEN_TAB = "OPEN_TAB";
export const CLOSE_TAB = "CLOSE_TAB";
export const TOGGLE_TAB = "TOGGLE_TAB";

export const openTab = () => {
    return {
        type: OPEN_TAB
    }
}
export const closeTab = () => {
    return {
        type:CLOSE_TAB
    }
}
export const toggleTab = () => {
    return {
        type: TOGGLE_TAB
    }
}