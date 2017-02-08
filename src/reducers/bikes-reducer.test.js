import expect, { createSpy, spyOn, isSpy } from 'expect'

import { bikesReducer } from './bikes-reducer';

describe('Bikes Reducer', () => {

    const payload = [
        {
            "id": 1,
            "name": "Litening C:68",
            "description": "The bike for the professionals - thanks to our high-end C:68 Carbon frame and race optimized geometry.",
            "image": {
                "thumb": "https://jujhar.com/images/bikes/780300_overview.png",
                "large": "https://jujhar.com/images/bikes/780300_light.jpg"
            },
            "class": ["endurance", "race"]
        },
        {
            "id": 2,
            "name": "Litening C:62",
            "description": "A lightweight, dream bike for ambitious cyclists with a high-quality C:62 carbon frame.",
            "image": {
                "thumb": "https://jujhar.com/images/bikes/778400_overview.png",
                "large": "https://jujhar.com/images/bikes/778400_light.jpg"
            },
            "class": ["endurance", "race"]
        },
        {
            "id": 4,
            "name": "Attain GTC",
            "description": "Comformatable on tours, lightweight carbon fiber frame and with the option of discs make a great all rounder.",
            "image": {
                "thumb": "https://jujhar.com/images/bikes/777100_overview.png",
                "large": "https://jujhar.com/images/bikes/777100_light.jpg"
            },
            "class": ["comfort", "endurance"]
        },
    ];

    describe('Initial state', () => {
        it('should return default state if no action is specified', () => {
            let state = bikesReducer(undefined, { type: '' });
            expect(state.isFetched).toBeFalsy;
        });
    });

    describe('FETCH_BIKES_PENDING', () => {
        it('should set \'isFetching\' to true when action is \'FETCH_BIKES_PENDING\'', () => {
            let state = bikesReducer(undefined, { type: 'FETCH_BIKES_PENDING' });
            expect(state.isFetching).toBeTruthy;
        });
    });

    describe('FETCH_BIKES_FULFILLED', () => {


        let state;

        beforeEach(() => {
            state = bikesReducer(undefined, {
                type: 'FETCH_BIKES_FULFILLED', payload
            });
        })

        afterEach(() => {
            state = bikesReducer(undefined, {
                type: ''
            });
        });


        it('should set \'isFetching\' to false when action is \'FETCH_BIKES_FULFILLED\'', () => {
            expect(state.isFetching).toBeFalsy;
        });

        it('should set \'isFetched\' to true when action is \'FETCH_BIKES_FULFILLED\'', () => {
            expect(state.isFetched).toBeTruthy;
        });

        it('should set \'bikes\' to payload when action is \'FETCH_BIKES_FULFILLED\'', () => {
            expect(state.bikes.length).toBeGreaterThan(0);
        });

        it('should set correct \'bikeTypes\' when action is \'FETCH_BIKES_FULFILLED\'', () => {
            let state = bikesReducer(undefined, {
                type: 'FETCH_BIKES_FULFILLED', payload
            });
            expect(state.bikeTypes.length).toEqual(3);
            expect(state.bikeTypes).toEqual(['endurance', 'race', 'comfort']);
        });
    });

    describe('FETCH_BIKES_REJECTED', () => {
        it('should set \'error\' to payload when action is \'FETCH_BIKES_REJECTED\'', () => {
            let state = bikesReducer(undefined, { type: 'FETCH_BIKES_REJECTED', payload: 'Error: could not fetch data' });
            expect(state.error).toNotBe(null);
            expect(state.isFetching).toBeFalsy;
        });
    });

    describe('SORT_BIKES', () => {
        it('should sort bikes when action is \'SORT_BIKES\'', () => {
            let currentState = bikesReducer(undefined, {
                type: 'FETCH_BIKES_FULFILLED', payload
            });

            let state = bikesReducer(currentState, { type: 'SORT_BIKES', payload: 'comfort' });
            expect(state.bikes[0].class).toContain('comfort');
        });
    });
});