import { CounterAction, Counter2Action } from '../action/index';

const initState = {
    counterState: 0
};

function Reducer(state = initState, action) {
    console.log('Reducer 1st Line ', action);
    switch (action.type) {

        case CounterAction.INCREMENT:
        case Counter2Action.PLUS:
            console.log('Reducer Increment Calling', state);
            return { counterState: (state.counterState + 1) };

        case CounterAction.DECREMENT:
        case Counter2Action.MINUS:
            console.log('Reducer DEcrement Calling');
            return { counterState: (state.counterState - 1) };

        default:
            return state
    }
}

export default Reducer;