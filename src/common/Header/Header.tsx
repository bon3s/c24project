import React from 'react';
import { RouterProps } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderStyles from './styles/HeaderStyles';

interface Props extends RouterProps {}

const Header = (props: Props) => {
    return (
        <HeaderStyles>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </HeaderStyles>
    );
};

export default Header;
