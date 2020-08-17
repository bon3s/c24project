import { combineReducers } from 'redux';
import loading from './loadingReducer';

const reducer = combineReducers({ loading });

export default reducer;
