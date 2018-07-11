export const ADD_LETTER = 'ADD_LETTER'

export const addLetter = (letter = '') => {
    return {
        type: ADD_LETTER,
        letter
    }
}