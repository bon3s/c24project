// @flow
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { HTTPClient } from '../http/client';
import { Service, RestaurantsReply } from '../service/service';
import config from '../config';

export class URL {
    private url: string;
    private target: string = config.TARGET;
    private api_key: string = config.API_KEY;

    constructor(scheme: string, backend: string) {
        this.url = `${scheme}://${backend}`;
    }

    restaurantPath() {
        return this.url + this.target;
    }

    apiKeyHandler() {
        return this.api_key;
    }
}

class REST implements Service {
    url: URL;
    client: HTTPClient;

    constructor(httpClient: HTTPClient, url: URL) {
        this.client = httpClient;
        this.url = url;
    }

    async getRestaurants(): Promise<any> {
        console.log(this.url.restaurantPath());
        const res = await this.request(this.getRestaurants, {
            method: 'GET',
            headers: {
                'secret-key': this.url.apiKeyHandler(),
            },
            url: this.url.restaurantPath(),
        });

        return RestaurantsReply.fromJSON(res.data);
    }

    request(
        endpoint: Function,
        request: AxiosRequestConfig
    ): Promise<AxiosResponse> {
        return new Promise((resolve, reject) => {
            this.client
                .request(request)
                .then((resp) => resolve(resp))
                .catch((error: AxiosError) => {
                    console.log(error);
                });
        });
    }
}

export default REST;
