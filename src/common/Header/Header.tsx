import React from 'react';
import { RouterProps } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderStyles from './styles/HeaderStyles';
import Logo from '../../assets/img/logo.png';
import { LinkContainer } from 'react-router-bootstrap';

interface Props extends RouterProps {}

const Header = (props: Props) => {
    return (
        <HeaderStyles collapseOnSelect expand="md">
            <Navbar.Brand href="#home">
                <img src={Logo} alt={'Company logo'} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Vergleich</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/standorte">
                        <Nav.Link>Standorte</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/impressum">
                        <Nav.Link>Impressum</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </HeaderStyles>
    );
};

export default Header;
