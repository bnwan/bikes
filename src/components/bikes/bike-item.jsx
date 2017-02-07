'use strict';

import React, {Component, PropTypes} from 'react';

export class BikeItem extends Component {
  render() {
    return (
      <div className='bike-item'>
        {this.props.name}
      </div>
    );
  }
}