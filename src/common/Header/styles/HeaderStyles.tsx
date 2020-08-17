import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import theme from '../../../assets/theme';

const HeaderStyles = styled(Navbar)`
    && {
        padding: 35px 20px;
        background: rgba(0, 0, 0, 0.4);
        .navbar-brand {
            padding: 0;
            margin: 0;
            position: absolute;
            left: 20px;
            top: 20px;
        }
        .navbar-nav {
            .nav-link {
                background: rgba(255, 255, 255, 0.6);
                border-radius: 5px;
                padding: 5px 20px;
                text-align: center;
                text-transform: uppercase;
                color: ${theme.colors.black};
                margin-right: 10px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    @media only screen and (max-width: 640px) {
        && {
            background: ${theme.colors.black};
            .navbar-brand {
                left: 50%;
                transform: translateX(-50%);
                max-width: 100px;
                img {
                    width: 100%;
                    max-width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }
            .navbar-header {
                float: none;
            }
            .navbar-toggle {
                display: block;
            }
            .navbar-collapse {
                border-top: 1px solid transparent;
                box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
            }

            .navbar-nav {
                float: none !important;
                margin: 7.5px -15px;
            }
            .navbar-nav {
                .nav-link {
                    width: 100%;
                    padding: 5px 0;
                    margin: 0;
                }
            }

            .navbar-collapse.collapse.in {
                display: block !important;
            }
            .collapsing {
                overflow: hidden !important;
            }
        }
    }
`;
export default HeaderStyles;
