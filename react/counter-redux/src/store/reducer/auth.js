import { AuthAction } from '../action/index';

const initState = {
    loader: false,
    user: null,
    error: null
};

function Reducer(state = initState, action) {
    switch (action.type) {

        case AuthAction.LOGIN:  // type 
            console.log('LOGIN: ', action.payload);
            return { ...state, loader: true, error: null };
        
        case AuthAction.LOGIN_SUCCESS:  // type 
            console.log('LOGIN_SUCCESS: ', action.payload);
            return { ...state, loader: false, user: action.payload };

        case AuthAction.LOGIN_FAILURE:  // type
            console.log('LOGIN_FAILURE: ', action.payload);     
            return { ...state, loader: false, error: action.payload };

        default:
            return state
    }
}

export default Reducer;