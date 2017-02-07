'use strict';

import React, {Component, PropTypes} from 'react';
import { BikeItem } from './bike-item.jsx';
import './bikes.scss';

export class BikeList extends Component {
  constructor() {
    super();
  }

  renderBikes() {
    return (
      <BikeItem />
    );
  }

  render() {
    return (
      <div className='bikes-list-container'>
        { this.renderBikes() }
      </div>
    );
  }
}