import REST, { URL } from '../api/REST';
import config from '../config';
import client from '../http/client';
import Restaurant from './Restaurant';

export class RestaurantsReply {
    static fromJSON(maybe: any): RestaurantsReply {
        if (!Array.isArray(maybe)) {
            throw new Error('RestaurantsReply should be an array');
        }
        const restaurantsArray: Restaurant[] = [];
        maybe.forEach((item: any) => {
            restaurantsArray.push(Restaurant.fromJSON(item));
        });
        return new RestaurantsReply(restaurantsArray);
    }

    data: Restaurant[];

    constructor(restaurantArray: Restaurant[]) {
        this.data = restaurantArray;
    }
}

export interface Service {
    getRestaurants(): Promise<RestaurantsReply>;
}

const url = new URL(config.BACKEND_SCHEME, config.BACKEND);
const service: Service = new REST(client, url);

export default service;
