import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import propTypes from 'prop-types';
import styles from './index.module.css';

const Navbar = ({ setBackgroundImageType }) => {
    const navigate = useNavigate();
    const { logout } = useAuth0();
    const { home, placesBeen, placesGo, logoutCSS } = styles;

    return (
        <nav>
            <button
                type="button"
                className={home}
                onClick={() => {
                    setBackgroundImageType('default');
                    navigate('/');
                }}
            >
                Home
            </button>
            <button
                type="button"
                className={placesGo}
                onClick={() => {
                    setBackgroundImageType('PlacesIWantToGo');
                    navigate('/PlacesIWantToGo');
                }}
            >
                Places I Want To Go!!
            </button>
            <button
                type="button"
                className={placesBeen}
                onClick={() => {
                    setBackgroundImageType('PlacesIHaveBeen');
                    navigate('/PlacesIHaveBeen');
                }}
            >
                Places I Have Been!!
            </button>
            <button type="button" className={logoutCSS} onClick={logout}>
                Log Out!
            </button>
        </nav>
    );
};

Navbar.propTypes = {
    setBackgroundImageType: propTypes.func.isRequired,
};

export default Navbar;
