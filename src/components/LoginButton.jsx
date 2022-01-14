import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ButtonCSS from './Button.module.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <button type="button" className={ButtonCSS.login} onClick={() => loginWithRedirect()}>
            Log In
        </button>
    );
};

export default LoginButton;
