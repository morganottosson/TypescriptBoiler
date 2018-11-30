import { combineReducers, createStore } from 'redux';
import { demoReducer } from './demo/reducer';
import { IDemoState } from './demo/types';

export interface IRootState {
    demo: IDemoState
}

const rootReducer = combineReducers({
    demo: demoReducer
});

const store = createStore<IRootState, any, any, any>(
    rootReducer,
);

export default store;