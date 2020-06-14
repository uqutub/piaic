export default class Action {

    static GET_PROFILE = "GET_PROFILE"
    static GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS"
    static GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE"

    static getProfile = (payload) => ({ type: Action.GET_PROFILE, payload });

}

// EPIC FLOW
// dispatch(Action) => EPIC => DISPATCH(SUCES/FAILUR) => Reducer