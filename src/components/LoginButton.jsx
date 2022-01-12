/* eslint-disable no-console */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <div>Loading...</div>;
    return (
        !isAuthenticated && (
            <button type="button" onClick={() => loginWithRedirect()}>
                Log In
            </button>
        )
    );
};

export default LoginButton;
