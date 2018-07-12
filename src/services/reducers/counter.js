import { INC_COUNTER } from "../actions/counter"

const initialState = { counter: 0 }

export function counterApp(state = initialState, action) {
    console.debug(">> Counter state:" + JSON.stringify(state))
    switch (action.type) {
        case INC_COUNTER:
            var newValue = state.counter + action.amount
            console.debug("state.counter " + JSON.stringify(state.counter))
            console.debug("action.amount " + JSON.stringify(action.amount))
            console.debug("newValue " + JSON.stringify(newValue))
            console.debug("Result: "+JSON.stringify(Object.assign({}, state, { counter: newValue })))
            return Object.assign({}, state, { counter: newValue })
        default:
            return state;
    }
}