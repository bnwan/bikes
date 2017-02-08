'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BikeList } from './bike-list.jsx';
import { BikeTypes } from './bike-types.jsx';
import { fetchBikes, sortBikesByClass } from '../../actions/bikes-actions';
import './bikes.scss';

@connect(store => {
    return {
        bikes: store.bikeSection.bikes,
        bikeTypes: store.bikeSection.bikeTypes,
        isPending: store.bikeSection.isFetching,
        bikesFetched: store.bikeSection.isFetched
    };
})
export class BikesContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchBikes());
    }

    sortByBikeClass(bikeClass) {
        this.props.dispatch(sortBikesByClass(bikeClass));
    }

    renderLoading() {
        return (
            <div>Loading...</div>
        );
    }

    renderBikes() {
        return (
            <div className='bikes-container'>
                <BikeTypes options={this.props.bikeTypes} onChange={(bikeClass) => this.sortByBikeClass(bikeClass)} />
                <BikeList bikes={this.props.bikes} />
            </div>
        );
    }

    render() {
        if (!this.props.isPending && this.props.bikesFetched) {
            return this.renderBikes();
        }
        return this.renderLoading();
    }
}