'use strict';

import React, {Component, PropTypes} from 'react';
import { BikeItem } from './bike-item.jsx';
import './bikes.scss';

export class BikeList extends Component {

  renderBikes() {
    return this.props.bikes.map((bike, index) => {
      return <BikeItem key={index} {...bike} />
    });
  }

  render() {
    return (
      <div className='bikes-list-container'>
        { this.renderBikes() }
      </div>
    );
  }
}