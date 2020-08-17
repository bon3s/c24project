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
                background: rgba(255, 255, 255, 0.4);
                border-radius: 5px;
                padding: 5px 15px;
                text-align: center;
                text-transform: uppercase;
                color: ${theme.colors.black};
                margin-right: 0 10px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`;
export default HeaderStyles;
