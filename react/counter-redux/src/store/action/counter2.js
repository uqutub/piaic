export default class Action {
    static PLUS = "PLUS";
    static MINUS = 'MINUS';
    static SET_COUNTER = "SET_COUNTER"

    static setCounter = (payload) => ({
        type: Action.SET_COUNTER,
        payload
    })

    static inc = () => ({
        type: Action.PLUS
    })

    static dec = () => ({
        type: Action.MINUS
    })
}