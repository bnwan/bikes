import axios from 'axios';

export function fetchBikes() {
    return (dispatch) => {
        dispatch( {type: 'FETCH_BIKES_PENDING'} );
        axios.get('https://jujhar.com/bikes.json')
            .then(response => {
                dispatch({ type: 'FETCH_BIKES_FULFILLED', payload: response.data.items });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_BIKES_REJECTED', payload: error });
            });
    }
}

export function sortBikesByClass(bikeClass) {
    return {
        type: 'SORT_BIKES',
        payload: bikeClass
    }
}