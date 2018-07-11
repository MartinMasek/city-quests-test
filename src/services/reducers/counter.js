import { INC_COUNTER } from "../actions/counter"

const initialState = {
    counter: 0
}

export function counterApp(state = initialState, action) {
        switch (action.type) {
        case INC_COUNTER:
            var newValue = state.counter + action.amount
            return Object.assign({}, state, { counter: newValue })
        default:
            return state;
    }
}