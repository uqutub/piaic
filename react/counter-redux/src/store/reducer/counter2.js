import { Counter2Action } from '../action/index';

const initState = {
    cs: 0
};

function Reducer(state = initState, action) {
    switch (action.type) {

        case Counter2Action.SET_COUNTER:
            return { cs: action.payload };

        case Counter2Action.PLUS:
            return { cs: (state.cs + 1) };

        case Counter2Action.MINUS:
            return { cs: (state.cs - 1) };

        default:
            return state
    }
}

export default Reducer;