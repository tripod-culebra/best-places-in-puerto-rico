import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './index.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth0();
    const { home, placesBeen, placesGo, logoutCSS } = styles;

    return (
        <nav>
            <button type="button" className={home} onClick={() => navigate('/')}>
                Home
            </button>
            <button type="button" className={placesGo} onClick={() => navigate('/PlacesIWantToGo')}>
                Places I Want To Go!!
            </button>
            <button
                type="button"
                className={placesBeen}
                onClick={() => navigate('/PlacesIHaveBeen')}
            >
                Places I Have Been!!
            </button>
            <button type="button" className={logoutCSS} onClick={logout}>
                Log Out!
            </button>
        </nav>
    );
};

export default Navbar;
