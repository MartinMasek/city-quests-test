export const INC_COUNTER = 'INC_COUNTER'

export const incCounter = (amount = 0) => {
    return {
        type: INC_COUNTER,
        amount
    }
}