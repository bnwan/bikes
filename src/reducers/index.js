import { combineReducers } from 'redux';
import { bikesReducer } from './bikes-reducer';

export const appReducer = combineReducers({
    bikesReducer
});