import { AnyAction } from 'redux';
import RestaurantType from '../types/RestaurantType';
import { ADD_RESTAURANTS, SET_PAGE } from './restaurantsActions';

export interface State {
    page: number;
    restaurants: RestaurantType[];
}

const initState: State = {
    page: 1,
    restaurants: [],
};

const restaurantReducer = (state: State = initState, action: AnyAction) => {
    switch (action.type) {
        case SET_PAGE:
            return { ...state, page: action.value };

        case ADD_RESTAURANTS:
            return {
                ...state,
                restaurants: Array.from(
                    new Set([...state.restaurants, ...action.value])
                ),
            };

        default:
            return state;
    }
};

export default restaurantReducer;
