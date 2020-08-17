import React from 'react';
import { Switch, Route, RouterProps, Redirect } from 'react-router';
import HomeContainer from '../containers/HomeContainer';
import { connect } from 'react-redux';
import AppState from '../redux/AppState';

interface Props extends RouterProps {}

const Router = (props: Props) => {
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
