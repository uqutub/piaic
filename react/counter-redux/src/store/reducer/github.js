import { GithubAction } from '../action/index';

const initState = {
    loader: false,
    error: false,
    user: null,
};

function Reducer(state = initState, action) {

    switch (action.type) {

        case GithubAction.GET_PROFILE:
            return { ...state, user: null, loader: true, error: null };

        case GithubAction.GET_PROFILE_SUCCESS:
            return { ...state, user: action.payload, loader: false };

        case GithubAction.GET_PROFILE_FAILURE:
            return { ...state, error: action.payload, loader: false };

        default:
            return state
    }
}

export default Reducer;