import { State as LoadingState } from './loadingReducer';
import { State as RestaurantState } from './restaurantsReducer';

export default interface AppState {
    readonly loading: LoadingState;
    readonly restaurants: RestaurantState;
}
