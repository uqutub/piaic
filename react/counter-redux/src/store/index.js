import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import AppReducers from './reducer/index';
import AppEpics from './epic/index';

// Reducers
export const rootReducer = combineReducers(AppReducers);

// Epics
export const rootEpic = combineEpics(...AppEpics);

// for initialize in application
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);
// store.getState(a => log(a));

export * from './action/index';
export { connect, useSelector, shallowEqual, useDispatch } from "react-redux";
// export { Subject } from 'rxjs';
// export { debounceTime } from 'rxjs/operators';