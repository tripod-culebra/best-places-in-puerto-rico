import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './index.module.css';

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth0();

    return (
        <>
            <button type="button" className={styles.home} onClick={() => navigate('/')}>
                Home
            </button>
            <button
                type="button"
                className={styles.places}
                onClick={() => navigate('/PlacesIWantToGo')}
            >
                Places I Want To Go!!
            </button>
            <button
                type="button"
                className={styles.places}
                onClick={() => navigate('/PlacesIHaveBeen')}
            >
                Places I Have Been!!
            </button>
            <button type="button" className={styles.logout} onClick={() => logout()}>
                Log Out!
            </button>
        </>
    );
};

export default Navbar;
