import { initialState } from '../store';

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
      return state;
    default:
      return state;
  }
};