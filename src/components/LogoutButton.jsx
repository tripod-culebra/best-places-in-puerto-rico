import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isLoading, isAuthenticated } = useAuth0();

    if (isLoading) return <div>Loading...</div>;

    return (
        isAuthenticated && (
            <button type="button" onClick={() => logout()}>
                Log Out
            </button>
        )
    );
};

export default LogoutButton;
