import { ADD_LETTER } from '../actions/text'

const initState = { word: '' }

export function textReduce(state = initState, action) {
    const { word } = state
    console.debug(">> Text state" + JSON.stringify(state))
    switch (action.typse) {
        case ADD_LETTER:
            let newValue = word + action.letter
            console.debug("ADD_LETTER " + newValue)
            return Object.assign({}, state, { word: newValue })
        default:
            return state;
    }
}