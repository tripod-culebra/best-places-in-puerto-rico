import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './index.module.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    const { login } = styles;

    return (
        <button type="button" className={login} onClick={loginWithRedirect}>
            Log In To Plan Your Next Puerto Rican Adventure!
        </button>
    );
};

export default LoginButton;
