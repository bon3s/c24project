import React from 'react';
import { Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';
import CityContainer from '../containers/CityContainer';
import ImpressumContainer from '../containers/ImpressumContainer';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/" component={CityContainer} />
            <Route path="/" component={ImpressumContainer} />
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {};
};
export default connect(mapStateToProps)(Router);
