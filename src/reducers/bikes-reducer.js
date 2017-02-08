import * as _ from 'lodash';
import { initialState } from '../store';

function sortBikesBy(bikes, bikeType) {
  let bikesWithType = bikes.filter(bike => { return _.includes(bike.class, bikeType) });
  let bikesWithoutType = bikes.filter(bike => { return !_.includes(bike.class, bikeType) });
  return bikesWithType.concat(bikesWithoutType);
}

export const bikesReducer = (state = initialState.bikeSection, action) => {
  switch (action.type) {
    case 'FETCH_BIKES_PENDING':
      return {
        ...state,
        isFetching: true
      };
      break;
    case 'FETCH_BIKES_FULFILLED':
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        bikeTypes: _.uniq(_.flatMap(action.payload, bike => { return bike.class; })),
        bikes: action.payload
      };
      break;
    case 'FETCH_BIKES_REJECTED':
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      break;
    case 'SORT_BIKES':
      return {
        ...state,
        bikes: sortBikesBy(state.bikes, action.payload)
      };
    default:
      return state;
  }
};