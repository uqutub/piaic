import { CounterAction } from '../action/index';

const initState = {
    counterState: 0
};

function Reducer(state = initState, action) {

    switch (action.type) {

        case CounterAction.INCREMENT:
            return { counterState: (state.counterState + 1) };

        case CounterAction.DECREMENT:
            return { counterState: (state.counterState - 1) };

        default:
            return state
    }
}

export default Reducer;