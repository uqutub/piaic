export default class Action {

    static LOGIN = "LOGIN"  // name/type
    static LOGIN_SUCCESS = "LOGIN_SUCCESS"  // type
    static LOGIN_FAILURE = "LOGIN_FAILURE"  // type

    static login(payload) {
        return {
            type: Action.LOGIN,
            payload
        }
    }

}