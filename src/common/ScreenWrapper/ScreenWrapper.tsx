import React from 'react';
import Header from '../Header/Header';
import { RouterProps } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/theme';
import ScreenWrapperStyles from './styles/ScreenWrapperStyles';
import GlobalStyles from '../../assets/globals';
interface Props extends RouterProps {
    children: JSX.Element[] | JSX.Element;
}

const ScreenWrapper = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ScreenWrapperStyles>
                <div className="container">
                    <Header history={props.history}></Header>
                    <main>{props.children}</main>
                </div>
            </ScreenWrapperStyles>
        </ThemeProvider>
    );
};

export default ScreenWrapper;
