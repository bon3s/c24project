import React, { useEffect } from 'react';
import MainRouter from './router/MainRouter';
import service from './service/service';

function App() {
    useEffect(() => {
        service.getRestaurants().then((res: any) => console.log(res));
    });
    return <MainRouter />;
}

export default App;
