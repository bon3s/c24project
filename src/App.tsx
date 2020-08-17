import React, { useEffect } from 'react';
import MainRouter from './router/MainRouter';
import service from './service/service';
import store from './store';
import { addRestaurants } from './redux/restaurantsActions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    useEffect(() => {
        service
            .getRestaurants()
            .then((res) => store.dispatch(addRestaurants(res.data)));
    });
    return <MainRouter />;
}

export default App;
