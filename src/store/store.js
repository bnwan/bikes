import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers';
import { loadUserState, saveUserState } from './local-storage';

let middleware = applyMiddleware(thunk, logger());
let persistedUserState = loadUserState();

const store = createStore(appReducer, persistedUserState, middleware)
store.subscribe(() => {
    saveUserState(store.getState().userState);
});

export {store}