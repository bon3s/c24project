import { Service, RestaurantsReply } from '../service/service';
import { Dispatch } from 'redux';
import { startLoading, stopLoading } from '../redux/loadingActions';

class LoadingMiddleware implements Service {
    public next: Service;
    public dispatch: Dispatch;

    constructor(next: Service, dispatch: Dispatch) {
        this.next = next;
        this.dispatch = dispatch;
    }

    public async getRestaurants(): Promise<RestaurantsReply> {
        this.dispatch(startLoading('getRestaurants'));
        try {
            const result = await this.next.getRestaurants();
            this.dispatch(stopLoading('getRestaurants'));
            return result;
        } catch (e) {
            this.dispatch(stopLoading('getRestaurants'));
            throw e;
        }
    }
}

export default LoadingMiddleware;
