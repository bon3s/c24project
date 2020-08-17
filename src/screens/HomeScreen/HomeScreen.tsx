import React from 'react';
import { RouterProps } from 'react-router';
import ScreenWrapper from '../../common/ScreenWrapper/ScreenWrapper';

interface Props extends RouterProps {}

const HomeScreen = (props: Props) => {
    return (
        <ScreenWrapper history={props.history}>
            <div className="children">test</div>
        </ScreenWrapper>
    );
};

export default HomeScreen;
