import { combineReducers } from 'redux';
import loading from './loadingReducer';
import restaurants from './restaurantsReducer';

const reducer = combineReducers({ loading, restaurants });

export default reducer;
