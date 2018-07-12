import { combineReducers } from 'redux'
import { counterApp } from './counter'
import { textReduce } from './text'

export default function mainReducer(state = {}, action) {
    console.debug("MAIN REDUCER CALLED")
    return {
        counter: counterApp(state.counter, action),
        word: textReduce(state.word, action)
    }
}