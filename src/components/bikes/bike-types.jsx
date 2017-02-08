'use strict';

import React, { Component, PropTypes } from 'react';

export class BikeTypes extends Component {

  renderOptions() {
    return this.props.options.map((name, index) => {
      return <option key={index} className='class-item'>{name}</option>;
    });
  }

  render() {
    return (
      <select onChange={(e) => this.props.onChange(e.target.value)}>
          {this.renderOptions()}
      </select>
    );
  }
}