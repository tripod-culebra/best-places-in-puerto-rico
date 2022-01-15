import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/button.module.css';

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button type="button" className={styles.logout} onClick={() => logout()}>
            Log Out!
        </button>
    );
};

export default LogoutButton;
