export default class Action {

    static INCREMENT = "INCREMENT"
    static DECREMENT = "DECREMENT"

    static increment(p) {
        return {
            type: Action.INCREMENT,
            payload: p
        }
    }

    static decrement(p) {
        return {
            type: Action.DECREMENT,
            payload: p
        }
    }

}