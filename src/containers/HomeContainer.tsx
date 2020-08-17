import React from 'react';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AppState from '../redux/AppState';

interface Props extends RouterProps {}

const HomeContainer = (props: Props) => {
    return <HomeScreen history={props.history} />;
};

const mapStateToProps = (state: AppState) => {
    return {};
};

export default connect(mapStateToProps)(HomeContainer);
