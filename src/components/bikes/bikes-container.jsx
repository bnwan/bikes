'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BikeList } from './bike-list.jsx';
import { fetchBikes } from '../../actions/bikes-actions';
import './bikes.scss';

@connect(store => {
    return {
        bikes: store.bikeSection.bikes,
        isPending: store.bikeSection.isFetching,
        bikesFetched: store.bikeSection.isFetched
    };
})
export class BikesContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchBikes());
    }

    render() {
        return (
            <div className='bikes-list-container'>
                <BikeList bikes={this.props.bikes} />
            </div>
        );
    }
}