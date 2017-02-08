'use strict';

import React, { Component, PropTypes } from 'react';

export class BikeItem extends Component {

  renderBikeClass() {
    return this.props.class.map((name, index) => {
      return <div key={index} className='class-item'>{name}</div>;
    });
  }

  render() {
    return (
      <div className='bike-item'>
        <img src={this.props.image.thumb} alt={this.props.name} />
        <div className='name'>{this.props.name}</div>
        <div className='class-container'>{this.renderBikeClass()}</div>
        <div>{this.props.description}</div>
      </div>
    );
  }
}