import RestaurantType from '../types/RestaurantType';

export const SET_PAGE = 'SET_PAGE';
export const ADD_RESTAURANTS = 'ADD_RESTAURANTS';

export const setPage = (value: number) => ({
    type: SET_PAGE,
    value,
});

export const addRestaurants = (value: RestaurantType[]) => ({
    type: ADD_RESTAURANTS,
    value,
});
