export default class Action {

    static INCREMENT = "INCREMENT"  // name/type
    static DECREMENT = "DECREMENT"  // type

    static incrementFnc(p) {
        console.log('1 Calling Incerment Function', Action.INCREMENT)
        return {
            type: Action.INCREMENT,
            payload: p      // option  
        }
    }

    static decrementFnc(p) {
        return {
            type: Action.DECREMENT,
            payload: p
        }
    }

}