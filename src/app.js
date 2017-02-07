'use strict';

import domready from 'domready';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store';
import * as bikeActions from './actions/bikes-actions';

import { BikesContainer } from './components/bikes'; 
import './styles/base.scss';

domready(() => {  
  render(
    <Provider store={store}>
       <BikesContainer />
    </Provider>, 
    document.getElementById('app-container'));
});