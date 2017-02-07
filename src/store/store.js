import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers';

let middleware = applyMiddleware(thunk, logger());
export const store = createStore(appReducer, middleware)