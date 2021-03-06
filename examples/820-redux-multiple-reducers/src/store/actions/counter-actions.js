// ../actions/counter-actions.js
import {DECREMENT, INCREMENT, RESET} from "../constants/action-types";

// Creating the increment action. If no payload is provided,
// we update the counter with a default value (e.g. payload) of 1
export const increment = value => {
    // check if there is a value provided by the textbox from the component,
    // otherwise return a payload of 1
    return {
        type: INCREMENT,
        payload: value ? value : 1
    }
};
export const decrement = value => {
    return {
        type: DECREMENT,
        payload: value ? value : 1
    }
};
// reset action doesn't have a payload. It always resets
// to 0.
export const reset = () => {
    return {
        type: RESET
    }
};

