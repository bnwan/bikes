'use strict';

import domready from 'domready';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { appReducer } from './reducers';

import { BikeList } from './components/bikes'; 
import './styles/base.scss';

let store = createStore(appReducer)

domready(() => {  
  render(
    <Provider store={store}>
       <BikeList />
    </Provider>, 
    document.getElementById('app-container'));
});