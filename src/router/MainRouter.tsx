import React from 'react';
import { Switch, Route } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeContainer} />
            {/* <Redirect to="/" /> */}
        </Switch>
    );
};

const mapStateToProps = (state: AppState) => {
    return {};
};
export default connect(mapStateToProps)(Router);
